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
  Design: { primary: '#00D9FF', border: '#00D9FF' },
  Management: { primary: '#3A86FF', border: '#3A86FF' },
  Analysis: { primary: '#A855F7', border: '#A855F7' },
  Journey: { primary: '#F59E0B', border: '#F59E0B' },
  Reflection: { primary: '#10B981', border: '#10B981' },
};

// Manga-style Blog Card - Clean, static design with sharp borders
const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  const navigate = useNavigate();
  const theme = categoryTheme[post.category] || categoryTheme.Design;

  return (
    <article
      className="group relative bg-white rounded-none overflow-hidden border-4 border-black cursor-pointer h-full flex flex-col transition-transform hover:translate-x-1 hover:-translate-y-1"
      onClick={() => navigate(`/blog/${post.id}`)}
      style={{
        boxShadow: '8px 8px 0px #000'
      }}
    >
      {/* Manga panel border effect */}
      <div className="absolute inset-0 border-2 border-white pointer-events-none" />

      {/* Image Container - Manga style */}
      <div className="relative aspect-[16/9] overflow-hidden border-b-4 border-black">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover grayscale contrast-125"
        />

        {/* Halftone overlay for manga effect */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
            backgroundSize: '4px 4px'
          }}
        />

        {/* Category Badge - Top corner manga style */}
        <div className="absolute top-3 left-3">
          <div
            className="px-3 py-1 bg-white border-3 border-black font-subtitle text-[10px] font-black tracking-widest uppercase"
            style={{
              color: theme.primary,
              boxShadow: '3px 3px 0px rgba(0,0,0,0.3)'
            }}
          >
            {post.category}
          </div>
        </div>
      </div>

      {/* Content Section - Manga style layout */}
      <div className="p-4 flex flex-col flex-1 bg-white">
        {/* Title - Bold manga style */}
        <h3 className="text-base font-black leading-tight mb-2 line-clamp-2 uppercase">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-700 font-body leading-relaxed line-clamp-2 mb-3 flex-1">
          {post.excerpt}
        </p>

        {/* Thick divider line - Manga panel style */}
        <div className="h-1 bg-black mb-3" />

        {/* Meta + Action - Manga footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-gray-600 font-subtitle uppercase tracking-wide">
            <time>{post.date}</time>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
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
          <line x1="0" y1="40" x2="40" y2="0" stroke="black" strokeWidth="2" />
          <line x1="5" y1="40" x2="40" y2="5" stroke="black" strokeWidth="2" />
          <line x1="10" y1="40" x2="40" y2="10" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </article>
  );
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = blogPosts.filter((post) => activeCategory === 'All' || post.category === activeCategory);

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
    <section id="blog" className="min-h-screen flex flex-col py-16 px-6 relative overflow-hidden">
      <SectionMerge position="top" intensity="light" />
      <SectionMerge position="bottom" intensity="light" />

      {/* Manga paper texture background */}
      <div className="absolute inset-0 bg-gray-50">
        <SmokeBackground />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section - Manga title style */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-white border-4 border-black">
            <div className="w-2 h-2 bg-black" />
            <span className="text-xs font-black tracking-widest text-gray-600 uppercase">
              Insights & Knowledge
            </span>
            <div className="w-2 h-2 bg-black" />
          </div>

          {/* Main Title - Manga style with thick borders */}
          <div className="relative inline-block mb-4">
            <h2
              className="text-5xl font-black uppercase tracking-tight px-6 py-3 bg-white border-4 border-black relative"
              style={{
                boxShadow: '8px 8px 0px #000'
              }}
            >
              Chronicles
            </h2>
          </div>

          <p className="text-sm text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
            Exploring design, technology, and leadership through thoughtful analysis
          </p>
        </div>

        {/* Category Filter Pills - Manga style buttons */}
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
                className="px-5 py-2 font-black text-xs tracking-wide uppercase border-3 border-black transition-all"
                style={{
                  background: isActive ? theme.primary : 'white',
                  color: isActive ? 'white' : 'black',
                  boxShadow: isActive ? '4px 4px 0px rgba(0,0,0,0.5)' : '2px 2px 0px rgba(0,0,0,0.3)',
                  transform: isActive ? 'translate(-1px, -1px)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Grid - Manga panel layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {shown.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>

        {/* Toggle Button - Manga style */}
        {initialPosts.length < filtered.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 font-black text-sm tracking-wide uppercase bg-white border-4 border-black transition-all"
              style={{
                boxShadow: '6px 6px 0px rgba(0,0,0,0.3)'
              }}
            >
              {showAll ? 'Show Less' : `Show All (${filtered.length - initialPosts.length} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
