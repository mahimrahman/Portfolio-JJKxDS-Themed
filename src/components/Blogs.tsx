import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
    <section id="projects" className="min-h-[80vh] py-12 px-4 bg-deep-charcoal relative overflow-hidden">
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
    id: 'how-i-slayed-my-first-project',
    title: 'How I Slayed My First Project',
    excerpt: 'A journey through my first big project, the challenges, and the victories along the way.',
    category: 'Journey',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://placehold.co/600x400/121212/FFD000',
  },
  {
    id: 'lessons-from-the-code-battlefield',
    title: 'Lessons from the Code Battlefield',
    excerpt: 'Reflections on debugging, teamwork, and the art of never giving up.',
    category: 'Lessons',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: 'https://placehold.co/600x400/121212/3A86FF',
  },
  {
    id: 'anime-and-engineering',
    title: 'Anime & Engineering: My Inspirations',
    excerpt: 'How anime themes and characters inspire my approach to software engineering.',
    category: 'Inspiration',
    date: 'March 5, 2024',
    readTime: '5 min read',
    image: 'https://placehold.co/600x400/121212/00A676',
  },
  {
    id: 'the-art-of-clean-code',
    title: 'The Art of Clean Code',
    excerpt: 'Why writing clean code is like mastering a sword technique.',
    category: 'Craft',
    date: 'March 1, 2024',
    readTime: '7 min read',
    image: 'https://placehold.co/600x400/121212/FF6B6B',
  },
  {
    id: 'react-vs-vue-duel',
    title: 'React vs. Vue: A Duel',
    excerpt: 'Comparing two frontend frameworks in a battle of features and style.',
    category: 'Tech',
    date: 'February 25, 2024',
    readTime: '10 min read',
    image: 'https://placehold.co/600x400/121212/4ECDC4',
  },
  {
    id: 'debugging-the-demon-within',
    title: 'Debugging: The Demon Within',
    excerpt: 'How to face and conquer the toughest bugs in your code.',
    category: 'Lessons',
    date: 'February 20, 2024',
    readTime: '9 min read',
    image: 'https://placehold.co/600x400/121212/FFD93D',
  },
  {
    id: 'the-path-to-mastery',
    title: 'The Path to Mastery',
    excerpt: 'Understanding the journey from novice to expert in software development.',
    category: 'Journey',
    date: 'February 15, 2024',
    readTime: '6 min read',
    image: 'https://placehold.co/600x400/121212/8B5CF6',
  },
];

const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showRows, setShowRows] = useState(1); // Start with 1 full row
  const [columns, setColumns] = useState(1);
  const navigate = useNavigate();

  // Responsive columns calculation
  useEffect(() => {
    const calcCols = () => {
      if (window.innerWidth >= 1024) setColumns(4);
      else if (window.innerWidth >= 640) setColumns(2);
      else setColumns(1);
    };
    calcCols();
    window.addEventListener('resize', calcCols);
    return () => window.removeEventListener('resize', calcCols);
  }, []);

  // Determine how many posts to show per 'Show More' click
  const isMobile = columns === 1;
  const postsPerShow = isMobile ? 4 : columns; // Show complete rows
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
    <section id="blog" className="min-h-[80vh] py-12 px-4 relative overflow-hidden">
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
            Blog of the Slayer
          </h2>
          <span className="block w-24 h-1 mx-auto mb-8 bg-zenitsu-lightning rounded-full animate-pulse" />
          <p className="text-lg md:text-xl text-ash-gray">Insights, stories, and lessons from my journey</p>
        </motion.div>
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
        {/* Blog Post Grid - 4 columns for landscape cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {shown.map((post, idx) => (
            <motion.div
              key={post.id}
              className="bg-gradient-to-br from-ghost-black/80 to-deep-charcoal/80 backdrop-blur-sm rounded-xl overflow-hidden border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-all duration-300 hover:shadow-lg hover:shadow-zenitsu-lightning/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent" />
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <span className="inline-block px-2 py-1 rounded-full bg-gradient-to-r from-zenitsu-lightning to-checkered-green text-deep-charcoal text-xs font-bold w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-snow-white leading-tight">{post.title}</h3>
                  <div className="flex items-center gap-1 text-ash-gray text-xs">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-ash-gray text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
                <button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="mt-auto px-3 py-1 rounded-full bg-gradient-to-r from-checkered-green to-zenitsu-lightning text-deep-charcoal font-bold text-xs shadow hover:opacity-90 transition-all duration-200"
                >
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        </div>
        {/* Show More / Show Less Buttons */}
        <div className="flex justify-center mt-8 gap-4">
        {showCount < filtered.length && (
          <button
            onClick={() => setShowRows(r => r + 1)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Show More
          </button>
        )}
        {showRows > 1 && (
          <button
            onClick={() => setShowRows(1)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-domain-violet to-rengoku-flame text-snow-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Show Less
          </button>
        )}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
