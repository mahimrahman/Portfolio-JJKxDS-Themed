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

// Your real experiences data from CV and LinkedIn profile
const experienceData: ExperienceItem[] = [
  // Canada - Current and Recent Positions
  {
    id: 1,
    title: "VP – Marketing",
    company: "HackConcordia, Concordia University",
    location: "Canada",
    duration: "May 2024 – Present",
    description: [
      "Lead comprehensive marketing strategies for Canada's largest student-run hackathon",
      "Manage social media campaigns reaching 10,000+ students across universities",
      "Design promotional materials and coordinate outreach to attract participants, sponsors, and partners",
      "Collaborate with cross-functional teams to drive community engagement and event success"
    ],
    position: { top: '18%', left: '75%' },
    mobilePosition: { top: '12%', left: '80%' },
  },
  {
    id: 2,
    title: "Graduate Teaching Assistant",
    company: "SOEN 6431, Gina Cody School of Engineering",
    location: "Canada",
    duration: "Fall 2024 – Winter 2025",
    description: [
      "Assist in teaching Software Systems Requirements Engineering course",
      "Grade assignments, projects, and midterms with detailed feedback for 80+ graduate students",
      "Conduct office hours and address student inquiries to ensure academic clarity",
      "Support course coordination and maintain high academic standards"
    ],
    position: { top: '45%', left: '25%' },
    mobilePosition: { top: '32%', left: '20%' },
  },
  {
    id: 3,
    title: "Director",
    company: "Graduate Students' Association (GSA)",
    location: "Canada",
    duration: "June 2024 – Present",
    description: [
      "Serve as elected Director representing graduate student interests university-wide",
      "Participate in Student Handbook Committee and Healthcare Committee initiatives",
      "Advocate for student rights and work on policy improvements affecting graduate students",
      "Foster partnerships between administration and student body to address academic concerns"
    ],
    position: { top: '72%', left: '82%' },
    mobilePosition: { top: '52%', left: '85%' },
  },
  {
    id: 4,
    title: "Student Facilitator",
    company: "Homeroom, Dean of Students Office",
    location: "Canada",
    duration: "Sep 2024 – Present",
    description: [
      "Facilitate peer-led discussions and collaborative learning activities for new students",
      "Provide mentorship and guidance to support academic and social transition to university life",
      "Create inclusive environments that promote student engagement and community building",
      "Coordinate with Dean of Students Office to enhance student support services"
    ],
    position: { top: '12%', left: '18%' },
    mobilePosition: { top: '8%', left: '15%' },
  },
  {
    id: 5,
    title: "Marketing/Communications",
    company: "TEDx Concordia University 2025",
    location: "Canada",
    duration: "Jan 2025 – Mar 2025",
    description: [
      "Develop and execute marketing strategies for TEDx Concordia University 2025 event",
      "Create compelling content and manage social media campaigns to enhance event visibility",
      "Collaborate with student clubs, sponsors, and university administration for maximum outreach",
      "Design promotional materials and coordinate speaker announcements"
    ],
    position: { top: '88%', left: '58%' },
    mobilePosition: { top: '72%', left: '65%' },
  },
  
  // Malaysia - Professional Experience
  {
    id: 6,
    title: "Web Developer & Designer",
    company: "Zavy Technologies Sdn Bhd",
    location: "Malaysia",
    duration: "Dec 2021 - Aug 2022",
    description: [
      "Delivered customized web solutions for diverse clients with creative campaign ideas",
      "Developed responsive websites using modern web technologies and frameworks",
      "Implemented software recommendations and conducted acceptance testing",
      "Managed ERP systems to enhance operational efficiency and client satisfaction"
    ],
    position: { top: '62%', left: '12%' },
    mobilePosition: { top: '42%', left: '10%' },
  },
  {
    id: 7,
    title: "General Secretary",
    company: "Bangladeshi Student Association – LUCT",
    location: "Malaysia",
    duration: "2019 – 2021",
    description: [
      "Coordinated events, cultural programs, and student activities to promote Bangladeshi culture within the university community",
      "Managed communication between the executive committee and members, ensuring smooth operations of the association",
      "Oversaw administrative tasks including meeting documentation, planning, and organizational development",
      "Facilitated cross-cultural exchange and community building among international students"
    ],
    position: { top: '35%', left: '88%' },
    mobilePosition: { top: '22%', left: '90%' },
  },
  
  // Bangladesh - Volunteer and Community Service
  {
    id: 8,
    title: "Senior Member",
    company: "Connecting Youth for Change (CYC)",
    location: "Bangladesh",
    duration: "Jun 2014 – May 2019",
    description: [
      "Led and supported youth-driven social service projects focused on education, environment, and community welfare",
      "Mentored junior members, fostering leadership skills and encouraging active participation in civic initiatives",
      "Collaborated with organizations and local communities to design impactful programs for youth empowerment and change",
      "Coordinated cross-organizational partnerships to maximize social impact and community reach"
    ],
    position: { top: '55%', left: '65%' },
    mobilePosition: { top: '62%', left: '75%' },
  },
  {
    id: 9,
    title: "Member",
    company: "Bangladesh Scouts",
    location: "Bangladesh",
    duration: "2011 – 2019",
    description: [
      "Participated in national and regional scouting programs, developing leadership, teamwork, and discipline",
      "Contributed to community service initiatives including disaster relief, social welfare, and awareness campaigns",
      "Promoted values of civic responsibility, resilience, and volunteerism through active engagement in scout activities",
      "Engaged in character building and skill development through outdoor activities and community service"
    ],
    position: { top: '28%', left: '35%' },
    mobilePosition: { top: '82%', left: '30%' },
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
        
        {/* Text preview with better mobile positioning and readability - More compact */}
        <div className="mt-1.5 sm:mt-2 text-center w-max max-w-[80px] sm:max-w-[120px] z-20">
          <p className="font-bold text-[8px] sm:text-xs text-purple-300 transition-colors duration-300 group-hover:text-snow-white drop-shadow-lg leading-tight truncate">
            {experience.title.length > 15 ? experience.title.substring(0, 15) + '...' : experience.title}
          </p>
          <p className="text-[7px] sm:text-[10px] text-purple-200/80 transition-colors duration-300 group-hover:text-snow-white drop-shadow-lg leading-tight truncate">
            {experience.company.length > 20 ? experience.company.substring(0, 20) + '...' : experience.company}
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
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        // Re-enable body scroll when modal closes
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
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
        className="relative w-full max-w-sm sm:max-w-2xl bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 border border-domain-violet/50 rounded-2xl shadow-2xl shadow-purple-400/40 transform transition-all duration-300 ease-in-out backdrop-blur-xl scale-100 opacity-100 max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button with better visibility and positioning */}
        <button
          onClick={handleClose} 
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500/80 to-red-600/80 hover:from-red-400 hover:to-red-500 text-white rounded-full flex items-center justify-center transition-all duration-200 z-50 shadow-lg hover:shadow-xl hover:scale-110 border-2 border-white/20 hover:border-white/40"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Scrollable content container */}
        <div className="overflow-y-auto max-h-[85vh] rounded-2xl experience-modal-scroll"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: '#7c3aed #1f1f1f'
             }}
        >
        
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
          {/* Connection lines with better positioning - Visible on all devices with responsive styling */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500" aria-hidden="true">
            {filteredExperiences.length > 1 && filteredExperiences.slice(1).map((exp, index) => {
              const prevExp = filteredExperiences[index];
              // Use mobile positions on mobile, desktop positions on desktop
              const isMobile = window.innerWidth < 768;
              const prevPos = isMobile ? (prevExp.mobilePosition || prevExp.position) : prevExp.position;
              const currPos = isMobile ? (exp.mobilePosition || exp.position) : exp.position;
              
              return (
                <line
                  key={`line-${exp.id}`}
                  x1={prevPos.left}
                  y1={prevPos.top}
                  x2={currPos.left}
                  y2={currPos.top}
                  stroke="url(#auroraGradient)"
                  strokeWidth={isMobile ? "1" : "2"}
                  className="animate-line-pulse"
                  style={{ animationDelay: `${index * 200}ms` }}
                  strokeDasharray={isMobile ? "3,3" : "5,5"}
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