import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Domain', href: '#home' },
  { name: 'Path', href: '#about' },
  { name: 'Missions', href: '#experience' },
  { name: 'Records', href: '#battle-records' },
  { name: 'Training', href: '#training' },
  { name: 'Blog', href: '#blog' },
  { name: 'Summon', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pendingHash = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Scroll to section after navigation if needed
  useEffect(() => {
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deep-charcoal/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        {/* Logo */}
        <span
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent cursor-pointer select-none"
          onClick={() => navigate('/')}
        >
          Mahim
        </span>
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => handleNavClick(e, item.href)}
              className={`text-snow-white font-medium transition-colors duration-200 px-2 py-1 ${
                location.hash === item.href ? 'text-zenitsu-lightning underline underline-offset-8' : 'hover:text-zenitsu-lightning'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Download CV Button (Desktop) */}
        <a
          href="/assets/Mahim-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-6 py-2 rounded-md bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hidden md:inline-block"
        >
          Download CV
        </a>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <motion.span
            initial={false}
            animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }}
            className="block text-3xl text-snow-white"
          >
            {mobileOpen ? '✖' : '☰'}
          </motion.span>
        </button>
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={mobileOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, pointerEvents: 'auto', y: 0 },
            closed: { opacity: 0, pointerEvents: 'none', y: -20 },
          }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-deep-charcoal/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ display: mobileOpen ? 'flex' : 'none' }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => handleNavClick(e, item.href)}
              className="text-2xl font-bold text-snow-white hover:text-zenitsu-lightning transition-colors duration-200"
              tabIndex={mobileOpen ? 0 : -1}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/assets/Mahim-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-snow-white hover:text-zenitsu-lightning transition-colors duration-200 border-t border-zenitsu-lightning/20 pt-6 mt-4"
            tabIndex={mobileOpen ? 0 : -1}
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 