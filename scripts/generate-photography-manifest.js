import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const photographyDir = path.join(__dirname, '../public/assets/Pic');
const outputFile = path.join(__dirname, '../public/assets/Pic/photography-manifest.json');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

function extractMetadataFromFilename(filename, category) {
  // Remove extension and number prefix
  const nameWithoutExt = filename.replace(/\.\w+$/, '');
  const withoutNumber = nameWithoutExt.replace(/^\d+\s*/, '');

  if (category === 'Portraits') {
    // Expected format: "Model-Name, Location"
    const match = withoutNumber.match(/Model-(.+?),\s*(.+)/);
    if (match) {
      return {
        model: match[1].trim(),
        location: match[2].trim()
      };
    }
  } else if (category === 'Landscapes') {
    // Expected format: "Location"
    return {
      location: withoutNumber.trim()
    };
  }

  return null;
}

function scanDirectory(dirPath, relativePath = '', category = '') {
  const items = fs.readdirSync(dirPath);
  const result = {
    categories: [],
    images: []
  };

  // Sort items to maintain folder order (numeric prefix sorting)
  const sortedItems = items.sort((a, b) => {
    // Extract leading numbers for sorting
    const aMatch = a.match(/^(\d+)/);
    const bMatch = b.match(/^(\d+)/);

    if (aMatch && bMatch) {
      const aNum = parseInt(aMatch[1]);
      const bNum = parseInt(bMatch[1]);
      if (aNum !== bNum) return aNum - bNum;
    }

    return a.localeCompare(b);
  });

  sortedItems.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const relPath = relativePath ? `${relativePath}/${item}` : item;
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      const subResult = scanDirectory(fullPath, relPath, item);
      result.categories.push({
        name: item,
        path: relPath,
        imageCount: subResult.images.length,
        images: subResult.images
      });
      result.images.push(...subResult.images);
    } else if (stats.isFile() && isImageFile(item)) {
      const metadata = extractMetadataFromFilename(item, category);
      result.images.push({
        name: item,
        path: `/assets/Pic/${relPath}`,
        size: stats.size,
        modified: stats.mtime,
        category: category,
        metadata: metadata
      });
    }
  });

  return result;
}

function generateManifest() {
  console.log('📸 Generating photography manifest...');

  if (!fs.existsSync(photographyDir)) {
    console.error('❌ Photography directory not found:', photographyDir);
    return;
  }

  const manifest = scanDirectory(photographyDir);

  fs.writeFileSync(
    outputFile,
    JSON.stringify(manifest, null, 2),
    'utf-8'
  );

  console.log(`✅ Manifest generated successfully!`);
  console.log(`📁 Total categories: ${manifest.categories.length}`);
  console.log(`📷 Total images: ${manifest.images.length}`);
  console.log(`📄 Output: ${outputFile}`);
}

try {
  generateManifest();
} catch (error) {
  console.error('❌ Error generating manifest:', error);
  process.exit(1);
}
