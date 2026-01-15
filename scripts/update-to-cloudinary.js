/**
 * @fileoverview Cloudinary URL Migration Script
 * @description Converts local asset paths in manifest files to Cloudinary CDN URLs
 * for optimized image delivery and reduced repository size
 * @usage npm run cloudinary:update
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cloudinary configuration
const CLOUD_NAME = 'dacbxyltq';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// Create public/assets directories if they don't exist
const publicAssetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}
const graphicsDir = path.join(publicAssetsDir, 'Graphics');
if (!fs.existsSync(graphicsDir)) {
  fs.mkdirSync(graphicsDir, { recursive: true });
}
const photoDir = path.join(publicAssetsDir, 'Photography');
if (!fs.existsSync(photoDir)) {
  fs.mkdirSync(photoDir, { recursive: true });
}

/**
 * Convert local path to Cloudinary URL
 * @param {string} localPath - Local path like "/assets/Graphics/01-Branding-Identity/Logos/logo.jpg"
 * @returns {string} Cloudinary URL
 */
function convertToCloudinaryUrl(localPath) {
  // Remove leading slash and /assets/ prefix
  let cloudinaryPath = localPath.replace(/^\/assets\//, '');
  
  // Handle different asset folders - map to Cloudinary folder structure
  if (cloudinaryPath.startsWith('Graphics/')) {
    cloudinaryPath = cloudinaryPath.replace('Graphics/', 'Portfolio/Graphic Design/');
  } else if (cloudinaryPath.startsWith('Pic/') || cloudinaryPath.startsWith('Photography/')) {
    cloudinaryPath = cloudinaryPath.replace(/^(Pic|Photography)\//, 'Portfolio/Photography/');
  } else if (cloudinaryPath.startsWith('UI UX/')) {
    cloudinaryPath = `Portfolio/${cloudinaryPath}`;
  }
  
  // Encode the path properly for URL
  const pathParts = cloudinaryPath.split('/');
  const encodedParts = pathParts.map(part => encodeURIComponent(part));
  const encodedPath = encodedParts.join('/');
  
  return `${CLOUDINARY_BASE_URL}/${encodedPath}`;
}

/**
 * Update Graphics images manifest
 */
function updateGraphicsManifest() {
  const manifestPath = path.join(__dirname, '../public/assets/Graphics/images-manifest.json');
  
  if (!fs.existsSync(manifestPath)) {
    console.log('❌ Graphics manifest not found');
    return;
  }
  
  console.log('📦 Updating Graphics manifest...');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  // Update all image paths
  if (manifest.images && Array.isArray(manifest.images)) {
    manifest.images = manifest.images.map(img => ({
      ...img,
      path: convertToCloudinaryUrl(img.path),
      cloudinaryUrl: true // Add flag to indicate this is a Cloudinary URL
    }));
    
    console.log(`✅ Updated ${manifest.images.length} graphics images`);
  }
  
  // Write back to file
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Graphics manifest updated');
}

/**
 * Update Photography manifest
 */
function updatePhotographyManifest() {
  const manifestPath = path.join(__dirname, '../public/assets/Photography/photography-manifest.json');
  
  if (!fs.existsSync(manifestPath)) {
    console.log('❌ Photography manifest not found');
    return;
  }
  
  console.log('📸 Updating Photography manifest...');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  let totalUpdated = 0;
  
  // Update all categories
  if (manifest.categories && Array.isArray(manifest.categories)) {
    manifest.categories = manifest.categories.map(category => {
      if (category.images && Array.isArray(category.images)) {
        category.images = category.images.map(img => {
          totalUpdated++;
          return {
            ...img,
            path: convertToCloudinaryUrl(img.path),
            cloudinaryUrl: true
          };
        });
      }
      return category;
    });
    
    console.log(`✅ Updated ${totalUpdated} photography images across ${manifest.categories.length} categories`);
  }
  
  // Write back to file
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('✅ Photography manifest updated');
}

/**
 * Update UI/UX image references in component
 */
function updateUIUXComponent() {
  const componentPath = path.join(__dirname, '../src/components/records/UIUXRecord.tsx');
  
  if (!fs.existsSync(componentPath)) {
    console.log('❌ UI/UX component not found');
    return;
  }
  
  console.log('🎨 Updating UI/UX component...');
  let content = fs.readFileSync(componentPath, 'utf8');
  
  // Find all /assets/UI UX/ references and replace them
  const originalContent = content;
  content = content.replace(/['"]\/assets\/UI UX\/([^'"]+)['"]/g, (match, imagePath) => {
    const cloudinaryUrl = convertToCloudinaryUrl(`/assets/UI UX/${imagePath}`);
    return `'${cloudinaryUrl}'`;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(componentPath, content);
    
    // Count replacements
    const matches = originalContent.match(/['"]\/assets\/UI UX\/([^'"]+)['"]/g);
    console.log(`✅ Updated ${matches ? matches.length : 0} UI/UX image references`);
  } else {
    console.log('ℹ️  No UI/UX references to update');
  }
  
  console.log('✅ UI/UX component updated');
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting Cloudinary migration...\n');
  console.log(`Using Cloudinary URL: ${CLOUDINARY_BASE_URL}\n`);
  
  try {
    updateGraphicsManifest();
    console.log('');
    
    updatePhotographyManifest();
    console.log('');
    
    updateUIUXComponent();
    console.log('');
    
    console.log('✨ Migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Test your website to ensure all images load correctly');
    console.log('2. Check browser console for any 404 errors');
    console.log('3. If everything works, you can manually delete local images');
    console.log('4. Consider adding image transformations (e.g., w_800,q_auto,f_auto) to Cloudinary URLs for optimization');
  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  }
}

// Run the script
main();
