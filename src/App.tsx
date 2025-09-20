import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation, { MobileMenuOverlay } from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blogs';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import DevelopmentRecord from './components/records/DevelopmentRecord';
import GraphicDesignRecord from './components/records/GraphicDesignRecord';
import PhotographyRecord from './components/records/PhotographyRecord';
import UIUXRecord from './components/records/UIUXRecord';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import AnimatedBlobBackground from './components/AnimatedBlobBackground';

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center text-snow-white text-4xl font-bold">
    {title}
  </div>
);

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

const AppContent: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pendingHash = React.useRef<string | null>(null);

  // Scroll to section after navigation if needed
  React.useEffect(() => {
    if (pendingHash.current) {
      const id = pendingHash.current.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        pendingHash.current = null;
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        pendingHash.current = href;
        navigate('/');
      } else {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMobileOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBlobBackground />
      <div className="anime-particles relative z-0">{particles}</div>
      <Navigation mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
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
          <Route path="/records/development" element={<DevelopmentRecord />} />
          <Route path="/records/graphic-design" element={<GraphicDesignRecord />} />
          <Route path="/records/photography" element={<PhotographyRecord />} />
          <Route path="/records/uiux" element={<UIUXRecord />} />
          <Route path="/development" element={<Placeholder title="Development: Code Sorcery" />} />
          <Route path="/uiux" element={<Placeholder title="UI/UX: User Alchemy" />} />
          <Route path="/photography" element={<Placeholder title="Photography: Lens Chronicles" />} />
          <Route path="/design" element={<Placeholder title="Graphic Design: Visual Symmetry" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App; 