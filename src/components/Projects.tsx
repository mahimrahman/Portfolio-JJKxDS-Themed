import React from 'react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
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
            Cursed Realms
          </h2>
          <span className="block w-24 h-1 mx-auto mb-8 bg-zenitsu-lightning rounded-full animate-pulse" />
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

const blogPosts = [
  {
    title: 'How I Slayed My First Project',
    excerpt: 'A journey through my first big project, the challenges, and the victories along the way.',
  },
  {
    title: 'Lessons from the Code Battlefield',
    excerpt: 'Reflections on debugging, teamwork, and the art of never giving up.',
  },
  {
    title: 'Anime & Engineering: My Inspirations',
    excerpt: 'How anime themes and characters inspire my approach to software engineering.',
  },
];

const Blog: React.FC = () => (
  <section id="blog" className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
    {/* No section background gradient */}
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
          Blog of the Slayer
        </h2>
        <span className="block w-24 h-1 mx-auto mb-8 bg-zenitsu-lightning rounded-full animate-pulse" />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.title}
            className="bg-gradient-to-br from-checkered-green to-ghost-black rounded-2xl shadow-xl p-8 flex flex-col justify-between text-snow-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="mb-4 text-ash-gray">{post.excerpt}</p>
            </div>
            <button className="mt-auto px-6 py-2 rounded-3xl bg-gradient-to-r from-checkered-green to-zenitsu-lightning text-deep-charcoal font-bold shadow hover:opacity-90 transition-all duration-200">
              Read more
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
