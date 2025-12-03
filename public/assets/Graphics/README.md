# 🎨 Graphic Design Portfolio - Folder Structure

This folder contains a professionally organized collection of graphic design work, structured for optimal UI display and easy navigation.

## 📁 Folder Structure

```
Graphics/
├── 01-Branding-Identity/          # Logo design & brand identity
│   ├── Logos/                      # 4 logo designs
│   ├── Business-Cards/             # 10 business card designs
│   └── Brand-Mockups/              # Brand presentations
│
├── 02-Print-Design/                # Print materials
│   ├── Posters-Flyers/             # Event posters & promotional flyers
│   │   ├── BDGSA/                  # 11 BDGSA event posters
│   │   ├── Music-Festival/         # 4 music festival designs
│   │   └── Contest-Winner/         # 2 winning designs
│   ├── Event-Materials/            # Event-specific materials
│   │   ├── Sponsorship/            # 6 sponsorship materials
│   │   ├── Signs/                  # 24 signage designs
│   │   └── Classes/                # 12 class promotional materials
│   └── Merchandise-Apparel/        # Merchandise designs
│       └── T-Shirts/               # 2 t-shirt designs
│
├── 03-Digital-Design/              # Digital graphics
│   ├── Social-Media/               # Social media content
│   │   └── Behance/                # 33 Behance showcase pieces
│   ├── Web-Graphics/               # Web banners & assets
│   └── Badges-IDs/                 # 12 event badge designs
│
├── 04-Illustrations/               # 3 custom illustrations
│
├── 05-Photo-Manipulation/          # 3 photo editing works
│
├── 06-Client-Projects/             # Professional client work
│   ├── Alfio-Raldo/                # 2 brand design pieces
│   ├── Artemis-Arthouse/           # 4 promotional materials
│   ├── TEDx-Concordia/             # 18 TEDx event materials
│   ├── HackConcordia/              # 30 hackathon designs
│   ├── BDGSA/                      # Student association work
│   └── SARC/                       # 3 SARC organization pieces
│
└── 07-Contest-Portfolio/           # Contest entries
    └── Freelancer-Contests/        # 15 contest submissions

Total: 198 design files across 7 main categories
```

## 🎯 Key Features

### 1. **Numbered Categories**
Folders are prefixed with numbers (01-07) to maintain consistent ordering across all file systems and interfaces.

### 2. **Hyphenated Names**
All folder names use hyphens instead of spaces for:
- Better URL compatibility
- Easier terminal navigation
- Improved web performance

### 3. **Hierarchical Organization**
- **Main Categories**: Organized by design type (Branding, Print, Digital, etc.)
- **Subcategories**: Further organized by specific use case
- **Project Folders**: Client-specific or project-specific groupings

### 4. **UI-Optimized**
- `categories.json` - Contains metadata for UI display (icons, colors, descriptions)
- `images-manifest.json` - Auto-generated image index for fast loading

## 🎨 Category Color Scheme

Each category has a designated color for visual consistency:

| Category | Color | Hex Code |
|----------|-------|----------|
| Branding & Identity | Red | #FF6B6B |
| Print Design | Teal | #4ECDC4 |
| Digital Design | Blue | #45B7D1 |
| Illustrations | Green | #96CEB4 |
| Photo Manipulation | Yellow | #FFEAA7 |
| Client Projects | Gray | #DFE6E9 |
| Contest Portfolio | Coral | #FAB1A0 |

## 🚀 Usage

### For React Component
```tsx
import GraphicDesignPortfolio from './components/GraphicDesignPortfolio';

function App() {
  return <GraphicDesignPortfolio />;
}
```

### Regenerate Image Manifest
After adding new images, run:
```bash
npm run generate-manifest
# or
node scripts/generate-graphics-manifest.js
```

## 📊 Statistics

- **Total Categories**: 7
- **Total Subcategories**: 20+
- **Total Images**: 198
- **Client Projects**: 6
- **Contest Entries**: 15

## 🛠️ Maintenance Scripts

### Setup Folder Structure
```bash
node scripts/setup-graphics-folders.js
```

### Organize Files
```bash
node scripts/organize-graphics.js
```

### Generate Image Manifest
```bash
node scripts/generate-graphics-manifest.js
```

## 📝 Adding New Work

1. Place images in the appropriate category folder
2. Run `node scripts/generate-graphics-manifest.js` to update the manifest
3. The UI will automatically display new images

## 🎯 Best Practices

- **Image Formats**: Use optimized formats (WebP, optimized PNG/JPG)
- **File Names**: Use descriptive, hyphenated names (e.g., `logo-design-v2.png`)
- **Folder Organization**: Keep related work together in subcategories
- **Manifest Updates**: Regenerate manifest after bulk changes

---

**Created**: December 2025
**Structure Version**: 2.0
**Total Files**: 198 images
