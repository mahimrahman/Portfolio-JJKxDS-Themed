import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldDir = path.join(__dirname, '../public/assets/Graphic Design');
const newDir = path.join(__dirname, '../public/assets/Graphics');

// Copy all files recursively
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠️  Source not found: ${src}`);
    return 0;
  }

  const stats = fs.statSync(src);
  let count = 0;

  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const files = fs.readdirSync(src);
    for (const file of files) {
      count += copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
    count = 1;
  }

  return count;
}

const mappings = [
  // Branding & Identity
  { from: 'Logos', to: '01-Branding-Identity/Logos' },
  { from: 'Business Cards', to: '01-Branding-Identity/Business-Cards' },

  // Print Design
  { from: 'BDGSA Posters', to: '02-Print-Design/Posters-Flyers/BDGSA' },
  { from: 'Music Festival Event Flyer', to: '02-Print-Design/Posters-Flyers/Music-Festival' },
  { from: 'Freelancer.com Contest Winning Poster', to: '02-Print-Design/Posters-Flyers/Contest-Winner' },
  { from: 'Sponsorship', to: '02-Print-Design/Event-Materials/Sponsorship' },
  { from: 'signs', to: '02-Print-Design/Event-Materials/Signs' },
  { from: 'Photoshop Classes', to: '02-Print-Design/Event-Materials/Classes' },
  { from: 'Black and Orange Typography T-shirt', to: '02-Print-Design/Merchandise-Apparel/T-Shirts' },

  // Digital Design
  { from: 'Badge', to: '03-Digital-Design/Badges-IDs' },
  { from: 'Behance', to: '03-Digital-Design/Social-Media/Behance' },

  // Illustrations
  { from: 'Illustrations', to: '04-Illustrations' },

  // Photo Manipulation
  { from: 'Manipulation', to: '05-Photo-Manipulation' },

  // Client Projects
  { from: 'Alfio Raldo', to: '06-Client-Projects/Alfio-Raldo' },
  { from: 'Artemis Arthouse', to: '06-Client-Projects/Artemis-Arthouse' },
  { from: 'TEDx Concordia', to: '06-Client-Projects/TEDx-Concordia' },
  { from: 'TEDx Concordia University', to: '06-Client-Projects/TEDx-Concordia' },
  { from: 'HackConcordia', to: '06-Client-Projects/HackConcordia' },
  { from: 'SARC', to: '06-Client-Projects/SARC' },

  // Contest Portfolio
  { from: 'Freelancer.com Contest Posters', to: '07-Contest-Portfolio/Freelancer-Contests' },
  { from: 'freelancer.com', to: '07-Contest-Portfolio/Freelancer-Contests' }
];

console.log('🎨 Organizing graphic design files...\n');

let totalFiles = 0;

for (const mapping of mappings) {
  const srcPath = path.join(oldDir, mapping.from);
  const destPath = path.join(newDir, mapping.to);

  if (fs.existsSync(srcPath)) {
    console.log(`📁 ${mapping.from} → ${mapping.to}`);
    const count = copyRecursive(srcPath, destPath);
    totalFiles += count;
    console.log(`   ✓ Copied ${count} file(s)\n`);
  } else {
    console.log(`⚠️  Skipped: ${mapping.from} (not found)\n`);
  }
}

console.log(`✅ Organization complete! Total files copied: ${totalFiles}`);
