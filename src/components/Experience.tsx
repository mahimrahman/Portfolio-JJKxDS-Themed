import React, { useState, useEffect, useCallback, useMemo } from 'react';

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
  // Mobile-specific positioning
  mobilePosition?: {
    top: string;
    left: string;
  };
}

type FilterType = 'All' | 'Canada' | 'Malaysia' | 'Bangladesh';

// Your real experiences data with responsive positioning
const experienceData: ExperienceItem[] = [
  // Canada (real data) - positioned to avoid overlaps on both desktop and mobile
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
    mobilePosition: { top: '15%', left: '20%' },
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
    mobilePosition: { top: '35%', left: '75%' },
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
    mobilePosition: { top: '55%', left: '20%' },
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
    mobilePosition: { top: '75%', left: '65%' },
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
    mobilePosition: { top: '10%', left: '70%' },
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
    mobilePosition: { top: '45%', left: '15%' },
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
    mobilePosition: { top: '25%', left: '80%' },
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
    mobilePosition: { top: '65%', left: '80%' },
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
    mobilePosition: { top: '30%', left: '10%' },
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
    mobilePosition: { top: '85%', left: '45%' },
  },
];

// Experience Star Component - Mobile-optimized with responsive positioning
const ExperienceStar: React.FC<{
  experience: ExperienceItem;
  onClick: (experience: ExperienceItem) => void;
  isVisible: boolean;
}> = ({ experience, onClick, isVisible }) => {
  // Use mobile positioning on small screens, desktop positioning on larger screens
  const getPosition = () => {
    if (window.innerWidth < 768) {
      return experience.mobilePosition || experience.position;
    }
    return experience.position;
  };

  const [position, setPosition] = useState(getPosition());

  // Update position on window resize
  useEffect(() => {
    const handleResize = () => {
      setPosition(getPosition());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [experience]);

  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
      }`}
      style={{ 
        top: position.top, 
        left: position.left,
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
          {/* Main star - Gojo purple - Mobile optimized sizing */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-domain-violet rounded-full animate-star-twinkle animate-star-pulse transition-all duration-500 group-hover:shadow-[0_0_40px_12px_rgba(127,0,255,0.9)] group-hover:scale-110"></div>
          
          {/* Inner glow effect - purple */}
          <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-purple-400 rounded-full animate-pulse opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Gojo's Six Eyes effect on hover - Mobile optimized */}
          <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse">
            <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 w-1 h-1 sm:w-1 sm:h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
            <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 w-1 h-1 sm:w-1 sm:h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-0.5 sm:bottom-1 left-0.5 sm:left-1 w-1 h-1 sm:w-1 sm:h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.6s' }}></div>
            <div className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 w-1 h-1 sm:w-1 sm:h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.9s' }}></div>
          </div>
          
          {/* Cursed energy ring on hover - purple */}
          <div className="absolute -inset-1 sm:-inset-2 rounded-full border-2 border-transparent group-hover:border-purple-400/50 group-hover:animate-spin transition-all duration-700" style={{ animationDuration: '3s' }}></div>
        </div>
        
        {/* Text preview with better mobile positioning and readability */}
        <div className="mt-2 sm:mt-3 text-center w-max max-w-[100px] sm:max-w-[140px] z-20">
          <p className="font-bold text-[10px] sm:text-sm text-purple-300 transition-colors duration-300 group-hover:text-snow-white drop-shadow-lg leading-tight">
            {experience.title}
          </p>
          <p className="text-[8px] sm:text-xs text-purple-200/80 transition-colors duration-300 group-hover:text-snow-white drop-shadow-lg leading-tight">
            {experience.company}
          </p>
        </div>
      </div>
    </div>
  );
};

// Experience Modal Component - Mobile-optimized
const ExperienceModal: React.FC<{
  experience: ExperienceItem;
  onClose: () => void;
  isVisible: boolean;
}> = ({ experience, onClose, isVisible }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    
    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-300 opacity-100"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-title"
    >
      {/* Simple backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      
      <div 
        className="relative w-full max-w-sm sm:max-w-2xl bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 border border-domain-violet/50 rounded-2xl shadow-2xl shadow-purple-400/40 transform transition-all duration-300 ease-in-out backdrop-blur-xl scale-100 opacity-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button with Gojo style - Mobile optimized */}
            <button
          onClick={handleClose} 
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-purple-400 hover:text-snow-white hover:bg-gradient-to-r from-domain-violet/20 to-purple-400/20 rounded-full p-1.5 sm:p-2 transition-all duration-200 z-10 border border-domain-violet/30 hover:border-purple-400/60"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
            </button>
        
        <div className="p-4 sm:p-6 lg:p-8">
          <h2 id="experience-title" className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-domain-violet via-purple-400 to-snow-white leading-tight">
            {experience.title}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline mt-2 sm:mt-3">
            <h3 className="text-base sm:text-lg font-semibold text-snow-white">{experience.company}</h3>
            <p className="sm:ml-4 text-sm text-purple-400 font-medium mt-1 sm:mt-0">{experience.duration}</p>
          </div>
          
          <div className="mt-4 sm:mt-6 border-t border-purple-400 pt-3 sm:pt-4">
            <ul className="space-y-2 sm:space-y-3 list-none text-snow-white">
              {experience.description.map((point, index) => (
                <li key={index} className="flex items-start group">
                  <span className="font-semibold mr-2 sm:mr-3 text-snow-white mt-0.5 sm:mt-1 text-sm sm:text-base">❖ {point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Experience Component - Mobile-first and responsive
const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const handleStarClick = useCallback((experience: ExperienceItem) => {
    setSelectedExperience(experience);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedExperience(null);
  }, []);

  const filteredExperiences = useMemo(() => 
    experienceData.filter(exp => activeFilter === 'All' || exp.location === activeFilter),
    [activeFilter]
  );

  const filterButtons: FilterType[] = ['All', 'Canada', 'Malaysia', 'Bangladesh'];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 overflow-hidden">
      {/* Simple dark background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-ghost-black to-black"></div>
        
        {/* Subtle floating energy particles - Reduced on mobile */}
        <div className="absolute inset-0">
          {Array.from({ length: window.innerWidth < 768 ? 8 : 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400/20 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Slow Meteor Shower Animation - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: window.innerWidth < 768 ? 4 : 8 }).map((_, i) => (
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

      {/* Foreground Content - Mobile-first responsive design */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-3 sm:px-4">
        
        {/* Title and Subtitles - Mobile-optimized typography */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rengoku-flame to-domain-violet pb-2 sm:pb-3 lg:pb-4 leading-tight px-2 animate-fade-in"
          >
            Constellation of Experience
          </h1>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto mb-2 sm:mb-3 lg:mb-4 font-medium leading-relaxed px-2 animate-fade-in-delay-1"
          >
            A celestial map of professional achievements and growth.
          </p>
          <p 
            className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-200 animate-pulse font-medium leading-relaxed px-2 animate-fade-in-delay-2"
          >
            Navigate the stars to discover your journey.
          </p>
        </div>

        {/* Filter Buttons - Mobile-optimized sizing and spacing */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-ghost-black border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-400 to-domain-violet text-snow-white shadow-lg shadow-purple-500/40 border-purple-400'
                  : 'bg-ghost-black/60 text-purple-300 hover:bg-purple-400/20 hover:text-snow-white border-purple-300/30 hover:border-purple-400/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Constellation Container - Mobile-responsive layout */}
      <div className="relative z-10 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl mt-4 sm:mt-6 lg:mt-8 px-2 sm:px-4">
        {/* Mobile: Use square aspect ratio, Desktop: Use video aspect ratio */}
        <div className="relative w-full aspect-square sm:aspect-video">
          {/* Connection lines with better positioning - Hidden on mobile for clarity */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 hidden sm:block" aria-hidden="true">
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

          {/* Stars - Responsive positioning */}
          {experienceData.map((exp) => (
            <ExperienceStar 
              key={exp.id} 
              experience={exp} 
              onClick={handleStarClick}
              isVisible={filteredExperiences.some(e => e.id === exp.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience} 
          onClose={handleCloseModal}
          isVisible={!!selectedExperience}
        />
      )}
    </section>
  );
};

export default Experience;