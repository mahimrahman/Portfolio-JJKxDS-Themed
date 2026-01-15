import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKSPACE_ROOT = path.join(__dirname, '..');
// Load local env files if present (both are gitignored)
dotenv.config({ path: path.join(WORKSPACE_ROOT, '.env.local') });
dotenv.config({ path: path.join(WORKSPACE_ROOT, '.env') });

const RECORDS_DIR = path.join(WORKSPACE_ROOT, 'src', 'components', 'records');
const MAPPING_PATH = path.join(WORKSPACE_ROOT, 'cloudinary-upload-mapping.json');

const DEFAULT_CLOUD_NAME = 'dacbxyltq';
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || DEFAULT_CLOUD_NAME;

const CLOUDINARY_FOLDER_BASE = 'Portfolio/UI UX';

function ensureCloudinaryConfig() {
  const hasCloudinaryUrl = Boolean(process.env.CLOUDINARY_URL);
  const hasKeyPair = Boolean(process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET);
  const hasUploadPreset = Boolean(process.env.CLOUDINARY_UPLOAD_PRESET);

  if (!hasCloudinaryUrl && !hasKeyPair && !hasUploadPreset) {
    throw new Error(
      'Missing Cloudinary upload configuration. Provide ONE of the following:\n' +
        '1) CLOUDINARY_URL (recommended for scripted uploads)\n' +
        '2) CLOUDINARY_API_KEY + CLOUDINARY_API_SECRET (+ optional CLOUDINARY_CLOUD_NAME)\n' +
        '3) CLOUDINARY_UPLOAD_PRESET (+ optional CLOUDINARY_CLOUD_NAME) for unsigned uploads\n'
    );
  }

  cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
}

function listDirs(dirPath) {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

function walkFilesRecursive(dirPath) {
  /** @type {string[]} */
  const files = [];

  /** @param {string} current */
  const walk = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (!entry.isFile()) continue;

      const ext = path.extname(entry.name).toLowerCase();
      if (!['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext)) continue;
      files.push(fullPath);
    }
  };

  walk(dirPath);
  return files;
}

function numericSortKey(filename) {
  const base = path.basename(filename, path.extname(filename));
  const match = base.match(/^(\d+)/);
  if (!match) return Number.POSITIVE_INFINITY;
  return Number.parseInt(match[1], 10);
}

function toPosixPath(p) {
  return p.replace(/\\/g, '/');
}

function loadMapping() {
  if (!fs.existsSync(MAPPING_PATH)) return [];
  return JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf8'));
}

function saveMapping(mapping) {
  fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2));
}

function makeLocalKey(recordsRelativePosix) {
  // Match existing mapping format for UI/UX: "UI UX\\Folder\\file.png"
  return `UI UX\\${recordsRelativePosix.replace(/\//g, '\\')}`;
}

function makePublicId(recordsRelativePosixNoExt) {
  // Public IDs should be posix and should NOT include file extension
  return `${CLOUDINARY_FOLDER_BASE}/${recordsRelativePosixNoExt}`;
}

async function uploadOne({ absPath, relPosix, relPosixNoExt }) {
  const publicId = makePublicId(relPosixNoExt);
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  const result = uploadPreset
    ? await cloudinary.uploader.unsigned_upload(absPath, uploadPreset, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image'
      })
    : await cloudinary.uploader.upload(absPath, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image'
      });

  return {
    local: makeLocalKey(relPosix),
    cloudinary: result.secure_url,
    publicId: result.public_id
  };
}

async function main() {
  ensureCloudinaryConfig();

  if (!fs.existsSync(RECORDS_DIR)) {
    throw new Error(`Records folder not found: ${RECORDS_DIR}`);
  }

  const folders = listDirs(RECORDS_DIR);
  if (folders.length === 0) {
    console.log('No folders found in records directory. Nothing to upload.');
    return;
  }

  console.log(`📁 Found ${folders.length} records folders`);
  folders.forEach((f) => console.log(`   - ${f}`));

  const mapping = loadMapping();
  const existingByLocal = new Map(mapping.map((m) => [m.local, m]));

  /** @type {Array<{absPath:string, relPosix:string, relPosixNoExt:string}>} */
  const allFiles = [];

  for (const folder of folders) {
    const folderAbs = path.join(RECORDS_DIR, folder);
    const filesAbs = walkFilesRecursive(folderAbs);

    for (const absPath of filesAbs) {
      const relFromRecords = path.relative(RECORDS_DIR, absPath);
      const relPosix = toPosixPath(relFromRecords);
      const relPosixNoExt = relPosix.replace(/\.[^/.]+$/, '');
      allFiles.push({ absPath, relPosix, relPosixNoExt });
    }
  }

  // Sort: directory first, then numeric filename, then lexicographic
  allFiles.sort((a, b) => {
    const dirA = path.posix.dirname(a.relPosix);
    const dirB = path.posix.dirname(b.relPosix);
    if (dirA !== dirB) return dirA.localeCompare(dirB);

    const numA = numericSortKey(a.relPosix);
    const numB = numericSortKey(b.relPosix);
    if (numA !== numB) return numA - numB;

    return a.relPosix.localeCompare(b.relPosix);
  });

  console.log(`\n🖼️  Found ${allFiles.length} image files to consider`);

  const uploaded = [];
  let skipped = 0;

  for (const file of allFiles) {
    const localKey = makeLocalKey(file.relPosix);
    if (existingByLocal.has(localKey)) {
      skipped++;
      continue;
    }

    console.log(`⬆️  Uploading: ${file.relPosix}`);
    const entry = await uploadOne(file);
    uploaded.push(entry);
    existingByLocal.set(entry.local, entry);
  }

  const nextMapping = [...existingByLocal.values()];
  saveMapping(nextMapping);

  console.log(`\n✅ Uploaded ${uploaded.length} new images (skipped ${skipped} already-mapped)`);
  console.log(`🧾 Updated mapping: ${MAPPING_PATH}`);

  if (uploaded.length > 0) {
    const outPath = path.join(WORKSPACE_ROOT, 'cloudinary-upload-mapping.uiux-records.latest.json');
    fs.writeFileSync(outPath, JSON.stringify(uploaded, null, 2));
    console.log(`📄 Wrote latest upload summary: ${outPath}`);
  }
}

main().catch((err) => {
  console.error('❌ Upload failed:', err?.message || err);
  process.exit(1);
});
