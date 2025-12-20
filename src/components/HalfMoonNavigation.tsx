import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  UserCircle,
  Briefcase,
  FolderKanban,
  GraduationCap,
  ScrollText,
  Send,
  X,
  FileDown,
  Menu,
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  action?: () => void;
}

export default function HalfMoonNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dragControls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownloadCV = () => {
    window.open('/assets/CV/Mahim.pdf', '_blank');
    setIsOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'Domain', href: '#home', icon: Home },
    { name: 'Path', href: '#about', icon: UserCircle },
    { name: 'Missions', href: '#experience', icon: Briefcase },
    { name: 'Records', href: '#portfolio', icon: FolderKanban },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Blog', href: '#blog', icon: ScrollText },
    { name: 'Summon', href: '#contact', icon: Send },
    { name: 'Download CV', href: '', icon: FileDown, action: handleDownloadCV },
  ];

  useEffect(() => {
    setActiveSection(location.hash || '#home');
  }, [location]);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (item: NavItem) => {
    if (item.action) {
      item.action();
      return;
    }

    if (item.href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Calculate position for half-moon arc (LEFT side of X button, mirrored)
  const getNavItemPosition = (index: number, total: number) => {
    const radius = isMobile ? 180 : 220; // Increased radius for better spacing
    const startAngle = -70; // Wider arc for proper distribution
    const endAngle = 70; // Wider arc for proper distribution
    const angleStep = (endAngle - startAngle) / (total - 1);
    const angle = (startAngle + angleStep * index) * (Math.PI / 180);

    return {
      x: Math.cos(angle) * radius * -1, // NEGATIVE X = left side (mirrored!)
      y: Math.sin(angle) * radius,
    };
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    // Small delay to prevent click event after drag
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleClick = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {/* Drag constraints container - only for desktop */}
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[99]" />

      {/* Floating Trigger Button - Draggable with iOS AssistiveTouch smoothness */}
      <motion.button
        drag
        dragControls={dragControls}
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        dragTransition={{
          power: 0,
          timeConstant: 0,
          modifyTarget: (target) => Math.round(target),
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        className={`fixed z-[100] pointer-events-auto ${
          isOpen ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-10 h-10 sm:w-12 sm:h-12'
        } rounded-full bg-gradient-to-br from-purple-600/95 via-violet-700/95 to-black backdrop-blur-xl shadow-xl flex items-center justify-center group border-2 border-purple-400/60 cursor-grab active:cursor-grabbing hover:border-purple-300/80`}
        style={{
          right: '1.5rem',
          top: '1rem',
          opacity: isOpen ? 1 : 0.92,
          boxShadow: isOpen
            ? '0 0 35px rgba(168, 85, 247, 0.7)'
            : '0 10px 25px rgba(139, 92, 246, 0.5)',
          touchAction: 'none',
          willChange: 'transform',
          WebkitTransform: 'translate3d(0, 0, 0)',
        }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0.92, scale: 1 }}
        animate={{ opacity: isOpen ? 1 : 0.92, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-purple-100" strokeWidth={2.5} />

        {/* Orbital ring animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border border-purple-400/50"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </motion.button>

      {/* Half-Moon Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with domain expansion effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="fixed inset-0 z-[90]"
              onClick={() => setIsOpen(false)}
              style={{ willChange: 'opacity' }}
            >
              {/* Gradient backdrop - Low opacity with purple glow, no blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-950/50 to-black/40" />

              {/* Domain expansion ripples - Reduced and optimized */}
              <motion.div
                className="absolute right-[10%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-purple-500/70 will-change-transform"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 80, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ transform: 'translate3d(0, 0, 0)' }}
              />
              <motion.div
                className="absolute right-[10%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-violet-400/50 will-change-transform"
                initial={{ scale: 0, opacity: 0.7 }}
                animate={{ scale: 100, opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                style={{ transform: 'translate3d(0, 0, 0)' }}
              />
            </motion.div>

            {/* Half-Moon Panel - Right 1/3 of page */}
            <motion.div
              initial={{ clipPath: 'circle(0% at 90% 50%)' }}
              animate={{ clipPath: 'circle(100% at 90% 50%)' }}
              exit={{ clipPath: 'circle(0% at 90% 50%)' }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              className="fixed inset-0 z-[95] pointer-events-none flex items-center justify-end"
              style={{ willChange: 'clip-path', transform: 'translate3d(0, 0, 0)' }}
            >
              {/* Large circular background on right side - PROPERLY CENTERED */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative pointer-events-auto"
                style={{
                  width: isMobile ? '150vw' : 'min(120vh, 90vw)',
                  height: isMobile ? '150vw' : 'min(120vh, 90vw)',
                  marginRight: isMobile ? '-60vw' : 'calc(-60vh + 16.67vw)',
                  willChange: 'transform, opacity',
                  transform: 'translate3d(0, 0, 0)',
                }}
              >
                {/* Half-moon circle background - Black with Gojo purple Domain Expansion */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, #000000 0%, #1a0033 30%, #2d0052 60%, #4a0080 100%)',
                    boxShadow:
                      '0 0 80px rgba(168, 85, 247, 0.5), inset 0 0 100px rgba(147, 51, 234, 0.3)',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)',
                  }}
                >
                  {/* Animated gradient overlay - Infinite Void purple effect - Optimized */}
                  <motion.div
                    className="absolute inset-0 opacity-30 will-change-opacity"
                    animate={{
                      background: [
                        'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.4), transparent 50%)',
                        'radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.4), transparent 50%)',
                        'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.4), transparent 50%)',
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                  />

                  {/* Infinite Void purple particles - Optimized */}
                  {[...Array(isMobile ? 12 : 18)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full will-change-transform"
                      style={{
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: [
                          'rgba(168, 85, 247, 0.7)',
                          'rgba(147, 51, 234, 0.7)',
                          'rgba(192, 132, 252, 0.7)',
                        ][Math.floor(Math.random() * 3)],
                        transform: 'translate3d(0, 0, 0)',
                      }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.4, 0],
                        y: [0, -40, -80],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 1.5,
                        ease: 'linear',
                      }}
                    />
                  ))}
                </div>

                {/* Navigation Container - Centered in circle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
                  {/* Close Button on RIGHT side */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.1,
                      ease: 'easeOut',
                    }}
                    onClick={() => setIsOpen(false)}
                    className="absolute -right-8 -top-8 sm:-right-10 sm:-top-10 group"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <motion.div
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-violet-700 to-black border-2 border-purple-400/60 shadow-2xl shadow-purple-500/70"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-7 h-7 sm:w-9 sm:h-9 text-purple-100" strokeWidth={2.5} />

                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-400"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  </motion.button>

                  {/* Navigation items on LEFT side (mirrored) */}
                  {navItems.map((item, index) => {
                      const { x, y } = getNavItemPosition(index, navItems.length);
                      const isActive = activeSection === item.href && item.href !== '';
                      const isHovered = hoveredIndex === index;
                      const Icon = item.icon;

                      // Calculate label angle and position for proper half-moon layout
                      const startAngle = -70;
                      const endAngle = 70;
                      const angleStep = (endAngle - startAngle) / (navItems.length - 1);
                      const angle = startAngle + angleStep * index;

                      // Special label distance tweaks (avoid brittle index coupling)
                      let labelDistance = isMobile ? 65 : 75;
                      if (item.name === 'Education') labelDistance = isMobile ? 80 : 95;
                      if (item.name === 'Summon') labelDistance = isMobile ? 85 : 105;
                      if (item.name === 'Download CV') labelDistance = isMobile ? 100 : 125;

                      // Calculate label position - pointing outward from the icon
                      const labelAngleRad = angle * (Math.PI / 180);
                      const labelOffsetX = Math.cos(labelAngleRad) * labelDistance * -1;
                      let labelOffsetY = Math.sin(labelAngleRad) * labelDistance;

                      // Vertical adjustments to center-align labels with icons
                      const yAdjust = isMobile ? 8 : 12;
                      if (item.name === 'Domain') labelOffsetY += yAdjust;
                      if (item.name === 'Path') labelOffsetY += yAdjust;
                      if (item.name === 'Missions') labelOffsetY += yAdjust;
                      if (item.name === 'Records') labelOffsetY += yAdjust;
                      if (item.name === 'Education') labelOffsetY += yAdjust * 0.7;
                      if (item.name === 'Blog') labelOffsetY += yAdjust * 0.7;
                      if (item.name === 'Summon') labelOffsetY -= yAdjust;
                      if (item.name === 'Download CV') labelOffsetY -= yAdjust * 1.8;

                      return (
                        <motion.button
                          key={item.name}
                          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                          animate={{ opacity: 1, scale: 1, x, y }}
                          exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: 0.15 + index * 0.02,
                            ease: 'easeOut',
                          }}
                          onClick={() => handleNavClick(item)}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="absolute group touch-manipulation"
                          style={{
                            left: '-24px',
                            top: '-24px',
                            willChange: 'transform, opacity',
                            transform: 'translate3d(0, 0, 0)',
                          }}
                          title={item.name}
                        >
                          {/* Icon container */}
                          <div className="relative">
                            {/* Glow effect - Purple Domain Expansion */}
                            <motion.div
                              className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-250 ${
                                isActive || isHovered ? 'opacity-100' : 'opacity-0'
                              }`}
                              style={{
                                background: isActive
                                  ? 'radial-gradient(circle, rgba(168, 85, 247, 0.7), transparent 70%)'
                                  : 'radial-gradient(circle, rgba(147, 51, 234, 0.6), transparent 70%)',
                              }}
                            />

                            {/* Icon circle - Black/Purple Gojo */}
                            <motion.div
                              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-250 border-2 ${
                                isActive
                                  ? 'bg-gradient-to-br from-purple-600 to-violet-700 border-purple-400/80 shadow-xl shadow-purple-500/70'
                                  : isHovered
                                  ? 'bg-purple-800/80 border-purple-400/70 backdrop-blur-xl'
                                  : 'bg-black/80 border-purple-500/40 backdrop-blur-xl'
                              }`}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon
                                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-250 ${
                                  isActive
                                    ? 'text-purple-100'
                                    : isHovered
                                    ? 'text-purple-200'
                                    : 'text-purple-300'
                                }`}
                                strokeWidth={2}
                              />
                            </motion.div>

                            {/* Active indicator ring */}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-purple-400"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.8, 0, 0.8],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                              />
                            )}
                          </div>

                          {/* Section Name Label - angled to point at icon, closer */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                              duration: 0.25,
                              delay: 0.2 + index * 0.02,
                              ease: 'easeOut',
                            }}
                            className="absolute pointer-events-none"
                            style={{
                              left: `${labelOffsetX}px`,
                              top: `${labelOffsetY}px`,
                              transform: `translate(-50%, -50%) rotate(${angle}deg) translate3d(0, 0, 0)`,
                              transformOrigin: 'center',
                              willChange: 'transform, opacity',
                            }}
                          >
                            <span
                              className={`text-xs sm:text-sm font-bold transition-all duration-250 px-2.5 py-1 rounded-lg shadow-lg border whitespace-nowrap inline-block ${
                                isActive
                                  ? 'text-purple-100 bg-purple-700/95 border-purple-400/70'
                                  : 'text-purple-200 bg-black/90 border-purple-500/50'
                              }`}
                              style={{
                                transform: `rotate(${-angle}deg)`,
                              }}
                            >
                              {item.name}
                            </span>
                          </motion.div>
                        </motion.button>
                      );
                    })}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
