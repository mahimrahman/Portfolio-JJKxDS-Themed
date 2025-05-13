import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  role: string[];
  problem: string;
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
    description: 'A modern e-commerce platform focused on user experience and seamless shopping.',
    tools: ['Figma', 'Adobe XD', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping'],
    problem: 'Users struggled with complex checkout processes and product discovery.',
    process: [
      { step: 'Research', description: 'User interviews and market analysis' },
      { step: 'Wireframe', description: 'Low-fidelity prototypes and user flows' },
      { step: 'Design', description: 'High-fidelity UI and component library' },
      { step: 'Prototype', description: 'Interactive prototypes and user testing' }
    ],
    screenshots: Array.from({ length: 5 }).map((_, i) => 
      `https://placehold.co/800x1600/1a1a2e/fff?text=Screen+${i + 1}`
    )
  },
  {
    id: 'project2',
    title: 'Healthcare Dashboard',
    description: 'A comprehensive healthcare management system for medical professionals.',
    tools: ['Figma', 'Sketch', 'InVision'],
    role: ['UX Design', 'Information Architecture'],
    problem: 'Medical staff needed a more efficient way to manage patient data.',
    process: [
      { step: 'Research', description: 'Stakeholder interviews and workflow analysis' },
      { step: 'Wireframe', description: 'Information architecture and user flows' },
      { step: 'Design', description: 'Dashboard UI and data visualization' },
      { step: 'Prototype', description: 'Interactive prototypes and usability testing' }
    ],
    screenshots: Array.from({ length: 5 }).map((_, i) => 
      `https://placehold.co/800x1600/1a1a2e/fff?text=Screen+${i + 1}`
    )
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      className="relative bg-deep-charcoal/50 backdrop-blur-sm rounded-xl overflow-hidden border border-domain-violet/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <motion.h3 
          className="text-2xl md:text-3xl font-mochiy text-snow-white mb-4"
          animate={{ color: isHovered ? '#FF4E00' : '#FFFFFF' }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-snow-white/80 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-domain-violet/20 text-snow-white rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <h4 className="text-zenitsu-lightning font-anime mb-2">My Role</h4>
          <div className="flex flex-wrap gap-2">
            {project.role.map((role, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-rengoku-flame/20 text-snow-white rounded-full text-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-zenitsu-lightning font-anime mb-2">Problem Statement</h4>
          <p className="text-snow-white/80">{project.problem}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-zenitsu-lightning font-anime mb-2">Design Process</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.process.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-deep-charcoal/50 p-4 rounded-lg border border-domain-violet/20"
                whileHover={{ scale: 1.05 }}
              >
                <h5 className="text-snow-white font-anime mb-1">{step.step}</h5>
                <p className="text-snow-white/60 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <h4 className="text-zenitsu-lightning font-anime mb-4">Key Screens</h4>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full"
          >
            {project.screenshots.map((screenshot, idx) => (
              <SwiperSlide key={idx} className="w-[200px] h-[400px]">
                <motion.div
                  className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(screenshot)}
                >
                  <img
                    src={screenshot}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-snow-white text-2xl hover:text-zenitsu-lightning transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <motion.img
              src={selectedImage}
              alt="Selected screenshot"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const UIUXRecord: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative min-h-screen bg-deep-charcoal overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal via-cursed-blue/20 to-deep-charcoal" />
        <div className="absolute inset-0 grid-pattern opacity-5" />
      </motion.div>

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

        <div className="container mx-auto px-4 py-12 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIUXRecord; 