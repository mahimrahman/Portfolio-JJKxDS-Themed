import { useState, useEffect, MouseEvent, Dispatch, SetStateAction } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'About', href: '#about', icon: '👤' },
  { name: 'Experience', href: '#experience', icon: '💼' },
  { name: 'Portfolio', href: '#portfolio', icon: '📁' },
  { name: 'Education', href: '#education', icon: '🎓' },
  { name: 'Blog', href: '#blog', icon: '📝' },
  { name: 'Contact', href: '#contact', icon: '📧' },
];

export interface NavigationProps {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  handleNavClick: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, href: string) => void;
}

export interface MobileMenuOverlayProps {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  handleNavClick: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, href: string) => void;
  location: ReturnType<typeof useLocation>;
}

const Navigation = ({ mobileOpen, setMobileOpen, handleNavClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
  }, [location, setMobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileOpen]);

  // Animate hamburger/X icon state - optimized for performance
  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };
  const line1 = {
    closed: { rotate: 0, y: 0, x: 0 },
    open: { rotate: 45, y: 8, x: 0 },
  };
  const line2 = {
    closed: { opacity: 1, scaleX: 1, x: 0 },
    open: { opacity: 0, scaleX: 0.5, x: 0 },
  };
  const line3 = {
    closed: { rotate: 0, y: 0, x: 0 },
    open: { rotate: -45, y: -8, x: 0 },
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
          href="/assets/CV/Mahim.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-6 py-2 rounded-md bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hidden md:inline-block"
        >
          Download CV
        </a>
        {/* Hamburger (Mobile) - Optimized for smoothness */}
        <button
          className="md:hidden flex items-center justify-center p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 shadow-lg border-2 border-zenitsu-lightning/40 bg-gradient-to-br from-domain-violet/60 to-rengoku-flame/40 hover:from-rengoku-flame/80 hover:to-domain-violet/60 transition-all duration-200 group will-change-transform"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v: boolean) => !v)}
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Animated Hamburger/X Icon */}
          <motion.svg
            width="32" height="32" viewBox="0 0 32 32" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
            initial={false}
            animate={mobileOpen ? 'open' : 'closed'}
            variants={hamburgerVariants}
            style={{ willChange: 'transform' }}
          >
            <motion.rect
              x="6" y="10" width="20" height="3" rx="1.5"
              fill="#FFF"
              variants={line1}
              transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.5 }}
              style={{ willChange: 'transform' }}
            />
            <motion.rect
              x="6" y="14.5" width="20" height="3" rx="1.5"
              fill="#FFF"
              variants={line2}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              style={{ willChange: 'opacity, transform' }}
            />
            <motion.rect
              x="6" y="19" width="20" height="3" rx="1.5"
              fill="#FFF"
              variants={line3}
              transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.5 }}
              style={{ willChange: 'transform' }}
            />
          </motion.svg>
        </button>
      </div>
    </motion.nav>
  );
};

export const MobileMenuOverlay = ({ mobileOpen, setMobileOpen, handleNavClick, location }: MobileMenuOverlayProps) => (
  <motion.div
    id="mobile-menu"
    initial={false}
    animate={mobileOpen ? 'open' : 'closed'}
    variants={{
      open: { opacity: 1, pointerEvents: 'auto', y: 0, scale: 1 },
      closed: { opacity: 0, pointerEvents: 'none', y: 0, scale: 1 },
    }}
    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
    className="fixed inset-0 w-full h-full bg-gradient-to-br from-domain-violet/95 via-deep-charcoal/95 to-rengoku-flame/90 backdrop-blur-2xl z-[9999] flex flex-col items-center md:hidden shadow-2xl border-t-4 border-zenitsu-lightning/30 px-4 pt-8 pb-8 overflow-y-hidden will-change-transform"
    style={{ display: mobileOpen ? 'flex' : 'none', position: 'fixed', transform: 'translateZ(0)' }}
    tabIndex={-1}
    aria-modal="true"
    role="dialog"
  >
    {/* Close Button (Top Right) */}
    <motion.button
      onClick={() => setMobileOpen(false)}
      aria-label="Close navigation menu"
      className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border-2 border-zenitsu-lightning bg-gradient-to-br from-domain-violet/80 to-rengoku-flame/80 shadow-xl focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 hover:scale-105 transition-transform duration-150 z-50 will-change-transform"
      tabIndex={mobileOpen ? 0 : -1}
      initial={false}
      animate={mobileOpen ? { rotate: 90, scale: 1 } : { rotate: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      style={{ transform: 'translateZ(0)' }}
    >
      <motion.svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.line x1="8" y1="8" x2="24" y2="24" stroke="#FFD000" strokeWidth="3" strokeLinecap="round" />
        <motion.line x1="24" y1="8" x2="8" y2="24" stroke="#FFD000" strokeWidth="3" strokeLinecap="round" />
      </motion.svg>
    </motion.button>
    {/* Profile Section */}
    <motion.div
      className="flex flex-col items-center mt-16 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.05, duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="w-24 h-24 rounded-full border-4 border-zenitsu-lightning shadow-lg overflow-hidden mb-4 bg-snow-white/10">
        <img
          src="/assets/mahim_picture.jpeg"
          alt="Mahimur Rahman Khan"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <div className="text-xl font-extrabold text-snow-white drop-shadow-md">Mahim Rahman</div>
        <div className="text-sm font-medium text-zenitsu-lightning/90 tracking-wide">Web Developer & UI/UX Designer</div>
      </div>
    </motion.div>
    {/* Nav Links */}
    <motion.nav
      className="flex flex-col items-center justify-center gap-4 w-full mb-8"
      initial="closed"
      animate={mobileOpen ? "open" : "closed"}
      variants={{
        closed: {},
        open: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
      }}
    >
      {navItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          onClick={e => handleNavClick(e, item.href)}
          className={`w-full text-center text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 will-change-transform flex items-center justify-center gap-3
            ${location.hash === item.href ? 'text-zenitsu-lightning font-bold bg-zenitsu-lightning/10' : 'text-snow-white hover:text-zenitsu-lightning/80 hover:bg-white/5'}
          `}
          tabIndex={mobileOpen ? 0 : -1}
          initial={{ opacity: 0, y: 10 }}
          animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ transform: 'translateZ(0)' }}
        >
          <span className="text-2xl">{item.icon}</span>
          <span>{item.name}</span>
        </motion.a>
      ))}
    </motion.nav>
    <motion.div
      className="w-full flex flex-col items-center gap-8 mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ delay: 0.15, duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <a
        href="/assets/CV/Mahim.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center text-base font-bold px-0 py-3 rounded-full bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white shadow-lg border-2 border-zenitsu-lightning/60 hover:from-domain-violet hover:to-rengoku-flame hover:text-zenitsu-lightning transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60"
        tabIndex={mobileOpen ? 0 : -1}
        style={{ transitionDelay: mobileOpen ? `${navItems.length * 0.05 + 0.1}s` : '0s' }}
      >
        Download CV
      </a>
    </motion.div>
  </motion.div>
);

export default Navigation; 