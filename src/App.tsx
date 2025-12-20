import { useEffect, useRef, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HalfMoonNavigation from './components/HalfMoonNavigation';
import Hero from './components/Hero';
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from './context/ThemeContext';

// Import critical sections immediately for smooth transitions
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';

// Lazy load only less critical sections
const Blog = lazy(() => import('./components/Blogs'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Development = lazy(() => import('./components/Development'));
const GraphicDesignRecord = lazy(() => import('./components/records/GraphicDesignRecord'));
const PhotographyRecord = lazy(() => import('./components/records/PhotographyRecord'));
const UIUXRecord = lazy(() => import('./components/records/UIUXRecord'));

const AppContent = () => {
  const location = useLocation();
  const pendingHash = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

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

  // Smooth scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        requestAnimationFrame(() => {
          isScrollingRef.current = false;
        });
      }
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]">
      <HalfMoonNavigation />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="relative z-10 section-transition">
                <Hero />
              </section>
              <section id="about" className="relative z-10 section-transition">
                <About />
              </section>
              <section id="experience" className="relative z-10 section-transition">
                <Experience />
              </section>
              <section id="portfolio" className="relative z-10 section-transition">
                <Portfolio />
              </section>
              <section id="education" className="relative z-10 section-transition">
                <Education />
              </section>
              <Suspense fallback={null}>
                <section id="blog" className="relative z-10 section-transition">
                  <Blog />
                </section>
              </Suspense>
              <section id="contact" className="relative z-10 section-transition">
                <Contact />
              </section>
            </>
          } />
          <Route path="/records/development" element={<Suspense fallback={null}><Development /></Suspense>} />
          <Route path="/records/graphic-design" element={<Suspense fallback={null}><GraphicDesignRecord /></Suspense>} />
          <Route path="/records/photography" element={<Suspense fallback={null}><PhotographyRecord /></Suspense>} />
          <Route path="/records/uiux" element={<Suspense fallback={null}><UIUXRecord /></Suspense>} />
          <Route path="/blog/:slug" element={<Suspense fallback={null}><BlogPost /></Suspense>} />
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
      <ThemeProvider>
        <AppContent />
        <Analytics />
      </ThemeProvider>
    </Router>
  );
};

export default App; 