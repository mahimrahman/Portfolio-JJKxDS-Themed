import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative w-screen h-screen min-h-screen min-w-full flex items-center justify-center overflow-hidden">
      {/* Video/Image background with aspect ratio preserved */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 bg-black">
        {/* Responsive video: desktop uses /Hero.mp4, mobile uses /hero_mobile.mp4 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain max-w-full max-h-full"
          style={{ background: 'black' }}
          poster="/Hero.png"
        >
          <source src="/hero_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/Hero.mp4" type="video/mp4" media="(min-width: 769px)" />
          <img
            src="/Hero.png"
            alt="Hero background"
            className="w-full h-full object-contain"
          />
        </video>
        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 w-full h-full bg-black/60 z-10 pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Domain Entrance
          <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
              MAHIMUR RAHMAN KHAN
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-snow-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Engineering Graduate | Web Developer & Designer
          </motion.p>
          <motion.p className="text-md md:text-lg text-ash-gray mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
             
          </motion.p>
         
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="mailto:mahimrk.a@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-md bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-semibold hover:shadow-lg hover:shadow-rengoku-flame/20 transition-all duration-300"
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mahimrk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-md border-2 border-zenitsu-lightning text-snow-white font-semibold hover:bg-zenitsu-lightning/10 transition-all duration-300"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://www.behance.net/mahimrk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-md border-2 border-domain-violet text-snow-white font-semibold hover:bg-domain-violet/10 transition-all duration-300"
            >
              Behance
            </motion.a>
            <motion.a
              href="https://github.com/mahimrk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-md border-2 border-cursed-blue text-snow-white font-semibold hover:bg-cursed-blue/10 transition-all duration-300"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://instagram.com/mahimrk.agm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-md border-2 border-rengoku-flame text-snow-white font-semibold hover:bg-rengoku-flame/10 transition-all duration-300"
            >
              Instagram
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative emojis */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-16 h-16 text-rengoku-flame opacity-30 z-10"
      >
        ⚔️
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-16 h-16 text-cursed-blue opacity-30 z-10"
      >
        🗡️
      </motion.div>
    </div>
  );
};

export default Hero;
