# Cursed Blades Portfolio

A modern, anime-themed portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases a unique blend of anime aesthetics with professional web development practices, featuring dynamic animations, responsive design, and an immersive user experience.

**Developer**: Mahimur Rahman Khan  
**Role**: Software Engineering Graduate | Web Developer & Designer | UI/UX Designer

## ✨ Features

### 🎨 Visual & Animation
- **Animated Blob Background**: Dynamic, morphing SVG backgrounds with Framer Motion animations
- **Floating Seals**: Interactive floating seal elements with particle effects
- **Anime Particles**: Energy-themed particle system with cursed energy colors
- **Responsive Hero Section**: Optimized video backgrounds for different screen sizes (mobile, desktop, large displays)
- **Smooth Transitions**: Framer Motion-powered page transitions and component animations
- **Sakura Petals**: Animated cherry blossom effects in the photography section

### 🚀 User Experience
- **Modern Navigation**: Animated hamburger menu with custom SVG icons and glowing effects
- **Responsive Design**: Fully responsive layout optimized for all devices and screen sizes
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

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.3.0
- **Animations**: Framer Motion 12.10.0
- **Routing**: React Router DOM 7.5.3
- **Icons**: Heroicons 2.1.1
- **Fonts**: Mochiy Pop One (Japanese-style font)
- **Carousel**: Swiper 11.2.6 with EffectCoverflow, Pagination, Navigation, and Mousewheel modules
- **Build Tool**: Create React App 5.0.1

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

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
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── records/         # Portfolio record components
│   │   ├── DevelopmentRecord.tsx
│   │   ├── GraphicDesignRecord.tsx
│   │   ├── PhotographyRecord.tsx      # Enhanced photo gallery with modal
│   │   └── UIUXRecord.tsx
│   ├── About.tsx        # About section component
│   ├── AnimatedBackground.tsx      # Background animations
│   ├── AnimatedBlobBackground.tsx  # Blob background effects
│   ├── Blogs.tsx        # Blog listing component
│   ├── BlogPost.tsx     # Individual blog post component
│   ├── Contact.tsx      # Contact form component
│   ├── Experience.tsx   # Experience timeline component
│   ├── FloatingSeals.tsx # Floating seal animations
│   ├── Hero.tsx         # Hero section with video background
│   ├── Navigation.tsx   # Navigation and mobile menu
│   ├── Portfolio.tsx    # Portfolio showcase component
│   └── Training.tsx     # Training/education component
├── App.tsx              # Main application component with routing
├── index.tsx            # Application entry point
└── index.css            # Global styles and Tailwind imports

public/
├── assets/              # Static assets including seal patterns
├── Hero_large.mp4       # Large screen hero video
├── Hero_mac.mp4         # MacBook hero video
├── hero_mobile.mp4      # Mobile hero video
└── index.html           # HTML template
```

## 🎯 Key Components

- **Hero Section**: Dynamic video backgrounds with responsive sizing
- **Navigation**: Sticky navigation with mobile-responsive menu
- **Portfolio**: Showcase of development, design, photography, and UI/UX work
- **Experience**: Interactive timeline of professional experience
- **Blog**: Content management system for articles and posts
- **Contact**: Professional contact form with validation
- **Photography Gallery**: Enhanced photo viewer with modal, navigation, and keyboard controls

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

### Environment Setup

The project uses Node.js legacy OpenSSL provider for compatibility:
```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

### Recent Updates & Fixes

- **Photography Modal**: Fixed close button functionality and enhanced user experience
- **Enhanced Navigation**: Improved modal navigation with keyboard shortcuts (Arrow keys, Escape)
- **Performance**: Optimized animations and transitions for better performance
- **Accessibility**: Enhanced keyboard navigation and screen reader support

## 🎨 Design System

The portfolio features a cohesive anime-inspired design system with:
- **Color Palette**: Dark themes with vibrant accent colors (cursed blue, rengoku flame, zenitsu lightning)
- **Typography**: Japanese-style fonts combined with modern web fonts
- **Animations**: Smooth, performant animations using Framer Motion
- **Layout**: Grid-based responsive layouts with Tailwind CSS
- **Interactive Elements**: Hover effects, scale animations, and smooth transitions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🌐 Live Demo & Social Links

- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **LinkedIn**: [Mahimur Rahman Khan](https://www.linkedin.com/in/mahimur-rahman-khan-50a553183/)
- **GitHub**: [@mahimrk](https://github.com/mahimrk)
- **Behance**: [@mahimrk](https://www.behance.net/mahimrk)
- **Instagram**: [@mahimrk.agm](https://instagram.com/mahimrk.agm)
- **Email**: mahimrk.a@gmail.com

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
- Special thanks to the open-source community for the amazing tools and libraries
- Enhanced with user feedback and continuous improvement

---

**Built with ❤️ and cursed energy by Mahimur Rahman Khan**

*Last updated: December 2024*

## 🚀 Deployment

You can deploy this Create React App SPA to any static host.

- Netlify
  - Build command: `npm run build`
  - Publish directory: `build`
  - SPA fallback: add a `_redirects` file with `/* /index.html 200`
  - Node version: 16–18 recommended

- Vercel
  - Framework preset: Other
  - Build command: `npm run build`
  - Output directory: `build`
  - Enable SPA fallback to `index.html` for client-side routing (or add a 404 rewrite)

- GitHub Pages / Static servers
  - Build locally: `npm run build`
  - Preview locally: `npx serve -s build`
  - For GitHub Pages, use any GH Pages workflow or a custom server that serves `index.html` for unknown routes

### SPA Fallback (_redirects)
If using Netlify, create `public/_redirects` containing:
```
/* /index.html 200
```

## 🧰 Troubleshooting

- OpenSSL error on Node 20+
  - The scripts already set `NODE_OPTIONS=--openssl-legacy-provider` on Windows
  - macOS/Linux (if needed):
    - bash/zsh: `export NODE_OPTIONS=--openssl-legacy-provider`

- Port 3000 already in use
  - Close the running app using that port or run on a different port: `set PORT=3001 && npm start`

- Tailwind styles not applied
  - Ensure `src/index.css` contains `@tailwind base; @tailwind components; @tailwind utilities;`
  - Restart the dev server after config changes

- Swiper styles missing
  - Ensure the following CSS is imported where the carousel is used:
    - `import 'swiper/css'`
    - `import 'swiper/css/effect-coverflow'`
    - `import 'swiper/css/pagination'`
    - `import 'swiper/css/navigation'`

- 404 on refresh (client-side routing)
  - Configure SPA fallback (see Deployment section). On Netlify use `_redirects`; on other hosts ensure unknown routes serve `index.html`.