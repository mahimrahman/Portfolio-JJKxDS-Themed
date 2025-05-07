import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Sorcerer',
      company: 'Digital Demon Slayers Corp',
      period: '2022 - Present',
      description: 'Leading the development of cursed web applications and training junior sorcerers in the art of modern web development.',
      skills: ['React', 'TypeScript', 'Three.js', 'WebGL'],
      color: 'from-rengoku-flame to-domain-violet',
    },
    {
      title: 'UI/UX Hashira',
      company: 'Creative Curses Studio',
      period: '2020 - 2022',
      description: 'Crafted immersive user experiences and designed cursed interfaces that captivated users across multiple realms.',
      skills: ['Figma', 'UI Design', 'Animation', 'User Research'],
      color: 'from-cursed-blue to-domain-violet',
    },
    {
      title: 'Junior Code Sorcerer',
      company: 'Tech Temple Academy',
      period: '2018 - 2020',
      description: 'Mastered the fundamentals of web development and began my journey in the digital realm.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'from-checkered-green to-zenitsu-lightning',
    },
  ];

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
            Training Scroll
          </h2>
          <div className="w-24 h-1 bg-zenitsu-lightning mx-auto mb-8" />
        </motion.div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rengoku-flame to-domain-violet" />
              <div className={`ml-8 bg-gradient-to-r ${exp.color} p-6 rounded-lg border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-snow-white">{exp.title}</h3>
                    <p className="text-ash-gray">{exp.company}</p>
                  </div>
                  <span className="text-zenitsu-lightning/80 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-snow-white mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-ghost-black/50 text-zenitsu-lightning rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 