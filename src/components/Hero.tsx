import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-deep-charcoal">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-domain-violet/5 via-deep-charcoal to-deep-charcoal" />
        <div className="absolute inset-0 grid-pattern" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
              Cursed Blades
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-snow-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend Developer & UI/UX Designer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white hover:shadow-lg hover:shadow-rengoku-flame/20 transition-all duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md border-2 border-zenitsu-lightning text-snow-white hover:bg-zenitsu-lightning/10 transition-all duration-300"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 text-rengoku-flame opacity-30"
      >
        ⚔️
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-16 h-16 text-cursed-blue opacity-30"
      >
        🗡️
      </motion.div>
    </div>
  );
};

export default Hero; 