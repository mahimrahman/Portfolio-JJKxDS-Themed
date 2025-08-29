import React, { useEffect, useState } from 'react';
import type { Experience } from '../types';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    // Mount animation
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div 
        className={`relative max-w-2xl w-full m-4 bg-[#110528]/80 border border-purple-500/50 rounded-lg shadow-2xl shadow-purple-500/40 transform transition-all duration-300 ease-in-out ${isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-white hover:bg-purple-700/50 rounded-full p-1 transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <CloseIcon className="w-6 h-6"/>
        </button>
        
        <div className="p-6 sm:p-8">
          <h2 id="experience-title" className="text-2xl sm:text-3xl font-bold text-purple-300">{experience.title}</h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline mt-1">
            <h3 className="text-lg font-semibold text-gray-200">{experience.company}</h3>
            <p className="sm:ml-4 text-sm text-gray-400">{experience.duration}</p>
          </div>
          
          <div className="mt-6 border-t border-purple-500/20 pt-4">
            <ul className="space-y-3 list-none text-gray-300">
              {experience.description.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold mr-3 text-purple-400 mt-1">❖</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;