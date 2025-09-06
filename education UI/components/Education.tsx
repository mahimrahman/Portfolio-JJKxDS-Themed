import React from 'react';
import { EDUCATION_DATA } from '../constants';
import MasterySeal from './ScrollCard';

const Education: React.FC = () => {
  return (
    <section id="education" className="flex flex-col items-center justify-center py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-100 tracking-wider">
        Innate Domain: Forged Knowledge
      </h1>
      <p className="text-center text-lg text-slate-400 mb-8 max-w-2xl">
        Each fundamental technique, a pillar of power. When manifested together, they form a domain of unparalleled expertise.
      </p>
      <p className="text-center text-sm text-sky-300/70 mb-16 italic">
        Click on a seal to reveal its hidden knowledge.
      </p>
      
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 items-start justify-items-center">
          {EDUCATION_DATA.map((entry, index) => (
            <MasterySeal key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;