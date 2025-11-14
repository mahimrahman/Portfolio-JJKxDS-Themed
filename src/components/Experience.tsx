import { useState, useEffect, useCallback, useMemo } from 'react';

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

// Location-based color themes - JJK x DS inspired
const locationColors = {
  Canada: {
    primary: '#3A86FF', // Cursed blue
    secondary: '#7F00FF', // Domain violet
    glow: 'rgba(58, 134, 255, 0.6)',
    gradient: 'from-cursed-blue to-domain-violet',
    shadow: 'shadow-cursed-blue/40',
  },
  Malaysia: {
    primary: '#00A676', // Checkered green (Tanjiro)
    secondary: '#3A86FF', // Cursed blue
    glow: 'rgba(0, 166, 118, 0.6)',
    gradient: 'from-checkered-green to-cursed-blue',
    shadow: 'shadow-checkered-green/40',
  },
  Bangladesh: {
    primary: '#FF4E00', // Rengoku flame
    secondary: '#FFD000', // Zenitsu lightning
    glow: 'rgba(255, 78, 0, 0.6)',
    gradient: 'from-rengoku-flame to-zenitsu-lightning',
    shadow: 'shadow-rengoku-flame/40',
  },
};

// Enhanced Experience Constellation Marker Component with Hexagonal Domain Expansion design
const ExperienceStar = ({ experience, onClick, isVisible }: {
  experience: ExperienceItem;
  onClick: (experience: ExperienceItem) => void;
  isVisible: boolean;
}) => {
  // Use mobile positioning on small screens, desktop positioning on larger screens
  const getPosition = () => {
    if (window.innerWidth < 768) {
      return experience.mobilePosition || experience.position;
    }
    return experience.position;
  };

  const [position, setPosition] = useState(getPosition());
  const colorTheme = locationColors[experience.location];

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
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-700 ease-in-out ${
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
        {/* Hexagonal Domain Expansion Marker - Professional JJK inspired */}
        <div className="relative">
          {/* Outer rotating hexagon ring - Domain expansion barrier */}
          <div className="absolute -inset-3 sm:-inset-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 100 100">
              <defs>
                <linearGradient id={`hex-grad-${experience.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colorTheme.primary} stopOpacity="0.6" />
                  <stop offset="100%" stopColor={colorTheme.secondary} stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <polygon
                points="50,5 93.3,25 93.3,75 50,95 6.7,75 6.7,25"
                fill="none"
                stroke={`url(#hex-grad-${experience.id})`}
                strokeWidth="2"
                className="animate-cursed-pulse"
              />
            </svg>
          </div>

          {/* Middle breathing technique aura ring */}
          <div
            className="absolute -inset-2 sm:-inset-3 rounded-full opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${colorTheme.glow} 0%, transparent 70%)`,
              filter: 'blur(8px)',
            }}
          />

          {/* Main hexagonal constellation marker */}
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                {/* Main hexagon gradient */}
                <linearGradient id={`main-grad-${experience.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colorTheme.primary} />
                  <stop offset="100%" stopColor={colorTheme.secondary} />
                </linearGradient>

                {/* Inner glow filter */}
                <filter id={`glow-${experience.id}`}>
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Hexagonal shape - Domain barrier inspired */}
              <polygon
                points="50,10 85,30 85,70 50,90 15,70 15,30"
                fill={`url(#main-grad-${experience.id})`}
                stroke={colorTheme.primary}
                strokeWidth="2"
                filter={`url(#glow-${experience.id})`}
                className="transition-all duration-500 group-hover:stroke-[3]"
              />

              {/* Inner sacred geometry - Breathing technique seal */}
              <circle
                cx="50"
                cy="50"
                r="18"
                fill="none"
                stroke={colorTheme.secondary}
                strokeWidth="1.5"
                opacity="0.7"
                className="group-hover:animate-pulse"
              />

              {/* Center energy core */}
              <circle
                cx="50"
                cy="50"
                r="8"
                fill={colorTheme.secondary}
                className="animate-cursed-pulse"
              />
            </svg>

            {/* Cursed energy particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-ping"
                  style={{
                    background: colorTheme.primary,
                    top: `${25 + Math.cos((i * Math.PI) / 2) * 15}%`,
                    left: `${25 + Math.sin((i * Math.PI) / 2) * 15}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Domain expansion circle on hover */}
          <div
            className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"
            style={{
              border: `2px solid ${colorTheme.primary}`,
              boxShadow: `0 0 20px ${colorTheme.glow}`,
            }}
          />
        </div>

        {/* Text preview with location-based color theming */}
        <div className="mt-2 sm:mt-3 text-center w-max max-w-[90px] sm:max-w-[130px] z-20">
          <p
            className="font-bold text-[9px] sm:text-xs transition-all duration-300 drop-shadow-lg leading-tight truncate"
            style={{
              color: colorTheme.primary,
              textShadow: isVisible ? `0 0 10px ${colorTheme.glow}` : 'none',
            }}
          >
            {experience.title.length > 15 ? experience.title.substring(0, 15) + '...' : experience.title}
          </p>
          <p
            className="text-[8px] sm:text-[10px] text-snow-white/80 transition-colors duration-300 group-hover:text-snow-white drop-shadow-lg leading-tight truncate"
          >
            {experience.company.length > 20 ? experience.company.substring(0, 20) + '...' : experience.company}
          </p>
        </div>
      </div>
    </div>
  );
};

// Enhanced Experience Modal Component with Domain Expansion opening animation
const ExperienceModal = ({ experience, onClose, isVisible }: {
  experience: ExperienceItem;
  onClose: () => void;
  isVisible: boolean;
}) => {
  const [isOpening, setIsOpening] = useState(true);
  const colorTheme = locationColors[experience.location];

  useEffect(() => {
    if (isVisible) {
      setIsOpening(true);
      const timer = setTimeout(() => setIsOpening(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

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
      {/* Enhanced backdrop with breathing effect */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-lg">
        {/* Subtle domain expansion circles in background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-10"
              style={{
                width: `${(i + 1) * 300}px`,
                height: `${(i + 1) * 300}px`,
                borderColor: colorTheme.primary,
                animation: `pulse ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`relative w-full max-w-sm sm:max-w-2xl bg-gradient-to-br from-ghost-black/98 to-deep-charcoal/98 rounded-2xl shadow-2xl transform transition-all duration-700 ease-out backdrop-blur-xl max-h-[85vh] ${
          isOpening ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          border: `2px solid ${colorTheme.primary}`,
          boxShadow: `0 0 40px ${colorTheme.glow}, 0 0 80px ${colorTheme.glow}20`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hexagonal corner accents - Domain expansion aesthetic */}
        <div className="absolute -top-1 -left-1 w-8 h-8 sm:w-12 sm:h-12 opacity-50">
          <svg viewBox="0 0 100 100">
            <polygon
              points="50,5 93.3,25 93.3,75 50,95 6.7,75 6.7,25"
              fill="none"
              stroke={colorTheme.primary}
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 sm:w-12 sm:h-12 opacity-50 rotate-60">
          <svg viewBox="0 0 100 100">
            <polygon
              points="50,5 93.3,25 93.3,75 50,95 6.7,75 6.7,25"
              fill="none"
              stroke={colorTheme.secondary}
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Close button with breathing technique accent */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-rengoku-flame/90 to-red-600/90 hover:from-rengoku-flame hover:to-red-500 text-white rounded-lg flex items-center justify-center transition-all duration-300 z-50 shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation group relative overflow-hidden"
          style={{
            boxShadow: `0 0 15px ${locationColors.Bangladesh.glow}`,
          }}
          aria-label="Close"
        >
          {/* Breathing technique lines accent */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 relative z-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable content container */}
        <div className="overflow-y-auto max-h-[85vh] rounded-2xl experience-modal-scroll"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: `${colorTheme.primary} #1f1f1f`
             }}
        >

        <div className="p-5 sm:p-7 lg:p-9">
          {/* Location badge with breathing technique design */}
          <div className="mb-3 sm:mb-4 flex items-center gap-2">
            <div
              className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colorTheme.primary}30, ${colorTheme.secondary}30)`,
                border: `1px solid ${colorTheme.primary}`,
                boxShadow: `0 0 15px ${colorTheme.glow}`,
              }}
            >
              {/* Hexagonal icon */}
              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 100 100">
                <polygon
                  points="50,10 85,30 85,70 50,90 15,70 15,30"
                  fill={colorTheme.primary}
                />
              </svg>
              <span style={{ color: colorTheme.primary }}>{experience.location}</span>
            </div>
          </div>

          <h2
            id="experience-title"
            className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-2 sm:mb-3"
            style={{
              background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary}, #F9F9F9)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {experience.title}
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <h3 className="text-base sm:text-lg font-semibold text-snow-white">{experience.company}</h3>
            <p
              className="text-xs sm:text-sm font-medium"
              style={{ color: colorTheme.primary }}
            >
              {experience.duration}
            </p>
          </div>

          {/* Breathing technique divider line */}
          <div className="mt-4 sm:mt-6 mb-4 sm:mb-6 h-px relative overflow-hidden">
            <div
              className="absolute inset-0 animate-pulse"
              style={{
                background: `linear-gradient(90deg, transparent, ${colorTheme.primary}, ${colorTheme.secondary}, transparent)`,
              }}
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            {experience.description.map((point, index) => (
              <div key={index} className="flex items-start gap-3 group/item">
                {/* Custom hexagonal bullet point */}
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/item:scale-110" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id={`bullet-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colorTheme.primary} />
                        <stop offset="100%" stopColor={colorTheme.secondary} />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="50,10 85,30 85,70 50,90 15,70 15,30"
                      fill={`url(#bullet-grad-${index})`}
                      className="transition-all duration-300"
                    />
                  </svg>
                </div>
                <p className="text-snow-white text-sm sm:text-base leading-relaxed group-hover/item:text-snow-white/90 transition-colors duration-300">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom decorative breathing technique line */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-opacity-20" style={{ borderColor: colorTheme.primary }}>
            <div className="flex items-center justify-center gap-2 opacity-50">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full animate-pulse"
                  style={{
                    background: i % 2 === 0 ? colorTheme.primary : colorTheme.secondary,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

// Main Experience Component with enhanced constellation design
const Experience = () => {
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
      {/* Enhanced cosmic background with domain expansion circles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-ghost-black to-black"></div>

        {/* Large domain expansion circles in background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div
              key={`domain-${i}`}
              className="absolute rounded-full border border-domain-violet/30"
              style={{
                width: `${400 + i * 200}px`,
                height: `${400 + i * 200}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `pulse ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Cursed energy particles floating */}
        <div className="absolute inset-0">
          {Array.from({ length: window.innerWidth < 768 ? 12 : 20 }).map((_, i) => {
            const colors = [
              locationColors.Canada.primary,
              locationColors.Malaysia.primary,
              locationColors.Bangladesh.primary,
            ];
            const color = colors[i % colors.length];

            return (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: '3px',
                  height: '3px',
                  background: color,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${5 + Math.random() * 3}s`,
                  boxShadow: `0 0 10px ${color}`,
                }}
              />
            );
          })}
        </div>

        {/* Breathing technique meteor shower */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          {Array.from({ length: window.innerWidth < 768 ? 5 : 10 }).map((_, i) => {
            const location = i % 3 === 0 ? 'Canada' : i % 3 === 1 ? 'Malaysia' : 'Bangladesh';
            const colorTheme = locationColors[location];

            return (
              <div
                key={`meteor-${i}`}
                className="absolute w-0.5 h-12 rounded-full animate-meteor"
                style={{
                  background: `linear-gradient(to bottom, ${colorTheme.primary}, transparent)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                  boxShadow: `0 0 10px ${colorTheme.glow}`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-3 sm:px-4">

        {/* Title with breathing technique accent */}
        <div className="text-center mb-5 sm:mb-7 lg:mb-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight pb-2 sm:pb-3 lg:pb-4 leading-tight px-2 animate-fade-in relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rengoku-flame via-domain-violet to-cursed-blue">
              Constellation of Experience
            </span>
            {/* Subtle breathing lines under title */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-0.5 rounded-full animate-pulse"
                  style={{
                    background: i % 3 === 0 ? locationColors.Canada.primary : i % 3 === 1 ? locationColors.Malaysia.primary : locationColors.Bangladesh.primary,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto mt-3 sm:mt-4 mb-2 sm:mb-3 font-medium leading-relaxed px-2 animate-fade-in-delay-1"
          >
            A celestial map of professional achievements across continents.
          </p>
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-200 font-medium leading-relaxed px-2 animate-fade-in-delay-2"
          >
            Navigate the domain expansion to discover the journey.
          </p>
        </div>

        {/* Enhanced Filter Buttons with breathing technique design */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-7">
          {filterButtons.map((filter) => {
            const colorTheme = filter === 'All'
              ? { primary: '#7F00FF', secondary: '#3A86FF' }
              : locationColors[filter as keyof typeof locationColors];

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base font-bold rounded-lg transition-all duration-300 ease-in-out focus:outline-none relative overflow-hidden group ${
                  activeFilter === filter
                    ? 'text-snow-white shadow-lg scale-105'
                    : 'text-snow-white/70 hover:text-snow-white hover:scale-102'
                }`}
                style={{
                  background: activeFilter === filter
                    ? `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`
                    : 'rgba(26, 26, 46, 0.6)',
                  border: `2px solid ${activeFilter === filter ? colorTheme.primary : 'transparent'}`,
                  boxShadow: activeFilter === filter ? `0 0 20px ${colorTheme.primary}40` : 'none',
                }}
              >
                {/* Breathing technique accent lines on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 animate-pulse"
                    style={{ background: `linear-gradient(90deg, transparent, ${colorTheme.primary}, transparent)` }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 animate-pulse"
                    style={{ background: `linear-gradient(90deg, transparent, ${colorTheme.secondary}, transparent)` }}
                  />
                </div>

                {/* Hexagonal accent for active filter */}
                {activeFilter === filter && (
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3">
                    <svg viewBox="0 0 100 100">
                      <polygon
                        points="50,10 85,30 85,70 50,90 15,70 15,30"
                        fill={colorTheme.secondary}
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                )}

                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Constellation Container */}
      <div className="relative z-10 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl mt-4 sm:mt-6 lg:mt-8 px-2 sm:px-4">
        <div className="relative w-full aspect-square sm:aspect-video">
          {/* Enhanced connection lines with breathing technique patterns */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500" aria-hidden="true">
            {filteredExperiences.length > 1 && filteredExperiences.slice(1).map((exp, index) => {
              const prevExp = filteredExperiences[index];
              const isMobile = window.innerWidth < 768;
              const prevPos = isMobile ? (prevExp.mobilePosition || prevExp.position) : prevExp.position;
              const currPos = isMobile ? (exp.mobilePosition || exp.position) : exp.position;

              // Use location-based colors for connection lines
              const prevColorTheme = locationColors[prevExp.location];
              const currColorTheme = locationColors[exp.location];

              return (
                <g key={`line-${exp.id}`}>
                  <defs>
                    <linearGradient id={`line-grad-${exp.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={prevColorTheme.primary} stopOpacity="0.8" />
                      <stop offset="50%" stopColor={currColorTheme.secondary} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={currColorTheme.primary} stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Main breathing technique line */}
                  <line
                    x1={prevPos.left}
                    y1={prevPos.top}
                    x2={currPos.left}
                    y2={currPos.top}
                    stroke={`url(#line-grad-${exp.id})`}
                    strokeWidth={isMobile ? "2" : "3"}
                    className="animate-line-pulse"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      filter: `drop-shadow(0 0 5px ${currColorTheme.glow})`,
                    }}
                  />

                  {/* Flowing energy particles along the line */}
                  <circle
                    r={isMobile ? "2" : "3"}
                    fill={currColorTheme.primary}
                    className="animate-pulse"
                    style={{
                      animationDuration: '3s',
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      begin={`${index * 0.5}s`}
                    >
                      <mpath href={`#line-path-${exp.id}`} />
                    </animateMotion>
                  </circle>

                  {/* Hidden path for particle animation */}
                  <path
                    id={`line-path-${exp.id}`}
                    d={`M ${prevPos.left} ${prevPos.top} L ${currPos.left} ${currPos.top}`}
                    fill="none"
                    stroke="none"
                  />
                </g>
              );
            })}
          </svg>

          {/* Enhanced constellation markers */}
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

      {/* Enhanced Modal */}
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
