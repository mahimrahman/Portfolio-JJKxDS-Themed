import React, { useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
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
    id: 'project1',
    title: 'E-Commerce Mobile App',
    tagline: 'Redefining Digital Shopping',
    shortDescription: 'Modern shopping experience with seamless checkout',
    fullDescription: 'A comprehensive e-commerce platform designed to provide users with an intuitive and enjoyable shopping experience. The app features advanced product discovery, personalized recommendations, and a streamlined checkout process.',
    thumbnail: 'https://placehold.co/400x500/1a1a2e/fff?text=E-Commerce+App',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping'],
    process: [
      { step: 'Research', description: 'User interviews and market analysis' },
      { step: 'Wireframe', description: 'Low-fidelity prototypes and user flows' },
      { step: 'Prototype', description: 'Interactive prototypes and user testing' },
      { step: 'Test', description: 'Usability testing and iteration' }
    ],
    screenshots: Array.from({ length: 10 }).map((_, i) => 
      `https://placehold.co/400x500/1a1a2e/fff?text=Screen+${i + 1}`
    )
  },
  {
    id: 'project2',
    title: 'Healthcare Dashboard',
    tagline: 'Streamlined patient management system',
    shortDescription: 'Streamlined patient management system',
    fullDescription: 'A comprehensive healthcare management system designed to help medical professionals efficiently manage patient data, appointments, and treatment plans. The dashboard provides intuitive data visualization and quick access to critical information.',
    thumbnail: 'https://placehold.co/400x500/1a1a2e/fff?text=Healthcare+Dashboard',
    category: 'Web App',
    tools: ['Figma', 'Sketch', 'InVision'],
    role: ['UX Design', 'Information Architecture'],
    process: [
      { step: 'Research', description: 'Stakeholder interviews and workflow analysis' },
      { step: 'Wireframe', description: 'Information architecture and user flows' },
      { step: 'Prototype', description: 'Interactive prototypes and usability testing' },
      { step: 'Test', description: 'User testing and feedback implementation' }
    ],
    screenshots: Array.from({ length: 10 }).map((_, i) => 
      `https://placehold.co/400x500/1a1a2e/fff?text=Screen+${i + 1}`
    )
  },
  {
    id: 'project3',
    title: 'Fitness Tracking App',
    tagline: 'Personalized workout and progress tracking',
    shortDescription: 'Personalized workout and progress tracking',
    fullDescription: 'A mobile application that helps users track their fitness journey, set goals, and monitor progress. The app features personalized workout plans, progress tracking, and social features for motivation.',
    thumbnail: 'https://placehold.co/400x500/1a1a2e/fff?text=Fitness+App',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping'],
    process: [
      { step: 'Research', description: 'User needs and fitness app analysis' },
      { step: 'Wireframe', description: 'App structure and navigation flows' },
      { step: 'Prototype', description: 'Interactive prototype and user testing' },
      { step: 'Test', description: 'Beta testing and feature refinement' }
    ],
    screenshots: Array.from({ length: 10 }).map((_, i) => 
      `https://placehold.co/400x500/1a1a2e/fff?text=Screen+${i + 1}`
    )
  },
  {
    id: 'project4',
    title: 'Travel Planning Platform',
    tagline: 'Intuitive trip planning and booking experience',
    shortDescription: 'Intuitive trip planning and booking experience',
    fullDescription: 'A comprehensive travel platform that simplifies the trip planning process. Users can discover destinations, book accommodations, and create detailed itineraries all in one place.',
    thumbnail: 'https://placehold.co/400x500/1a1a2e/fff?text=Travel+App',
    category: 'Web App',
    tools: ['Figma', 'Sketch', 'InVision'],
    role: ['UX Design', 'UI Design', 'Prototyping'],
    process: [
      { step: 'Research', description: 'Travel behavior and user needs analysis' },
      { step: 'Wireframe', description: 'User flows and interface structure' },
      { step: 'Prototype', description: 'Interactive prototype development' },
      { step: 'Test', description: 'User testing and experience refinement' }
    ],
    screenshots: Array.from({ length: 10 }).map((_, i) => 
      `https://placehold.co/400x500/1a1a2e/fff?text=Screen+${i + 1}`
    )
  },
  {
    id: 'project5',
    title: 'Food Delivery Service',
    tagline: 'Seamless food ordering and delivery tracking',
    shortDescription: 'Seamless food ordering and delivery tracking',
    fullDescription: 'A mobile application that connects users with local restaurants and delivery services. Features include real-time order tracking, restaurant recommendations, and easy payment options.',
    thumbnail: 'https://placehold.co/400x500/1a1a2e/fff?text=Food+Delivery',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping'],
    process: [
      { step: 'Research', description: 'User behavior and market analysis' },
      { step: 'Wireframe', description: 'Order flow and interface design' },
      { step: 'Prototype', description: 'Interactive prototype testing' },
      { step: 'Test', description: 'Usability testing and optimization' }
    ],
    screenshots: Array.from({ length: 10 }).map((_, i) => 
      `https://placehold.co/400x500/1a1a2e/fff?text=Screen+${i + 1}`
    )
  },
  {
    id: 'project6',
    title: 'Social Media Dashboard',
    tagline: 'Comprehensive social media management tool',
    shortDescription: 'Comprehensive social media management tool',
    fullDescription: 'A powerful dashboard for managing multiple social media accounts. Features include content scheduling, analytics, and engagement tracking across platforms.',
    thumbnail: 'https://placehold.co/400x500/1a1a2e/fff?text=Social+Dashboard',
    category: 'Web App',
    tools: ['Figma', 'Sketch', 'InVision'],
    role: ['UX Design', 'Information Architecture'],
    process: [
      { step: 'Research', description: 'Social media management needs' },
      { step: 'Wireframe', description: 'Dashboard layout and features' },
      { step: 'Prototype', description: 'Interactive prototype development' },
      { step: 'Test', description: 'User testing and feature refinement' }
    ],
    screenshots: Array.from({ length: 10 }).map((_, i) => 
      `https://placehold.co/400x500/1a1a2e/fff?text=Screen+${i + 1}`
    )
  },
  {
    id: 'project7',
    title: 'Educational Platform',
    tagline: 'Interactive learning experience',
    shortDescription: 'Interactive learning experience',
    fullDescription: 'An online learning platform that provides interactive courses and real-time feedback. Features include progress tracking, interactive exercises, and community engagement.',
    thumbnail: 'https://placehold.co/400x500/1a1a2e/fff?text=Education+App',
    category: 'Web App',
    tools: ['Figma', 'Adobe XD', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping'],
    process: [
      { step: 'Research', description: 'Learning behavior analysis' },
      { step: 'Wireframe', description: 'Course structure and interface' },
      { step: 'Prototype', description: 'Interactive learning features' },
      { step: 'Test', description: 'User testing and experience optimization' }
    ],
    screenshots: Array.from({ length: 10 }).map((_, i) => 
      `https://placehold.co/400x500/1a1a2e/fff?text=Screen+${i + 1}`
    )
  }
];

const ParallaxSection: React.FC<{ children: React.ReactNode; speed?: number; className?: string }> = ({ children, speed = 1, className = "" }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200 * speed]);
  return (
    <motion.section className={className} style={{ y }}>
      {children}
    </motion.section>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  useEffect(() => {
    scale.set(isHovered ? 1.05 : 1);
  }, [isHovered, scale]);

  return (
    <motion.div
      className="relative bg-deep-charcoal/50 backdrop-blur-sm rounded-xl overflow-hidden border border-domain-violet/20 cursor-pointer group"
      style={{ scale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <motion.span
          className="inline-block px-3 py-1 bg-domain-violet/20 text-snow-white rounded-full text-sm mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {project.category}
        </motion.span>
        <h3 className="text-xl font-mochiy text-snow-white mb-2 group-hover:text-zenitsu-lightning transition-colors">
          {project.title}
        </h3>
        <p className="text-snow-white/80 text-sm">{project.shortDescription}</p>
      </div>
    </motion.div>
  );
};

const AnimatedBackground: React.FC = () => (
  <motion.div
    className="fixed inset-0 z-0"
    initial={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
    animate={{
      background: [
        'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
        'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      ],
    }}
    transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
    style={{ pointerEvents: 'none', opacity: 1 }}
  >
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cursed-blue/30 blur-lg"
          style={{
            width: 40 + (i % 3) * 20,
            height: 40 + (i % 3) * 20,
            left: `${(i * 13) % 100}%`,
            top: `${(i * 23) % 100}%`,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, -20 + (i % 2) * 40, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            repeatType: 'mirror',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  </motion.div>
);

const ImageLightbox: React.FC<{
  images: string[];
  initialIndex: number;
  onClose: () => void;
}> = ({ images, initialIndex, onClose }) => {
  const [current, setCurrent] = useState(initialIndex);
  const total = images.length;

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % total);
    if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + total) % total);
    if (e.key === 'Escape') onClose();
  }, [onClose, total]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Drag/swipe support
  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) setCurrent((c) => (c + 1) % total);
    if (info.offset.x > 50) setCurrent((c) => (c - 1 + total) % total);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <motion.img
            src={images[current]}
            alt={`Screenshot ${current + 1}`}
            className="max-h-[80vh] max-w-[80vw] rounded-xl shadow-2xl bg-black"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          {/* Navigation arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-snow-white bg-black/40 rounded-full px-2 py-1 hover:bg-domain-violet/80"
            onClick={() => setCurrent((c) => (c - 1 + total) % total)}
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-snow-white bg-black/40 rounded-full px-2 py-1 hover:bg-domain-violet/80"
            onClick={() => setCurrent((c) => (c + 1) % total)}
            aria-label="Next image"
          >
            &#8594;
          </button>
          <button
            className="absolute top-2 right-2 text-3xl text-snow-white bg-black/40 rounded-full px-2 py-1 hover:bg-rengoku-flame/80"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectDetail: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  // Lightbox state
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIdx === null) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, lightboxIdx]);

  return (
    <motion.div
      className="fixed inset-0 overflow-y-auto z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatedBackground />
      {/* Parallax Hero Section */}
      <ParallaxSection speed={0.5} className="relative pt-28 pb-10 flex flex-col items-center text-center min-h-[40vh] md:min-h-[30vh]">
        <motion.h1 className="text-4xl md:text-6xl font-mochiy bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame bg-clip-text text-transparent mb-2 drop-shadow-lg" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          {project.title}
        </motion.h1>
        <motion.p className="text-zenitsu-lightning font-anime text-lg md:text-2xl mb-4" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
          {project.tagline}
        </motion.p>
        <motion.p className="text-snow-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}>
          {project.fullDescription}
        </motion.p>
      </ParallaxSection>

      {/* Parallax Info Section */}
      <ParallaxSection speed={0.8} className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 py-6 md:py-8">
        <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <h3 className="text-zenitsu-lightning font-anime mb-3 text-base md:text-xl">Tools Used</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.tools.map((tool: string, idx: number) => (
              <motion.span key={idx} className="px-3 md:px-4 py-1 bg-domain-violet/80 text-snow-white rounded-full text-sm md:text-base font-semibold shadow-md" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: idx * 0.08 }}>
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <h3 className="text-zenitsu-lightning font-anime mb-3 text-base md:text-xl">My Role</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.role.map((role: string, idx: number) => (
              <motion.span key={idx} className="px-3 md:px-4 py-1 bg-rengoku-flame/80 text-snow-white rounded-full text-sm md:text-base font-semibold shadow-md" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: idx * 0.08 }}>
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </ParallaxSection>

      {/* Parallax Process Timeline */}
      <ParallaxSection speed={1.1} className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-12">
        <h3 className="text-zenitsu-lightning font-anime mb-6 md:mb-8 text-lg md:text-2xl text-center">Design Process</h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          {project.process.map((step: any, idx: number) => (
            <motion.div key={idx} className="bg-deep-charcoal/70 p-4 md:p-6 rounded-2xl border border-domain-violet/30 shadow-lg flex-1 min-w-[140px] md:min-w-[180px] text-center" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.12 }}>
              <h4 className="text-zenitsu-lightning font-anime mb-2 text-base md:text-lg">{step.step}</h4>
              <p className="text-snow-white/80 text-sm md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>

      {/* Animated Image Slider Section */}
      <ParallaxSection speed={1.3} className="relative z-20 max-w-5xl mx-auto px-4 py-10 md:py-16">
        <h3 className="text-zenitsu-lightning font-anime mb-6 md:mb-8 text-lg md:text-2xl text-center">Key Screens</h3>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 200, modifier: 1.5, slideShadows: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
        >
          {project.screenshots.map((screenshot: string, idx: number) => (
            <SwiperSlide key={idx} className="w-[180px] h-[220px] md:w-[240px] md:h-[300px]">
              <motion.div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl cursor-pointer" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: idx * 0.07 }} onClick={() => setLightboxIdx(idx)}>
                <img src={screenshot} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ParallaxSection>
      <AnimatePresence>
        {lightboxIdx !== null && (
          <ImageLightbox
            images={project.screenshots}
            initialIndex={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const UIUXRecord: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative min-h-screen bg-deep-charcoal overflow-hidden">
      {/* Parallax Background Layers */}
      <ParallaxSection speed={0.5}>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal via-cursed-blue/20 to-deep-charcoal" />
      </ParallaxSection>
      <ParallaxSection speed={0.8}>
        <div className="absolute inset-0 grid-pattern opacity-5" />
      </ParallaxSection>
      <ParallaxSection speed={1.2}>
        <div className="absolute inset-0 bg-gradient-to-r from-domain-violet/10 to-rengoku-flame/10" />
      </ParallaxSection>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-mochiy bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame bg-clip-text text-transparent mb-6">
            UI/UX Design
          </h1>
          <p className="text-snow-white/80 text-lg md:text-xl max-w-2xl mx-auto px-4">
            Exploring the intersection of aesthetics and functionality through user-centered design
          </p>
        </motion.div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetail
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UIUXRecord; 