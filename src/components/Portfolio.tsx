import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const location = useLocation();
  const records = [
    { title: 'Development', link: '/records/development', icon: '💻', color: 'from-checkered-green to-domain-violet' },
    { title: 'Graphic Design', link: '/records/graphic-design', icon: '🎨', color: 'from-rengoku-flame to-domain-violet' },
    { title: 'Photography', link: '/records/photography', icon: '📸', color: 'from-cursed-blue to-domain-violet' },
    { title: 'UI/UX Design', link: '/records/uiux', icon: '🧠', color: 'from-zenitsu-lightning to-rengoku-flame' },
  ];

  return (
    <section id="battle-records" className="min-h-[80vh] py-12 px-4 bg-deep-charcoal relative overflow-hidden">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {records.map((section, idx) => {
          const isActive = location.pathname === section.link;
          return (
            <motion.div
              key={section.title}
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px 8px #FFD00055' }}
              whileTap={{ scale: 0.98 }}
              className={`relative group bg-gradient-to-r ${section.color} rounded-2xl p-10 flex flex-col items-center justify-center shadow-lg border-4 transition-all duration-300 cursor-pointer
                ${isActive ? 'border-zenitsu-lightning shadow-2xl' : 'border-zenitsu-lightning/20 hover:border-zenitsu-lightning/60'}`}
            >
              <Link to={section.link} className="flex flex-col items-center w-full h-full">
                <span className="text-5xl md:text-6xl mb-4 drop-shadow-lg">{section.icon}</span>
                <span className="text-2xl md:text-3xl font-bold text-snow-white drop-shadow-lg text-center">
                  {section.title}
                </span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-zenitsu-lightning rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </Link>
              {isActive && (
                <span className="absolute top-2 right-2 px-3 py-1 text-xs bg-zenitsu-lightning text-deep-charcoal rounded-full font-bold shadow-md animate-pulse">Current</span>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio; 