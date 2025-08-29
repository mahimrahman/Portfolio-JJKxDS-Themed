import React from 'react';
import type { Experience } from '../types';

interface ExperienceStarProps {
  experience: Experience;
  onClick: (experience: Experience) => void;
  isVisible: boolean;
}

const ExperienceStar: React.FC<ExperienceStarProps> = ({ experience, onClick, isVisible }) => {
  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
      style={{ top: experience.position.top, left: experience.position.left }}
      onClick={() => onClick(experience)}
      role="button"
      aria-label={`View details for ${experience.title} at ${experience.company}`}
      aria-hidden={!isVisible}
    >
      <div className="relative flex flex-col items-center transition-transform duration-300 ease-out group-hover:scale-110">
        {/* The star itself */}
        <div className="w-4 h-4 bg-purple-300 rounded-full animate-star-twinkle animate-star-pulse transition-shadow duration-300 group-hover:shadow-[0_0_25px_6px_rgba(192,132,252,0.7)]"></div>
        
        {/* Always visible text preview */}
        <div className="mt-2 text-center w-max">
          <p className="font-bold text-sm text-purple-200 transition-colors duration-300 group-hover:text-purple-100">{experience.title}</p>
          <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{experience.company}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceStar;
