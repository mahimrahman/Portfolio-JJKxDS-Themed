import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useDragControls, PanInfo } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Zap,
  BookOpen,
  Mail,
  X,
  Download,
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
  const [hamburgerPos, setHamburgerPos] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const navigate = useNavigate();
  const dragControls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = () => {
    window.open('/assets/CV/Mahim.pdf', '_blank');
    setIsOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'Domain', href: '#home', icon: Home },
    { name: 'Path', href: '#about', icon: User },
    { name: 'Missions', href: '#experience', icon: Briefcase },
    { name: 'Records', href: '#portfolio', icon: FolderOpen },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Zap },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Summon', href: '#contact', icon: Mail },
    { name: 'Download CV', href: '', icon: Download, action: handleDownloadCV },
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
    const radius = 200; // Distance from center
    const startAngle = -90; // Top
    const endAngle = 90; // Bottom
    const angleStep = (endAngle - startAngle) / (total - 1);
    const angle = (startAngle + angleStep * index) * (Math.PI / 180);

    return {
      x: Math.cos(angle) * radius * -1, // NEGATIVE X = left side (mirrored!)
      y: Math.sin(angle) * radius,
    };
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setHamburgerPos({ x: info.offset.x, y: info.offset.y });
  };

  return (
    <>
      {/* Drag constraints container */}
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[99]" />

      {/* Floating Trigger Button - Draggable */}
      <motion.button
        drag
        dragControls={dragControls}
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-[100] pointer-events-auto ${
          isOpen ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-10 h-10 sm:w-12 sm:h-12'
        } rounded-full bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-xl shadow-xl flex items-center justify-center group border border-white/10 transition-all duration-300 cursor-grab active:cursor-grabbing`}
        style={{
          opacity: isOpen ? 1 : 0.65,
          boxShadow: isOpen
            ? '0 0 30px rgba(99, 102, 241, 0.5)'
            : '0 10px 25px rgba(0, 0, 0, 0.3)',
        }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0.65, scale: 1 }}
        animate={{ opacity: isOpen ? 1 : 0.65, scale: 1 }}
      >
        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />

        {/* Orbital ring animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border border-indigo-400/20"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3],
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
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90]"
              onClick={() => setIsOpen(false)}
            >
              {/* Gradient backdrop */}
              <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" />

              {/* Domain expansion ripples - from right side */}
              <motion.div
                className="absolute right-[16.67%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-indigo-400/50"
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 120, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute right-[16.67%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-purple-400/40"
                initial={{ scale: 0, opacity: 0.7 }}
                animate={{ scale: 150, opacity: 0 }}
                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.1 }}
              />
            </motion.div>

            {/* Half-Moon Panel - Right 1/3 of page */}
            <motion.div
              initial={{ clipPath: 'circle(0% at calc(100% - 16.67%) 50%)' }}
              animate={{ clipPath: 'circle(85% at calc(100% - 16.67%) 50%)' }}
              exit={{ clipPath: 'circle(0% at calc(100% - 16.67%) 50%)' }}
              transition={{
                duration: 0.7,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="fixed inset-0 z-[95] pointer-events-none flex items-center justify-end"
            >
              {/* Large circular background on right side - PROPERLY CENTERED */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="relative pointer-events-auto"
                style={{
                  width: 'min(120vh, 90vw)',
                  height: 'min(120vh, 90vw)',
                  marginRight: 'calc(-60vh + 16.67vw)',
                }}
              >
                {/* Half-moon circle background */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
                    backdropFilter: 'blur(40px)',
                    boxShadow:
                      '0 0 60px rgba(99, 102, 241, 0.3), inset 0 0 80px rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      background: [
                        'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.4), transparent 50%)',
                        'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.4), transparent 50%)',
                        'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4), transparent 50%)',
                        'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.4), transparent 50%)',
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Elegant particles */}
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: [
                          'rgba(99, 102, 241, 0.6)',
                          'rgba(168, 85, 247, 0.6)',
                          'rgba(236, 72, 153, 0.6)',
                        ][Math.floor(Math.random() * 3)],
                      }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.2, 0],
                        y: [0, -50, -100],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeOut',
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
                      duration: 0.4,
                      delay: 0.3,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    onClick={() => setIsOpen(false)}
                    className="absolute -right-8 -top-8 sm:-right-10 sm:-top-10 group"
                  >
                    <motion.div
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-2 border-white/20 shadow-2xl shadow-indigo-500/50"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-7 h-7 sm:w-9 sm:h-9 text-white" strokeWidth={2.5} />

                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-indigo-400"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 0, 0.6],
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

                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, scale: 1, x, y }}
                        exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + index * 0.04,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                        onClick={() => handleNavClick(item)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="absolute group touch-manipulation"
                        style={{
                          left: '-28px',
                          top: '-28px',
                        }}
                        title={item.name}
                      >
                        {/* Icon container */}
                        <div className="relative">
                          {/* Glow effect */}
                          <motion.div
                            className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-300 ${
                              isActive || isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                              background: isActive
                                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.6), transparent 70%)'
                                : 'radial-gradient(circle, rgba(168, 85, 247, 0.5), transparent 70%)',
                            }}
                          />

                          {/* Icon circle */}
                          <motion.div
                            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                              isActive
                                ? 'bg-gradient-to-br from-indigo-600 to-purple-600 border-indigo-400/70 shadow-xl shadow-indigo-500/50'
                                : isHovered
                                ? 'bg-slate-700/80 border-indigo-400/60 backdrop-blur-xl'
                                : 'bg-slate-800/60 border-white/20 backdrop-blur-xl'
                            }`}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon
                              className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                                isActive
                                  ? 'text-white'
                                  : isHovered
                                  ? 'text-indigo-300'
                                  : 'text-slate-300'
                              }`}
                              strokeWidth={2}
                            />
                          </motion.div>

                          {/* Active indicator ring */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-indigo-400"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 0, 0.6],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                          )}
                        </div>
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
