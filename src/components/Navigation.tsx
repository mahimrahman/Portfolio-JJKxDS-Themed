import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Domain', href: '#home' },
  { name: 'Path', href: '#about' },
  { name: 'Missions', href: '#experience' },
  { name: 'Records', href: '#battle-records' },
  { name: 'Realms', href: '#projects' },
  { name: 'Training', href: '#training' },
  { name: 'Summon', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        {/* Navigation Links */}
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
        {/* Download CV Button */}
        <a
          href="/assets/Mahim-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-6 py-2 rounded-md bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
        >
          Download CV
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation; 