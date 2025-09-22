import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

// Blog data - Professional content for portfolio
const blogData = {
  'design-beyond-aesthetics': {
    title: 'How to Design Beyond Aesthetics: Creating Meaningful User Experiences',
    date: 'January 15, 2025',
    author: 'Mahimur Rahman Khan',
    category: 'Design',
    readTime: '8 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Great design goes far beyond making things look beautiful. It's about creating experiences that solve real problems, serve user needs, and drive meaningful outcomes. In my journey as a UI/UX designer, I've learned that the most impactful designs are those that seamlessly blend form with function.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-blue-400/20">
        <blockquote class="text-xl italic text-blue-300">
          "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">Understanding User Needs First</h2>
      <p class="mb-6 text-lg leading-relaxed">Before diving into visual design, I always start with understanding the user's context, goals, and pain points. This foundation ensures that every design decision serves a purpose beyond aesthetics.</p>
      
      <div class="my-12">
        <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="User Research Process" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">User research forms the foundation of meaningful design</p>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">The Five Pillars of Meaningful Design</h2>
      <p class="mb-6 text-lg leading-relaxed">Through my work on projects like LeGym and Artemis Arthouse, I've identified five key principles that transform good-looking designs into meaningful experiences:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-blue-400/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">1. Purpose-Driven</h3>
          <p class="text-ash-gray mb-4">Every element serves a specific user need or business goal.</p>
          <h3 class="text-xl font-bold mb-4 text-snow-white">2. Accessible</h3>
          <p class="text-ash-gray mb-4">Design that works for everyone, regardless of ability or context.</p>
          <h3 class="text-xl font-bold mb-4 text-snow-white">3. Intuitive</h3>
          <p class="text-ash-gray">Users should understand how to interact without instruction.</p>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-blue-400/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">4. Consistent</h3>
          <p class="text-ash-gray mb-4">Patterns and behaviors remain predictable throughout.</p>
          <h3 class="text-xl font-bold mb-4 text-snow-white">5. Measurable</h3>
          <p class="text-ash-gray">Success can be tracked through user behavior and feedback.</p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">Practical Application</h2>
      <p class="mb-6 text-lg leading-relaxed">When designing the LeGym mobile app, I didn't start with colors or layouts. I began by understanding how students actually use gym facilities, what frustrates them, and what would make their experience better. This led to features like real-time equipment availability and personalized workout tracking - solutions that addressed real pain points.</p>
      
      <div class="my-12 p-6 bg-blue-500/10 rounded-xl border border-blue-400/30">
        <h3 class="text-xl font-bold mb-4 text-blue-300">Key Takeaway</h3>
        <p class="text-ash-gray">Meaningful design starts with empathy, is guided by data, and is validated by user behavior. Beautiful aesthetics are the reward for solving real problems effectively.</p>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['UX Design', 'User Research', 'Design Thinking', 'Problem Solving'],
    relatedPosts: [
      {
        title: 'Why Wireframes Still Matter in 2025: A Guide for UI/UX Designers',
        excerpt: 'In an age of rapid prototyping tools, learn why wireframes remain essential for creating thoughtful, user-centered designs.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Balancing Creativity and Usability: 5 Tips for Better UI/UX Design',
        excerpt: 'Learn how to strike the perfect balance between creative expression and functional design that users actually want to use.',
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
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-blue-400/20">
        <blockquote class="text-xl italic text-blue-300">
          "A wireframe is worth a thousand meetings. It transforms abstract ideas into concrete discussions."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">The Power of Low-Fidelity Thinking</h2>
      <p class="mb-6 text-lg leading-relaxed">Wireframes force you to focus on what matters most: structure, hierarchy, and user flow. When you remove colors, fonts, and fancy graphics, you're left with the pure essence of your design solution.</p>
      
      <div class="my-12">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Wireframe sketches" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">Low-fidelity wireframes help focus on structure over aesthetics</p>
        </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">Why Wireframes Win in 2025</h2>
      <p class="mb-6 text-lg leading-relaxed">Based on my experience designing everything from university gym apps to e-commerce platforms, here's why wireframes remain essential:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-blue-400/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">1. Speed & Iteration</h3>
          <p class="text-ash-gray mb-4">Quick to create, easy to modify. Test 10 layout ideas in the time it takes to perfect one high-fidelity mockup.</p>
          <h3 class="text-xl font-bold mb-4 text-snow-white">2. Clear Communication</h3>
          <p class="text-ash-gray">Stakeholders focus on functionality instead of debating color choices.</p>
        </div>
        <div class="p-6 bg-ghost-black/30 rounded-xl border border-blue-400/20">
          <h3 class="text-xl font-bold mb-4 text-snow-white">3. User-Centered Focus</h3>
          <p class="text-ash-gray mb-4">Forces you to prioritize user needs over visual preferences.</p>
          <h3 class="text-xl font-bold mb-4 text-snow-white">4. Cost-Effective</h3>
          <p class="text-ash-gray">Catch structural issues early, before investing in detailed design.</p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">My Wireframing Process</h2>
      <p class="mb-6 text-lg leading-relaxed">When I designed the LeGym mobile app, wireframes helped us identify that users needed quick access to equipment availability on the home screen - an insight that might have been lost if we'd started with high-fidelity designs.</p>
      
      <div class="my-12 p-6 bg-blue-500/10 rounded-xl border border-blue-400/30">
        <h3 class="text-xl font-bold mb-4 text-blue-300">Pro Tip</h3>
        <p class="text-ash-gray">Start every project with pen and paper wireframes. Digital tools come later. The friction of drawing by hand forces you to think through each element's necessity.</p>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Wireframes', 'UX Design', 'Design Process', 'User Experience'],
    relatedPosts: [
      {
        title: 'How to Design Beyond Aesthetics: Creating Meaningful User Experiences',
        excerpt: 'Discover how to create designs that go beyond visual appeal to deliver truly impactful user experiences that solve real problems.',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Balancing Creativity and Usability: 5 Tips for Better UI/UX Design',
        excerpt: 'Learn how to strike the perfect balance between creative expression and functional design that users actually want to use.',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  'creativity-usability-balance': {
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
  'agile-project-management-lessons': {
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
  'data-to-decisions-analysis': {
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
  'dhaka-to-montreal-journey': {
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
  'wearing-many-hats-reflection': {
    title: 'What I Learned from Wearing Many Hats: Designer, Manager, Analyst',
    date: 'December 10, 2024',
    author: 'Mahimur Rahman Khan',
    category: 'Reflection',
    readTime: '8 min read',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Throughout my career, I've had the privilege of wearing many hats – from a UI/UX Designer crafting intuitive interfaces to a Project Manager orchestrating complex deliveries, and a Business Analyst translating data into strategic decisions. Each role has offered a unique lens through which to view product development, and the cumulative experience has been invaluable in shaping a holistic understanding of the tech landscape.</p>
      
      <div class="my-12 p-6 bg-ghost-black/30 rounded-xl border border-blue-400/20">
        <blockquote class="text-xl italic text-blue-300">
          "The more perspectives you gain, the clearer the overall vision becomes."
        </blockquote>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">The Designer's Eye</h2>
      <p class="mb-6 text-lg leading-relaxed">As a UI/UX Designer, my focus was on empathy – understanding user needs, crafting seamless flows, and creating visually appealing interfaces. This role taught me the importance of user-centered design principles and the power of intuitive interactions. It's where I learned to speak the language of visuals and user journeys.</p>
      
      <div class="my-12">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Designer at Work" class="rounded-xl shadow-2xl" />
        <p class="text-center text-ash-gray mt-4">The creative process of a UI/UX designer</p>
      </div>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">The Manager's Orchestration</h2>
      <p class="mb-6 text-lg leading-relaxed">Stepping into Project Management, my perspective shifted to orchestration. Here, it was about coordinating teams, managing timelines, mitigating risks, and ensuring that projects were delivered on time and within scope. This role honed my organizational skills, my ability to motivate teams, and my understanding of the broader project lifecycle.</p>
      
      <h2 class="text-3xl font-bold mb-6 mt-12 bg-gradient-to-r from-slate-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">The Analyst's Insight</h2>
      <p class="mb-6 text-lg leading-relaxed">My experience as a Business Analyst taught me the critical skill of data interpretation. It was about diving deep into metrics, identifying trends, and translating complex data into clear, actionable insights for stakeholders. This role reinforced the importance of data-driven decision-making and strategic thinking.</p>
      
      <div class="my-12 p-6 bg-blue-500/10 rounded-xl border border-blue-400/30">
        <h3 class="text-xl font-bold mb-4 text-blue-300">The Synergy of Roles</h3>
        <p class="text-ash-gray">What I've learned most profoundly is how these roles are interconnected. A designer who understands project constraints and business metrics creates more realistic and impactful designs. A manager who appreciates user experience and data insights can guide a team more effectively. An analyst who understands design principles can better articulate the 'why' behind the numbers. This multi-faceted experience allows me to approach challenges with a comprehensive understanding, fostering better collaboration and more successful outcomes.</p>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Career Development', 'Multidisciplinary', 'Product Development', 'Leadership'],
    relatedPosts: [
      {
        title: 'From Dhaka to Montreal: My Journey into Design, Tech, and Leadership',
        excerpt: 'A personal story of growth, challenges, and discoveries across two continents, from Bangladesh to Canada.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Agile in Action: 7 Project Management Lessons for Faster Delivery',
        excerpt: 'Practical insights from managing multiple projects using Agile methodologies, with real-world examples and actionable tips.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
    <article className="min-h-[80vh] py-8 px-4">
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
                  const relatedId = (Object.keys(blogData) as Array<keyof typeof blogData>).find(
                    key => blogData[key].title === relatedPost.title
                  );
                  return (
                    <button
                      key={relatedPost.title}
                      className="bg-ghost-black/30 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 text-left focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 touch-manipulation w-full"
                      style={{ cursor: relatedId ? 'pointer' : 'default' }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (relatedId) {
                          navigate(`/blog/${relatedId}`);
                        }
                      }}
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