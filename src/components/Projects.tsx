import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Demon Slayer UI Kit',
      description: 'A comprehensive UI component library inspired by the Demon Slayer universe.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://placehold.co/600x400/121212/FFD000',
      color: 'from-rengoku-flame to-domain-violet',
      link: '#',
    },
    {
      title: 'Cursed Technique Simulator',
      description: 'Interactive web application showcasing various cursed techniques with particle effects.',
      tech: ['Three.js', 'WebGL', 'React'],
      image: 'https://placehold.co/600x400/121212/3A86FF',
      color: 'from-cursed-blue to-domain-violet',
      link: '#',
    },
    {
      title: 'Hashira Training Ground',
      description: 'Virtual training environment for practicing coding challenges with anime themes.',
      tech: ['TypeScript', 'Node.js', 'MongoDB'],
      image: 'https://placehold.co/600x400/121212/00A676',
      color: 'from-checkered-green to-zenitsu-lightning',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
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
            Cursed Techniques
          </h2>
          <div className="w-24 h-1 bg-zenitsu-lightning mx-auto mb-8" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`block bg-gradient-to-b ${project.color} rounded-lg overflow-hidden border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-all duration-300 hover:shadow-lg hover:shadow-zenitsu-lightning/20`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-snow-white mb-2">{project.title}</h3>
                <p className="text-ash-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-ghost-black/50 text-zenitsu-lightning rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
