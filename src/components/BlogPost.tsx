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
  // Add more blog posts here
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    return (
      <div className="min-h-screen bg-deep-charcoal flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-snow-white mb-4">404 - Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
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
                {post.relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.title}
                    className="bg-ghost-black/30 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-200"
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <button
            onClick={() => navigate('/blog')}
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