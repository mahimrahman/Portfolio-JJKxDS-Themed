import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Professional SVG Icon Components with JJK x DS Aesthetics

const DevelopmentIcon = ({ isActive }: { isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Hexagonal Domain Barrier */}
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={isActive ? "#FFD000" : "#7F00FF"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.polygon
      points="50,15 83,32.5 83,67.5 50,85 17,67.5 17,32.5"
      fill="none"
      stroke={isActive ? "#FFD000" : "#7F00FF"}
      strokeWidth="1"
      strokeOpacity="0.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
    />

    {/* Code Brackets with Cursed Energy */}
    <motion.path
      d="M 35,30 L 25,50 L 35,70"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#3A86FF"}
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
      stroke={isActive ? "#F9F9F9" : "#3A86FF"}
      strokeWidth="3"
      strokeLinecap="round"
      animate={isActive ? {
        strokeOpacity: [1, 0.5, 1],
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
    />

    {/* Cursed Energy Particles */}
    {[...Array(3)].map((_, i) => (
      <motion.circle
        key={i}
        cx={40 + i * 10}
        cy={50}
        r="2"
        fill={isActive ? "#FFD000" : "#7F00FF"}
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
      stroke={isActive ? "#00A676" : "#7F00FF"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    {/* Breathing Pattern Lines (Water Breathing Style) */}
    <motion.path
      d="M 20,50 Q 35,30 50,50 T 80,50"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#00A676"}
      strokeWidth="2.5"
      strokeLinecap="round"
      animate={isActive ? {
        strokeOpacity: [0.8, 1, 0.8],
        strokeWidth: [2.5, 3, 2.5]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M 20,60 Q 35,40 50,60 T 80,60"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#00A676"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.6"
      animate={isActive ? {
        strokeOpacity: [0.6, 0.8, 0.6],
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
    />

    {/* Pen Tool / Bezier Curve Points */}
    <motion.circle
      cx="30"
      cy="40"
      r="3"
      fill={isActive ? "#FFD000" : "#00A676"}
      animate={isActive ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.circle
      cx="50"
      cy="45"
      r="3"
      fill={isActive ? "#FFD000" : "#00A676"}
      animate={isActive ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
    <motion.circle
      cx="70"
      cy="40"
      r="3"
      fill={isActive ? "#FFD000" : "#00A676"}
      animate={isActive ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
    />
  </svg>
);

const PhotographyIcon = ({ isActive }: { isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Hexagonal Domain Barrier */}
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={isActive ? "#3A86FF" : "#7F00FF"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    {/* Camera Aperture with Sacred Geometry */}
    <motion.circle
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#3A86FF"}
      strokeWidth="2"
      animate={isActive ? {
        scale: [1, 1.1, 1],
        strokeOpacity: [1, 0.6, 1]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Aperture Blades */}
    {[...Array(6)].map((_, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      const x1 = 50 + Math.cos(angle) * 12;
      const y1 = 50 + Math.sin(angle) * 12;
      const x2 = 50 + Math.cos(angle) * 18;
      const y2 = 50 + Math.sin(angle) * 18;

      return (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={isActive ? "#FFD000" : "#3A86FF"}
          strokeWidth="2"
          strokeLinecap="round"
          animate={isActive ? {
            strokeOpacity: [0.8, 1, 0.8],
          } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
        />
      );
    })}

    {/* Center Dot */}
    <motion.circle
      cx="50"
      cy="50"
      r="3"
      fill={isActive ? "#FFD000" : "#3A86FF"}
      animate={isActive ? { scale: [1, 1.5, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Sacred Geometry Pattern */}
    <motion.circle
      cx="50"
      cy="50"
      r="30"
      fill="none"
      stroke={isActive ? "#3A86FF" : "#7F00FF"}
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
      stroke={isActive ? "#FF4E00" : "#7F00FF"}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    {/* Domain Expansion Circles */}
    <motion.circle
      cx="50"
      cy="50"
      r="25"
      fill="none"
      stroke={isActive ? "#F9F9F9" : "#FF4E00"}
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
      stroke={isActive ? "#F9F9F9" : "#FF4E00"}
      strokeWidth="1.5"
      strokeOpacity="0.6"
      animate={isActive ? {
        r: [18, 20, 18],
        strokeOpacity: [0.6, 0.3, 0.6]
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
    />

    {/* Wireframe Grid */}
    <motion.rect
      x="35"
      y="35"
      width="30"
      height="30"
      fill="none"
      stroke={isActive ? "#FFD000" : "#FF4E00"}
      strokeWidth="1.5"
      animate={isActive ? {
        strokeOpacity: [0.8, 1, 0.8],
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.line
      x1="35"
      y1="45"
      x2="65"
      y2="45"
      stroke={isActive ? "#FFD000" : "#FF4E00"}
      strokeWidth="1"
      strokeOpacity="0.6"
    />
    <motion.line
      x1="35"
      y1="55"
      x2="65"
      y2="55"
      stroke={isActive ? "#FFD000" : "#FF4E00"}
      strokeWidth="1"
      strokeOpacity="0.6"
    />
    <motion.line
      x1="45"
      y1="35"
      x2="45"
      y2="65"
      stroke={isActive ? "#FFD000" : "#FF4E00"}
      strokeWidth="1"
      strokeOpacity="0.6"
    />
    <motion.line
      x1="55"
      y1="35"
      x2="55"
      y2="65"
      stroke={isActive ? "#FFD000" : "#FF4E00"}
      strokeWidth="1"
      strokeOpacity="0.6"
    />
  </svg>
);

const Portfolio = () => {
  const location = useLocation();

  const records = [
    {
      title: 'Development',
      link: '/records/development',
      icon: DevelopmentIcon,
      color: 'from-rengoku-flame to-domain-violet',
      selectedColor: 'from-purple-500 to-pink-500',
      accentColor: '#7F00FF',
      glowColor: 'rgba(127, 0, 255, 0.3)',
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
      color: 'from-checkered-green to-domain-violet',
      selectedColor: 'from-checkered-green to-emerald-400',
      accentColor: '#00A676',
      glowColor: 'rgba(0, 166, 118, 0.3)',
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
      color: 'from-cursed-blue to-domain-violet',
      selectedColor: 'from-cursed-blue to-cyan-400',
      accentColor: '#3A86FF',
      glowColor: 'rgba(58, 134, 255, 0.3)',
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
      color: 'from-zenitsu-lightning to-rengoku-flame',
      selectedColor: 'from-orange-400 to-red-500',
      accentColor: '#FF4E00',
      glowColor: 'rgba(255, 78, 0, 0.3)',
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

  const handleTabClick = (record: typeof records[0]) => {
    setSelectedTab(record);
  };

  return (
    <section id="battle-records" className="min-h-[60vh] py-6 md:py-8 px-4 relative overflow-hidden">
      {/* Background Hexagonal Pattern - Domain Barrier */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <polygon
                points="50,0 100,25 100,75 50,100 0,75 0,25"
                fill="none"
                stroke="#7F00FF"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Title Section with Domain Expansion Effect */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-10 relative"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
          Battle Records
        </h2>
        <motion.div
          className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-zenitsu-lightning via-rengoku-flame to-domain-violet rounded-full"
          animate={{
            width: ['6rem', '8rem', '6rem'],
            boxShadow: [
              '0 0 10px rgba(255, 208, 0, 0.5)',
              '0 0 20px rgba(255, 78, 0, 0.5)',
              '0 0 10px rgba(127, 0, 255, 0.5)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Cursed Energy Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-domain-violet rounded-full"
            style={{
              left: `${50 + (i - 1) * 20}%`,
              top: '100%'
            }}
            animate={{
              y: [0, -30, 0],
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

      {/* Main Layout Container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Left Side - Category Selection with Domain Barriers */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              className="text-center mb-6 relative"
            >
              <h3 className="text-2xl font-bold text-snow-white mb-2 relative inline-block">
                Select Your Domain
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-domain-violet/20 to-transparent rounded-lg -z-10 blur-xl"
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
              <p className="text-ash-gray">Choose a category to explore my work</p>
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
                    scale: 1.02,
                    x: 10,
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
                  {/* Hexagonal Card Background */}
                  <div
                    className={`relative rounded-xl p-5 border-2 transition-all duration-500 overflow-hidden
                      ${isActive
                        ? `bg-gradient-to-br ${section.selectedColor} shadow-2xl border-white/40`
                        : 'bg-gradient-to-br from-ghost-black/90 to-deep-charcoal/90 border-white/10 hover:border-white/20'
                      }`}
                    style={isActive ? {
                      boxShadow: `0 0 30px ${section.glowColor}, 0 0 60px ${section.glowColor}15`
                    } : {}}
                  >
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

                    <div className="flex items-center space-x-4 relative z-10">
                      {/* Hexagonal Icon Container with Domain Barrier */}
                      <motion.div
                        className={`relative flex items-center justify-center w-16 h-16 rounded-lg transition-all duration-500 ${
                          isActive
                            ? 'bg-white/20 shadow-lg'
                            : 'bg-white/5'
                        }`}
                        animate={isActive ? {
                          boxShadow: [
                            `0 0 20px ${section.glowColor}`,
                            `0 0 30px ${section.glowColor}`,
                            `0 0 20px ${section.glowColor}`
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-12 h-12">
                          <IconComponent isActive={isActive} />
                        </div>

                        {/* Domain Expansion Ring */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-lg border-2"
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
                        )}
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-snow-white drop-shadow-lg' : 'text-snow-white'
                        }`}>
                          {section.title}
                        </h4>
                        <p className={`text-sm transition-colors duration-300 line-clamp-2 ${
                          isActive ? 'text-snow-white/90' : 'text-ash-gray group-hover:text-ash-gray/80'
                        }`}>
                          {section.description}
                        </p>
                      </div>

                      {/* Active Indicator with Cursed Energy */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{
                            scale: 1,
                            rotate: 0,
                          }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="relative"
                        >
                          <motion.div
                            className="w-4 h-4 bg-snow-white rounded-full shadow-lg"
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
                            className="absolute inset-0 rounded-full border-2 border-snow-white"
                            animate={{
                              scale: [1, 1.5, 1],
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
                        className="absolute top-3 right-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <span className="px-2 py-1 text-xs bg-cursed-blue text-snow-white rounded-full font-bold shadow-md">
                          Current
                        </span>
                      </motion.div>
                    )}

                    {/* Hexagonal Corner Accents */}
                    {isActive && (
                      <>
                        <motion.div
                          className="absolute top-0 left-0 w-6 h-6"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M0 0 L24 0 L12 12 Z" fill="white" fillOpacity="0.2" />
                          </svg>
                        </motion.div>
                        <motion.div
                          className="absolute bottom-0 right-0 w-6 h-6"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M24 24 L0 24 L12 12 Z" fill="white" fillOpacity="0.2" />
                          </svg>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Preview Card with Domain Expansion Aesthetics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-8"
          >
            <div className="text-center mb-6 relative">
              <h3 className="text-2xl font-bold text-snow-white mb-2 relative inline-block">
                Portfolio Summary
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-rengoku-flame/20 to-transparent rounded-lg -z-10 blur-xl"
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
              <p className="text-ash-gray">Get a comprehensive overview</p>
            </div>

            {/* Glass Morphism Preview Card with Domain Barrier */}
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
                {/* Hexagonal Corner Decorations */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                  {[
                    { top: -10, left: -10, rotate: 0 },
                    { top: -10, right: -10, rotate: 90 },
                    { bottom: -10, left: -10, rotate: -90 },
                    { bottom: -10, right: -10, rotate: 180 }
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12"
                      style={pos}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.3, scale: 1 }}
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
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Glass Background with Breathing Effect */}
                <motion.div
                  className="backdrop-blur-xl bg-white/10 border-2 shadow-2xl relative"
                  style={{
                    borderColor: selectedTab.accentColor + '40',
                    boxShadow: `0 0 40px ${selectedTab.glowColor}, 0 25px 50px -12px rgba(0, 0, 0, 0.25)`
                  }}
                  animate={{
                    borderRadius: ["1.5rem", "2rem", "1.5rem"],
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
                  <div className="p-8 relative z-20">

                    {/* Header Section with Animated Icon */}
                    <motion.div
                      className="text-center mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-24 h-24 rounded-2xl backdrop-blur-sm border-2 mb-4 relative"
                        style={{
                          background: `linear-gradient(135deg, ${selectedTab.accentColor}20, ${selectedTab.accentColor}10)`,
                          borderColor: selectedTab.accentColor + '60'
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 20px ${selectedTab.glowColor}`,
                            `0 0 40px ${selectedTab.glowColor}`,
                            `0 0 20px ${selectedTab.glowColor}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-16 h-16">
                          {(() => {
                            const IconComponent = selectedTab.icon;
                            return <IconComponent isActive={true} />;
                          })()}
                        </div>

                        {/* Rotating Domain Expansion Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            border: `2px solid ${selectedTab.accentColor}`,
                            opacity: 0.3
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0, 0.3],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>

                      <h4 className="text-3xl md:text-4xl font-bold text-snow-white drop-shadow-lg mb-3">
                        {selectedTab.title}
                      </h4>

                      <motion.div
                        className="w-20 h-1 rounded-full mx-auto relative"
                        style={{
                          background: `linear-gradient(to right, ${selectedTab.accentColor}, ${selectedTab.accentColor}80)`
                        }}
                        animate={{
                          width: ["5rem", "7rem", "5rem"],
                          boxShadow: [
                            `0 0 10px ${selectedTab.glowColor}`,
                            `0 0 20px ${selectedTab.glowColor}`,
                            `0 0 10px ${selectedTab.glowColor}`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Stats Grid with Cursed Energy Glow */}
                    <motion.div
                      className="grid grid-cols-3 gap-4 mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {Object.entries(selectedTab.stats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          className="text-center p-4 rounded-xl backdrop-blur-sm border relative overflow-hidden"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderColor: selectedTab.accentColor + '30'
                          }}
                          whileHover={{
                            scale: 1.05,
                            borderColor: selectedTab.accentColor + '60'
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }}
                        >
                          {/* Breathing Pattern Background */}
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
                            className="text-2xl font-bold mb-1 relative z-10"
                            style={{ color: selectedTab.accentColor }}
                            animate={{
                              textShadow: [
                                `0 0 10px ${selectedTab.glowColor}`,
                                `0 0 20px ${selectedTab.glowColor}`,
                                `0 0 10px ${selectedTab.glowColor}`
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
                          <div className="text-xs text-ash-gray capitalize relative z-10">{key}</div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Highlights Section with Hexagonal Bullets */}
                    <motion.div
                      className="mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h5 className="text-lg font-semibold text-snow-white mb-4 text-center flex items-center justify-center gap-2">
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
                      <div className="grid grid-cols-2 gap-3">
                        {selectedTab.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-2 p-3 rounded-lg backdrop-blur-sm border relative overflow-hidden group"
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              borderColor: selectedTab.accentColor + '20'
                            }}
                            whileHover={{
                              x: 5,
                              borderColor: selectedTab.accentColor + '50',
                              background: 'rgba(255, 255, 255, 0.08)'
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25
                            }}
                          >
                            {/* Hexagonal Bullet */}
                            <motion.div
                              className="flex-shrink-0 w-5 h-5"
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
                              </svg>
                            </motion.div>
                            <span className="text-sm text-snow-white/90 relative z-10">{highlight}</span>

                            {/* Hover Glow Effect */}
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

                    {/* Description */}
                    <motion.div
                      className="mb-8 relative"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-snow-white/80 leading-relaxed text-center relative z-10">
                        {selectedTab.preview}
                      </p>
                    </motion.div>

                    {/* Action Button with Domain Expansion Effect */}
                    <motion.div
                      className="text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Link
                        to={selectedTab.link}
                        className="inline-flex items-center px-8 py-4 font-bold rounded-2xl shadow-xl backdrop-blur-sm border-2 transition-all duration-300 relative overflow-hidden group"
                        style={{
                          background: `linear-gradient(135deg, ${selectedTab.accentColor}, ${selectedTab.accentColor}dd)`,
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        {/* Button Glow Effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent)`
                          }}
                        />

                        <span className="text-deep-charcoal relative z-10">Explore {selectedTab.title}</span>

                        <motion.svg
                          className="ml-3 w-5 h-5 text-deep-charcoal relative z-10"
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

                        {/* Domain Expansion Ring on Hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-white opacity-0 group-hover:opacity-100"
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
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Decorative Cursed Energy Orbs */}
                <motion.div
                  className="absolute top-4 right-4 w-24 h-24 rounded-full blur-2xl pointer-events-none"
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
                  className="absolute bottom-4 left-4 w-20 h-20 rounded-full blur-2xl pointer-events-none"
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
