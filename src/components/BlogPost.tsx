import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

// Sample blog data - in a real app, this would come from an API or CMS
const blogData = {
  'how-i-slayed-my-first-project': {
    title: 'How I Slayed My First Project',
    date: 'March 15, 2024',
    author: 'The Slayer',
    category: 'Journey',
    readTime: '8 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">In the world of software development, every project is like a demon waiting to be slayed. My first major project was no different - a beast that seemed impossible to conquer at first glance.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
        <blockquote class="text-xl italic text-zenitsu-lightning">
          "The path to becoming a Hashira is paved with countless battles. Each line of code is a swing of your sword."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">The Challenge</h2>
      <p class="mb-6 text-lg leading-relaxed">The project started as a simple idea: create a UI component library inspired by the Demon Slayer universe. Little did I know, this would become my first true test as a developer.</p>
      
      <div class="my-12">
        <img src="https://placehold.co/1200x600/121212/FFD000" alt="Project Screenshot" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">The Demon Slayer UI Kit in action</p>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">The Battle</h2>
      <p class="mb-6 text-lg leading-relaxed">The first challenge was creating a design system that captured the essence of the anime while maintaining modern web standards. I spent weeks studying the show's visual language, from the distinctive patterns of the Hashira uniforms to the elemental effects of their breathing techniques.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Key Challenges</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Creating responsive animations</li>
            <li>• Maintaining performance</li>
            <li>• Ensuring accessibility</li>
            <li>• Cross-browser compatibility</li>
          </ul>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Solutions</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Framer Motion for animations</li>
            <li>• Code splitting</li>
            <li>• ARIA labels</li>
            <li>• Progressive enhancement</li>
          </ul>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">The Victory</h2>
      <p class="mb-6 text-lg leading-relaxed">After months of development, the UI kit was complete. It featured components that could transform like a demon slayer's blade, animations that flowed like water breathing techniques, and a color palette that captured the essence of the show's most iconic moments.</p>
    `,
    image: 'https://placehold.co/1200x600/121212/FFD000',
    tags: ['React', 'Design Systems', 'Animation', 'UI/UX'],
    relatedPosts: [
      {
        title: 'The Art of Clean Code',
        excerpt: 'Why writing clean code is like mastering a sword technique.',
        image: 'https://placehold.co/600x400/121212/FF6B6B',
      },
      {
        title: 'Debugging: The Demon Within',
        excerpt: 'How to face and conquer the toughest bugs in your code.',
        image: 'https://placehold.co/600x400/121212/FFD93D',
      },
    ],
  },
  'lessons-from-the-code-battlefield': {
    title: 'Lessons from the Code Battlefield',
    date: 'March 10, 2024',
    author: 'The Slayer',
    category: 'Lessons',
    readTime: '6 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Debugging is like facing a demon - it requires patience, strategy, and sometimes, a bit of luck. Here's what I learned from my toughest coding battles.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
        <blockquote class="text-xl italic text-zenitsu-lightning">
          "In the heat of battle, a calm mind is your greatest weapon. The same applies to debugging."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">The Art of Debugging</h2>
      <p class="mb-6 text-lg leading-relaxed">Every bug is unique, like a demon with its own cursed technique. Understanding the nature of the problem is the first step to victory.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Step 1: Observe</h3>
          <p class="text-ash-gray">Like a Hashira studying their opponent, carefully observe the bug's behavior.</p>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Step 2: Analyze</h3>
          <p class="text-ash-gray">Break down the problem into smaller parts, just as you would analyze a demon's weak points.</p>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Step 3: Execute</h3>
          <p class="text-ash-gray">Apply your solution with precision, like a perfectly executed breathing technique.</p>
        </div>
      </div>
      
      <div class="my-12">
        <img src="https://placehold.co/1200x600/121212/3A86FF" alt="Debugging Process" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">The debugging process visualized</p>
      </div>
    `,
    image: 'https://placehold.co/1200x600/121212/3A86FF',
    tags: ['Debugging', 'Problem Solving', 'Best Practices', 'Development'],
    relatedPosts: [
      {
        title: 'Debugging: The Demon Within',
        excerpt: 'How to face and conquer the toughest bugs in your code.',
        image: 'https://placehold.co/600x400/121212/FFD93D',
      },
      {
        title: 'The Art of Clean Code',
        excerpt: 'Why writing clean code is like mastering a sword technique.',
        image: 'https://placehold.co/600x400/121212/FF6B6B',
      },
    ],
  },
  'anime-and-engineering': {
    title: 'Anime & Engineering: My Inspirations',
    date: 'March 5, 2024',
    author: 'The Slayer',
    category: 'Inspiration',
    readTime: '5 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">The world of anime has taught me more about software engineering than I ever expected. Let's explore how these two seemingly different worlds connect.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
        <blockquote class="text-xl italic text-zenitsu-lightning">
          "The principles of growth and perseverance in anime mirror the journey of becoming a better developer."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">Lessons from the Screen</h2>
      <p class="mb-6 text-lg leading-relaxed">From the determination of Tanjiro to the strategic mind of Shikamaru, anime characters embody qualities that make great developers.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Character Traits</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Tanjiro's Perseverance</li>
            <li>• Shikamaru's Strategy</li>
            <li>• Naruto's Determination</li>
            <li>• Lelouch's Planning</li>
          </ul>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Developer Skills</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Problem Solving</li>
            <li>• Strategic Thinking</li>
            <li>• Continuous Learning</li>
            <li>• Project Planning</li>
          </ul>
        </div>
      </div>
      
      <div class="my-12">
        <img src="https://placehold.co/1200x600/121212/00A676" alt="Anime Inspiration" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">Finding inspiration in unexpected places</p>
      </div>
    `,
    image: 'https://placehold.co/1200x600/121212/00A676',
    tags: ['Inspiration', 'Anime', 'Development', 'Learning'],
    relatedPosts: [
      {
        title: 'React vs. Vue: A Duel',
        excerpt: 'Comparing two frontend frameworks in a battle of features and style.',
        image: 'https://placehold.co/600x400/121212/4ECDC4',
      },
      {
        title: 'The Art of Clean Code',
        excerpt: 'Why writing clean code is like mastering a sword technique.',
        image: 'https://placehold.co/600x400/121212/FF6B6B',
      },
    ],
  },
  'the-art-of-clean-code': {
    title: 'The Art of Clean Code',
    date: 'March 1, 2024',
    author: 'The Slayer',
    category: 'Craft',
    readTime: '7 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Writing clean code is like mastering a sword technique - it requires discipline, practice, and a deep understanding of the fundamentals.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
        <blockquote class="text-xl italic text-zenitsu-lightning">
          "Clean code is not just about making it work - it's about making it beautiful and maintainable."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">The Principles</h2>
      <p class="mb-6 text-lg leading-relaxed">Just as a Hashira masters their breathing technique, a developer must master the principles of clean code.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Code Structure</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Single Responsibility</li>
            <li>• DRY Principle</li>
            <li>• Meaningful Names</li>
            <li>• Small Functions</li>
          </ul>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Best Practices</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Consistent Formatting</li>
            <li>• Proper Documentation</li>
            <li>• Error Handling</li>
            <li>• Testing</li>
          </ul>
        </div>
      </div>
      
      <div class="my-12">
        <img src="https://placehold.co/1200x600/121212/FF6B6B" alt="Clean Code Example" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">The beauty of well-structured code</p>
      </div>
    `,
    image: 'https://placehold.co/1200x600/121212/FF6B6B',
    tags: ['Clean Code', 'Best Practices', 'Development', 'Craft'],
    relatedPosts: [
      {
        title: 'Debugging: The Demon Within',
        excerpt: 'How to face and conquer the toughest bugs in your code.',
        image: 'https://placehold.co/600x400/121212/FFD93D',
      },
      {
        title: 'React vs. Vue: A Duel',
        excerpt: 'Comparing two frontend frameworks in a battle of features and style.',
        image: 'https://placehold.co/600x400/121212/4ECDC4',
      },
    ],
  },
  'react-vs-vue-duel': {
    title: 'React vs. Vue: A Duel',
    date: 'February 25, 2024',
    author: 'The Slayer',
    category: 'Tech',
    readTime: '10 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">In the world of frontend frameworks, React and Vue are like two powerful Hashira, each with their own unique techniques and strengths.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
        <blockquote class="text-xl italic text-zenitsu-lightning">
          "Choosing between React and Vue is like choosing between water and flame breathing - both are powerful, but serve different purposes."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">The Comparison</h2>
      <p class="mb-6 text-lg leading-relaxed">Let's analyze these frameworks like a battle between two master swordsmen.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">React's Strengths</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Large Ecosystem</li>
            <li>• Strong Community</li>
            <li>• Flexible Architecture</li>
            <li>• Job Market</li>
          </ul>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Vue's Advantages</h3>
          <ul class="space-y-3 text-ash-gray">
            <li>• Gentle Learning Curve</li>
            <li>• Built-in Features</li>
            <li>• Documentation</li>
            <li>• Performance</li>
          </ul>
        </div>
      </div>
      
      <div class="my-12">
        <img src="https://placehold.co/1200x600/121212/4ECDC4" alt="Framework Comparison" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">A visual comparison of React and Vue</p>
      </div>
    `,
    image: 'https://placehold.co/1200x600/121212/4ECDC4',
    tags: ['React', 'Vue', 'Frontend', 'Frameworks'],
    relatedPosts: [
      {
        title: 'The Art of Clean Code',
        excerpt: 'Why writing clean code is like mastering a sword technique.',
        image: 'https://placehold.co/600x400/121212/FF6B6B',
      },
      {
        title: 'Anime & Engineering: My Inspirations',
        excerpt: 'How anime themes and characters inspire my approach to software engineering.',
        image: 'https://placehold.co/600x400/121212/00A676',
      },
    ],
  },
  'debugging-the-demon-within': {
    title: 'Debugging: The Demon Within',
    date: 'February 20, 2024',
    author: 'The Slayer',
    category: 'Lessons',
    readTime: '9 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Every developer faces their own inner demons when debugging. Here's how to conquer them and emerge victorious.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
        <blockquote class="text-xl italic text-zenitsu-lightning">
          "The greatest demon is not the bug itself, but the fear and frustration it creates within us."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">Facing the Demon</h2>
      <p class="mb-6 text-lg leading-relaxed">Like a demon slayer facing a powerful opponent, we must approach debugging with strategy and calm.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Mindset</h3>
          <p class="text-ash-gray">Stay calm and focused, like a Hashira in battle.</p>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Strategy</h3>
          <p class="text-ash-gray">Break down the problem and attack systematically.</p>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-zenitsu-lightning/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">Tools</h3>
          <p class="text-ash-gray">Use your debugging tools like a demon slayer's sword.</p>
        </div>
      </div>
      
      <div class="my-12">
        <img src="https://placehold.co/1200x600/121212/FFD93D" alt="Debugging Process" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">The path to debugging mastery</p>
      </div>
    `,
    image: 'https://placehold.co/1200x600/121212/FFD93D',
    tags: ['Debugging', 'Problem Solving', 'Development', 'Mindset'],
    relatedPosts: [
      {
        title: 'Lessons from the Code Battlefield',
        excerpt: 'Reflections on debugging, teamwork, and the art of never giving up.',
        image: 'https://placehold.co/600x400/121212/3A86FF',
      },
      {
        title: 'The Art of Clean Code',
        excerpt: 'Why writing clean code is like mastering a sword technique.',
        image: 'https://placehold.co/600x400/121212/FF6B6B',
      },
    ],
  },
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogData[slug as keyof typeof blogData];

  const handleBack = () => {
    // Check if we came from the blog list page or the home page
    const fromBlogList = document.referrer.includes('/blog');
    if (fromBlogList) {
      navigate('/blog');
    } else {
      // If we came from the home page, scroll to the blog section
      navigate('/');
      // Use setTimeout to ensure the navigation completes before scrolling
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
          <h1 className="text-4xl font-bold text-snow-white mb-4">404 - Post Not Found</h1>
          <button
            onClick={handleBack}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-deep-charcoal py-20 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <div className="aspect-video rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white text-sm font-bold">
              {post.category}
            </span>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-ghost-black/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-zenitsu-lightning/20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-8 text-ash-gray">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-zenitsu-lightning/20">
            <h3 className="text-xl font-bold mb-4 text-snow-white">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-ghost-black/50 text-zenitsu-lightning text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && (
            <div className="mt-12 pt-8 border-t border-zenitsu-lightning/20">
              <h3 className="text-2xl font-bold mb-6 text-snow-white">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost) => {
                  // Find the related post's id by matching the title in blogData
                  const relatedId = Object.keys(blogData).find(
                    key => blogData[key].title === relatedPost.title
                  );
                  return (
                    <button
                      key={relatedPost.title}
                      className="bg-ghost-black/30 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 text-left focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60"
                      style={{ cursor: relatedId ? 'pointer' : 'default' }}
                      onClick={() => relatedId && navigate(`/blog/${relatedId}`)}
                      tabIndex={0}
                      aria-label={`Read ${relatedPost.title}`}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-snow-white mb-2">{relatedPost.title}</h4>
                        <p className="text-ash-gray">{relatedPost.excerpt}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <button
            onClick={handleBack}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 