import { useEffect, useRef, useState, MouseEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation, { MobileMenuOverlay } from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blogs';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Development from './components/Development';
import GraphicDesignRecord from './components/records/GraphicDesignRecord';
import PhotographyRecord from './components/records/PhotographyRecord';
import UIUXRecord from './components/records/UIUXRecord';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import AnimatedBlobBackground from './components/AnimatedBlobBackground';

// Generate random particles for the anime energy effect - Blue and Purple only
const particles = Array.from({ length: 18 }).map((_, i) => {
  const colors = [
    'rgba(58,134,255,0.7)', // blue (cursed energy)
    'rgba(127,0,255,0.7)',  // purple (domain)
  ];
  const color = colors[i % 2];
  const size = Math.random() * 32 + 24;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = Math.random() * 8;
  return (
    <div
      key={i}
      className="anime-particle"
      style={{
        background: color,
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
});

const AppContent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pendingHash = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced scroll management with browser history integration
  useEffect(() => {
    // Clear any pending scroll timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const handlePageNavigation = () => {
      if (location.pathname === '/') {
        // Handle homepage navigation
        if (pendingHash.current) {
          // Navigate to pending section
          const id = pendingHash.current.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            scrollTimeoutRef.current = setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
          pendingHash.current = null;
        } else if (location.hash) {
          // Navigate to URL hash section
          const id = location.hash.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            scrollTimeoutRef.current = setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
        } else {
          // Default to top of homepage if no hash
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // For all other pages, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handlePageNavigation();

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location.pathname, location.hash]);

  // Handle browser back/forward button
  useEffect(() => {
    const handlePopState = () => {
      // Let React Router handle the navigation, but ensure proper scrolling
      if (location.pathname === '/' && location.hash) {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [location]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.replace('#', '');
      
      if (location.pathname !== '/') {
        // Store the target section and navigate to home with proper history
        pendingHash.current = href;
        navigate('/', { replace: false });
      } else {
        // Already on home page, scroll to section and update URL
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL with hash using navigate to create proper history entry
          navigate(href, { replace: false });
        }
      }
    }
    setMobileOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBlobBackground />
      <div className="anime-particles relative z-0">{particles}</div>
      <Navigation mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} handleNavClick={handleNavClick} />
      <MobileMenuOverlay mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} handleNavClick={handleNavClick} location={location} />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="relative z-10">
                <Hero />
              </section>
              <section id="about" className="relative z-10">
                <About />
              </section>
              <section id="experience" className="relative z-10">
                <Experience />
              </section>
              <section id="portfolio" className="relative z-10">
                <Portfolio />
              </section>
              <section id="education" className="relative z-10">
                <Education />
              </section>
              <section id="skills" className="relative z-10">
                <Skills />
              </section>
              <section id="blog" className="relative z-10">
                <Blog />
              </section>
              <section id="contact" className="relative z-10">
                <Contact />
              </section>
            </>
          } />
          <Route path="/records/development" element={<Development />} />
          <Route path="/records/graphic-design" element={<GraphicDesignRecord />} />
          <Route path="/records/photography" element={<PhotographyRecord />} />
          <Route path="/records/uiux" element={<UIUXRecord />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  // Disable browser's automatic scroll restoration to handle it manually
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App; 