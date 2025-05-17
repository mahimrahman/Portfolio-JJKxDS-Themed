import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    category: 'Journey',
  },
  {
    title: 'Lessons from the Code Battlefield',
    excerpt: 'Reflections on debugging, teamwork, and the art of never giving up.',
    category: 'Lessons',
  },
  {
    title: 'Anime & Engineering: My Inspirations',
    excerpt: 'How anime themes and characters inspire my approach to software engineering.',
    category: 'Inspiration',
  },
  {
    title: 'The Art of Clean Code',
    excerpt: 'Why writing clean code is like mastering a sword technique.',
    category: 'Craft',
  },
  {
    title: 'React vs. Vue: A Duel',
    excerpt: 'Comparing two frontend frameworks in a battle of features and style.',
    category: 'Tech',
  },
  {
    title: 'Debugging: The Demon Within',
    excerpt: 'How to face and conquer the toughest bugs in your code.',
    category: 'Lessons',
  },
];

const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showRows, setShowRows] = useState(1);
  const [columns, setColumns] = useState(1);

  // Responsive columns calculation
  useEffect(() => {
    const calcCols = () => {
      if (window.innerWidth >= 1024) setColumns(3);
      else if (window.innerWidth >= 640) setColumns(2);
      else setColumns(1);
    };
    calcCols();
    window.addEventListener('resize', calcCols);
    return () => window.removeEventListener('resize', calcCols);
  }, []);

  // Determine how many posts to show per 'Show More' click
  const isMobile = columns === 1;
  const postsPerShow = isMobile ? 3 : columns;
  const showCount = postsPerShow * showRows;
  const filtered = blogPosts.filter(
    (post) => activeCategory === 'All' || post.category === activeCategory
  );
  const shown = filtered.slice(0, showCount);

  // When switching between mobile/desktop, reset showRows so user doesn't see too many/few posts
  useEffect(() => {
    setShowRows(1);
  }, [columns, activeCategory]);

  return (
    <section id="blog" className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
      {/* Hero/Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Blog of the Slayer
          </h2>
          <p className="text-lg md:text-xl text-ash-gray mb-4">Insights, stories, and lessons from my journey</p>
        </motion.div>
        {/* Hero Illustration (placeholder) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-checkered-green to-ghost-black flex items-center justify-center shadow-2xl border-4 border-domain-violet mb-2"
        >
          <span className="text-6xl md:text-7xl">⚔️</span>
        </motion.div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setShowRows(1); }}
            className={`px-5 py-2 rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 text-base
              ${activeCategory === cat
                ? 'bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white shadow-lg'
                : 'bg-ghost-black/60 text-zenitsu-lightning hover:bg-zenitsu-lightning/10'}`}
            tabIndex={0}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {shown.map((post, idx) => (
            <motion.div
              key={post.title}
              className="bg-gradient-to-br from-checkered-green to-ghost-black rounded-2xl shadow-xl p-8 flex flex-col justify-between text-snow-white hover:scale-[1.03] transition-transform duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex flex-col gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-zenitsu-lightning to-checkered-green text-deep-charcoal text-xs font-bold mb-2 w-fit mx-auto">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-1 text-center">{post.title}</h3>
                <p className="mb-2 text-ash-gray text-center">{post.excerpt}</p>
              </div>
              <button className="mt-auto px-6 py-2 rounded-3xl bg-gradient-to-r from-checkered-green to-zenitsu-lightning text-deep-charcoal font-bold shadow hover:opacity-90 transition-all duration-200">
                Read more
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Show More Button */}
      {showCount < filtered.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowRows(r => r + 1)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
