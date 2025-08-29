import React, { useState } from 'react';
import { experiences } from '../constants';
import type { Experience } from '../types';
import ExperienceStar from './ExperienceStar';
import ExperienceModal from './ExperienceModal';

type FilterType = 'All' | 'Canada' | 'Malaysia' | 'Bangladesh';

const WorkExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const handleStarClick = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  const filteredExperiences = experiences.filter(exp => 
    activeFilter === 'All' || exp.location === activeFilter
  );

  const filterButtons: FilterType[] = ['All', 'Canada', 'Malaysia', 'Bangladesh'];

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background and "Unlimited Void" animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmin] h-[200vmin] bg-[radial-gradient(ellipse_at_center,rgba(107,33,168,0.2),transparent_60%)] rounded-full animate-void-pulse-1 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vmin] h-[250vmin] bg-[radial-gradient(ellipse_at_center,rgba(55,48,163,0.15),transparent_65%)] rounded-full animate-void-pulse-2 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,black)]"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0a031a] ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/70 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
          Domain Expansion
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-300 max-w-2xl">
          A constellation of cursed techniques and experiences.
        </p>
        <p className="mt-4 text-base text-purple-300 animate-pulse">
            Select a star to reveal its details.
        </p>
      </div>

      {/* Constellation Container */}
      <div className="relative z-10 w-full max-w-5xl aspect-video mt-4">
        {/* Lines for constellation */}
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
                        stroke="rgba(192, 132, 252, 0.3)"
                        strokeWidth="1"
                        className="animate-line-pulse"
                        style={{ animationDelay: `${index * 150}ms` }}
                    />
                );
            })}
        </svg>

        {/* Stars */}
        {experiences.map((exp) => (
          <ExperienceStar 
            key={exp.id} 
            experience={exp} 
            onClick={handleStarClick}
            isVisible={filteredExperiences.some(e => e.id === exp.id)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedExperience && (
        <ExperienceModal experience={selectedExperience} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default WorkExperienceSection;
