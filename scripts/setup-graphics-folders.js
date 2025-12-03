import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '../public/assets/Graphics');

const structure = {
  '01-Branding-Identity': ['Logos', 'Business-Cards', 'Brand-Mockups'],
  '02-Print-Design': ['Posters-Flyers', 'Event-Materials', 'Merchandise-Apparel'],
  '03-Digital-Design': ['Social-Media', 'Web-Graphics', 'Badges-IDs'],
  '04-Illustrations': [],
  '05-Photo-Manipulation': [],
  '06-Client-Projects': ['Alfio-Raldo', 'Artemis-Arthouse', 'TEDx-Concordia', 'HackConcordia', 'BDGSA', 'SARC'],
  '07-Contest-Portfolio': ['Freelancer-Contests']
};

function createFolderStructure() {
  console.log('📁 Creating folder structure...\n');

  // Create base directory
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log(`✓ Created: Graphics/`);
  }

  // Create all folders
  for (const [mainFolder, subfolders] of Object.entries(structure)) {
    const mainPath = path.join(baseDir, mainFolder);

    if (!fs.existsSync(mainPath)) {
      fs.mkdirSync(mainPath, { recursive: true });
      console.log(`✓ Created: ${mainFolder}/`);
    }

    for (const subfolder of subfolders) {
      const subPath = path.join(mainPath, subfolder);
      if (!fs.existsSync(subPath)) {
        fs.mkdirSync(subPath, { recursive: true });
        console.log(`  ✓ Created: ${mainFolder}/${subfolder}/`);
      }
    }
  }

  console.log('\n✅ Folder structure created successfully!');
}

createFolderStructure();
