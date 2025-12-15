import https from 'https';
import crypto from 'crypto';

// Cloudinary credentials (from user)
const API_KEY = '554441127879316';
const API_SECRET = 'kf6nOoeQOaLrL6X2k4pcaob4Bgc';
const CLOUD_NAME = 'dykwfe7z3'; // Need to verify this

console.log('🔍 Cloudinary Configuration Check\n');
console.log(`Cloud Name: ${CLOUD_NAME}`);
console.log(`API Key: ${API_KEY}`);
console.log('');

// Generate authentication signature
const timestamp = Math.floor(Date.now() / 1000);
const stringToSign = `timestamp=${timestamp}${API_SECRET}`;
const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

console.log('📋 To verify your Cloudinary setup and folder structure:');
console.log('');
console.log('1. Log in to your Cloudinary dashboard at:');
console.log('   https://cloudinary.com/console');
console.log('');
console.log('2. Check your Cloud Name in the dashboard (top right)');
console.log('   If it\'s different from "dykwfe7z3", we need to update it.');
console.log('');
console.log('3. Navigate to Media Library and check the folder structure:');
console.log('   - Is there a "Portfolio" folder?');
console.log('   - Does it contain subfolders: Graphics, Photography, UI UX?');
console.log('   - Or is the structure different?');
console.log('');
console.log('4. Sample image path check:');
console.log('   Find any image and copy its URL. It should look like:');
console.log('   https://res.cloudinary.com/{CLOUD_NAME}/image/upload/{PATH}/{IMAGE}');
console.log('');
console.log('📝 Common folder structures:');
console.log('   Option A: Portfolio/Graphics/...');
console.log('   Option B: Graphics/...');
console.log('   Option C: portfolio/graphics/... (lowercase)');
console.log('   Option D: Custom folder name/...');
console.log('');
console.log('💡 Please provide:');
console.log('   1. Your correct Cloud Name (if different)');
console.log('   2. A sample working image URL from your Cloudinary');
console.log('   3. The folder structure you see in Media Library');
console.log('');
console.log('Then I can update all the paths accordingly!');
