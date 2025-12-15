import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const photographyDir = path.join(__dirname, '../public/assets/Photography');
const outputFile = path.join(__dirname, '../public/assets/Photography/photography-manifest.json');

// Cloudinary configuration
const CLOUD_NAME = 'dacbxyltq';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

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
  } else if (category === 'Product Shoot') {
    // For product photography, just use the filename as description
    return {
      description: withoutNumber.trim() || 'Product Photography'
    };
  }

  return null;
}

function convertToCloudinaryUrl(localPath) {
  // Remove leading slash and /assets/ prefix
  let cloudinaryPath = localPath.replace(/^\/assets\//, '');
  
  // Handle Photography folder -> Portfolio/Photography
  cloudinaryPath = cloudinaryPath.replace('Photography/', 'Portfolio/Photography/');
  
  // Encode the path properly for URL
  const pathParts = cloudinaryPath.split('/');
  const encodedParts = pathParts.map(part => encodeURIComponent(part));
  const encodedPath = encodedParts.join('/');
  
  return `${CLOUDINARY_BASE_URL}/${encodedPath}`;
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
      const localPath = `/assets/Photography/${relPath}`;
      const cloudinaryUrl = convertToCloudinaryUrl(localPath);
      
      result.images.push({
        name: item,
        path: cloudinaryUrl,
        size: stats.size,
        modified: stats.mtime,
        category: category,
        metadata: metadata,
        cloudinaryUrl: true
      });
    }
  });

  return result;
}

function generateManifest() {
  console.log('📸 Regenerating photography manifest with Cloudinary URLs...');

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

  console.log(`✅ Manifest generated successfully with Cloudinary URLs!`);
  console.log(`📁 Total categories: ${manifest.categories.length}`);
  manifest.categories.forEach(cat => {
    console.log(`   - ${cat.name}: ${cat.imageCount} images`);
  });
  console.log(`📷 Total images: ${manifest.images.length}`);
  console.log(`📄 Output: ${outputFile}`);
}

try {
  generateManifest();
} catch (error) {
  console.error('❌ Error generating manifest:', error);
  process.exit(1);
}
