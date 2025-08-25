import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const aboutCards = [
  {
    title: 'Development',
    subtitle: 'Code Sorcery',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-checkered-green to-domain-violet',
    link: '/development',
  },
  {
    title: 'UI/UX',
    subtitle: 'User Alchemy',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-zenitsu-lightning to-rengoku-flame',
    link: '/uiux',
  },
  {
    title: 'Photography',
    subtitle: 'Lens Chronicles',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-rengoku-flame to-domain-violet',
    link: '/photography',
  },
  {
    title: 'Graphic Design',
    subtitle: 'Visual Symmetry',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    color: 'from-cursed-blue to-domain-violet',
    link: '/design',
  },
];

const About: React.FC = () =>
  <section className="min-h-[80vh] py-12 px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
          The Path of the Slayer
        </h2>
        <span className="block w-24 h-1 mx-auto mb-8 bg-zenitsu-lightning rounded-full animate-pulse" />
      </motion.div>
      
      {/* Bento Grid Layout - 50-50 proportions with enhanced animations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px] items-start">
        {/* Left Column - Text Section (50% width) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <motion.div 
            className="h-full bg-gradient-to-br from-snow-white/10 to-snow-white/5 backdrop-blur-xl rounded-3xl border border-snow-white/20 shadow-2xl shadow-black/20 p-10 flex flex-col justify-center"
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.6
            }}
          >
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-xl text-snow-white leading-relaxed break-words whitespace-normal min-w-0"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                Software Engineering graduate with a strong foundation in IT solutions, project management, and data analysis. Eager to apply academic knowledge to real-world challenges, focusing on delivering quality software and optimizing processes. Passionate about continuous learning, teamwork, and contributing to impactful projects.
              </motion.p>
              <motion.p 
                className="text-xl text-snow-white leading-relaxed break-words whitespace-normal min-w-0"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                Experienced in web development, UI/UX design, and digital communications. Adept at collaborating with teams to deliver impactful results and drive engagement.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - 4 Square Cards in 2x2 Grid (50% width) */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 h-full"
        >
          {/* Top Row - 2 Square Cards */}
          <div className="space-y-4">
            <motion.div 
              className="aspect-square bg-gradient-to-br from-checkered-green/20 to-domain-violet/20 backdrop-blur-xl rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-all duration-300 cursor-pointer p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-checkered-green/20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateY: 5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring", 
                stiffness: 400, 
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex flex-col items-center text-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {aboutCards[0].icon}
                </motion.div>
                <div>
                  <h3 className="text-snow-white font-bold text-sm">Web Development</h3>
                  <p className="text-zenitsu-lightning text-xs break-words whitespace-normal min-w-0">React, TypeScript, HTML, CSS, Node.js</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="aspect-square bg-gradient-to-br from-zenitsu-lightning/20 to-rengoku-flame/20 backdrop-blur-xl rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-all duration-300 cursor-pointer p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-zenitsu-lightning/20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateY: -5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring", 
                stiffness: 400, 
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex flex-col items-center text-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {aboutCards[1].icon}
                </motion.div>
                <div>
                  <h3 className="text-snow-white font-bold text-sm">UI/UX & Graphic Design</h3>
                  <p className="text-zenitsu-lightning text-xs break-words whitespace-normal min-w-0">Figma, Adobe Suite, Canva, Branding</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Row - 2 Square Cards */}
          <div className="space-y-4">
            <motion.div 
              className="aspect-square bg-gradient-to-br from-cursed-blue/20 to-domain-violet/20 backdrop-blur-xl rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-all duration-300 cursor-pointer p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-cursed-blue/20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateY: 5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring", 
                stiffness: 400, 
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex flex-col items-center text-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {aboutCards[2].icon}
                </motion.div>
                <div>
                  <h3 className="text-snow-white font-bold text-sm">Data Analysis</h3>
                  <p className="text-zenitsu-lightning text-xs break-words whitespace-normal min-w-0">Python, Power BI, Pandas, SQL</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="aspect-square bg-gradient-to-br from-rengoku-flame/20 to-zenitsu-lightning/20 backdrop-blur-xl rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-all duration-300 cursor-pointer p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-rengoku-flame/20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateY: -5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring", 
                stiffness: 400, 
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex flex-col items-center text-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {aboutCards[3].icon}
                </motion.div>
                <div>
                  <h3 className="text-snow-white font-bold text-sm">Project Management</h3>
                  <p className="text-zenitsu-lightning text-xs break-words whitespace-normal min-w-0">Agile, Scrum, Jira, Trello</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;

export default About; 