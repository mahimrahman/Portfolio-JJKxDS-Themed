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

uploadMapping.forEach(item => {
  const localPath = item.local.replace(/\\/g, '/');
  
  if (localPath.startsWith('Graphics/')) {
    const filename = path.basename(item.local);
    const stats = fs.statSync(path.join(__dirname, '../public/assets', item.local));
    
    graphicsImages.push({
      name: filename,
      path: item.cloudinary,
      size: stats.size,
      modified: stats.mtime,
      cloudinaryUrl: true,
      publicId: item.publicId
    });
  } else if (localPath.startsWith('Photography/')) {
    const parts = localPath.split('/');
    const category = parts[1]; // Landscapes, Portraits, or Product Shoot
    const filename = path.basename(item.local);
    const stats = fs.statSync(path.join(__dirname, '../public/assets', item.local));
    
    if (photographyImages[category]) {
      photographyImages[category].push({
        name: filename,
        path: item.cloudinary,
        size: stats.size,
        modified: stats.mtime,
        cloudinaryUrl: true,
        publicId: item.publicId
      });
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
  .map(([name, images]) => ({
    name,
    path: `Portfolio/Photography/${name}`,
    imageCount: images.length,
    images: images
  }));

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
