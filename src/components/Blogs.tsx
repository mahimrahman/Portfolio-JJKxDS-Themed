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
    id: 'design-beyond-aesthetics',
    title: 'How to Design Beyond Aesthetics: Creating Meaningful User Experiences',
    excerpt: 'Discover how to create designs that go beyond visual appeal to deliver truly impactful user experiences that solve real problems.',
    category: 'Design',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'wireframes-still-matter-2025',
    title: 'Why Wireframes Still Matter in 2025: A Guide for UI/UX Designers',
    excerpt: 'In an age of rapid prototyping tools, learn why wireframes remain essential for creating thoughtful, user-centered designs.',
    category: 'Design',
    date: 'January 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'creativity-usability-balance',
    title: 'Balancing Creativity and Usability: 5 Tips for Better UI/UX Design',
    excerpt: 'Learn how to strike the perfect balance between creative expression and functional design that users actually want to use.',
    category: 'Design',
    date: 'January 5, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'agile-project-management-lessons',
    title: 'Agile in Action: 7 Project Management Lessons for Faster Delivery',
    excerpt: 'Practical insights from managing multiple projects using Agile methodologies, with real-world examples and actionable tips.',
    category: 'Management',
    date: 'December 28, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'data-to-decisions-analysis',
    title: 'Turning Data into Decisions: Business Analysis Tips for Product Success',
    excerpt: 'Master the art of transforming raw data into actionable insights that drive product strategy and business growth.',
    category: 'Analysis',
    date: 'December 20, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dhaka-to-montreal-journey',
    title: 'From Dhaka to Montreal: My Journey into Design, Tech, and Leadership',
    excerpt: 'A personal story of growth, challenges, and discoveries across two continents, from Bangladesh to Canada.',
    category: 'Journey',
    date: 'December 15, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'wearing-many-hats-reflection',
    title: 'What I Learned from Wearing Many Hats: Designer, Manager, Analyst',
    excerpt: 'Reflections on juggling multiple roles and how each perspective enriched my understanding of product development.',
    category: 'Reflection',
    date: 'December 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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
            Knowledge Chronicles
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
              className={`px-5 py-2 rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60 text-base
                ${activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                  : 'bg-ghost-black/60 text-slate-300 hover:bg-blue-500/10 hover:text-blue-300'}`}
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
              className="bg-gradient-to-br from-ghost-black/80 to-deep-charcoal/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer touch-manipulation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/blog/${post.id}`)}
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
                  <span className="inline-block px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold w-fit">
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
                <div className="mt-auto px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xs shadow transition-all duration-200 text-center">
                  Read more
                </div>
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
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Show More
          </button>
        )}
        {showRows > 1 && (
          <button
            onClick={() => setShowRows(1)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
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
