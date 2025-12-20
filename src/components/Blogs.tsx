import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmokeBackground from './SmokeBackground';
import SectionMerge from './SectionMerge';

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

const categoryTheme: Record<string, { primary: string; border: string }> = {
  Design: { primary: '#3A86FF', border: '#3A86FF' },
  Management: { primary: '#7F00FF', border: '#7F00FF' },
  Analysis: { primary: '#FFD000', border: '#FFD000' },
  Journey: { primary: '#FF4E00', border: '#FF4E00' },
  Reflection: { primary: '#00A676', border: '#00A676' },
};

// Manga-style Blog Card - Clean, static design with sharp borders
const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const navigate = useNavigate();
  const theme = categoryTheme[post.category] || categoryTheme.Design;

  return (
    <article
      className="group relative bg-gradient-to-br from-ghost-black/70 to-deep-charcoal/70 backdrop-blur-xl rounded-lg overflow-hidden border-2 border-white/20 cursor-pointer h-full flex flex-col transition-transform hover:-translate-y-1"
      onClick={() => navigate(`/blog/${post.id}`)}
      style={{ boxShadow: `10px 10px 0 rgba(0,0,0,0.55), 0 0 0 1px ${theme.border}22` }}
    >
      {/* Panel frame */}
      <div className="absolute inset-2 border-2 border-white/10 rounded-md pointer-events-none" />

      {/* Speed lines (manga energy) */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="absolute -right-6 -top-6 w-36 h-36 opacity-20" viewBox="0 0 100 100" fill="none">
          <path d="M10 90 L90 10" stroke="white" strokeWidth="2" />
          <path d="M25 95 L95 25" stroke="white" strokeWidth="2" />
          <path d="M5 75 L75 5" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Accent border glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1px ${theme.border}55, 0 0 35px ${theme.primary}22` }}
      />

      {/* Image Container - Manga style */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover grayscale contrast-150 brightness-90 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Halftone overlay for manga effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
            backgroundSize: '6px 6px'
          }}
        />

        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category Badge - Top corner manga style */}
        <div className="absolute top-3 left-3">
          <div className="relative">
            <div
              className="px-3 py-1 bg-black/70 backdrop-blur-sm border-2 border-white/20 font-subtitle text-[10px] font-black tracking-widest uppercase"
              style={{ color: theme.primary, boxShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}
            >
              {post.category}
            </div>
            <div
              className="absolute -left-1 -top-1 w-2 h-2"
              style={{ backgroundColor: theme.primary }}
            />
          </div>
        </div>
      </div>

      {/* Content Section - Manga style layout */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-black font-title leading-snug mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-snow-white/70 font-body leading-relaxed line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Thick divider line - Manga panel style */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-4" />

        {/* Meta + Action - Manga footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-snow-white/50 font-subtitle uppercase tracking-wide">
            <time>{post.date}</time>
            <span className="w-1 h-1 rounded-full bg-white/25" />
            <span>{post.readTime}</span>
          </div>

          <div
            className="flex items-center gap-1 text-[11px] font-black tracking-wide uppercase"
            style={{ color: theme.primary }}
          >
            <span>READ</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Speed lines decoration in corner */}
      <div className="absolute bottom-2 right-2 opacity-10">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="2" />
          <line x1="5" y1="40" x2="40" y2="5" stroke="white" strokeWidth="2" />
          <line x1="10" y1="40" x2="40" y2="10" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    </article>
  );
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 4;

  const filtered = blogPosts.filter((post) => activeCategory === 'All' || post.category === activeCategory);

  const shown = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="blog" className="min-h-screen flex flex-col py-16 px-6 relative overflow-hidden">
      <SectionMerge position="top" intensity="light" />
      <SectionMerge position="bottom" intensity="light" />

      {/* Dark themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/95 via-ghost-black/95 to-deep-charcoal/95">
        <SmokeBackground />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Manga panel bars */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-snow-white/5" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-snow-white/5" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="px-3 py-1 text-[10px] font-subtitle font-black uppercase tracking-widest border-2 border-white/15 bg-black/60 backdrop-blur-sm text-ash-gray" style={{ boxShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}>
              CHAPTER // BLOG ARCHIVE
            </span>
          </div>

          <h2 className="section-title mb-3">Chronicles</h2>

          <p className="text-sm md:text-base text-ash-gray font-body max-w-2xl mx-auto leading-relaxed">
            Exploring design, technology, and leadership through thoughtful analysis
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const theme = cat === 'All' ? categoryTheme.Design : categoryTheme[cat];

            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className="px-5 py-2 rounded-full font-black text-xs font-subtitle tracking-wide uppercase border transition-all backdrop-blur-sm"
                style={{
                  background: isActive ? `${theme.primary}22` : 'rgba(255,255,255,0.04)',
                  color: isActive ? theme.primary : 'rgba(249,249,249,0.75)',
                  borderColor: isActive ? `${theme.border}66` : 'rgba(255,255,255,0.12)',
                  boxShadow: isActive ? `0 0 0 1px ${theme.border}55, 0 0 25px ${theme.primary}22` : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Grid - Compact manga row (4 cards on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
          {shown.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Toggle Button */}
        {filtered.length > INITIAL_COUNT && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 font-black text-sm font-subtitle tracking-wide uppercase bg-white/5 border border-white/15 text-snow-white/80 hover:text-snow-white hover:bg-white/10 transition-all rounded-full"
            >
              {showAll ? 'Show Less' : `Show More (+${Math.max(0, filtered.length - INITIAL_COUNT)})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
