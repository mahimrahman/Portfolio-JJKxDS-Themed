import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const graphicsDir = path.join(__dirname, '../public/assets/Graphics');
const outputFile = path.join(__dirname, '../public/assets/Graphics/images-manifest.json');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];

function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

function scanDirectory(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath);
  const result = {
    folders: [],
    images: []
  };

  items.forEach(item => {
    // Skip manifest and metadata files
    if (item === 'categories.json' || item === 'images-manifest.json') {
      return;
    }

    const fullPath = path.join(dirPath, item);
    const relPath = relativePath ? `${relativePath}/${item}` : item;
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      const subResult = scanDirectory(fullPath, relPath);
      result.folders.push({
        name: item,
        path: relPath,
        imageCount: subResult.images.length,
        subfolders: subResult.folders
      });
      result.images.push(...subResult.images);
    } else if (stats.isFile() && isImageFile(item)) {
      result.images.push({
        name: item,
        path: `/assets/Graphics/${relPath}`,
        size: stats.size,
        modified: stats.mtime
      });
    }
  });

  return result;
}

function generateManifest() {
  console.log('🎨 Generating graphics manifest...');

  if (!fs.existsSync(graphicsDir)) {
    console.error('❌ Graphics directory not found:', graphicsDir);
    return;
  }

  const manifest = scanDirectory(graphicsDir);

  fs.writeFileSync(
    outputFile,
    JSON.stringify(manifest, null, 2),
    'utf-8'
  );

  console.log(`✅ Manifest generated successfully!`);
  console.log(`📁 Total folders: ${manifest.folders.length}`);
  console.log(`🖼️  Total images: ${manifest.images.length}`);
  console.log(`📄 Output: ${outputFile}`);
}

try {
  generateManifest();
} catch (error) {
  console.error('❌ Error generating manifest:', error);
  process.exit(1);
}
