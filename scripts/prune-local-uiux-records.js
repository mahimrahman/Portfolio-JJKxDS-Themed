/**
 * @fileoverview UI/UX Records Local File Pruning Script
 * @description Removes local UI/UX record images after confirming they've been
 * uploaded to Cloudinary. Verifies URLs before deletion to prevent data loss.
 * @usage npm run uiux:prune-records [--yes] [--verify]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKSPACE_ROOT = path.join(__dirname, '..');
dotenv.config({ path: path.join(WORKSPACE_ROOT, '.env.local') });
dotenv.config({ path: path.join(WORKSPACE_ROOT, '.env') });

const RECORDS_DIR = path.join(WORKSPACE_ROOT, 'src', 'components', 'records');
const MAPPING_PATH = path.join(WORKSPACE_ROOT, 'cloudinary-upload-mapping.json');

const TARGET_FOLDERS = [
  'Apptracka Application Tracking App',
  'BANGLA Editor Panel',
  'BassiliChat AI',
  'BassiliChat Inc Website',
  'BassiliTrade',
  'MonHeure Mobile App'
];

function toPosixPath(p) {
  return p.replace(/\\/g, '/');
}

function localKeyFor(relPosixFromRecords) {
  return `UI UX\\${relPosixFromRecords.replace(/\//g, '\\')}`;
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

async function headOrGetOk(url) {
  const tryRequest = async (method) => {
    const res = await fetch(url, { method });
    return res.ok;
  };

  try {
    if (await tryRequest('HEAD')) return true;
  } catch {
    // ignore
  }

  try {
    return await tryRequest('GET');
  } catch {
    return false;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const shouldDelete = args.includes('--yes');
  const shouldVerifyUrls = args.includes('--verify');

  if (!fs.existsSync(RECORDS_DIR)) {
    throw new Error(`Records folder not found: ${RECORDS_DIR}`);
  }
  if (!fs.existsSync(MAPPING_PATH)) {
    throw new Error(`Mapping file not found: ${MAPPING_PATH}`);
  }

  const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf8'));
  const mappingByLocal = new Map(mapping.map((m) => [m.local, m]));

  /** @type {Array<{folder:string, missing:string[], urlsToVerify:string[]}>} */
  const report = [];

  for (const folder of TARGET_FOLDERS) {
    const folderAbs = path.join(RECORDS_DIR, folder);
    if (!fs.existsSync(folderAbs)) {
      report.push({ folder, missing: [], urlsToVerify: [] });
      continue;
    }

    const files = walkFilesRecursive(folderAbs);
    const missing = [];
    const urlsToVerify = [];

    for (const absPath of files) {
      const relFromRecords = toPosixPath(path.relative(RECORDS_DIR, absPath));
      const localKey = localKeyFor(relFromRecords);
      const entry = mappingByLocal.get(localKey);
      if (!entry?.cloudinary) {
        missing.push(localKey);
      } else if (shouldVerifyUrls) {
        urlsToVerify.push(entry.cloudinary);
      }
    }

    report.push({ folder, missing, urlsToVerify });
  }

  const foldersMissing = report.filter((r) => r.missing.length > 0);

  if (foldersMissing.length > 0) {
    console.log('❌ Not pruning: mapping is missing entries for some local files.');
    for (const r of foldersMissing) {
      console.log(`\n== ${r.folder} ==`);
      console.log(`Missing: ${r.missing.length}`);
      r.missing.slice(0, 20).forEach((m) => console.log(`  - ${m}`));
      if (r.missing.length > 20) console.log(`  ...and ${r.missing.length - 20} more`);
    }
    process.exit(1);
  }

  if (shouldVerifyUrls) {
    console.log('🔎 Verifying Cloudinary URLs (this may take a bit)...');
    const urls = report.flatMap((r) => r.urlsToVerify);

    let failed = 0;
    for (const url of urls) {
      const ok = await headOrGetOk(url);
      if (!ok) {
        failed++;
        console.log(`❌ URL not reachable: ${url}`);
      }
    }

    if (failed > 0) {
      console.log(`\n❌ Not pruning: ${failed} URLs failed verification.`);
      process.exit(1);
    }

    console.log('✅ URL verification passed');
  }

  const existingFolders = TARGET_FOLDERS.filter((f) => fs.existsSync(path.join(RECORDS_DIR, f)));

  if (!shouldDelete) {
    console.log('✅ Ready to prune local UI/UX record folders (dry run).');
    console.log('Folders that would be deleted:');
    existingFolders.forEach((f) => console.log(`  - ${f}`));
    console.log('\nRun with --yes to actually delete. Optionally add --verify to check URLs first.');
    return;
  }

  for (const folder of existingFolders) {
    const folderAbs = path.join(RECORDS_DIR, folder);
    console.log(`🗑️  Deleting: ${folder}`);
    fs.rmSync(folderAbs, { recursive: true, force: true });
  }

  console.log('\n✅ Local UI/UX record folders deleted successfully.');
}

main().catch((err) => {
  console.error('❌ Prune failed:', err?.message || err);
  process.exit(1);
});
