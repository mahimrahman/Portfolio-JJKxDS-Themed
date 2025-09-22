import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  category: string;
  tools: string[];
  role: string[];
  process: {
    step: string;
    description: string;
  }[];
  screenshots: string[];
}

const projects: Project[] = [
  {
    id: 'legym',
    title: 'LeGym Concordia Mobile Application UI',
    tagline: 'Modern Fitness Management System',
    shortDescription: 'Comprehensive gym management mobile app for Concordia University',
    fullDescription: 'A sophisticated mobile application designed for gym management at Concordia University. The app provides seamless user experience for gym members to book equipment, track workouts, manage memberships, and access fitness resources. Features include real-time equipment availability, personalized workout plans, and social fitness tracking.',
    thumbnail: '/assets/UI UX/LeGym/LeGym_UI_Design_1.jpg',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping', 'User Testing'],
    process: [
      { step: 'Research', description: 'University gym user interviews and behavioral analysis' },
      { step: 'Wireframe', description: 'App architecture and user flow mapping' },
      { step: 'Prototype', description: 'Interactive prototypes with micro-interactions' },
      { step: 'Test', description: 'Usability testing with student focus groups' }
    ],
    screenshots: [
      '/assets/UI UX/LeGym/LeGym_UI_Design_1.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_2.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_3.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_4.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_5.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_6.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_7.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_8.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_9.jpg',
      '/assets/UI UX/LeGym/LeGym_UI_Design_10.jpg'
    ]
  },
  {
    id: 'artemis',
    title: 'Artemis Arthouse UI',
    tagline: 'Elegant Art Gallery Experience',
    shortDescription: 'Sophisticated web interface for contemporary art gallery',
    fullDescription: 'An elegant and immersive web interface designed for Artemis Arthouse, showcasing contemporary art collections with a focus on visual storytelling. The design emphasizes clean aesthetics, intuitive navigation, and seamless artwork browsing experience. Features include virtual gallery tours, artist portfolios, and exhibition management.',
    thumbnail: '/assets/UI UX/Artemis Arthouse/artemis1.png',
    category: 'Web App',
    tools: ['Figma', 'Adobe Creative Suite', 'Webflow'],
    role: ['UI Design', 'Visual Design', 'Art Direction'],
    process: [
      { step: 'Research', description: 'Art gallery user behavior and aesthetic preferences study' },
      { step: 'Wireframe', description: 'Gallery navigation and artwork presentation flows' },
      { step: 'Prototype', description: 'High-fidelity visual designs and interactions' },
      { step: 'Test', description: 'A/B testing for optimal artwork display layouts' }
    ],
    screenshots: [
      '/assets/UI UX/Artemis Arthouse/artemis1.png',
      '/assets/UI UX/Artemis Arthouse/artemis2.png',
      '/assets/UI UX/Artemis Arthouse/artemis3.png',
      '/assets/UI UX/Artemis Arthouse/artemis4.png',
      '/assets/UI UX/Artemis Arthouse/artemis5.png',
      '/assets/UI UX/Artemis Arthouse/artemis6.png',
      '/assets/UI UX/Artemis Arthouse/artemis7.png',
      '/assets/UI UX/Artemis Arthouse/artemis8.png',
      '/assets/UI UX/Artemis Arthouse/artemis9.png'
    ]
  },
  {
    id: 'bdgsa',
    title: 'Bangladeshi Graduate Students\' Association (BDGSA) UI',
    tagline: 'Community-Centered Digital Platform',
    shortDescription: 'Comprehensive platform for graduate student community engagement',
    fullDescription: 'A community-focused digital platform designed for the Bangladeshi Graduate Students\' Association, facilitating member connections, event management, and cultural activities. The interface prioritizes accessibility and cultural relevance while providing modern functionality for student networking, event coordination, and resource sharing.',
    thumbnail: '/assets/UI UX/BDGSA/bdgsa1.png',
    category: 'Web Platform',
    tools: ['Figma', 'Sketch', 'InVision', 'Adobe XD'],
    role: ['UX Research', 'UI Design', 'Community Analysis'],
    process: [
      { step: 'Research', description: 'Graduate student community needs assessment' },
      { step: 'Wireframe', description: 'Community platform architecture and member flows' },
      { step: 'Prototype', description: 'Cultural-sensitive design prototypes' },
      { step: 'Test', description: 'Community feedback integration and accessibility testing' }
    ],
    screenshots: [
      '/assets/UI UX/BDGSA/bdgsa1.png',
      '/assets/UI UX/BDGSA/bdgsa2.png',
      '/assets/UI UX/BDGSA/bdgsa3.png',
      '/assets/UI UX/BDGSA/bdgsa4.png',
      '/assets/UI UX/BDGSA/bdgsa5.png',
      '/assets/UI UX/BDGSA/bdgsa6.png',
      '/assets/UI UX/BDGSA/bdgsa7.png',
      '/assets/UI UX/BDGSA/bdgsa8.png'
    ]
  },
  {
    id: 'cafe',
    title: 'Simple Cafe Menu Design (FreeCodeCamp)',
    tagline: 'Clean & Appetizing Menu Interface',
    shortDescription: 'Responsive cafe menu design focusing on user-friendly food ordering',
    fullDescription: 'A clean and appetizing cafe menu interface developed as part of FreeCodeCamp curriculum. The design emphasizes readability, visual hierarchy, and mobile-first responsive design. Features include categorized menu items, pricing display, and optimized food photography presentation for enhanced user experience.',
    thumbnail: '/assets/UI UX/Codecamp Cafe/cafe1.png',
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'Figma', 'Responsive Design'],
    role: ['Frontend Development', 'UI Design', 'Responsive Design'],
    process: [
      { step: 'Research', description: 'Cafe menu design patterns and user preferences' },
      { step: 'Wireframe', description: 'Menu layout and information hierarchy' },
      { step: 'Prototype', description: 'Responsive design implementation' },
      { step: 'Test', description: 'Cross-device compatibility and usability testing' }
    ],
    screenshots: [
      '/assets/UI UX/Codecamp Cafe/cafe1.png',
      '/assets/UI UX/Codecamp Cafe/cafe2.png',
      '/assets/UI UX/Codecamp Cafe/cafe3.png',
      '/assets/UI UX/Codecamp Cafe/cafe4.png',
      '/assets/UI UX/Codecamp Cafe/cafe5.png',
      '/assets/UI UX/Codecamp Cafe/cafe6.png',
      '/assets/UI UX/Codecamp Cafe/cafe7.png',
      '/assets/UI UX/Codecamp Cafe/cafe8.png',
      '/assets/UI UX/Codecamp Cafe/cafe9.png'
    ]
  },
  {
    id: 'fashionista',
    title: 'Fashionista Mobile App UI',
    tagline: 'Trendy Fashion Discovery Platform',
    shortDescription: 'Modern fashion app for style discovery and shopping',
    fullDescription: 'A contemporary mobile application designed for fashion enthusiasts to discover trends, create style profiles, and shop curated collections. The interface combines visual appeal with functional design, featuring personalized style recommendations, outfit coordination tools, and seamless shopping experiences.',
    thumbnail: '/assets/UI UX/fashionista/fashionista_1.png',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Principle', 'Sketch'],
    role: ['UI Design', 'UX Research', 'Fashion Analysis'],
    process: [
      { step: 'Research', description: 'Fashion app user behavior and trend analysis' },
      { step: 'Wireframe', description: 'Style discovery and shopping user flows' },
      { step: 'Prototype', description: 'Interactive fashion browsing prototypes' },
      { step: 'Test', description: 'Style preference testing and user feedback' }
    ],
    screenshots: [
      '/assets/UI UX/fashionista/fashionista_1.png',
      '/assets/UI UX/fashionista/fashionista_3.png',
      '/assets/UI UX/fashionista/fashionista_4.png',
      '/assets/UI UX/fashionista/fashionista_5.png',
      '/assets/UI UX/fashionista/fashionista_6.png',
      '/assets/UI UX/fashionista/fashionista_7.png',
      '/assets/UI UX/fashionista/fashionista_8.png',
      '/assets/UI UX/fashionista/fashionista_9.png',
      '/assets/UI UX/fashionista/fashionista_10.png',
      '/assets/UI UX/fashionista/fashionista_11.png'
    ]
  },
  {
    id: 'friendship',
    title: 'Simple Friendship Tribute Site',
    tagline: 'Heartfelt Digital Memorial',
    shortDescription: 'Emotional tribute website celebrating friendship bonds',
    fullDescription: 'A heartfelt digital tribute website designed to celebrate and commemorate meaningful friendships. The design focuses on emotional storytelling through visual elements, creating an intimate and personal browsing experience. Features include photo galleries, memory sharing, and interactive timeline of friendship milestones.',
    thumbnail: '/assets/UI UX/Simple Friendship Tribute Page/friendshiptribute1.png',
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    role: ['Web Development', 'UI Design', 'Content Strategy'],
    process: [
      { step: 'Research', description: 'Emotional design principles and memorial site analysis' },
      { step: 'Wireframe', description: 'Story flow and content presentation structure' },
      { step: 'Prototype', description: 'Interactive memory sharing features' },
      { step: 'Test', description: 'Emotional impact assessment and user feedback' }
    ],
    screenshots: [
      '/assets/UI UX/Simple Friendship Tribute Page/friendshiptribute1.png',
      '/assets/UI UX/Simple Friendship Tribute Page/friendshiptribute2.png',
      '/assets/UI UX/Simple Friendship Tribute Page/friendshiptribute3.png',
      '/assets/UI UX/Simple Friendship Tribute Page/friendshiptribute4.png',
      '/assets/UI UX/Simple Friendship Tribute Page/friendshiptribute5.png'
    ]
  },
  {
    id: 'soulcouture',
    title: 'Soul Couture Online Shopping UI',
    tagline: 'Luxury E-commerce Experience',
    shortDescription: 'Premium online shopping platform for luxury fashion',
    fullDescription: 'An elegant e-commerce platform designed for Soul Couture, focusing on luxury fashion retail. The interface combines sophisticated aesthetics with intuitive shopping functionality, featuring premium product showcases, personalized styling recommendations, and streamlined checkout processes for high-end fashion consumers.',
    thumbnail: '/assets/UI UX/SoulCouture Shopping/shopping_1.png',
    category: 'E-commerce',
    tools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision'],
    role: ['UI Design', 'E-commerce UX', 'Luxury Brand Strategy'],
    process: [
      { step: 'Research', description: 'Luxury shopping behavior and premium brand analysis' },
      { step: 'Wireframe', description: 'Premium shopping journey and product discovery flows' },
      { step: 'Prototype', description: 'High-end visual design and luxury interactions' },
      { step: 'Test', description: 'Luxury market user testing and conversion optimization' }
    ],
    screenshots: [
      '/assets/UI UX/SoulCouture Shopping/shopping_1.png',
      '/assets/UI UX/SoulCouture Shopping/shopping_2.png',
      '/assets/UI UX/SoulCouture Shopping/shopping_3.png',
      '/assets/UI UX/SoulCouture Shopping/shopping_4.png',
      '/assets/UI UX/SoulCouture Shopping/shopping_5.png',
      '/assets/UI UX/SoulCouture Shopping/shopping_6.png',
      '/assets/UI UX/SoulCouture Shopping/shopping_7.png'
    ]
  }
];

// Note: SakuraPetal component removed as it's not used in the current design

// Project card component
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-deep-charcoal via-ghost-black to-deep-charcoal rounded-3xl overflow-hidden shadow-2xl border border-zenitsu-lightning/30 hover:border-zenitsu-lightning/80 transition-all duration-500 cursor-pointer"
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(255, 208, 0, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zenitsu-lightning/10 via-transparent to-domain-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project thumbnail */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame text-deep-charcoal text-xs font-bold rounded-full">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-snow-white mb-2 group-hover:text-zenitsu-lightning transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-ash-gray text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        
        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 3).map((tool, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-domain-violet/20 text-domain-violet text-xs rounded-lg border border-domain-violet/30"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="px-2 py-1 bg-ash-gray/20 text-ash-gray text-xs rounded-lg">
              +{project.tools.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-zenitsu-lightning text-sm font-medium">View Details</span>
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame rounded-full flex items-center justify-center"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-4 h-4 text-deep-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Note: ImageLightbox component removed - now using inline carousel overlay

// Project detail modal component
interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handleLightboxClose = () => {
    setLightboxIndex(null);
  };

  const handleLightboxNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % project.screenshots.length);
    }
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? project.screenshots.length - 1 : lightboxIndex - 1);
    }
  };

  // Keyboard controls for carousel overlay
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleLightboxClose();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <motion.div
      className="fixed inset-0 bg-deep-charcoal/95 backdrop-blur-xl z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl text-zenitsu-lightning hover:text-snow-white transition-all duration-300 font-medium shadow-lg"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </motion.button>
      </motion.div>

      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
          {project.title}
        </motion.h1>
            <motion.p 
              className="text-xl text-ash-gray mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
          {project.tagline}
        </motion.p>
            
            {/* Project meta */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-zenitsu-lightning rounded-full"></span>
                <span className="text-snow-white">{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-domain-violet rounded-full"></span>
                <span className="text-snow-white">{project.tools.length} Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-rengoku-flame rounded-full"></span>
                <span className="text-snow-white">{project.screenshots.length} Screens</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                className="bg-gradient-to-br from-ghost-black/50 to-deep-charcoal/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-snow-white mb-4">Project Overview</h3>
                <p className="text-ash-gray leading-relaxed text-lg">
          {project.fullDescription}
                </p>
              </motion.div>

              {/* Process */}
              <motion.div
                className="bg-gradient-to-br from-ghost-black/50 to-deep-charcoal/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-snow-white mb-6">Design Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.process.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame rounded-full flex items-center justify-center text-deep-charcoal font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-snow-white mb-1">{step.step}</h4>
                        <p className="text-ash-gray text-sm">{step.description}</p>
                      </div>
                    </motion.div>
            ))}
          </div>
        </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tools */}
              <motion.div
                className="bg-gradient-to-br from-ghost-black/50 to-deep-charcoal/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-bold text-snow-white mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-domain-violet/20 text-domain-violet text-sm rounded-lg border border-domain-violet/30"
                    >
                      {tool}
                    </span>
            ))}
          </div>
        </motion.div>

              {/* Role */}
              <motion.div
                className="bg-gradient-to-br from-ghost-black/50 to-deep-charcoal/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="font-bold text-snow-white mb-4">My Role</h4>
                <div className="space-y-2">
                  {project.role.map((role, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-zenitsu-lightning rounded-full"></span>
                      <span className="text-ash-gray text-sm">{role}</span>
                    </div>
          ))}
        </div>
              </motion.div>
            </div>
          </div>

          {/* Screenshots Gallery */}
          <motion.div
            className="mb-12 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-snow-white mb-8 text-center">Project Gallery</h3>
            
            <div className="relative">
        <Swiper
                modules={[EffectCoverflow, Pagination, Navigation]}
                effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
          navigation={true}
                className="project-swiper"
                style={{
                  paddingBottom: '50px',
                }}
              >
                {project.screenshots.map((screenshot, index) => (
                  <SwiperSlide key={index} style={{ width: 'auto', maxWidth: '400px' }}>
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleImageClick(index)}
                    >
                      <img 
                        src={screenshot} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Click indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

              {/* Carousel Overlay Lightbox */}
      <AnimatePresence>
                {lightboxIndex !== null && (
                  <motion.div
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl rounded-2xl z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        handleLightboxClose();
                      }
                    }}
                  >
                    {/* Close button */}
                    <motion.button
                      onClick={handleLightboxClose}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>

                    {/* Navigation buttons */}
                    {project.screenshots.length > 1 && (
                      <>
                        <motion.button
                          onClick={() => handleLightboxPrev()}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </motion.button>
                        <motion.button
                          onClick={() => handleLightboxNext()}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10 shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </>
                    )}

                    {/* Image counter */}
                    <motion.div 
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm font-medium shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {lightboxIndex + 1} / {project.screenshots.length}
                    </motion.div>

                    {/* Main image container */}
                    <div className="relative max-w-[80%] max-h-[80%] flex items-center justify-center">
                      <motion.img
                        key={lightboxIndex}
                        src={project.screenshots[lightboxIndex]}
                        alt={`Screenshot ${lightboxIndex + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                        draggable={false}
                      />
                    </div>
                  </motion.div>
        )}
      </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </motion.div>
  );
};

const UIUXRecord: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Handle project selection from URL parameters
  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      } else {
        // Invalid project ID, remove from URL
        setSearchParams({});
      }
    } else {
      setSelectedProject(null);
    }
  }, [searchParams, setSearchParams]);

  // Handle browser back/forward for project modal
  useEffect(() => {
    const handlePopState = () => {
      // This will be handled by the useEffect above when searchParams changes
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleProjectOpen = (project: Project) => {
    setSearchParams({ project: project.id });
  };

  const handleProjectClose = () => {
    setSearchParams({});
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        {/* Back to Portfolio Button */}
        <motion.div
          className="absolute top-6 left-6 z-40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl text-zenitsu-lightning hover:text-snow-white transition-all duration-300 font-medium shadow-lg group"
            onClick={(e) => {
              // Use browser's native back if coming from portfolio
              if (window.history.length > 1 && document.referrer.includes('#portfolio')) {
                e.preventDefault();
                window.history.back();
              }
            }}
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft size={18} />
            </motion.div>
            <span className="group-hover:underline">Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center py-20 px-4"
          style={{ y, opacity }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
            UI/UX Design
          </h1>
          <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />
          <p className="text-xl text-ash-gray mt-6 max-w-2xl mx-auto">
            Crafting intuitive and visually stunning digital experiences through thoughtful design and user-centered approach.
          </p>
        </motion.div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectOpen(project)}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetail
              project={selectedProject}
              onClose={handleProjectClose}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UIUXRecord; 
