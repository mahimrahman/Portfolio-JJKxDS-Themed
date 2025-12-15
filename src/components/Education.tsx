import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../constants/education';
import MasterySeal from './ScrollCard';
import SmokeBackground from './SmokeBackground';
import SectionMerge from './SectionMerge';

// Memoized background effects to prevent re-renders - Behind content
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 z-[5] pointer-events-none">
    {/* Larger, more vibrant orbs */}
    <motion.div 
      className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full blur-3xl"
      style={{
        background: 'radial-gradient(circle, rgba(127, 0, 255, 0.18) 0%, rgba(58, 134, 255, 0.12) 50%, transparent 100%)'
      }}
      animate={{
        scale: [1, 1.35, 1],
        opacity: [0.5, 0.8, 0.5],
        x: [0, 40, 0],
        y: [0, -25, 0],
      }}
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl"
      style={{
        background: 'radial-gradient(circle, rgba(255, 208, 0, 0.15) 0%, rgba(0, 166, 118, 0.1) 50%, transparent 100%)'
      }}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.4, 0.75, 0.4],
        x: [0, -35, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }}
    />
    
    {/* Animated dot pattern */}
    <motion.div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(127, 0, 255, 0.4) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '50px 50px'],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
));

// Memoized glass morphism instruction box
const InstructionBox = memo(() => (
  <motion.div
    className="mb-4 max-w-md mx-auto"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="bg-gradient-to-r from-zenitsu-lightning/5 to-domain-violet/5 rounded-xl p-3 border border-zenitsu-lightning/10 backdrop-blur-sm shadow-lg relative overflow-hidden">
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
    <section id="education" className="h-screen py-8 px-6 md:px-8 lg:px-12 relative overflow-hidden flex flex-col">
      {/* Subtle Section Merge Overlays */}
      <SectionMerge position="top" intensity="light" />
      <SectionMerge position="bottom" intensity="light" />
      {/* Dark theme background with transparency for smoke */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-deep-charcoal/95 via-ghost-black/95 to-deep-charcoal/95 backdrop-blur-sm"></div>
      {/* Smoke Effect Background */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <SmokeBackground />
      </div>
      <BackgroundEffects />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-30 text-center mb-6"
      >
        <h2 className="section-title">
          Innate Domain: Forged Knowledge
        </h2>
        <p className="text-center text-base md:text-lg text-ash-gray mb-3 max-w-2xl mx-auto">
          Each fundamental technique, a pillar of power. When manifested together, they form a domain of unparalleled expertise.
        </p>
        
        <InstructionBox />
        
        <span className="block w-24 h-1 mx-auto bg-zenitsu-lightning rounded-full animate-pulse" />
      </motion.div>
      
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center w-full">
          {educationSeals}
        </div>
      </div>
    </section>
  );
};

export default Education;
