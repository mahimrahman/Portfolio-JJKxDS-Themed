import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Professional SVG Icon Components with Enhanced JJK x DS Aesthetics

const DevelopmentIcon = ({ isActive }: { isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Outer Hexagonal Domain Barrier */}
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={isActive ? "#94a3b8" : "#64748b"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.polygon
      points="50,15 83,32.5 83,67.5 50,85 17,67.5 17,32.5"
      fill="none"
      stroke={isActive ? "#94a3b8" : "#64748b"}
      strokeWidth="1"
      strokeOpacity="0.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
    />

    {/* Cursed Technique Formation - Code Brackets */}
    <motion.path
      d="M 35,30 L 25,50 L 35,70"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#94a3b8"}
      strokeWidth="3"
      strokeLinecap="round"
      animate={isActive ? {
        strokeOpacity: [1, 0.5, 1],
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M 65,30 L 75,50 L 65,70"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#94a3b8"}
      strokeWidth="3"
      strokeLinecap="round"
      animate={isActive ? {
        strokeOpacity: [1, 0.5, 1],
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
    />

    {/* Terminal Slash */}
    <motion.path
      d="M 45,35 L 55,65"
      fill="none"
      stroke={isActive ? "#cbd5e1" : "#94a3b8"}
      strokeWidth="2.5"
      strokeLinecap="round"
      animate={isActive ? {
        strokeOpacity: [0.6, 1, 0.6],
      } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    />

    {/* Cursed Energy Particles */}
    {[...Array(3)].map((_, i) => (
      <motion.circle
        key={i}
        cx={40 + i * 10}
        cy={50}
        r="2"
        fill={isActive ? "#cbd5e1" : "#64748b"}
        animate={{
          opacity: [0, 1, 0],
          cy: [50, 40, 50],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut"
        }}
      />
    ))}
  </svg>
);

const GraphicDesignIcon = ({ isActive }: { isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Hexagonal Domain Barrier */}
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={isActive ? "#5eead4" : "#0d9488"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    {/* Water Breathing Pattern Lines */}
    <motion.path
      d="M 20,45 Q 30,30 40,45 T 60,45"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#14b8a6"}
      strokeWidth="2.5"
      strokeLinecap="round"
      animate={isActive ? {
        strokeOpacity: [0.8, 1, 0.8],
        strokeWidth: [2.5, 3, 2.5]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M 25,55 Q 35,40 45,55 T 65,55"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#14b8a6"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.6"
      animate={isActive ? {
        strokeOpacity: [0.6, 0.8, 0.6],
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
    />
    <motion.path
      d="M 30,65 Q 40,50 50,65 T 70,65"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#14b8a6"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.4"
      animate={isActive ? {
        strokeOpacity: [0.4, 0.6, 0.4],
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
    />

    {/* Pen Tool - Sacred Geometry Points */}
    <motion.circle
      cx="28"
      cy="35"
      r="3"
      fill={isActive ? "#99f6e4" : "#0d9488"}
      animate={isActive ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.circle
      cx="48"
      cy="40"
      r="3"
      fill={isActive ? "#99f6e4" : "#0d9488"}
      animate={isActive ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
    <motion.circle
      cx="68"
      cy="35"
      r="3"
      fill={isActive ? "#99f6e4" : "#0d9488"}
      animate={isActive ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
    />

    {/* Design Palette Square */}
    <motion.rect
      x="65"
      y="60"
      width="20"
      height="20"
      rx="3"
      fill="none"
      stroke={isActive ? "#99f6e4" : "#0d9488"}
      strokeWidth="2"
      animate={isActive ? {
        rotate: [0, 5, 0],
        strokeOpacity: [0.8, 1, 0.8]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.line
      x1="70"
      y1="60"
      x2="70"
      y2="80"
      stroke={isActive ? "#F9F9F9" : "#14b8a6"}
      strokeWidth="1"
      strokeOpacity="0.6"
    />
    <motion.line
      x1="80"
      y1="60"
      x2="80"
      y2="80"
      stroke={isActive ? "#F9F9F9" : "#14b8a6"}
      strokeWidth="1"
      strokeOpacity="0.6"
    />
  </svg>
);

const PhotographyIcon = ({ isActive }: { isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Hexagonal Domain Barrier */}
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={isActive ? "#7dd3fc" : "#0284c7"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    {/* Camera Body with Domain Expansion */}
    <motion.rect
      x="25"
      y="35"
      width="50"
      height="35"
      rx="4"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#38bdf8"}
      strokeWidth="2.5"
      animate={isActive ? {
        strokeOpacity: [0.8, 1, 0.8]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Aperture with Sacred Geometry */}
    <motion.circle
      cx="50"
      cy="52"
      r="12"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#38bdf8"}
      strokeWidth="2"
      animate={isActive ? {
        scale: [1, 1.1, 1],
        strokeOpacity: [1, 0.6, 1]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Aperture Blades - Hexagonal Pattern */}
    {[...Array(6)].map((_, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      const x1 = 50 + Math.cos(angle) * 8;
      const y1 = 52 + Math.sin(angle) * 8;
      const x2 = 50 + Math.cos(angle) * 11;
      const y2 = 52 + Math.sin(angle) * 11;

      return (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={isActive ? "#bae6fd" : "#0284c7"}
          strokeWidth="2"
          strokeLinecap="round"
          animate={isActive ? {
            strokeOpacity: [0.8, 1, 0.8],
          } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
        />
      );
    })}

    {/* Center Focus Point */}
    <motion.circle
      cx="50"
      cy="52"
      r="2.5"
      fill={isActive ? "#bae6fd" : "#0284c7"}
      animate={isActive ? { scale: [1, 1.5, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Viewfinder */}
    <motion.rect
      x="60"
      y="38"
      width="10"
      height="6"
      rx="1"
      fill="none"
      stroke={isActive ? "#bae6fd" : "#0284c7"}
      strokeWidth="1.5"
      animate={isActive ? {
        strokeOpacity: [0.6, 1, 0.6]
      } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    />

    {/* Sacred Geometry Outer Ring */}
    <motion.circle
      cx="50"
      cy="52"
      r="18"
      fill="none"
      stroke={isActive ? "#38bdf8" : "#0284c7"}
      strokeWidth="1"
      strokeOpacity="0.3"
      strokeDasharray="2,3"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const UIUXIcon = ({ isActive }: { isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Hexagonal Domain Barrier */}
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={isActive ? "#a78bfa" : "#7c3aed"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    {/* Flame Breathing Rings */}
    <motion.circle
      cx="50"
      cy="50"
      r="25"
      fill="none"
      stroke={isActive ? "#e2e8f0" : "#8b5cf6"}
      strokeWidth="2"
      animate={isActive ? {
        r: [25, 28, 25],
        strokeOpacity: [1, 0.5, 1]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="50"
      cy="50"
      r="18"
      fill="none"
      stroke={isActive ? "#e2e8f0" : "#8b5cf6"}
      strokeWidth="1.5"
      strokeOpacity="0.6"
      animate={isActive ? {
        r: [18, 20, 18],
        strokeOpacity: [0.6, 0.3, 0.6]
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
    />

    {/* Wireframe Grid - Interface Design */}
    <motion.rect
      x="35"
      y="35"
      width="30"
      height="30"
      fill="none"
      stroke={isActive ? "#c4b5fd" : "#7c3aed"}
      strokeWidth="1.5"
      animate={isActive ? {
        strokeOpacity: [0.8, 1, 0.8],
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Grid Lines */}
    <motion.line x1="35" y1="45" x2="65" y2="45" stroke={isActive ? "#c4b5fd" : "#7c3aed"} strokeWidth="1" strokeOpacity="0.6" />
    <motion.line x1="35" y1="55" x2="65" y2="55" stroke={isActive ? "#c4b5fd" : "#7c3aed"} strokeWidth="1" strokeOpacity="0.6" />
    <motion.line x1="45" y1="35" x2="45" y2="65" stroke={isActive ? "#c4b5fd" : "#7c3aed"} strokeWidth="1" strokeOpacity="0.6" />
    <motion.line x1="55" y1="35" x2="55" y2="65" stroke={isActive ? "#c4b5fd" : "#7c3aed"} strokeWidth="1" strokeOpacity="0.6" />

    {/* Cursor/Pointer Element */}
    <motion.path
      d="M 25,25 L 25,40 L 30,35 L 35,42 L 38,40 L 33,33 L 40,33 Z"
      fill={isActive ? "#c4b5fd" : "#7c3aed"}
      animate={isActive ? {
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8]
      } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    />

    {/* Checkered Pattern Elements (Tanjiro's Haori) */}
    {[0, 1].map((row) =>
      [0, 1].map((col) => (
        <motion.rect
          key={`${row}-${col}`}
          x={68 + col * 6}
          y={68 + row * 6}
          width="5"
          height="5"
          fill={(row + col) % 2 === 0 ? (isActive ? "#a78bfa" : "#7c3aed") : "none"}
          stroke={isActive ? "#a78bfa" : "#7c3aed"}
          strokeWidth="0.5"
          animate={isActive ? {
            opacity: [0.6, 1, 0.6]
          } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: (row + col) * 0.2 }}
        />
      ))
    )}
  </svg>
);

// Portfolio type definition
interface PortfolioRecord {
  title: string;
  link: string;
  icon: typeof DevelopmentIcon;
  color: string;
  selectedColor: string;
  accentColor: string;
  glowColor: string;
  description: string;
  preview: string;
  stats: {
    [key: string]: string;
  };
  highlights: string[];
}

const Portfolio = () => {
  const location = useLocation();

  const records: PortfolioRecord[] = [
    {
      title: 'Development',
      link: '/records/development',
      icon: DevelopmentIcon,
      color: 'from-slate-600 to-slate-700',
      selectedColor: 'from-slate-600 to-slate-700',
      accentColor: '#64748b',
      glowColor: 'rgba(100, 116, 139, 0.2)',
      description: 'Full-stack development projects showcasing modern web technologies and innovative solutions.',
      preview: 'Explore my development journey through various projects including web applications, APIs, and software solutions built with cutting-edge technologies.',
      stats: {
        projects: '12+',
        technologies: '15+',
        experience: '3+ years'
      },
      highlights: ['React & Node.js', 'Full-Stack Solutions', 'API Development', 'Database Design']
    },
    {
      title: 'Graphic Design',
      link: '/records/graphic-design',
      icon: GraphicDesignIcon,
      color: 'from-teal-600 to-teal-700',
      selectedColor: 'from-teal-600 to-teal-700',
      accentColor: '#0d9488',
      glowColor: 'rgba(13, 148, 136, 0.2)',
      description: 'Creative graphic design work including branding, illustrations, and visual content.',
      preview: 'Discover my creative process and visual design work, from brand identity development to digital illustrations and marketing materials.',
      stats: {
        projects: '25+',
        clients: '18+',
        experience: '4+ years'
      },
      highlights: ['Brand Identity', 'Digital Illustrations', 'Marketing Materials', 'UI Graphics']
    },
    {
      title: 'Photography',
      link: '/records/photography',
      icon: PhotographyIcon,
      color: 'from-sky-600 to-sky-700',
      selectedColor: 'from-sky-600 to-sky-700',
      accentColor: '#0284c7',
      glowColor: 'rgba(2, 132, 199, 0.2)',
      description: 'Photography portfolio featuring landscapes, portraits, and artistic compositions.',
      preview: 'Immerse yourself in my photography collection, capturing moments through landscapes, portraits, and artistic compositions that tell unique stories.',
      stats: {
        photos: '500+',
        categories: '8+',
        experience: '5+ years'
      },
      highlights: ['Landscape Photography', 'Portrait Sessions', 'Event Coverage', 'Artistic Compositions']
    },
    {
      title: 'UI/UX Design',
      link: '/records/uiux',
      icon: UIUXIcon,
      color: 'from-violet-600 to-purple-700',
      selectedColor: 'from-violet-600 to-purple-700',
      accentColor: '#7c3aed',
      glowColor: 'rgba(124, 58, 237, 0.2)',
      description: 'User interface and experience design projects focusing on usability and aesthetics.',
      preview: 'Experience my UI/UX design philosophy through user-centered interfaces, wireframes, and interactive prototypes that prioritize both functionality and beauty.',
      stats: {
        designs: '20+',
        prototypes: '15+',
        experience: '3+ years'
      },
      highlights: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
  ];

  const [selectedTab, setSelectedTab] = useState(() => {
    const currentRecord = records.find(record => record.link === location.pathname);
    return currentRecord || records[0];
  });

  const handleTabClick = (record: PortfolioRecord) => {
    setSelectedTab(record);
  };

  return (
    <section id="battle-records" className="h-screen py-4 md:py-6 px-4 relative overflow-hidden flex flex-col">
      {/* Enhanced Background Hexagonal Pattern - Domain Barrier */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <polygon
                points="50,0 100,25 100,75 50,100 0,75 0,25"
                fill="none"
                stroke="#6366f1"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Floating Cursed Energy Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${selectedTab.accentColor}20, transparent)`,
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Title Section with Enhanced Domain Expansion Effect */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-4 md:mb-6 relative flex-shrink-0"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        >
          Battle Records
        </motion.h2>

        <p className="text-ash-gray text-sm mb-2">Portfolio of my professional work across multiple domains</p>

        {/* Animated Divider with Cursed Energy */}
        <motion.div
          className="w-24 h-0.5 mx-auto mt-1 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 rounded-full relative"
          animate={{
            width: ['6rem', '8rem', '6rem'],
            boxShadow: [
              '0 0 8px rgba(100, 116, 139, 0.3)',
              '0 0 16px rgba(100, 116, 139, 0.3)',
              '0 0 8px rgba(100, 116, 139, 0.3)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Energy Particles on Divider */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-slate-200 rounded-full"
              style={{
                left: `${i * 40}%`,
                top: '50%',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto flex-1 flex flex-col min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 flex-1 min-h-0 items-stretch">

          {/* Left Side - Enhanced Category Selection with Domain Barriers */}
          <div className="space-y-2 flex flex-col min-h-0 h-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              className="text-center mb-3 relative flex-shrink-0"
            >
              <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-1 relative inline-block">
                Select Your Domain
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-slate-500/20 via-slate-400/20 to-transparent rounded-lg -z-10 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </h3>
              <p className="text-ash-gray text-xs">Choose a category to explore my work</p>
            </motion.div>

            {records.map((section, idx) => {
              const isActive = selectedTab.title === section.title;
              const isCurrentRoute = location.pathname === section.link;
              const IconComponent = section.icon;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -2,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group cursor-pointer touch-manipulation"
                  onClick={() => handleTabClick(section)}
                >
                  {/* Enhanced Hexagonal Card Background */}
                  <div
                    className={`relative rounded-xl p-3 border-2 transition-all duration-300 overflow-hidden flex-shrink-0
                      ${isActive
                        ? `bg-gradient-to-br ${section.selectedColor} shadow-xl border-slate-400/30`
                        : 'bg-gradient-to-br from-ghost-black/90 to-deep-charcoal/90 border-slate-500/10 group-hover:border-slate-400/30 group-hover:bg-gradient-to-br group-hover:from-ghost-black/95 group-hover:to-deep-charcoal/95'
                      }`}
                    style={isActive ? {
                      boxShadow: `0 0 20px ${section.glowColor}, 0 0 40px ${section.glowColor}10, 0 10px 20px rgba(0,0,0,0.3)`
                    } : {}}
                  >
                    {/* Checkered Pattern Overlay (Tanjiro's Haori) */}
                    <motion.div
                      className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        backgroundImage: `repeating-conic-gradient(${section.accentColor} 0% 25%, transparent 0% 50%)`,
                        backgroundSize: '20px 20px'
                      }}
                      animate={isActive ? {
                        opacity: [0.05, 0.1, 0.05],
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Breathing Technique Background Pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      animate={isActive ? {
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      } : {}}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                      }}
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${section.accentColor}40 10px, ${section.accentColor}40 11px)`
                      }}
                    />

                    <div className="flex items-center space-x-3 relative z-10">
                      {/* Enhanced Hexagonal Icon Container with Domain Barrier */}
                      <motion.div
                        className={`relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-500 flex-shrink-0 ${
                          isActive
                            ? 'bg-slate-300/20 shadow-lg'
                            : 'bg-slate-400/5'
                        }`}
                        animate={isActive ? {
                          boxShadow: [
                            `0 0 15px ${section.glowColor}`,
                            `0 0 25px ${section.glowColor}`,
                            `0 0 15px ${section.glowColor}`
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-8 h-8">
                          <IconComponent isActive={isActive} />
                        </div>

                        {/* Rotating Domain Expansion Ring */}
                        {isActive && (
                          <>
                            <motion.div
                              className="absolute inset-0 rounded-xl border-2"
                              style={{ borderColor: section.accentColor }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.8, 0, 0.8],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-xl border-2"
                              style={{ borderColor: section.accentColor }}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 0, 0.6],
                                rotate: [0, 180, 360]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </>
                        )}
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 text-left min-w-0">
                        <h4 className={`text-base md:text-lg font-bold transition-colors duration-300 mb-0.5 ${
                          isActive ? 'text-slate-200 drop-shadow-lg' : 'text-slate-200'
                        }`}>
                          {section.title}
                        </h4>
                        <p className={`text-xs md:text-sm transition-colors duration-300 line-clamp-2 ${
                          isActive ? 'text-slate-300/90' : 'text-ash-gray group-hover:text-ash-gray/80'
                        }`}>
                          {section.description}
                        </p>
                      </div>

                      {/* Enhanced Active Indicator with Cursed Energy */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{
                            scale: 1,
                            rotate: 0,
                          }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="relative flex-shrink-0"
                        >
                          <motion.div
                            className="w-5 h-5 bg-slate-300 rounded-full shadow-lg"
                            animate={{
                              boxShadow: [
                                '0 0 10px rgba(255, 255, 255, 0.8)',
                                '0 0 20px rgba(255, 255, 255, 0.8)',
                                '0 0 10px rgba(255, 255, 255, 0.8)'
                              ]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-slate-300"
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Current Route Indicator */}
                    {isCurrentRoute && !isActive && (
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <span className="px-3 py-1 text-xs bg-cursed-blue text-slate-200 rounded-full font-bold shadow-md">
                          Current
                        </span>
                      </motion.div>
                    )}

                    {/* Hexagonal Corner Accents */}
                    {isActive && (
                      <>
                        <motion.div
                          className="absolute top-0 left-0 w-8 h-8"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M0 0 L24 0 L12 12 Z" fill="#e2e8f0" fillOpacity="0.2" />
                          </svg>
                        </motion.div>
                        <motion.div
                          className="absolute bottom-0 right-0 w-8 h-8"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M24 24 L0 24 L12 12 Z" fill="#e2e8f0" fillOpacity="0.2" />
                          </svg>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Enhanced Preview Card with Domain Expansion Aesthetics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="relative flex flex-col min-h-0 h-full"
          >
            <div className="text-center mb-3 relative flex-shrink-0">
              <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-1 relative inline-block">
                Portfolio Summary
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-slate-500/20 via-slate-400/20 to-transparent rounded-lg -z-10 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </h3>
              <p className="text-ash-gray text-xs">Get a comprehensive overview</p>
            </div>

            {/* Enhanced Glass Morphism Preview Card with Domain Barrier */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.title}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 25
                }}
                className="relative rounded-3xl overflow-hidden"
              >
                {/* Enhanced Hexagonal Corner Decorations */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                  {[
                    { top: -10, left: -10, rotate: 0 },
                    { top: -10, right: -10, rotate: 90 },
                    { bottom: -10, left: -10, rotate: -90 },
                    { bottom: -10, right: -10, rotate: 180 }
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-16 h-16"
                      style={pos}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.4, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <svg viewBox="0 0 50 50">
                        <polygon
                          points="25,0 50,15 50,35 25,50 0,35 0,15"
                          fill="none"
                          stroke={selectedTab.accentColor}
                          strokeWidth="2"
                          style={{ transform: `rotate(${pos.rotate}deg)`, transformOrigin: 'center' }}
                        />
                        <polygon
                          points="25,8 42,18 42,32 25,42 8,32 8,18"
                          fill="none"
                          stroke={selectedTab.accentColor}
                          strokeWidth="1"
                          strokeOpacity="0.5"
                          style={{ transform: `rotate(${pos.rotate}deg)`, transformOrigin: 'center' }}
                        />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Glass Background with Breathing Effect */}
                <motion.div
                  className="backdrop-blur-xl bg-slate-300/10 border-2 shadow-xl relative flex-1 flex flex-col min-h-0"
                  style={{
                    borderColor: selectedTab.accentColor + '40',
                    boxShadow: `0 0 30px ${selectedTab.glowColor}, 0 15px 30px -8px rgba(0, 0, 0, 0.25)`
                  }}
                  animate={{
                    borderRadius: ["0.75rem", "1rem", "0.75rem"],
                    borderColor: [
                      selectedTab.accentColor + '40',
                      selectedTab.accentColor + '80',
                      selectedTab.accentColor + '40'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="p-4 md:p-6 relative z-20 flex flex-col flex-1 min-h-0 overflow-y-auto">

                    {/* Header Section with Enhanced Animated Icon */}
                    <motion.div
                      className="text-center mb-4 flex-shrink-0"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-xl backdrop-blur-sm border-2 mb-3 relative"
                        style={{
                          background: `linear-gradient(135deg, ${selectedTab.accentColor}20, ${selectedTab.accentColor}10)`,
                          borderColor: selectedTab.accentColor + '60'
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 15px ${selectedTab.glowColor}`,
                            `0 0 30px ${selectedTab.glowColor}`,
                            `0 0 15px ${selectedTab.glowColor}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-10 h-10">
                          {(() => {
                            const IconComponent = selectedTab.icon;
                            return <IconComponent isActive={true} />;
                          })()}
                        </div>

                        {/* Multi-layer Rotating Domain Expansion Rings */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            border: `2px solid ${selectedTab.accentColor}`,
                            opacity: 0.4
                          }}
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.4, 0, 0.4],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            border: `1px solid ${selectedTab.accentColor}`,
                            opacity: 0.3
                          }}
                          animate={{
                            scale: [1, 1.25, 1],
                            opacity: [0.3, 0, 0.3],
                            rotate: [360, 180, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>

                      <h4 className="text-xl md:text-2xl font-bold text-slate-200 drop-shadow-lg mb-2">
                        {selectedTab.title}
                      </h4>

                      <motion.div
                        className="w-16 h-0.5 rounded-full mx-auto relative"
                        style={{
                          background: `linear-gradient(to right, ${selectedTab.accentColor}, ${selectedTab.accentColor}80)`
                        }}
                        animate={{
                          width: ["4rem", "5rem", "4rem"],
                          boxShadow: [
                            `0 0 8px ${selectedTab.glowColor}`,
                            `0 0 15px ${selectedTab.glowColor}`,
                            `0 0 8px ${selectedTab.glowColor}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Enhanced Stats Grid with Cursed Energy Glow */}
                    <motion.div
                      className="grid grid-cols-3 gap-2 mb-4 flex-shrink-0"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {Object.entries(selectedTab.stats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          className="text-center p-2 rounded-lg backdrop-blur-sm border relative overflow-hidden"
                          style={{
                            background: 'rgba(226, 232, 240, 0.05)',
                            borderColor: selectedTab.accentColor + '30'
                          }}
                          whileHover={{
                            scale: 1.05,
                            borderColor: selectedTab.accentColor + '60',
                            background: 'rgba(226, 232, 240, 0.08)'
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }}
                        >
                          {/* Enhanced Breathing Pattern Background */}
                          <motion.div
                            className="absolute inset-0 opacity-20"
                            animate={{
                              backgroundPosition: ['0% 0%', '100% 100%']
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "linear",
                              delay: index * 0.2
                            }}
                            style={{
                              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, ${selectedTab.accentColor}20 5px, ${selectedTab.accentColor}20 6px)`
                            }}
                          />

                          <motion.div
                            className="text-lg md:text-xl font-bold mb-0.5 relative z-10"
                            style={{ color: selectedTab.accentColor }}
                            animate={{
                              textShadow: [
                                `0 0 8px ${selectedTab.glowColor}`,
                                `0 0 15px ${selectedTab.glowColor}`,
                                `0 0 8px ${selectedTab.glowColor}`
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {value}
                          </motion.div>
                          <div className="text-xs text-ash-gray capitalize relative z-10 font-medium">{key}</div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Enhanced Highlights Section with Hexagonal Bullets */}
                    <motion.div
                      className="mb-4 flex-shrink-0"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h5 className="text-sm md:text-base font-semibold text-slate-200 mb-3 text-center flex items-center justify-center gap-2">
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: selectedTab.accentColor }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        Key Highlights
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: selectedTab.accentColor }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                      </h5>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedTab.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-2 p-2 rounded-lg backdrop-blur-sm border relative overflow-hidden group"
                            style={{
                              background: 'rgba(226, 232, 240, 0.05)',
                              borderColor: selectedTab.accentColor + '20'
                            }}
                            whileHover={{
                              x: 5,
                              borderColor: selectedTab.accentColor + '50',
                              background: 'rgba(226, 232, 240, 0.08)'
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25
                            }}
                          >
                            {/* Enhanced Hexagonal Bullet */}
                            <motion.div
                              className="flex-shrink-0 w-4 h-4"
                              animate={{
                                rotate: [0, 360]
                              }}
                              transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              <svg viewBox="0 0 24 24" fill="none">
                                <polygon
                                  points="12,2 22,8 22,16 12,22 2,16 2,8"
                                  fill={selectedTab.accentColor}
                                  fillOpacity="0.6"
                                  stroke={selectedTab.accentColor}
                                  strokeWidth="1"
                                />
                                <polygon
                                  points="12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5"
                                  fill="none"
                                  stroke={selectedTab.accentColor}
                                  strokeWidth="1"
                                  strokeOpacity="0.8"
                                />
                              </svg>
                            </motion.div>
                            <span className="text-xs md:text-sm text-slate-300/90 relative z-10 font-medium">{highlight}</span>

                            {/* Enhanced Hover Glow Effect */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                background: `radial-gradient(circle at center, ${selectedTab.glowColor}, transparent)`
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Enhanced Description */}
                    <motion.div
                      className="mb-4 relative flex-1 min-h-0"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-slate-300/80 leading-relaxed text-center relative z-10 text-xs md:text-sm">
                        {selectedTab.preview}
                      </p>
                    </motion.div>

                    {/* Enhanced Action Button with Domain Expansion Effect */}
                    <motion.div
                      className="text-center flex-shrink-0"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Link
                        to={selectedTab.link}
                        className="inline-flex items-center px-6 py-2.5 font-bold text-sm md:text-base rounded-xl shadow-lg backdrop-blur-sm border-2 transition-all duration-300 relative overflow-hidden group"
                          style={{
                            background: `linear-gradient(135deg, ${selectedTab.accentColor}, ${selectedTab.accentColor}dd)`,
                            borderColor: 'rgba(226, 232, 240, 0.3)'
                          }}
                      >
                        {/* Button Glow Effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, rgba(226, 232, 240, 0.2), transparent)`
                          }}
                        />

                        <span className="text-deep-charcoal relative z-10 font-extrabold">Explore {selectedTab.title}</span>

                        <motion.svg
                          className="ml-2 w-5 h-5 text-deep-charcoal relative z-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{
                            x: [0, 5, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>

                        {/* Multi-layer Domain Expansion Rings on Hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-slate-300 opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-slate-300 opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: 0.3
                          }}
                        />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced Decorative Cursed Energy Orbs */}
                <motion.div
                  className="absolute top-4 right-4 w-28 h-28 rounded-full blur-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${selectedTab.accentColor}30, transparent)`
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${selectedTab.accentColor}30, transparent)`
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
