import https from 'https';

// Sample URLs to test
const testUrls = [
  'https://res.cloudinary.com/dykwfe7z3/image/upload/Portfolio/Graphics/01-Branding-Identity/Logos/bdgsa.png',
  'https://res.cloudinary.com/dykwfe7z3/image/upload/Portfolio/Photography/Landscapes/1%20Old%20Port%2C%20Montreal%2C%20Canada%20(2).jpg',
  'https://res.cloudinary.com/dykwfe7z3/image/upload/Portfolio/Photography/Product%20Shoot/1.jpg',
  'https://res.cloudinary.com/dykwfe7z3/image/upload/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_1.jpg'
];

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const status = res.statusCode;
      const contentType = res.headers['content-type'];
      
      res.on('data', () => {}); // Consume data
      res.on('end', () => {
        resolve({
          url,
          status,
          contentType,
          success: status === 200
        });
      });
    }).on('error', (err) => {
      resolve({
        url,
        status: 0,
        error: err.message,
        success: false
      });
    });
  });
}

async function testAllUrls() {
  console.log('🧪 Testing Cloudinary URLs...\n');
  
  const results = await Promise.all(testUrls.map(testUrl));
  
  results.forEach((result, index) => {
    const category = [
      'Graphics (Branding)',
      'Photography (Landscapes)',
      'Photography (Product Shoot)',
      'UI/UX (LeGym)'
    ][index];
    
    if (result.success) {
      console.log(`✅ ${category}`);
      console.log(`   Status: ${result.status}`);
      console.log(`   Type: ${result.contentType}`);
    } else {
      console.log(`❌ ${category}`);
      console.log(`   Status: ${result.status}`);
      console.log(`   Error: ${result.error || 'Failed'}`);
    }
    console.log('');
  });
  
  const successCount = results.filter(r => r.success).length;
  console.log(`\n📊 Results: ${successCount}/${results.length} URLs accessible\n`);
  
  if (successCount === results.length) {
    console.log('🎉 All test URLs are working! Migration appears successful.');
    console.log('💡 Next: Test your website and check the full migration.');
  } else {
    console.log('⚠️  Some URLs failed. Please check:');
    console.log('   1. Images are uploaded to Cloudinary');
    console.log('   2. Folder structure matches: Portfolio/{Graphics|Photography|UI UX}/...');
    console.log('   3. Your Cloudinary account is active');
  }
}

testAllUrls();
