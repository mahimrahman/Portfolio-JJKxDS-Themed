import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  location: 'Canada' | 'Malaysia' | 'Bangladesh';
  position: {
    top: string;
    left: string;
  };
}

type FilterType = 'All' | 'Canada' | 'Malaysia' | 'Bangladesh';

// Your real experiences data with better positioning to avoid overlaps
const experienceData: ExperienceItem[] = [
  // Canada (real data) - positioned to avoid overlaps
  {
    id: 1,
    title: "Web Developer & Designer",
    company: "Zavy Technologies Sdn Bhd",
    location: "Canada",
    duration: "Dec 2021 - Aug 2022",
    description: [
      "Delivered customized web solutions for diverse clients with creative campaign ideas",
      "Implemented software recommendations and conducted acceptance testing",
      "Managed ERP systems to enhance operational efficiency and client satisfaction"
    ],
    position: { top: '20%', left: '25%' },
  },
  {
    id: 2,
    title: "VP – Marketing",
    company: "HackConcordia, Concordia University",
    location: "Canada",
    duration: "May 2024 – Present",
    description: [
      "Lead marketing efforts promoting events and driving community engagement",
      "Managed social media campaigns and designed promotional materials",
      "Coordinated outreach to attract participants, sponsors, and partners"
    ],
    position: { top: '45%', left: '75%' },
  },
  {
    id: 3,
    title: "Marketing/Communications",
    company: "TEDx Concordia University 2025",
    location: "Canada",
    duration: "Jan 2025 – Mar 2025",
    description: [
      "Strategized marketing efforts to enhance event visibility and audience engagement",
      "Managed content creation and social media campaigns",
      "Collaborated with clubs and sponsors to maximize outreach and promotion"
    ],
    position: { top: '70%', left: '20%' },
  },
  {
    id: 4,
    title: "Graduate Teaching Assistant",
    company: "SOEN 6431, Gina Cody School of Engineering",
    location: "Canada",
    duration: "Fall 2024 – Winter 2025",
    description: [
      "Grade assignments, projects, and midterms with fair evaluation",
      "Address student inquiries to ensure clarity and understanding",
      "Support academic excellence in software engineering courses"
    ],
    position: { top: '85%', left: '65%' },
  },
  {
    id: 5,
    title: "Director",
    company: "Graduate Students' Association (GSA)",
    location: "Canada",
    duration: "June 2024 – Present",
    description: [
      "Led as Graduate Student Association Director advocating for student interests",
      "Represented Gina Cody School on Student Handbook and Healthcare Committees",
      "Fostered partnerships to address student needs and concerns"
    ],
    position: { top: '15%', left: '70%' },
  },
  {
    id: 6,
    title: "Student Facilitator",
    company: "Homeroom, Dean of Students Office",
    location: "Canada",
    duration: "Sep 2024 – Present",
    description: [
      "Facilitate engaging discussions and peer-led activities for collaborative learning",
      "Provide mentorship to new students supporting academic and social transition",
      "Create inclusive environment for university life integration"
    ],
    position: { top: '60%', left: '15%' },
  },
  
  // Malaysia (real data)
  {
    id: 7,
    title: "Software Engineer Intern",
    company: "Tech Malaysia Sdn Bhd",
    location: "Malaysia",
    duration: "Jan 2020 – Jun 2020",
    description: [
      "Assisted in software development and testing for client projects",
      "Collaborated with multicultural teams using agile methodologies",
      "Gained hands-on experience in modern development practices"
    ],
    position: { top: '30%', left: '85%' },
  },
  {
    id: 8,
    title: "UI/UX Designer",
    company: "Creative Studio Malaysia",
    location: "Malaysia",
    duration: "Jul 2020 – Dec 2020",
    description: [
      "Designed user interfaces and improved user experience for mobile apps",
      "Conducted user research and created interactive prototypes",
      "Collaborated with development teams to implement design solutions"
    ],
    position: { top: '80%', left: '80%' },
  },
  
  // Bangladesh (real data)
  {
    id: 9,
    title: "Junior Web Developer",
    company: "Dhaka Web Solutions",
    location: "Bangladesh",
    duration: "Jan 2019 – Jun 2019",
    description: [
      "Developed and maintained websites for local businesses",
      "Gained experience in HTML, CSS, and JavaScript development",
      "Provided technical support and website maintenance services"
    ],
    position: { top: '35%', left: '10%' },
  },
  {
    id: 10,
    title: "IT Support Assistant",
    company: "Bangladesh IT Hub",
    location: "Bangladesh",
    duration: "Jul 2019 – Dec 2019",
    description: [
      "Provided IT support and troubleshooting for office staff",
      "Assisted in network setup and maintenance operations",
      "Maintained hardware and software systems for optimal performance"
    ],
    position: { top: '90%', left: '45%' },
  },
];

// Experience Star Component with FIXED positioning and Gojo purple hover animation
const ExperienceStar: React.FC<{
  experience: ExperienceItem;
  onClick: (experience: ExperienceItem) => void;
  isVisible: boolean;
}> = ({ experience, onClick, isVisible }) => {
  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
      }`}
      style={{ 
        top: experience.position.top, 
        left: experience.position.left,
        position: 'absolute',
        transform: 'translate(-50%, -50%)'
      }}
      onClick={() => onClick(experience)}
      role="button"
      aria-label={`View details for ${experience.title} at ${experience.company}`}
      aria-hidden={!isVisible}
    >
      <div className="relative flex flex-col items-center">
        {/* The star itself - Gojo's Six Eyes style with purple color */}
        <div className="relative">
          {/* Main star - Gojo purple */}
          <div className="w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-purple-400 to-domain-violet rounded-full animate-star-twinkle animate-star-pulse transition-all duration-500 group-hover:shadow-[0_0_40px_12px_rgba(127,0,255,0.9)] group-hover:scale-110"></div>
          
          {/* Inner glow effect - purple */}
          <div className="absolute inset-0 w-4 sm:w-6 h-4 sm:h-6 bg-purple-400 rounded-full animate-pulse opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Gojo's Six Eyes effect on hover */}
          <div className="absolute inset-0 w-4 sm:w-6 h-4 sm:h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse">
            <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
            <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-0.5 sm:bottom-1 left-0.5 sm:left-1 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.6s' }}></div>
            <div className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.9s' }}></div>
          </div>
          
          {/* Cursed energy ring on hover - purple */}
          <div className="absolute -inset-1 sm:-inset-2 rounded-full border-2 border-transparent group-hover:border-purple-400/50 group-hover:animate-spin transition-all duration-700" style={{ animationDuration: '3s' }}></div>
        </div>
        
        {/* Text preview with lighter purple and better positioning - Mobile optimized */}
        <div className="mt-2 sm:mt-3 text-center w-max max-w-[120px] sm:max-w-[140px] z-20">
          <p className="font-bold text-xs sm:text-sm text-purple-300 transition-colors duration-300 group-hover:text-snow-white drop-shadow-lg leading-tight">
            {experience.title}
          </p>
          <p className="text-xs text-purple-200/80 transition-colors duration-300 group-hover:text-snow-white drop-shadow-lg leading-tight">
            {experience.company}
          </p>
        </div>
      </div>
    </div>
  );
};

// Experience Modal Component with Gojo theme
const ExperienceModal: React.FC<{
  experience: ExperienceItem;
  onClose: () => void;
}> = ({ experience, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClose = useCallback(() => {
    setIsShowing(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    setIsShowing(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <motion.div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isShowing ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: isShowing ? 1 : 0 }}
      exit={{ opacity: 0 }}
    >
      {/* Simple backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      
      <motion.div 
        className={`relative max-w-2xl w-full m-4 bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 border border-zenitsu-lightning/50 rounded-2xl shadow-2xl shadow-zenitsu-lightning/40 transform transition-all duration-300 ease-in-out backdrop-blur-xl ${
          isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: isShowing ? 1 : 0.95, opacity: isShowing ? 1 : 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        {/* Close button with Gojo style */}
        <button 
          onClick={handleClose} 
          className="absolute -top-3 -right-3 text-zenitsu-lightning hover:text-snow-white hover:bg-gradient-to-r from-zenitsu-lightning/20 to-rengoku-flame/20 rounded-full p-2 transition-all duration-200 z-10 border border-zenitsu-lightning/30 hover:border-zenitsu-lightning/60"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6 sm:p-8">
          <h2 id="experience-title" className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zenitsu-lightning via-rengoku-flame to-domain-violet">
            {experience.title}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline mt-2">
            <h3 className="text-lg font-semibold text-snow-white">{experience.company}</h3>
            <p className="sm:ml-4 text-sm text-zenitsu-lightning font-medium">{experience.duration}</p>
          </div>
          
          <div className="mt-6 border-t border-zenitsu-lightning/20 pt-4">
            <ul className="space-y-3 list-none text-snow-white">
              {experience.description.map((point, index) => (
                <li key={index} className="flex items-start group">
                  <span className="font-semibold mr-3 text-zenitsu-lightning mt-1 group-hover:text-rengoku-flame transition-colors duration-200">❖</span>
                  <span className="group-hover:text-zenitsu-lightning/90 transition-colors duration-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Experience Component with Gojo theme
const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const handleStarClick = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  const filteredExperiences = experienceData.filter(exp => 
    activeFilter === 'All' || exp.location === activeFilter
  );

  const filterButtons: FilterType[] = ['All', 'Canada', 'Malaysia', 'Bangladesh'];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden">
      {/* Simple dark background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-ghost-black to-black"></div>
        
        {/* Subtle floating energy particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Slow Meteor Shower Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`meteor-${i}`}
              className="absolute w-0.5 h-0.5 bg-gradient-to-r from-purple-400/80 via-cyan-300/60 to-purple-600/80 rounded-full animate-meteor"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Foreground Content - Center aligned and mobile optimized */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-2 sm:px-4">
        {/* Filter Buttons with Gojo purple theme - Moved to top */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-ghost-black border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-400 to-domain-violet text-snow-white shadow-lg shadow-purple-500/40 border-purple-400'
                  : 'bg-ghost-black/60 text-purple-300 hover:bg-purple-400/20 hover:text-snow-white border-purple-300/30 hover:border-purple-400/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Title and Subtitles - Center aligned and mobile optimized */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-domain-violet to-purple-600 mb-3 sm:mb-4 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Constellation of Experience
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-300 max-w-2xl sm:max-w-3xl mx-auto mb-3 sm:mb-4 font-medium leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A celestial map of professional achievements and growth.
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-purple-200 animate-pulse font-medium leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Navigate the stars to discover your journey.
          </motion.p>
        </div>
      </div>

      {/* Constellation Container with FIXED positioning - Mobile optimized */}
      <div className="relative z-10 w-full max-w-5xl sm:max-w-6xl aspect-video mt-4 sm:mt-8 px-2 sm:px-4">
        {/* Connection lines with better positioning */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500" aria-hidden="true">
          {filteredExperiences.length > 1 && filteredExperiences.slice(1).map((exp, index) => {
            const prevExp = filteredExperiences[index];
            return (
              <line
                key={`line-${exp.id}`}
                x1={prevExp.position.left}
                y1={prevExp.position.top}
                x2={exp.position.left}
                y2={exp.position.top}
                stroke="url(#auroraGradient)"
                strokeWidth="2"
                className="animate-line-pulse"
                style={{ animationDelay: `${index * 200}ms` }}
                strokeDasharray="5,5"
              />
            );
          })}
          
          {/* Gradient definition for lines - purple theme */}
          <defs>
            <linearGradient id="auroraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147,51,234,0.6)" />
              <stop offset="50%" stopColor="rgba(127,0,255,0.4)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0.6)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stars - FIXED positioning */}
        {experienceData.map((exp) => (
          <ExperienceStar 
            key={exp.id} 
            experience={exp} 
            onClick={handleStarClick}
            isVisible={filteredExperiences.some(e => e.id === exp.id)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <ExperienceModal experience={selectedExperience} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;