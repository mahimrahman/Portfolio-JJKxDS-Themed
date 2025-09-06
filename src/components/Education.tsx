import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../constants/education';
import MasterySeal from './ScrollCard';

// Memoized background effects to prevent re-renders
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-domain-violet/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cursed-blue/10 rounded-full blur-3xl animate-pulse" />
  </div>
));

// Memoized glass morphism instruction box
const InstructionBox = memo(() => (
  <motion.div
    className="mb-8 max-w-md mx-auto"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="bg-gradient-to-r from-zenitsu-lightning/5 to-domain-violet/5 rounded-xl p-4 border border-zenitsu-lightning/10 backdrop-blur-sm shadow-lg relative overflow-hidden">
      {/* Glass morphism background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent rounded-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-domain-violet/2 to-transparent rounded-xl"></div>
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zenitsu-lightning/5 via-domain-violet/5 to-zenitsu-lightning/5"></div>
      <div className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-zenitsu-lightning/3 to-domain-violet/3 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <p className="text-center text-sm text-zenitsu-lightning/70 font-medium leading-relaxed">
          Click on a seal to reveal its hidden knowledge.
        </p>
      </div>
    </div>
  </motion.div>
));

const Education: React.FC = () => {
  // Memoize the education data mapping to prevent unnecessary re-renders
  const educationSeals = useMemo(() => 
    EDUCATION_DATA.map((entry, index) => (
      <MasterySeal key={entry.id} entry={entry} index={index} />
    )), []
  );

  return (
    <section id="education" className="min-h-[80vh] py-12 px-4 relative overflow-hidden">
      <BackgroundEffects />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
          Innate Domain: Forged Knowledge
        </h2>
        <p className="text-center text-lg text-ash-gray mb-4 max-w-2xl mx-auto">
          Each fundamental technique, a pillar of power. When manifested together, they form a domain of unparalleled expertise.
        </p>
        
        <InstructionBox />
        
        <span className="block w-24 h-1 mx-auto bg-zenitsu-lightning rounded-full animate-pulse" />
      </motion.div>
      
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-items-center">
          {educationSeals}
        </div>
      </div>
    </section>
  );
};

export default Education;
