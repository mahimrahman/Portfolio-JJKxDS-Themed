import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-ghost-black to-deep-charcoal" />
      
      {/* Animated gradient overlay - Blue and Purple only */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, theme(colors.domain-violet) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, theme(colors.cursed-blue) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, theme(colors.domain-violet) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, theme(colors.cursed-blue) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, theme(colors.domain-violet) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating orbs - Blue and Purple only */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ['domain-violet', 'cursed-blue'][i % 2]
            } 0%, transparent 70%)`,
            opacity: 0.15,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Animated grid - Purple only */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent 48%, theme(colors.domain-violet) 49%, theme(colors.domain-violet) 51%, transparent 52%)',
            backgroundSize: '30px 30px',
            opacity: 0.05,
          }}
          animate={{
            backgroundPosition: ['0 0', '30px 30px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Glowing particles - Blue and Purple only */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: ['domain-violet', 'cursed-blue'][i % 2],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 ${Math.random() * 20 + 10}px ${
              ['domain-violet', 'cursed-blue'][i % 2]
            }`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Cursed energy waves - Blue only */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, theme(colors.cursed-blue) 100%)',
          opacity: 0.05,
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 