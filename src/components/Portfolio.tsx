import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SmokeBackground from './SmokeBackground';
import SectionMerge from './SectionMerge';

// Simplified Icons with Dynamic Colors
const DevelopmentIcon = memo(({ color, isActive }: { color: string; isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeOpacity={isActive ? 1 : 0.5}
      animate={isActive ? { strokeOpacity: [0.5, 1, 0.5] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path d="M 35,30 L 25,50 L 35,70" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <motion.path d="M 65,30 L 75,50 L 65,70" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <motion.path d="M 45,35 L 55,65" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
  </svg>
));
DevelopmentIcon.displayName = 'DevelopmentIcon';

const UIUXIcon = memo(({ color, isActive }: { color: string; isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeOpacity={isActive ? 1 : 0.5}
      animate={isActive ? { strokeOpacity: [0.5, 1, 0.5] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
    <motion.rect x="35" y="35" width="30" height="30" fill="none" stroke={color} strokeWidth="1.5" />
    <motion.line x1="35" y1="45" x2="65" y2="45" stroke={color} strokeWidth="1" opacity="0.5" />
    <motion.line x1="35" y1="55" x2="65" y2="55" stroke={color} strokeWidth="1" opacity="0.5" />
  </svg>
));
UIUXIcon.displayName = 'UIUXIcon';

const GraphicDesignIcon = memo(({ color, isActive }: { color: string; isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeOpacity={isActive ? 1 : 0.5}
      animate={isActive ? { strokeOpacity: [0.5, 1, 0.5] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path d="M 20,45 Q 30,30 40,45 T 60,45" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <motion.circle cx="28" cy="35" r="3" fill={color} opacity="0.8" />
    <motion.circle cx="48" cy="40" r="3" fill={color} opacity="0.8" />
    <motion.circle cx="68" cy="35" r="3" fill={color} opacity="0.8" />
    <motion.rect x="65" y="60" width="20" height="20" rx="3" fill="none" stroke={color} strokeWidth="2" />
  </svg>
));
GraphicDesignIcon.displayName = 'GraphicDesignIcon';

const PhotographyIcon = memo(({ color, isActive }: { color: string; isActive: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeOpacity={isActive ? 1 : 0.5}
      animate={isActive ? { strokeOpacity: [0.5, 1, 0.5] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.rect x="25" y="35" width="50" height="35" rx="4" fill="none" stroke={color} strokeWidth="2.5" />
    <motion.circle cx="50" cy="52" r="12" fill="none" stroke={color} strokeWidth="2" />
    <motion.circle cx="50" cy="52" r="2.5" fill={color} />
    <motion.rect x="60" y="38" width="10" height="6" rx="1" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
  </svg>
));
PhotographyIcon.displayName = 'PhotographyIcon';

interface PortfolioItem {
  id: string;
  title: string;
  technique: string;
  description: string;
  portfolioOverview: string[];
  tags: string[];
  icon: typeof DevelopmentIcon;
  color: string;
  image: string;
  link: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'dev',
    title: 'Development',
    technique: 'Limitless Code Architecture',
    description: 'Forging digital structures with infinite scalability. Every line of code is optimized for absolute efficiency and high-performance execution.',
    portfolioOverview: [
      'Infinite Scale API Systems',
      'Real-time Data Processing',
      'Logic Layer Architecture',
      'Performance Optimization'
    ],
    tags: ['React', 'Node.js', 'Postgres', 'Web3'],
    icon: DevelopmentIcon,
    color: '#A155E1',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
    link: '/records/development',
    stats: [
      { label: 'Projects', value: '50+' },
      { label: 'Tech Stack', value: '20+' },
      { label: 'Experience', value: '5+ yrs' }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    technique: 'Interaction Flow',
    description: 'Sensing the opening thread of user needs. Creating rhythmic experiences that flow seamlessly while maintaining functional precision.',
    portfolioOverview: [
      'Empathy-Driven User Journeys',
      'Information Architecture',
      'Interaction Design Systems',
      'Accessibility Standards'
    ],
    tags: ['Figma', 'UX Research', 'Prototyping'],
    icon: UIUXIcon,
    color: '#20948B',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    link: '/records/uiux',
    stats: [
      { label: 'Designs', value: '100+' },
      { label: 'User Tests', value: '30+' },
      { label: 'Tools', value: '10+' }
    ]
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    technique: 'Visual Identity',
    description: 'Direct and high-impact visual communication. Creating branding systems and layouts that command attention with speed and intensity.',
    portfolioOverview: [
      'Brand Identity Systems',
      'High-Voltage Typography',
      'Motion Graphics',
      'Visual Communication'
    ],
    tags: ['Illustrator', 'Motion', 'Branding'],
    icon: GraphicDesignIcon,
    color: '#F9D423',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
    link: '/records/graphic-design',
    stats: [
      { label: 'Brands', value: '25+' },
      { label: 'Designs', value: '200+' },
      { label: 'Years', value: '4+' }
    ]
  },
  {
    id: 'photo',
    title: 'Photography',
    technique: 'Visual Observation',
    description: 'Capturing the raw essence of the world. Documenting moments through an instinctual lens that captures the unfiltered truth of the subject.',
    portfolioOverview: [
      'Street Photography',
      'Landscape Scouting',
      'Portraiture',
      'Advanced Color Grading'
    ],
    tags: ['Lightroom', 'Composition', 'Raw'],
    icon: PhotographyIcon,
    color: '#4A90E2',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000',
    link: '/records/photography',
    stats: [
      { label: 'Shoots', value: '500+' },
      { label: 'Clients', value: '15+' },
      { label: 'Awards', value: '3' }
    ]
  }
];

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = PORTFOLIO_DATA[selectedIndex];

  const handleSelect = (index: number) => {
    if (index === selectedIndex) return;
    setSelectedIndex(index);
  };

  return (
    <section className="min-h-screen py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-12 relative overflow-hidden flex items-center">
      <SectionMerge position="top" intensity="light" />
      <SectionMerge position="bottom" intensity="light" />
      <div className="absolute inset-0 bg-gradient-to-br from-ghost-black/95 via-deep-charcoal/95 to-ghost-black/95 backdrop-blur-sm"></div>
      <SmokeBackground />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-[25] overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${selected.color}15, transparent)`,
            top: '10%',
            left: '15%'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${selected.color}10, transparent)`,
            bottom: '15%',
            right: '10%'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-[40] w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="section-title mb-2">
            Battle Records
          </h2>
          <p className="text-xs md:text-sm font-body text-ash-gray">
            Professional work across multiple domains
          </p>
        </motion.div>

        {/* Card Grid Layout - Compact 4-Column Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
          {PORTFOLIO_DATA.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            const IconComponent = item.icon;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleSelect(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-28 sm:h-32 md:h-36 lg:h-40 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-lg md:rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isSelected ? `${item.color}50` : 'rgba(255,255,255,0.1)',
                  boxShadow: isSelected ? `0 0 25px ${item.color}35, 0 8px 30px rgba(0,0,0,0.3)` : 'none'
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}10, transparent)`
                  }}
                />

                {/* Hexagonal Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${item.color} 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 text-center">
                  {/* Icon */}
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-1 sm:mb-2"
                    animate={isSelected ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <IconComponent color={item.color} isActive={isSelected} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xs sm:text-sm md:text-base font-subtitle uppercase tracking-tight transition-all duration-300"
                    style={{
                      color: isSelected ? item.color : '#cbd5e1',
                      textShadow: isSelected ? `0 0 15px ${item.color}40` : 'none'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Selection Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20`, border: `2px solid ${item.color}` }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  )}

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `inset 0 0 50px ${item.color}15`
                    }}
                  />
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isSelected ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Preview Section */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-2xl lg:rounded-3xl border overflow-hidden min-h-[350px] sm:min-h-[400px] md:min-h-[450px]"
          style={{
            borderColor: `${selected.color}30`,
            boxShadow: `0 0 40px ${selected.color}20, 0 20px 60px rgba(0,0,0,0.4)`
          }}
        >
          {/* Top Accent Bar */}
          <div className="h-2" style={{ background: `linear-gradient(to right, ${selected.color}, ${selected.color}80, ${selected.color})` }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 p-4 sm:p-6 lg:p-8">
            {/* Left: Details */}
            <div className="space-y-4 md:space-y-5 flex flex-col justify-between">
              <div>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-title uppercase tracking-tight mb-2 md:mb-3 leading-tight"
                  style={{ color: selected.color }}
                >
                  {selected.technique}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-body">
                  {selected.description}
                </p>
              </div>

              {/* Quick Stats Grid - For Recruiters */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {selected.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-2 md:p-3 rounded-lg border text-center"
                    style={{
                      backgroundColor: `${selected.color}08`,
                      borderColor: `${selected.color}25`
                    }}
                  >
                    <p className="text-lg sm:text-xl md:text-2xl font-title mb-0.5 md:mb-1" style={{ color: selected.color }}>
                      {stat.value}
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wide text-white/50 font-subtitle">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Field Records - Compact */}
              <div>
                <p className="text-xs font-subtitle uppercase tracking-[0.2em] opacity-40 mb-3">Key Capabilities</p>
                <div className="grid grid-cols-2 gap-2">
                  {selected.portfolioOverview.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: selected.color }}
                      />
                      <span className="text-xs text-white/60 font-body">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tags - Compact */}
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-subtitle uppercase px-3 py-1.5 rounded-md border"
                    style={{
                      backgroundColor: `${selected.color}10`,
                      borderColor: `${selected.color}30`,
                      color: selected.color
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA - Compact */}
              <Link
                to={selected.link}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-subtitle text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: selected.color,
                  color: '#000',
                  boxShadow: `0 6px 15px ${selected.color}40`
                }}
              >
                <span>View Full Portfolio</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
            </div>

            {/* Right: Image Preview */}
            <div className="relative h-[250px] sm:h-[300px] lg:min-h-[350px] rounded-lg md:rounded-xl overflow-hidden group flex items-center justify-center">
              <motion.img
                key={selectedIndex}
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover object-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(to top, ${selected.color}70, transparent 50%)`
                }}
              />

              {/* Floating Title Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 left-4 right-4 p-4 backdrop-blur-xl rounded-lg border"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  borderColor: `${selected.color}40`
                }}
              >
                <p className="text-xs font-subtitle uppercase tracking-wider mb-1" style={{ color: selected.color }}>
                  {selected.title}
                </p>
                <p className="text-[10px] text-slate-300 leading-tight font-body">
                  Professional portfolio showcase
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
