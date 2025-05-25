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
          className="md:hidden flex items-center justify-center p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 shadow-lg border-2 border-zenitsu-lightning/40 bg-gradient-to-br from-domain-violet/60 to-rengoku-flame/40 hover:from-rengoku-flame/80 hover:to-domain-violet/60 transition-all duration-300 group"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {/* Animated Hamburger/X Icon */}
          <motion.svg
            width="32" height="32" viewBox="0 0 32 32" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
            initial={false}
            animate={mobileOpen ? 'open' : 'closed'}
          >
            <motion.rect
              x="6" y="10" width="20" height="3" rx="1.5"
              fill="#FFF"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
            <motion.rect
              x="6" y="19" width="20" height="3" rx="1.5"
              fill="#FFF"
              variants={{
                closed: { rotate: 0, y: 0, opacity: 1 },
                open: { rotate: -45, y: -8 },
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
            <motion.rect
              x="6" y="14.5" width="20" height="3" rx="1.5"
              fill="#FFF"
              variants={{
                closed: { opacity: 1, scaleX: 1 },
                open: { opacity: 0, scaleX: 0.5 },
              }}
              transition={{ duration: 0.2 }}
            />
            {/* Glow effect */}
            <motion.rect
              x="4" y="8" width="24" height="16" rx="8"
              fill="url(#glow-gradient)"
              style={{ filter: 'blur(8px)' }}
              initial={{ opacity: 0.3 }}
              animate={mobileOpen ? { opacity: 0.6 } : { opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <defs>
              <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#FFD000" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.2" />
              </radialGradient>
            </defs>
          </motion.svg>
        </button>
        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={mobileOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, pointerEvents: 'auto', y: 0, scale: 1 },
            closed: { opacity: 0, pointerEvents: 'none', y: -40, scale: 0.98 },
          }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 120, damping: 18 }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-domain-violet/95 via-deep-charcoal/95 to-rengoku-flame/90 backdrop-blur-2xl z-50 flex flex-col items-center justify-center gap-8 md:hidden shadow-2xl border-t-4 border-zenitsu-lightning/30"
          style={{ display: mobileOpen ? 'flex' : 'none' }}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => handleNavClick(e, item.href)}
              className="text-2xl font-bold text-snow-white hover:text-zenitsu-lightning transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 px-6 py-2 rounded-lg shadow-md bg-gradient-to-r from-ghost-black/40 to-domain-violet/30 hover:from-rengoku-flame/30 hover:to-domain-violet/40"
              tabIndex={mobileOpen ? 0 : -1}
              style={{ transitionDelay: mobileOpen ? `${idx * 0.05 + 0.1}s` : '0s' }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/assets/Mahim-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-snow-white hover:text-zenitsu-lightning transition-colors duration-200 border-t border-zenitsu-lightning/20 pt-6 mt-4 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 px-6 py-2 rounded-lg shadow-md bg-gradient-to-r from-ghost-black/40 to-domain-violet/30 hover:from-rengoku-flame/30 hover:to-domain-violet/40"
            tabIndex={mobileOpen ? 0 : -1}
            style={{ transitionDelay: mobileOpen ? `${navItems.length * 0.05 + 0.1}s` : '0s' }}
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 