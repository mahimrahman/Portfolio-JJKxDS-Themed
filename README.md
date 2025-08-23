# JJK × DS Themed Portfolio (Cursed Blades)

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.10.0-blue?style=for-the-badge)

*A modern, anime-themed portfolio website built with cutting-edge web technologies*

</div>

## 🎯 Overview

This portfolio showcases a unique blend of anime aesthetics with professional web development practices. Built with React, TypeScript, and Tailwind CSS, it features dynamic animations, responsive design, and an immersive user experience inspired by Jujutsu Kaisen and Demon Slayer themes.

**Developer**: Mahimur Rahman Khan  
**Role**: Software Engineering Graduate | Web Developer & Designer | UI/UX Designer

## ✨ Key Features

### 🎨 Visual & Animation
- **Animated Blob Background**: Dynamic, morphing SVG backgrounds with Framer Motion animations
- **Floating Seals**: Interactive floating seal elements with particle effects
- **Anime Particles**: Energy-themed particle system with cursed energy colors
- **Responsive Hero Section**: Optimized video backgrounds for different screen sizes
- **Smooth Transitions**: Framer Motion-powered page transitions and component animations
- **Sakura Petals**: Animated cherry blossom effects in the photography section

### 🚀 User Experience
- **Modern Navigation**: Animated hamburger menu with custom SVG icons and glowing effects
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging micro-interactions
- **Accessibility**: Optimized for screen readers and keyboard navigation
- **Modal System**: Enhanced photo viewer with navigation controls and keyboard shortcuts

### 📱 Mobile-First Approach
- **Mobile Navigation**: Custom mobile menu overlay with smooth animations
- **Responsive Cards**: Text and layout optimization preventing overflow on small screens
- **Touch-Friendly**: Optimized touch interactions and mobile-specific features

### 🖼️ Portfolio Sections
- **Development**: Code showcase with interactive elements
- **Graphic Design**: Visual design portfolio with smooth transitions
- **Photography**: Enhanced photo gallery with modal viewer and navigation
- **UI/UX Design**: User interface and experience design showcase

## 🛠️ Technology Stack

### Core Technologies
- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.3.0
- **Animations**: Framer Motion 12.10.0
- **Routing**: React Router DOM 7.5.3

### Additional Libraries
- **Icons**: Heroicons 2.1.1
- **Fonts**: Mochiy Pop One (Japanese-style font)
- **Carousel**: Swiper 11.2.6 with EffectCoverflow, Pagination, Navigation, and Mousewheel modules
- **Build Tool**: Create React App 5.0.1

### Development Tools
- **Package Manager**: npm
- **CSS Processing**: PostCSS with Autoprefixer
- **Linting**: ESLint with React App configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio-JJKxDS-Themed.git
   cd Portfolio-JJKxDS-Themed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   - **Windows (PowerShell/CMD)**:
     ```bash
     npm start
     ```
   - **macOS/Linux**:
     ```bash
     NODE_OPTIONS=--openssl-legacy-provider react-scripts start
     ```

4. **Build for production**
   - **Windows (PowerShell/CMD)**:
     ```bash
     npm run build
     ```
   - **macOS/Linux**:
     ```bash
     NODE_OPTIONS=--openssl-legacy-provider react-scripts build
     ```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
Portfolio-JJKxDS-Themed/
├── public/                    # Static assets
│   ├── assets/               # SVG patterns and assets
│   ├── Hero_large.mp4        # Large screen hero video
│   ├── Hero_mac.mp4          # MacBook hero video
│   ├── hero_mobile.mp4       # Mobile hero video
│   └── index.html            # HTML template
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── records/          # Portfolio record components
│   │   │   ├── DevelopmentRecord.tsx
│   │   │   ├── GraphicDesignRecord.tsx
│   │   │   ├── PhotographyRecord.tsx
│   │   │   └── UIUXRecord.tsx
│   │   ├── About.tsx         # About section
│   │   ├── AnimatedBackground.tsx
│   │   ├── AnimatedBlobBackground.tsx
│   │   ├── Blogs.tsx         # Blog listing
│   │   ├── BlogPost.tsx      # Individual blog post
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Experience.tsx    # Experience timeline
│   │   ├── FloatingSeals.tsx # Floating seal animations
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Navigation.tsx    # Navigation component
│   │   ├── Portfolio.tsx     # Portfolio showcase
│   │   └── Training.tsx      # Training/education
│   ├── App.tsx               # Main application component
│   ├── index.tsx             # Application entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎯 Key Components

### Core Sections
- **Hero Section**: Dynamic video backgrounds with responsive sizing
- **Navigation**: Sticky navigation with mobile-responsive menu
- **Portfolio**: Showcase of development, design, photography, and UI/UX work
- **Experience**: Interactive timeline of professional experience
- **Blog**: Content management system for articles and posts
- **Contact**: Professional contact form with validation

### Special Features
- **Photography Gallery**: Enhanced photo viewer with modal, navigation, and keyboard controls
- **Animated Backgrounds**: Multiple layered animation systems
- **Responsive Videos**: Optimized video backgrounds for different screen sizes

## 🔧 Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App |

### Environment Setup

#### Windows (PowerShell/CMD)
The package.json scripts are configured for Windows using `set`:
```bash
npm start    # Automatically sets NODE_OPTIONS
npm run build
```

#### macOS/Linux
The scripts are Windows-specific, so you'll need to handle the OpenSSL legacy provider manually:

**Option 1: Direct command**
```bash
NODE_OPTIONS=--openssl-legacy-provider react-scripts start
NODE_OPTIONS=--openssl-legacy-provider react-scripts build
```

**Option 2: Export variable**
```bash
export NODE_OPTIONS=--openssl-legacy-provider
react-scripts start
# or
react-scripts build
```

**Option 3: Cross-platform scripts (recommended)**
Install `cross-env` and update package.json:
```bash
npm install --save-dev cross-env
```

Then update scripts in package.json:
```json
{
  "scripts": {
    "start": "cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
    "build": "cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts build"
  }
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Charcoal (#121212), Ghost Black (#1A1A2E)
- **Accents**: Cursed Blue (#3A86FF), Rengoku Flame (#FF4E00)
- **Secondary**: Domain Violet (#7F00FF), Zenitsu Lightning (#FFD000)
- **Neutral**: Snow White (#F9F9F9), Ash Gray (#B0B0B0)

### Typography
- **Japanese Style**: Mochiy Pop One for headings
- **Modern Web**: Noto Sans JP for body text
- **Fallbacks**: System fonts for optimal performance

### Animations
- **Performance**: Optimized animations using Framer Motion
- **Smooth Transitions**: Consistent easing and timing functions
- **Interactive Elements**: Hover effects, scale animations, and smooth transitions

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🌐 Live Demo & Social Links

- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **LinkedIn**: [Mahimur Rahman Khan](https://www.linkedin.com/in/mahimur-rahman-khan-50a553183/)
- **GitHub**: [@mahimrk](https://github.com/mahimrk)
- **Behance**: [@mahimrk](https://www.behance.net/mahimrk)
- **Instagram**: [@mahimrk.agm](https://instagram.com/mahimrk.agm)
- **Email**: mahimrk.a@gmail.com

## 🚀 Deployment

### Static Hosting Options

#### Netlify
- Build command: `npm run build`
- Publish directory: `build`
- SPA fallback: Create `public/_redirects` with `/* /index.html 200`
- Node version: 16–18 recommended

#### Vercel
- Framework preset: Other
- Build command: `npm run build`
- Output directory: `build`
- Enable SPA fallback to `index.html`

#### GitHub Pages
- Build locally: `npm run build`
- Preview locally: `npx serve -s build`
- Configure SPA fallback for client-side routing

### SPA Fallback Configuration

**Netlify** - Create `public/_redirects`:
```
/* /index.html 200
```

**Other hosts** - Ensure unknown routes serve `index.html`

## 🧰 Troubleshooting

### Common Issues

#### OpenSSL Error on Node 20+
- **Windows**: Scripts automatically set `NODE_OPTIONS=--openssl-legacy-provider`
- **macOS/Linux**: Set manually as shown in Environment Setup

#### Port 3000 Already in Use
```bash
# Windows
set PORT=3001 && npm start

# macOS/Linux
PORT=3001 npm start
```

#### Tailwind Styles Not Applied
- Ensure `src/index.css` contains Tailwind directives
- Restart dev server after config changes

#### Swiper Styles Missing
Import required CSS in components:
```typescript
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
```

#### 404 on Refresh (Client-side Routing)
- Configure SPA fallback (see Deployment section)
- Netlify: Use `_redirects` file
- Other hosts: Ensure unknown routes serve `index.html`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by anime aesthetics and modern web design principles
- Built with modern web technologies and best practices
- Special thanks to the open-source community for amazing tools and libraries
- Enhanced with user feedback and continuous improvement

---

<div align="center">

**Built with ❤️ and cursed energy by Mahimur Rahman Khan**

*Last updated: August 2025*

</div>