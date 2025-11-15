import { useState, useCallback, memo, MouseEvent, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { EducationEntry } from '../types/education';

interface MasterySealProps {
  entry: EducationEntry;
  index: number;
}

// Memoized sparkle particles to prevent re-renders
const SparkleParticles = memo(() => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {/* Top left sparkle */}
    <div className="absolute top-4 left-4 w-2 h-2 bg-zenitsu-lightning rounded-full animate-ping"></div>
    <div className="absolute top-4 left-4 w-2 h-2 bg-zenitsu-lightning rounded-full animate-pulse"></div>
    
    {/* Top right sparkle */}
    <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-domain-violet rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
    <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-domain-violet rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    
    {/* Bottom left sparkle */}
    <div className="absolute bottom-6 left-6 w-1 h-1 bg-cursed-blue rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-6 left-6 w-1 h-1 bg-cursed-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    
    {/* Right side sparkle */}
    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-zenitsu-lightning rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-zenitsu-lightning rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    
    {/* Bottom right sparkle */}
    <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-domain-violet rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-domain-violet rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
));

const MasterySeal = ({ entry, index }: MasterySealProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = useCallback((e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    setIsFlipped(prev => !prev);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* 3D Flippable Seal Area */}
      <div className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60" style={{ perspective: '1000px' }}>
        <div
          className={`seal-flip-inner cursor-pointer focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ${isFlipped ? 'flipped' : ''}`}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          aria-expanded={isFlipped}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(e)}
          aria-label={`View details for ${entry.degree}`}
        >
          {/* Front Face */}
          <div className="seal-face rounded-full">
            <div
              className={`
                relative w-full h-full
                flex items-center justify-center rounded-full 
                transition-all duration-500 ease-in-out 
                shadow-lg group-hover:shadow-2xl group-hover:scale-105
                ${entry.theme.glowColor}
                ${entry.theme.pattern}
              `}
            >
              <div className="absolute inset-0 rounded-full border-2 border-domain-violet/50"></div>
              <div className="absolute inset-2 rounded-full border border-cursed-blue/50 animate-pulse"></div>
              
              {/* Crest container - will hide when flipped or on hover */}
              <div className={`relative z-10 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                {entry.theme.crest}
              </div>

              {/* "REVEAL" text overlay - will show on hover or when flipped */}
              <div className={`absolute inset-0 z-20 flex items-center justify-center rounded-full bg-ghost-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                <span className="font-bold text-lg text-snow-white tracking-[0.2em]">REVEAL</span>
              </div>

              {/* Sparkle particles on hover */}
              <SparkleParticles />
            </div>
          </div>
          
          {/* Back Face */}
          <div className="seal-face seal-face-back rounded-full">
             <div
              className={`
                w-full h-full p-6 sm:p-8 
                flex flex-col items-center justify-center rounded-full 
                text-center shadow-2xl ${entry.theme.glowColor}
                ${entry.theme.pattern}
              `}
            >
              <p className="text-xs sm:text-sm text-snow-white/90 leading-relaxed px-2">
                {entry.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Default Visible Text */}
      <div className="relative mt-4 px-2">
        <h3 className="text-base sm:text-lg font-bold text-cursed-blue tracking-wide">{entry.technique}</h3>
        <p className="text-sm sm:text-base font-semibold text-snow-white mt-1">{entry.degree}</p>
        <div className="mt-3 text-xs sm:text-sm">
          <p className="font-medium text-ash-gray">{entry.institution}</p>
          <p className="text-xs text-zenitsu-lightning">{entry.duration}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(MasterySeal);
