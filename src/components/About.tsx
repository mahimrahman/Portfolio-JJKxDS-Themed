import React from 'react';
import { motion } from 'framer-motion';

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

const AboutBase: React.FC = () =>
  <section className="min-h-[80vh] py-8 md:py-12 px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-10 [content-visibility:auto]">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
          The Path of the Slayer
        </h2>
        <span className="block w-20 md:w-24 h-1 mx-auto bg-zenitsu-lightning rounded-full animate-pulse" />
      </motion.div>
      
      {/* Bento Grid Layout - Responsive design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-auto lg:h-[600px]">
        {/* Left Column - Large Text Card (50% width on desktop, full width on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="h-auto lg:h-full mb-6 lg:mb-0 transform-gpu"
        >
          <div className="min-h-[300px] lg:h-full bg-gradient-to-br from-snow-white/10 to-snow-white/5 backdrop-blur-xl backdrop-saturate-150 rounded-3xl border border-snow-white/20/80 shadow-2xl shadow-black/20 p-6 md:p-8 lg:p-10 flex flex-col justify-center group hover:shadow-3xl hover:shadow-snow-white/10 transition-all duration-500 [will-change:transform]">
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg lg:text-xl text-snow-white leading-relaxed">
                Software Engineering graduate with a strong foundation in IT solutions, project management, and data analysis. Eager to apply academic knowledge to real-world challenges, focusing on delivering quality software and optimizing processes. Passionate about continuous learning, teamwork, and contributing to impactful projects.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-snow-white leading-relaxed">
                Experienced in web development, UI/UX design, and digital communications. Adept at collaborating with teams to deliver impactful results and drive engagement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Bento Grid (50% width on desktop, full width on mobile) */}
        <div className="h-auto lg:h-full">
          {/* Bento Grid - Responsive 2x2 Layout */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 h-auto lg:h-full">
            {/* Top Left Card */}
            <motion.div 
              className="min-h-[140px] md:min-h-[160px] lg:h-auto bg-gradient-to-br from-checkered-green/80 to-domain-violet/30 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-transform duration-300 cursor-pointer p-3 md:p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-checkered-green/20 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 transform-gpu motion-reduce:transform-none motion-reduce:transition-none [will-change:transform]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                <div className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8">
                    {aboutCards[0].icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-snow-white font-bold text-xs md:text-sm">Web Development</h3>
                  <p className="text-zenitsu-lightning text-xs">React, TypeScript, HTML, CSS, Node.js</p>
                </div>
              </div>
            </motion.div>
            
            {/* Top Right Card */}
            <motion.div 
              className="min-h-[140px] md:min-h-[160px] lg:h-auto bg-gradient-to-br from-zenitsu-lightning/50 to-rengoku-flame/50 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-transform duration-300 cursor-pointer p-3 md:p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-zenitsu-lightning/20 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 transform-gpu motion-reduce:transform-none motion-reduce:transition-none [will-change:transform]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                <div className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8">
                    {aboutCards[1].icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-snow-white font-bold text-xs md:text-sm">UI/UX & Graphic Design</h3>
                  <p className="text-zenitsu-lightning text-xs">Figma, Adobe Suite, Canva, Branding</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div 
              className="min-h-[140px] md:min-h-[160px] lg:h-auto bg-gradient-to-br from-cursed-blue/30 to-domain-violet/80 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-transform duration-300 cursor-pointer p-3 md:p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-cursed-blue/20 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 transform-gpu motion-reduce:transform-none motion-reduce:transition-none [will-change:transform]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                <div className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8">
                    {aboutCards[2].icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-snow-white font-bold text-xs md:text-sm">Data Analysis</h3>
                  <p className="text-zenitsu-lightning text-xs">Python, Power BI, Pandas, SQL</p>
                </div>
              </div>
            </motion.div>
            
            {/* Bottom Right Card */}
            <motion.div 
              className="min-h-[140px] md:min-h-[160px] lg:h-auto bg-gradient-to-br from-rengoku-flame/80 to-zenitsu-lightning/40 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-transform duration-300 cursor-pointer p-3 md:p-4 flex flex-col justify-center group hover:shadow-xl hover:shadow-rengoku-flame/20 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 transform-gpu motion-reduce:transform-none motion-reduce:transition-none [will-change:transform]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                <div className="text-zenitsu-lightning group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8">
                    {aboutCards[3].icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-snow-white font-bold text-xs md:text-sm">Project Management</h3>
                  <p className="text-zenitsu-lightning text-xs">Agile, Scrum, Jira, Trello</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>;

const About = React.memo(AboutBase);

export default About; 