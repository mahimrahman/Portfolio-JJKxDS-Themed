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

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-domain-violet/2 via-deep-charcoal to-deep-charcoal pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Origin Scroll
          </h2>
          <div className="w-24 h-1 bg-zenitsu-lightning mx-auto mb-8" />
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
              As a modern-day digital sorcerer, I wield the power of code and design to create immersive web experiences. 
              My journey began in the realm of front-end development, where I mastered the art of breathing life into pixels.
            </p>
            <p className="text-lg text-snow-white leading-relaxed">
              Like a Hashira of the digital world, I combine technical prowess with creative vision to craft solutions 
              that not only function flawlessly but also enchant users with their aesthetic appeal.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`bg-gradient-to-r ${card.color} p-6 rounded-lg border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300 cursor-pointer`}
              >
                <Link to={card.link} className="flex items-center gap-4">
                  <span className="text-3xl">{card.icon}</span>
                  <div>
                    <h3 className="text-snow-white font-bold text-lg">{card.title}</h3>
                    <p className="text-zenitsu-lightning text-base">{card.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 