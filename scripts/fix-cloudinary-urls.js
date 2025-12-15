import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cloudinary configuration
const OLD_CLOUD_NAME = 'dykwfe7z3';
const NEW_CLOUD_NAME = 'dacbxyltq';

// Update Graphics manifest in build
const graphicsManifest = path.join(__dirname, '../build/assets/Graphics/images-manifest.json');
const photographyManifest = path.join(__dirname, '../build/assets/Pic/photography-manifest.json');

function updateManifest(filePath, oldFolder, newFolder) {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Manifest not found: ${filePath}`);
    return 0;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  let updated = content
    .replace(new RegExp(OLD_CLOUD_NAME, 'g'), NEW_CLOUD_NAME)
    .replace(new RegExp(oldFolder, 'g'), newFolder);
  
  fs.writeFileSync(filePath, updated);
  
  const count = (content.match(new RegExp(OLD_CLOUD_NAME, 'g')) || []).length;
  return count;
}

console.log('🔄 Updating Cloudinary URLs...\n');

const graphicsCount = updateManifest(
  graphicsManifest, 
  '/Portfolio/Graphics/',
  '/Portfolio/Graphic%20Design/'
);

console.log(`✅ Updated ${graphicsCount} Graphics URLs`);

const photoCount = updateManifest(
  photographyManifest,
  OLD_CLOUD_NAME,
  NEW_CLOUD_NAME
);

console.log(`✅ Updated ${photoCount} Photography URLs`);

console.log('\n🎉 All manifests updated with correct cloud name!');
