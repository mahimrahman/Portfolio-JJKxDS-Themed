import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

// Blog data
const blogData = {
  'design-beyond-aesthetics': {
    title: 'How to Design Beyond Aesthetics: Creating Meaningful User Experiences',
    date: 'January 15, 2025',
    author: 'Mahimur Rahman Khan',
    category: 'Design',
    readTime: '8 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Great design goes far beyond making things look beautiful. It's about creating experiences that solve real problems, serve user needs, and drive meaningful outcomes. In my journey as a UI/UX designer, I've learned that the most impactful designs are those that seamlessly blend form with function.</p>

      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-checkered-green/30 backdrop-blur-sm">
        <blockquote class="text-xl italic text-checkered-green">
          "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
        </blockquote>
      </div>

      <h2 class="mt-12">Understanding User Needs First</h2>
      <p class="mb-6 text-lg leading-relaxed">Before diving into visual design, I always start with understanding the user's context, goals, and pain points. This foundation ensures that every design decision serves a purpose beyond aesthetics.</p>

      <div class="my-12">
        <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="User Research Process" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">User research forms the foundation of meaningful design</p>
      </div>

      <h2 class="mt-12">The Five Pillars of Meaningful Design</h2>
      <p class="mb-6 text-lg leading-relaxed">Through my work on projects like LeGym and Artemis Arthouse, I've identified five key principles that transform good-looking designs into meaningful experiences:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-checkered-green/20 backdrop-blur-sm">
          <h3 class="text-xl font-bold mb-4 text-checkered-green">1. Purpose-Driven</h3>
          <p class="text-ash-gray mb-4">Every element serves a specific user need or business goal.</p>
          <h3 class="text-xl font-bold mb-4 text-checkered-green">2. Accessible</h3>
          <p class="text-ash-gray mb-4">Design that works for everyone, regardless of ability or context.</p>
          <h3 class="text-xl font-bold mb-4 text-checkered-green">3. Intuitive</h3>
          <p class="text-ash-gray">Users should understand how to interact without instruction.</p>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-cursed-blue/20 backdrop-blur-sm">
          <h3 class="text-xl font-bold mb-4 text-cursed-blue">4. Consistent</h3>
          <p class="text-ash-gray mb-4">Patterns and behaviors remain predictable throughout.</p>
          <h3 class="text-xl font-bold mb-4 text-cursed-blue">5. Measurable</h3>
          <p class="text-ash-gray">Success can be tracked through user behavior and feedback.</p>
        </div>
      </div>

      <h2 class="mt-12">Practical Application</h2>
      <p class="mb-6 text-lg leading-relaxed">When designing the LeGym mobile app, I didn't start with colors or layouts. I began by understanding how students actually use gym facilities, what frustrates them, and what would make their experience better. This led to features like real-time equipment availability and personalized workout tracking - solutions that addressed real pain points.</p>

      <div class="my-12 p-6 bg-checkered-green/10 rounded-xl border border-checkered-green/30 backdrop-blur-sm">
        <h3 class="text-xl font-bold mb-4 text-checkered-green">Key Takeaway</h3>
        <p class="text-ash-gray">Meaningful design starts with empathy, is guided by data, and is validated by user behavior. Beautiful aesthetics are the reward for solving real problems effectively.</p>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['UX Design', 'User Research', 'Design Thinking', 'Problem Solving'],
    relatedPosts: [
      {
        title: 'Why Wireframes Still Matter in 2025: A Guide for UI/UX Designers',
        excerpt: 'In an age of rapid prototyping tools, learn why wireframes remain essential.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Balancing Creativity and Usability: 5 Tips for Better UI/UX Design',
        excerpt: 'Learn how to strike the perfect balance between creativity and function.',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  'wireframes-still-matter-2025': {
    title: 'Why Wireframes Still Matter in 2025: A Guide for UI/UX Designers',
    date: 'January 10, 2025',
    author: 'Mahimur Rahman Khan',
    category: 'Design',
    readTime: '6 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">In an era of sophisticated prototyping tools and AI-assisted design, you might wonder if wireframes are still relevant. After working on projects ranging from mobile apps to complex web platforms, I can confidently say: wireframes are more important than ever.</p>

      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-checkered-green/30 backdrop-blur-sm">
        <blockquote class="text-xl italic text-checkered-green">
          "A wireframe is worth a thousand meetings. It transforms abstract ideas into concrete discussions."
        </blockquote>
      </div>

      <h2 class="mt-12">The Power of Low-Fidelity Thinking</h2>
      <p class="mb-6 text-lg leading-relaxed">Wireframes force you to focus on what matters most: structure, hierarchy, and user flow. When you remove colors, fonts, and fancy graphics, you're left with the pure essence of your design solution.</p>

      <div class="my-12">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Wireframe sketches" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">Low-fidelity wireframes help focus on structure over aesthetics</p>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Wireframes', 'UX Design', 'Design Process', 'User Experience'],
    relatedPosts: [],
  },
  'creativity-usability-balance': {
    title: 'Balancing Creativity and Usability',
    date: 'March 5, 2024',
    author: 'Mahimur Rahman Khan',
    category: 'Design',
    readTime: '5 min read',
    content: '<p class="mb-6 text-lg leading-relaxed">Content coming soon...</p>',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Design', 'Creativity', 'Usability'],
    relatedPosts: [],
  },
  'agile-project-management-lessons': {
    title: 'Agile in Action: 7 PM Lessons',
    date: 'December 28, 2024',
    author: 'Mahimur Rahman Khan',
    category: 'Management',
    readTime: '9 min read',
    content: '<p class="mb-6 text-lg leading-relaxed">Content coming soon...</p>',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Agile', 'Project Management', 'Leadership'],
    relatedPosts: [],
  },
  'data-to-decisions-analysis': {
    title: 'Turning Data into Decisions',
    date: 'December 20, 2024',
    author: 'Mahimur Rahman Khan',
    category: 'Analysis',
    readTime: '10 min read',
    content: '<p class="mb-6 text-lg leading-relaxed">Content coming soon...</p>',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Data Analysis', 'Business Intelligence', 'Strategy'],
    relatedPosts: [],
  },
  'dhaka-to-montreal-journey': {
    title: 'From Dhaka to Montreal: My Journey',
    date: 'December 15, 2024',
    author: 'Mahimur Rahman Khan',
    category: 'Journey',
    readTime: '12 min read',
    content: '<p class="mb-6 text-lg leading-relaxed">Content coming soon...</p>',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Personal', 'Journey', 'Career'],
    relatedPosts: [],
  },
  'wearing-many-hats-reflection': {
    title: 'What I Learned from Wearing Many Hats',
    date: 'December 10, 2024',
    author: 'Mahimur Rahman Khan',
    category: 'Reflection',
    readTime: '8 min read',
    content: '<p class="mb-6 text-lg leading-relaxed">Content coming soon...</p>',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Reflection', 'Career', 'Growth'],
    relatedPosts: [],
  },
};

const categoryColors: Record<string, { primary: string; secondary: string; glow: string }> = {
  Design: { primary: '#00A676', secondary: '#3A86FF', glow: '0, 166, 118' },
  Management: { primary: '#3A86FF', secondary: '#7F00FF', glow: '58, 134, 255' },
  Analysis: { primary: '#7F00FF', secondary: '#3A86FF', glow: '127, 0, 255' },
  Journey: { primary: '#FF4E00', secondary: '#FFD000', glow: '255, 78, 0' },
  Reflection: { primary: '#FFD000', secondary: '#FF4E00', glow: '255, 208, 0' },
};

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogData[slug as keyof typeof blogData];

  const handleBack = () => {
    const fromBlogList = document.referrer.includes('/blog');
    if (fromBlogList) {
      navigate('/blog');
    } else {
      navigate('/');
      setTimeout(() => {
        const blogSection = document.getElementById('blog');
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-deep-charcoal flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-title mb-4">404 - Post Not Found</h1>
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cursed-blue to-domain-violet text-snow-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  const colors = categoryColors[post.category] || categoryColors.Design;

  return (
    <article className="min-h-screen py-10 px-4 bg-deep-charcoal relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-domain-violet/5 via-deep-charcoal to-cursed-blue/5 pointer-events-none" />

      {/* Manga halftone */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Manga panel bars */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-snow-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-snow-white/5 pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: colors.primary, opacity: 0.3 }}
            initial={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12"
        >
          {/* Hero Image with Hexagonal Overlay */}
          <div
            className="relative aspect-video rounded-xl overflow-hidden mb-8 border-2 border-snow-white/15"
            style={{ boxShadow: '12px 12px 0 rgba(0,0,0,0.55)' }}
          >
            {/* Inner frame */}
            <div className="absolute inset-2 border-2 border-white/10 rounded-lg pointer-events-none" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover grayscale contrast-150 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/60 to-transparent" />

            {/* Halftone overlay for manga feel */}
            <div
              className="absolute inset-0 opacity-[0.10] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
                backgroundSize: '7px 7px',
              }}
            />

            {/* Hexagonal Corner Decorations */}
            <svg className="absolute top-0 left-0 w-20 h-20 opacity-20" viewBox="0 0 100 100">
              <motion.path
                d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
                fill={colors.primary}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
              />
            </svg>
            <svg className="absolute bottom-0 right-0 w-20 h-20 opacity-20" viewBox="0 0 100 100">
              <motion.path
                d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
                fill={colors.secondary}
                initial={{ rotate: 360 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
              />
            </svg>

            {/* Category Badge (manga label) */}
            <div className="absolute bottom-5 left-5">
              <span
                className="px-4 py-2 text-sm font-black text-deep-charcoal border-2 border-white/20 bg-snow-white/90"
                style={{ boxShadow: '4px 4px 0 rgba(0,0,0,0.6)' }}
              >
                {post.category}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-ghost-black/40 rounded-2xl p-8 md:p-12 backdrop-blur-md border-2 border-snow-white/15 shadow-2xl relative overflow-hidden"
          style={{ boxShadow: `14px 14px 0 rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)` }}
        >
          {/* Inner panel frame */}
          <div className="absolute inset-3 rounded-xl border border-white/10 pointer-events-none" />

          {/* Speed lines */}
          <svg className="absolute -right-10 -top-10 w-56 h-56 opacity-[0.06] pointer-events-none" viewBox="0 0 100 100" fill="none">
            <path d="M10 90 L90 10" stroke="white" strokeWidth="2" />
            <path d="M20 95 L95 20" stroke="white" strokeWidth="2" />
            <path d="M5 75 L75 5" stroke="white" strokeWidth="2" />
          </svg>

          {/* Corner tag */}
          <div className="absolute top-4 left-4">
            <div
              className="px-3 py-1 text-[10px] font-subtitle font-black uppercase tracking-widest border-2 border-white/15 bg-black/60 backdrop-blur-sm"
              style={{ color: colors.primary, boxShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}
            >
              FILE // {post.category}
            </div>
          </div>

          {/* Domain Expansion Effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100">
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={i}
                  cx="50"
                  cy="50"
                  r={20 + i * 10}
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="0.5"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Title */}
          <h1
            className="section-title mb-6 mt-10"
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-ash-gray pb-8 border-b border-snow-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-title prose-headings:font-black prose-headings:tracking-tight prose-h2:text-2xl md:prose-h2:text-3xl prose-p:text-ash-gray prose-p:leading-relaxed prose-a:text-cursed-blue prose-a:no-underline hover:prose-a:text-checkered-green prose-strong:text-snow-white prose-blockquote:border-l-4 prose-blockquote:border-snow-white/20 prose-blockquote:text-snow-white/80 prose-code:text-zenitsu-lightning prose-code:bg-ghost-black/50 prose-code:px-2 prose-code:py-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-snow-white/10">
            <h3 className="text-xl font-bold mb-4 text-snow-white flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-ghost-black/50 backdrop-blur-sm text-sm font-semibold border border-snow-white/10 hover:border-snow-white/30 transition-colors"
                  style={{ color: colors.primary }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-snow-white/10">
              <h3 className="text-2xl font-black mb-6 text-snow-white font-title">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost, idx) => {
                  const relatedId = (Object.keys(blogData) as Array<keyof typeof blogData>).find(
                    (key) => blogData[key].title === relatedPost.title
                  );
                  return (
                    <motion.button
                      key={idx}
                      className="group bg-ghost-black/30 rounded-xl overflow-hidden border border-snow-white/10 hover:border-snow-white/30 transition-all duration-300 text-left focus:outline-none w-full"
                      style={{
                        boxShadow: `0 4px 15px rgba(${colors.glow}, 0.1)`,
                      }}
                      onClick={() => {
                        if (relatedId) {
                          navigate(`/blog/${relatedId}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-snow-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-snow-white group-hover:to-ash-gray group-hover:bg-clip-text transition-all">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-ash-gray line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center gap-4">
          <motion.button
            onClick={handleBack}
            className="px-6 py-3 rounded-full bg-gradient-to-r text-snow-white font-bold shadow-lg border border-snow-white/20 backdrop-blur-sm transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 6px 20px rgba(${colors.glow}, 0.3)`,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Blog
          </motion.button>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 rounded-full bg-ghost-black/60 backdrop-blur-md text-ash-gray font-bold border border-snow-white/20 hover:border-snow-white/40 hover:text-snow-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to Top
          </motion.button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
