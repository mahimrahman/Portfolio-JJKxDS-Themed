import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 'design-beyond-aesthetics',
    title: 'How to Design Beyond Aesthetics: Creating Meaningful User Experiences',
    excerpt: 'Discover how to create designs that go beyond visual appeal to deliver truly impactful user experiences.',
    category: 'Design',
    date: 'Jan 15, 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'wireframes-still-matter-2025',
    title: 'Why Wireframes Still Matter in 2025',
    excerpt: 'Learn why wireframes remain essential for creating thoughtful, user-centered designs.',
    category: 'Design',
    date: 'Jan 10, 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'creativity-usability-balance',
    title: 'Balancing Creativity and Usability',
    excerpt: 'Strike the perfect balance between creative expression and functional design.',
    category: 'Design',
    date: 'Jan 5, 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'agile-project-management-lessons',
    title: 'Agile in Action: 7 PM Lessons',
    excerpt: 'Practical insights from managing projects using Agile methodologies.',
    category: 'Management',
    date: 'Dec 28, 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'data-to-decisions-analysis',
    title: 'Turning Data into Decisions',
    excerpt: 'Transform raw data into actionable insights for product success.',
    category: 'Analysis',
    date: 'Dec 20, 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dhaka-to-montreal-journey',
    title: 'From Dhaka to Montreal: My Journey',
    excerpt: 'A story of growth and discoveries across two continents.',
    category: 'Journey',
    date: 'Dec 15, 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

// Cursed Energy-inspired theme palette (JJK) with Breathing Forms (DS)
const categoryTheme: Record<string, { primary: string; secondary: string; glow: string; technique: string }> = {
  Design: { primary: '#00D9FF', secondary: '#8B5CF6', glow: '0, 217, 255', technique: 'Limitless' },
  Management: { primary: '#3A86FF', secondary: '#818CF8', glow: '58, 134, 255', technique: 'Water Breathing' },
  Analysis: { primary: '#A855F7', secondary: '#C084FC', glow: '168, 85, 247', technique: 'Domain Expansion' },
  Journey: { primary: '#F59E0B', secondary: '#FBBF24', glow: '245, 158, 11', technique: 'Flame Breathing' },
  Reflection: { primary: '#10B981', secondary: '#34D399', glow: '16, 185, 129', technique: 'Cursed Speech' },
};


// Professional Blog Card with JJK/DS-inspired design
const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const theme = categoryTheme[post.category] || categoryTheme.Design;

  return (
    <motion.article
      className="group relative bg-gradient-to-br from-deep-charcoal/95 to-ghost-black/95 backdrop-blur-md rounded-xl overflow-hidden border border-snow-white/5 cursor-pointer h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => navigate(`/blog/${post.id}`)}
      style={{
        boxShadow: isHovered
          ? `0 20px 50px -12px rgba(${theme.glow}, 0.3), 0 0 0 1px rgba(${theme.glow}, 0.1)`
          : `0 4px 20px -4px rgba(${theme.glow}, 0.1)`,
      }}
    >
      {/* Cursed Energy Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(${theme.glow}, 0.1), transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Image Container with Breathing Effect */}
      <div className="relative aspect-[2/1] overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/60 to-transparent" />

        {/* Category Badge with Technique Name */}
        <div className="absolute top-3 left-3">
          <motion.div
            className="relative px-3 py-1.5 rounded-lg backdrop-blur-sm border border-snow-white/10 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            style={{
              background: `linear-gradient(135deg, rgba(${theme.glow}, 0.15), rgba(${theme.glow}, 0.05))`,
            }}
          >
            <span className="relative z-10 text-[10px] font-bold tracking-wide" style={{ color: theme.primary }}>
              {post.category.toUpperCase()}
            </span>
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>

        {/* Cursed Energy Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {isHovered && [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                background: theme.primary,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
                y: [0, -30],
              }}
              transition={{ 
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-sm font-bold text-snow-white leading-tight mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-snow-white group-hover:via-ash-gray group-hover:to-snow-white group-hover:bg-clip-text transition-all duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-ash-gray/70 leading-relaxed line-clamp-2 mb-3 flex-1">
          {post.excerpt}
        </p>

        {/* Divider Line with Energy Flow */}
        <div className="relative h-[1px] bg-gradient-to-r from-transparent via-snow-white/10 to-transparent mb-3">
          <motion.div
            className="absolute inset-0 h-full"
            style={{ background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)` }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Meta + Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-ash-gray/50 font-medium">
            <time>{post.date}</time>
            <span className="w-1 h-1 rounded-full bg-ash-gray/30" />
            <span>{post.readTime}</span>
          </div>
          
          <motion.div
            className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide"
            style={{ color: theme.primary }}
            animate={isHovered ? { gap: 8 } : { gap: 6 }}
            transition={{ duration: 0.3 }}
          >
            <span>READ</span>
            <motion.svg 
              className="w-3.5 h-3.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={isHovered ? { x: 2 } : { x: 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.div>
        </div>
      </div>

      {/* Corner Accent - Subtle Hexagon Pattern */}
      <div className="absolute bottom-3 right-3 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z"
            fill={theme.primary}
          />
        </svg>
      </div>
    </motion.article>
  );
};


const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = blogPosts.filter((post) => activeCategory === 'All' || post.category === activeCategory);
  
  // Get one from each category for initial display
  const getInitialPosts = () => {
    if (activeCategory !== 'All') return filtered;
    
    const categoriesMap = new Map<string, typeof blogPosts[0]>();
    blogPosts.forEach(post => {
      if (!categoriesMap.has(post.category)) {
        categoriesMap.set(post.category, post);
      }
    });
    return Array.from(categoriesMap.values());
  };

  const initialPosts = getInitialPosts();
  const shown = showAll ? filtered : initialPosts;

  return (
    <section id="blog" className="min-h-screen flex flex-col py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Sophisticated Background with Cursed Energy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-ghost-black to-deep-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,217,255,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(58,134,255,0.05),transparent_50%)]" />
      </div>

      {/* Floating Cursed Energy Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[...Array(8)].map((_, i) => {
          const colors = ['#00D9FF', '#A855F7', '#3A86FF', '#F59E0B'];
          const color = colors[i % colors.length];
          return (
            <motion.div
              key={i}
              className="absolute rounded-full blur-xl"
              style={{
                width: `${80 + Math.random() * 120}px`,
                height: `${80 + Math.random() * 120}px`,
                background: `radial-gradient(circle, ${color}22, transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* Subtitle with Breathing Effect */}
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-snow-white/10 backdrop-blur-sm"
            style={{ background: 'rgba(168, 85, 247, 0.05)' }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.1)',
                '0 0 30px rgba(168, 85, 247, 0.2)',
                '0 0 20px rgba(168, 85, 247, 0.1)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-domain-violet to-cursed-blue" />
            <span className="text-xs font-semibold tracking-widest text-ash-gray/80 uppercase">
              Insights & Knowledge
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cursed-blue to-checkered-green" />
          </motion.div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-snow-white via-ash-gray to-snow-white bg-clip-text text-transparent font-['Mochiy_Pop_One'] tracking-tight">
            Chronicles
          </h2>
          
          <p className="text-xs sm:text-sm text-ash-gray/70 max-w-2xl mx-auto leading-relaxed">
            Exploring design, technology, and leadership through thoughtful analysis
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            const theme = cat === 'All' ? categoryTheme.Design : categoryTheme[cat];

            return (
              <motion.button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className="relative px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: isActive 
                    ? `linear-gradient(135deg, rgba(${theme.glow}, 0.2), rgba(${theme.glow}, 0.1))`
                    : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isActive ? `rgba(${theme.glow}, 0.3)` : 'rgba(255, 255, 255, 0.05)'}`,
                  color: isActive ? theme.primary : '#94A3B8',
                  boxShadow: isActive ? `0 8px 25px -8px rgba(${theme.glow}, 0.4)` : 'none',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                  {cat !== 'All' && (
                    <span className="text-[9px] opacity-60">({theme.technique.split(' ')[0]})</span>
                  )}
                </span>
                
                {/* Flowing energy effect on hover */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{ background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)` }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Blog Grid */}
        <div className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + showAll.toString()}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {shown.map((post, idx) => (
                <BlogCard key={post.id} post={post} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Toggle Button - Show More/Less */}
        {initialPosts.length < filtered.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-6"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-3 rounded-xl font-bold text-sm tracking-wide overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(58, 134, 255, 0.15))',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#A855F7',
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? 'Show Less' : `Show All (${filtered.length - initialPosts.length} more)`}
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: showAll ? [0, -3, 0] : [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </span>
              
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-30"
                style={{ background: 'linear-gradient(135deg, #A855F7, #3A86FF)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
