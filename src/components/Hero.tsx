import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Video/Image background with aspect ratio preserved */}
      <div className="absolute inset-0 flex items-center justify-center z-0 w-full h-full">
        {/* Responsive video: desktop uses /Hero_large.mp4, mac uses /hero_mac.mp4, mobile uses /hero_mobile.mp4 */}
        <div className="w-full h-full aspect-[16/9] bg-black mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover max-w-full max-h-full opacity-40"
            poster="/Hero.png"
          >
            <source src="/hero_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
            <source src="/hero_mac.mp4" type="video/mp4" media="(min-width: 769px) and (max-width: 1439px)" />
            <source src="/Hero_large.mp4" type="video/mp4" media="(min-width: 1440px)" />
            <source src="/Hero.mp4" type="video/mp4" />
            <img
              src="/Hero.png"
              alt="Hero background"
              className="w-full h-full object-cover opacity-80"
            />
          </video>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 flex flex-col items-center justify-center z-20">
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
            Software Engineering Graduate | Web Developer & Designer | UI/UX Designer
          </motion.p>
          <motion.p className="text-md md:text-lg text-ash-gray mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
             
          </motion.p>
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating Dock Container */}
            <div className="relative">
              {/* Background Blur Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-snow-white/10 to-snow-white/5 backdrop-blur-xl rounded-2xl border border-snow-white/20 shadow-2xl shadow-black/20"></div>
               */}
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cursed-blue/20 via-domain-violet/20 to-rengoku-flame/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Dock Content */}
              <div className="relative px-6 py-4">
                <div className="flex items-center justify-center gap-6">
                  {/* Email Button */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ghost-black/90 text-snow-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-snow-white/20">
                      Email Me
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ghost-black/90"></div>
                    </div>
                    
                    {/* Button */}
                    <motion.a
                      href="mailto:mahimrk.a@gmail.com"
                      className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-rengoku-flame/80 to-domain-violet/80 text-snow-white shadow-lg shadow-rengoku-flame/30 hover:shadow-rengoku-flame/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-rengoku-flame/40"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-rengoku-flame/40 to-domain-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </motion.a>
                  </motion.div>

                  {/* LinkedIn Button */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ghost-black/90 text-snow-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-snow-white/20">
                      LinkedIn
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ghost-black/90"></div>
                    </div>
                    
                    {/* Button */}
                    <motion.a
                      href="https://www.linkedin.com/in/mahimur-rahman-khan-50a553183/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-zenitsu-lightning/80 to-zenitsu-lightning/60 text-snow-white shadow-lg shadow-zenitsu-lightning/30 hover:shadow-zenitsu-lightning/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zenitsu-lightning/40"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-zenitsu-lightning/40 to-zenitsu-lightning/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </motion.a>
                  </motion.div>

                  {/* Behance Button */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ghost-black/90 text-snow-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-snow-white/20">
                      Behance
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ghost-black/90"></div>
                    </div>
                    
                    {/* Button */}
                    <motion.a
                      href="https://www.behance.net/mahimrk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-domain-violet/80 to-domain-violet/60 text-snow-white shadow-lg shadow-domain-violet/30 hover:shadow-domain-violet/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-domain-violet/40"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 7h-7V5h7v2zm1.794 12.808c-.456 1.275-1.71 2.301-3.456 2.301-2.338 0-4.338-1.653-4.338-4.138 0-2.485 2-4.138 4.338-4.138 1.745 0 3 1.026 3.456 2.301l3.456-1.71C25.245 14.026 22.745 12 19.794 12c-3.456 0-6.338 2.485-6.338 6.138 0 3.653 2.882 6.138 6.338 6.138 2.951 0 5.451-2.026 6.338-4.138l-3.456-1.71zM9 5H2v2h5v2H2v2h5v2H2v2h5v2H2v2h7V5H9z"/>
                      </svg>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-domain-violet/40 to-domain-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </motion.a>
                  </motion.div>

                  {/* GitHub Button */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ghost-black/90 text-snow-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-snow-white/20">
                      GitHub
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ghost-black/90"></div>
                    </div>
                    
                    {/* Button */}
                    <motion.a
                      href="https://github.com/mahimrk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cursed-blue/80 to-cursed-blue/60 text-snow-white shadow-lg shadow-cursed-blue/30 hover:shadow-cursed-blue/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cursed-blue/40"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cursed-blue/40 to-cursed-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </motion.a>
                  </motion.div>

                  {/* Instagram Button */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ghost-black/90 text-snow-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-snow-white/20">
                      Instagram
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ghost-black/90"></div>
                    </div>
                    
                    {/* Button */}
                    <motion.a
                      href="https://instagram.com/mahimrk.agm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-rengoku-flame/80 to-rengoku-flame/60 text-snow-white shadow-lg shadow-rengoku-flame/30 hover:shadow-rengoku-flame/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-rengoku-flame/40"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-rengoku-flame/40 to-rengoku-flame/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Particles Background */}
            <div className="absolute inset-0 -z-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cursed-blue/40 to-domain-violet/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
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
