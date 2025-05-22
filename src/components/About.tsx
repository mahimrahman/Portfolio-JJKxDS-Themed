import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const aboutCards = [
  {
    title: 'Development',
    subtitle: 'Code Sorcery',
    icon: '💻',
    color: 'from-checkered-green to-domain-violet',
    link: '/development',
  },
  {
    title: 'UI/UX',
    subtitle: 'User Alchemy',
    icon: '🧠',
    color: 'from-zenitsu-lightning to-rengoku-flame',
    link: '/uiux',
  },
  {
    title: 'Photography',
    subtitle: 'Lens Chronicles',
    icon: '📸',
    color: 'from-rengoku-flame to-domain-violet',
    link: '/photography',
  },
  {
    title: 'Graphic Design',
    subtitle: 'Visual Symmetry',
    icon: '🎨',
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
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-snow-white leading-relaxed">
            Software Engineering graduate with a strong foundation in IT solutions, project management, and data analysis. Eager to apply academic knowledge to real-world challenges, focusing on delivering quality software and optimizing processes. Passionate about continuous learning, teamwork, and contributing to impactful projects.
          </p>
          <p className="text-lg text-snow-white leading-relaxed">
            Experienced in web development, UI/UX design, and digital communications. Adept at collaborating with teams to deliver impactful results and drive engagement.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          <motion.div className="bg-gradient-to-r from-checkered-green to-domain-violet p-6 rounded-lg border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="text-snow-white font-bold text-lg">Web Development</h3>
                <p className="text-zenitsu-lightning text-base">React, TypeScript, HTML, CSS, Node.js</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame p-6 rounded-lg border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🧠</span>
              <div>
                <h3 className="text-snow-white font-bold text-lg">UI/UX & Graphic Design</h3>
                <p className="text-zenitsu-lightning text-base">Figma, Adobe Suite, Canva, Branding</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-gradient-to-r from-cursed-blue to-domain-violet p-6 rounded-lg border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📊</span>
              <div>
                <h3 className="text-snow-white font-bold text-lg">Data Analysis</h3>
                <p className="text-zenitsu-lightning text-base">Python, Power BI, Pandas, SQL</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-gradient-to-r from-rengoku-flame to-zenitsu-lightning p-6 rounded-lg border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🗂️</span>
              <div>
                <h3 className="text-snow-white font-bold text-lg">Project Management</h3>
                <p className="text-zenitsu-lightning text-base">Agile, Scrum, Jira, Trello</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>;

export default About; 