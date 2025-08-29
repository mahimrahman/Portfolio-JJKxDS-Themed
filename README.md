# JJK × DS Themed Portfolio (Cursed Blades)

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.10.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

*A modern, anime-themed portfolio website built with cutting-edge web technologies*

[🚀 Live Demo](#-live-demo--social-links) • [📖 Documentation](#-documentation) • [🛠️ Tech Stack](#️-technology-stack) • [🚀 Getting Started](#-getting-started)

</div>

---

## 🎯 Overview

This portfolio showcases a unique blend of anime aesthetics with professional web development practices. Built with React, TypeScript, and Tailwind CSS, it features dynamic animations, responsive design, and an immersive user experience inspired by **Jujutsu Kaisen** and **Demon Slayer** themes.

The portfolio demonstrates advanced frontend development skills including:
- **Modern React Patterns**: Hooks, Context, and functional components
- **Advanced Animations**: Framer Motion with custom easing and performance optimization
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Performance**: Optimized bundle size and smooth 60fps animations

**Developer**: Mahimur Rahman Khan  
**Role**: Software Engineering Graduate | Web Developer & Designer | UI/UX Designer

## ✨ Key Features

### 🎨 Visual & Animation
- **Animated Blob Background**: Dynamic, morphing SVG backgrounds with Framer Motion animations
- **Floating Seals**: Interactive floating seal elements with particle effects and physics
- **Anime Particles**: Energy-themed particle system with cursed energy colors and dynamic movement
- **Responsive Hero Section**: Optimized video backgrounds for different screen sizes and devices
- **Smooth Transitions**: Framer Motion-powered page transitions with custom easing functions
- **Sakura Petals**: Animated cherry blossom effects with realistic physics in the photography section

### 🚀 User Experience
- **Modern Navigation**: Animated hamburger menu with custom SVG icons and glowing effects
- **Responsive Design**: Fully responsive layout optimized for all devices and screen orientations
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging micro-interactions
- **Accessibility**: WCAG compliant with screen reader support and keyboard navigation
- **Modal System**: Enhanced photo viewer with navigation controls, keyboard shortcuts, and touch gestures

### 📱 Mobile-First Approach
- **Mobile Navigation**: Custom mobile menu overlay with smooth animations and touch optimization
- **Responsive Cards**: Text and layout optimization preventing overflow on small screens
- **Touch-Friendly**: Optimized touch interactions, swipe gestures, and mobile-specific features
- **Performance**: Optimized animations and transitions for mobile devices

### 🖼️ Portfolio Sections
- **Development**: Code showcase with interactive elements and live demos
- **Graphic Design**: Visual design portfolio with smooth transitions and high-quality assets
- **Photography**: Enhanced photo gallery with modal viewer, navigation, and keyboard controls
- **UI/UX Design**: User interface and experience design showcase with interactive prototypes

## 🛠️ Technology Stack

### Core Technologies
- **Frontend Framework**: React 18.2.0 with modern hooks and patterns
- **Language**: TypeScript 4.9.5 for type safety and better development experience
- **Styling**: Tailwind CSS 3.3.0 with custom design system and animations
- **Animations**: Framer Motion 12.10.0 for performant and smooth animations
- **Routing**: React Router DOM 7.5.3 with nested routes and dynamic navigation

### Additional Libraries
- **Icons**: Heroicons 2.1.1 for consistent and scalable iconography
- **Fonts**: Mochiy Pop One (Japanese-style font) for authentic anime aesthetics
- **Carousel**: Swiper 11.2.6 with EffectCoverflow, Pagination, Navigation, and Mousewheel modules
- **Build Tool**: Create React App 5.0.1 with optimized build configuration

### Development Tools
- **Package Manager**: npm with lockfile for consistent installations
- **CSS Processing**: PostCSS 8.4.31 with Autoprefixer 10.4.16 for cross-browser compatibility
- **Linting**: ESLint with React App configuration and TypeScript support
- **Type Checking**: TypeScript compiler with strict mode enabled

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 16 or higher (LTS recommended)
- **npm**: Version 8 or higher
- **Git**: For version control and cloning

### Quick Start

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

### Alternative Setup Methods

#### Using Yarn
```bash
yarn install
yarn start
yarn build
```

#### Using pnpm
```bash
pnpm install
pnpm start
pnpm build
```

## 📁 Project Structure

```
Portfolio-JJKxDS-Themed/
├── 📁 public/                    # Static assets and public files
│   ├── 📁 assets/               # SVG patterns, icons, and static assets
│   │   └── seal-pattern.svg     # Custom seal pattern for backgrounds
│   ├── 🎥 Hero_large.mp4        # Large screen hero video background
│   ├── 🎥 Hero_mac.mp4          # MacBook hero video background
│   ├── 🎥 hero_mobile.mp4       # Mobile hero video background
│   ├── 📄 index.html            # HTML template with meta tags
│   └── 📄 manifest.json         # PWA manifest file
├── 📁 src/                      # Source code and components
│   ├── 📁 components/           # React components organized by feature
│   │   ├── 📁 records/          # Portfolio record components
│   │   │   ├── 🖥️ DevelopmentRecord.tsx    # Development portfolio
│   │   │   ├── 🎨 GraphicDesignRecord.tsx  # Graphic design showcase
│   │   │   ├── 📸 PhotographyRecord.tsx    # Photography gallery
│   │   │   └── 🎯 UIUXRecord.tsx           # UI/UX design portfolio
│   │   ├── 👤 About.tsx         # About section component
│   │   ├── 🌊 AnimatedBackground.tsx       # Background animations
│   │   ├── 🌀 AnimatedBlobBackground.tsx   # Blob background effects
│   │   ├── 📝 Blogs.tsx         # Blog listing component
│   │   ├── 📄 BlogPost.tsx      # Individual blog post component
│   │   ├── 📧 Contact.tsx       # Contact form component
│   │   ├── ⏰ Experience.tsx    # Experience timeline component
│   │   ├── 🏮 FloatingSeals.tsx # Floating seal animations
│   │   ├── 🎬 Hero.tsx          # Hero section with video background
│   │   ├── 🧭 Navigation.tsx    # Navigation and mobile menu
│   │   ├── 💼 Portfolio.tsx     # Portfolio showcase component
│   │   └── 🎓 Training.tsx      # Training/education component
│   ├── 🚀 App.tsx               # Main application component with routing
│   ├── 📍 index.tsx             # Application entry point
│   ├── 🎨 index.css             # Global styles and Tailwind imports
│   └── 🖼️ japanese.jpg          # Japanese-themed background image
├── 📄 package.json              # Dependencies, scripts, and project metadata
├── 🎨 tailwind.config.js        # Tailwind CSS configuration with custom theme
├── 🔧 tsconfig.json             # TypeScript configuration
├── 📄 postcss.config.js         # PostCSS configuration
└── 📄 README.md                 # Project documentation
```

## 🎯 Key Components

### Core Sections
- **Hero Section**: Dynamic video backgrounds with responsive sizing and performance optimization
- **Navigation**: Sticky navigation with mobile-responsive menu and smooth animations
- **Portfolio**: Interactive showcase of development, design, photography, and UI/UX work
- **Experience**: Interactive timeline of professional experience with smooth scrolling
- **Blog**: Content management system for articles and posts with rich text support
- **Contact**: Professional contact form with validation and user feedback

### Special Features
- **Photography Gallery**: Enhanced photo viewer with modal, navigation, keyboard controls, and touch gestures
- **Animated Backgrounds**: Multiple layered animation systems with performance optimization
- **Responsive Videos**: Optimized video backgrounds for different screen sizes and bandwidth conditions
- **Interactive Elements**: Hover effects, scale animations, and smooth transitions throughout

## 🔧 Development

### Available Scripts

| Script | Description | Platform |
|--------|-------------|----------|
| `npm start` | Runs the app in development mode | Windows |
| `npm run build` | Builds the app for production | Windows |
| `npm test` | Launches the test runner | All |
| `npm run eject` | Ejects from Create React App | All |

### Environment Setup

#### Windows (PowerShell/CMD)
The package.json scripts are configured for Windows using `set`:
```bash
npm start    # Automatically sets NODE_OPTIONS
npm run build
```

#### macOS/Linux
The scripts are Windows-specific, so you'll need to handle the OpenSSL legacy provider manually:

**Option 1: Direct command (Recommended for quick testing)**
```bash
NODE_OPTIONS=--openssl-legacy-provider react-scripts start
NODE_OPTIONS=--openssl-legacy-provider react-scripts build
```

**Option 2: Export variable (Recommended for development)**
```bash
export NODE_OPTIONS=--openssl-legacy-provider
react-scripts start
# or
react-scripts build
```

**Option 3: Cross-platform scripts (Recommended for teams)**
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

### Development Workflow

1. **Start Development Server**
   ```bash
   npm start
   ```

2. **Make Changes**
   - Edit components in `src/components/`
   - Modify styles in `src/index.css`
   - Update configuration files as needed

3. **Test Changes**
   - Browser automatically reloads on file changes
   - Check responsive design on different screen sizes
   - Test animations and interactions

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npx serve -s build
   ```

## 🎨 Design System

### Color Palette
- **Primary Colors**: Deep Charcoal (#121212), Ghost Black (#1A1A2E)
- **Accent Colors**: Cursed Blue (#3A86FF), Rengoku Flame (#FF4E00)
- **Secondary Colors**: Domain Violet (#7F00FF), Zenitsu Lightning (#FFD000)
- **Neutral Colors**: Snow White (#F9F9F9), Ash Gray (#B0B0B0)
- **Semantic Colors**: Success (#00A676), Warning (#FFD000), Error (#FF4E00)

### Typography
- **Japanese Style**: Mochiy Pop One for headings and display text
- **Modern Web**: Noto Sans JP for body text and UI elements
- **Fallbacks**: System fonts for optimal performance and consistency
- **Font Weights**: Light (300), Regular (400), Medium (500), Bold (700)

### Animations
- **Performance**: Optimized animations using Framer Motion with 60fps target
- **Smooth Transitions**: Consistent easing functions (easeInOut, easeOut)
- **Interactive Elements**: Hover effects, scale animations, and smooth transitions
- **Custom Keyframes**: Tailwind CSS custom animations for unique effects

### Layout System
- **Grid System**: CSS Grid with responsive breakpoints
- **Flexbox**: Flexible layouts for dynamic content
- **Spacing**: Consistent spacing scale using Tailwind's spacing system
- **Breakpoints**: Mobile-first responsive design with custom breakpoints

## 📱 Browser Support

- ✅ **Chrome**: Latest version (recommended)
- ✅ **Firefox**: Latest version
- ✅ **Safari**: Latest version (macOS and iOS)
- ✅ **Edge**: Latest version (Chromium-based)
- ⚠️ **Internet Explorer**: Not supported

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌐 Live Demo & Social Links

- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **LinkedIn**: [Mahimur Rahman Khan](https://www.linkedin.com/in/mahimur-rahman-khan-50a553183/)
- **GitHub**: [@mahimrk](https://github.com/mahimrk)
- **Behance**: [@mahimrk](https://www.behance.net/mahimrk)
- **Instagram**: [@mahimrk.agm](https://instagram.com/mahimrk.agm)
- **Email**: mahimrk.a@gmail.com

## 🚀 Deployment

### Static Hosting Options

#### Netlify (Recommended)
- **Build command**: `npm run build`
- **Publish directory**: `build`
- **SPA fallback**: Create `public/_redirects` with `/* /index.html 200`
- **Node version**: 16–18 recommended
- **Environment variables**: Set `NODE_OPTIONS=--openssl-legacy-provider`

#### Vercel
- **Framework preset**: Other
- **Build command**: `npm run build`
- **Output directory**: `build`
- **SPA fallback**: Enable fallback to `index.html`
- **Environment variables**: Set `NODE_OPTIONS=--openssl-legacy-provider`

#### GitHub Pages
- **Build locally**: `npm run build`
- **Preview locally**: `npx serve -s build`
- **SPA fallback**: Configure to serve `index.html` for unknown routes
- **GitHub Actions**: Use GitHub Actions for automated deployment

### SPA Fallback Configuration

**Netlify** - Create `public/_redirects`:
```
/* /index.html 200
```

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Other hosts** - Ensure unknown routes serve `index.html`

### Performance Optimization

- **Image Optimization**: Use WebP format and responsive images
- **Code Splitting**: Implement lazy loading for components
- **Bundle Analysis**: Use `npm run build --analyze` to analyze bundle size
- **Caching**: Implement proper cache headers for static assets

## 🧰 Troubleshooting

### Common Issues

#### OpenSSL Error on Node 20+
- **Windows**: Scripts automatically set `NODE_OPTIONS=--openssl-legacy-provider`
- **macOS/Linux**: Set manually as shown in Environment Setup section

#### Port 3000 Already in Use
```bash
# Windows
set PORT=3001 && npm start

# macOS/Linux
PORT=3001 npm start
```

#### Tailwind Styles Not Applied
- Ensure `src/index.css` contains Tailwind directives:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Restart dev server after config changes
- Check PostCSS configuration

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
- Vercel: Use `vercel.json` rewrites
- Other hosts: Ensure unknown routes serve `index.html`

#### Build Failures
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify all dependencies are properly installed

#### Performance Issues
- Use React DevTools Profiler to identify slow components
- Implement React.memo for expensive components
- Optimize images and reduce bundle size
- Use lazy loading for non-critical components

## 📚 Documentation

### Component Documentation
- **Props Interface**: Each component has TypeScript interfaces
- **Usage Examples**: Components include usage examples in comments
- **Styling Guide**: Tailwind classes and custom CSS documented

### API Reference
- **Framer Motion**: Animation API and custom hooks
- **React Router**: Routing configuration and navigation
- **Tailwind CSS**: Custom theme and utility classes

### Best Practices
- **Performance**: Animation optimization and bundle size management
- **Accessibility**: WCAG compliance and keyboard navigation
- **Responsive Design**: Mobile-first approach and breakpoint strategy

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Test thoroughly
6. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
7. Push to the branch (`git push origin feature/AmazingFeature`)
8. Open a Pull Request

### Code Standards
- **TypeScript**: Use strict mode and proper typing
- **ESLint**: Follow the project's linting rules
- **Prettier**: Use consistent code formatting
- **Testing**: Add tests for new features
- **Documentation**: Update README and component docs

### Pull Request Guidelines
- **Title**: Clear and descriptive
- **Description**: Explain the changes and why they're needed
- **Screenshots**: Include before/after screenshots for UI changes
- **Testing**: Describe how you tested the changes
- **Breaking Changes**: Note any breaking changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### License Terms
- **Commercial Use**: ✅ Allowed
- **Modification**: ✅ Allowed
- **Distribution**: ✅ Allowed
- **Private Use**: ✅ Allowed
- **Liability**: ❌ Limited
- **Warranty**: ❌ None

## 🙏 Acknowledgments

- **Anime Inspiration**: Jujutsu Kaisen and Demon Slayer for the visual theme
- **Open Source Community**: Amazing tools and libraries that made this possible
- **Design Community**: Inspiration from modern web design trends
- **User Feedback**: Continuous improvement based on user experience
- **Performance Optimization**: Techniques from web performance experts

---

<div align="center">

**Built with ❤️ and cursed energy by Mahimur Rahman Khan**

*Last updated: December 2024*

[⬆️ Back to Top](#jjk--ds-themed-portfolio-cursed-blades)

</div>