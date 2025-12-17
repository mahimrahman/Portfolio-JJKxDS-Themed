import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the upload mapping file
const mappingPath = path.join(__dirname, '..', 'cloudinary-upload-mapping.json');

if (!fs.existsSync(mappingPath)) {
  console.error('❌ cloudinary-upload-mapping.json not found!');
  console.error('Run upload script first to generate this file.');
  process.exit(1);
}

const uploadMapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));

console.log(`📦 Found ${uploadMapping.length} uploaded images\n`);

// Organize by category
const graphicsImages = [];
const photographyImages = {
  Landscapes: [],
  Portraits: [],
  'Product Shoot': []
};

// Helper function to extract numeric prefix from filename for sorting
const extractNumericPrefix = (filename) => {
  const match = filename.match(/^(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 999;
};

// Helper function to parse location and model from Portrait filenames
const parsePortraitMetadata = (filename) => {
  // Pattern: "1 Model-Elizabeth, Concordia University, Montreal.jpg"
  const match = filename.match(/Model-([^,]+),\s*([^,]+(?:,\s*[^.]+)?)/i);
  if (match) {
    return {
      model: match[1].trim(),
      location: match[2].trim()
    };
  }
  return { model: null, location: 'Unknown Location' };
};

uploadMapping.forEach(item => {
  const localPath = item.local.replace(/\\/g, '/');
  const fullPath = path.join(__dirname, '../public/assets', item.local);
  
  // Check if file exists locally, otherwise use default values
  let fileStats = { size: 0, mtime: new Date() };
  if (fs.existsSync(fullPath)) {
    fileStats = fs.statSync(fullPath);
  }
  
  if (localPath.startsWith('Graphics/')) {
    const filename = path.basename(item.local);
    
    graphicsImages.push({
      name: filename,
      path: item.cloudinary,
      size: fileStats.size,
      modified: fileStats.mtime,
      cloudinaryUrl: true,
      publicId: item.publicId
    });
  } else if (localPath.startsWith('Photography/')) {
    const parts = localPath.split('/');
    const category = parts[1]; // Landscapes, Portraits, or Product Shoot
    const filename = path.basename(item.local);
    
    if (photographyImages[category]) {
      const imageData = {
        name: filename,
        path: item.cloudinary,
        size: fileStats.size,
        modified: fileStats.mtime,
        cloudinaryUrl: true,
        publicId: item.publicId,
        sortKey: extractNumericPrefix(filename)
      };

      // Add metadata based on category
      if (category === 'Portraits') {
        const metadata = parsePortraitMetadata(filename);
        imageData.metadata = metadata;
      } else if (category === 'Product Shoot') {
        imageData.metadata = {
          client: 'Alfio Raldo'
        };
      } else if (category === 'Landscapes') {
        // Extract location from landscape filenames
        // Pattern: "1 Old Port, Montreal, Canada (2).jpg"
        const locationMatch = filename.match(/^\d+\.?\d*\s+(.+?)(?:\s*\(\d+\))?\.\w+$/);
        if (locationMatch) {
          imageData.metadata = {
            location: locationMatch[1].trim()
          };
        }
      }

      photographyImages[category].push(imageData);
    }
  }
});

// Generate Graphics manifest
console.log('📦 Generating Graphics manifest...');
const graphicsManifest = {
  images: graphicsImages,
  totalImages: graphicsImages.length,
  cloudinaryEnabled: true,
  cloudName: 'dacbxyltq',
  lastGenerated: new Date().toISOString()
};

const graphicsManifestPath = path.join(__dirname, '../public/assets/Graphics/images-manifest.json');
fs.writeFileSync(graphicsManifestPath, JSON.stringify(graphicsManifest, null, 2));
console.log(`✅ Graphics manifest: ${graphicsImages.length} images`);
console.log(`📄 Saved to: ${graphicsManifestPath}\n`);

// Generate Photography manifest
console.log('📸 Generating Photography manifest...');
const photographyCategories = Object.entries(photographyImages)
  .filter(([_, images]) => images.length > 0)
  .map(([name, images]) => {
    // Sort images by their numeric prefix to maintain sequential order
    const sortedImages = images.sort((a, b) => a.sortKey - b.sortKey);
    // Remove sortKey from final output
    sortedImages.forEach(img => delete img.sortKey);
    
    return {
      name,
      path: `Portfolio/Photography/${name}`,
      imageCount: sortedImages.length,
      images: sortedImages
    };
  });

const photographyManifest = {
  categories: photographyCategories,
  totalCategories: photographyCategories.length,
  totalImages: photographyCategories.reduce((sum, cat) => sum + cat.imageCount, 0),
  cloudinaryEnabled: true,
  cloudName: 'dacbxyltq',
  lastGenerated: new Date().toISOString()
};

const photoManifestPath = path.join(__dirname, '../public/assets/Photography/photography-manifest.json');
fs.writeFileSync(photoManifestPath, JSON.stringify(photographyManifest, null, 2));
console.log(`✅ Photography manifest: ${photographyManifest.totalImages} images in ${photographyManifest.totalCategories} categories`);
console.log(`📄 Saved to: ${photoManifestPath}\n`);

console.log('🎉 Manifests regenerated with correct Cloudinary URLs!');
console.log('\n📊 Summary:');
console.log(`   Graphics: ${graphicsImages.length} images`);
console.log(`   Photography: ${photographyManifest.totalImages} images`);
