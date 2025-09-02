import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const location = useLocation();
  
  const records = [
    { 
      title: 'Development', 
      link: '/records/development', 
      icon: '⚡', 
      color: 'from-checkered-green to-domain-violet',
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
      icon: '🎯', 
      color: 'from-rengoku-flame to-domain-violet',
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
      icon: '📷', 
      color: 'from-cursed-blue to-domain-violet',
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
      icon: '🎨', 
      color: 'from-zenitsu-lightning to-rengoku-flame',
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
    // Set initial selected tab based on current location
    const currentRecord = records.find(record => record.link === location.pathname);
    return currentRecord || records[0];
  });

  const handleTabClick = (record: typeof records[0]) => {
    setSelectedTab(record);
  };

  return (
    <section id="battle-records" className="min-h-[80vh] py-12 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
          Battle Records
        </h2>
        <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />
      </motion.div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - 1x4 Tab Layout */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h3 className="text-2xl font-bold text-snow-white mb-2">Select Your Domain</h3>
              <p className="text-ash-gray">Choose a category to explore my work</p>
            </motion.div>

            {records.map((section, idx) => {
              const isActive = selectedTab.title === section.title;
              const isCurrentRoute = location.pathname === section.link;
              
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative group cursor-pointer transition-all duration-300 ease-in-out
                    ${isActive 
                      ? 'bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame shadow-2xl shadow-zenitsu-lightning/30' 
                      : 'bg-gradient-to-r from-ghost-black/80 to-deep-charcoal/80 hover:bg-gradient-to-r hover:from-ghost-black hover:to-deep-charcoal'
                    } rounded-xl p-4 border-2 ${
                      isActive 
                        ? 'border-zenitsu-lightning' 
                        : 'border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40'
                    }`}
                  onClick={() => handleTabClick(section)}
                >
                  <div className="flex items-center space-x-4">
                    {/* Professional Icon */}
                    <div className={`relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-deep-charcoal/20 shadow-lg' 
                        : 'bg-zenitsu-lightning/10 group-hover:bg-zenitsu-lightning/20'
                    }`}>
                      <span className={`text-2xl transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        {section.icon}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-left">
                      <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isActive ? 'text-deep-charcoal' : 'text-snow-white group-hover:text-zenitsu-lightning'
                      }`}>
                        {section.title}
                      </h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        isActive ? 'text-deep-charcoal/80' : 'text-ash-gray group-hover:text-ash-gray/80'
                      }`}>
                        {section.description}
                      </p>
                    </div>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-deep-charcoal rounded-full shadow-lg"
                      />
                    )}
                  </div>
                  
                  {/* Route Indicator */}
                  {isCurrentRoute && !isActive && (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 text-xs bg-domain-violet text-snow-white rounded-full font-bold shadow-md">
                        Current
                      </span>
                    </div>
                  )}
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                    isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-10'
                  } bg-zenitsu-lightning`} />
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Glass Morphism Preview Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-snow-white mb-2">Portfolio Summary</h3>
              <p className="text-ash-gray">Get a comprehensive overview</p>
            </div>

            {/* Glass Morphism Preview Card */}
            <motion.div
              key={selectedTab.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Glass Background */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
                <div className="p-8">
                  
                  {/* Header Section */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-zenitsu-lightning/20 to-rengoku-flame/20 mb-4 backdrop-blur-sm border border-white/30">
                      <span className="text-4xl">{selectedTab.icon}</span>
                    </div>
                    <h4 className="text-3xl md:text-4xl font-bold text-snow-white drop-shadow-lg mb-2">
                      {selectedTab.title}
                    </h4>
                    <div className="w-20 h-1 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame rounded-full mx-auto" />
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(selectedTab.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-2xl font-bold text-zenitsu-lightning mb-1">{value}</div>
                        <div className="text-xs text-ash-gray capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Highlights Section */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-snow-white mb-4 text-center">Key Highlights</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedTab.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                          <div className="w-2 h-2 bg-zenitsu-lightning rounded-full" />
                          <span className="text-sm text-snow-white/90">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-snow-white/80 leading-relaxed text-center">
                      {selectedTab.preview}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="text-center">
                    <Link 
                      to={selectedTab.link}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame text-deep-charcoal font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
                    >
                      <span>Explore {selectedTab.title}</span>
                      <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-zenitsu-lightning/10 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-rengoku-flame/10 to-transparent rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 