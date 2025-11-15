import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Simple theme colors for smoke - Dark theme with vibrant colors
const smokeColors = [
  { color: '#3A86FF', opacity: 0.35 }, // cursed-blue - more visible
  { color: '#7F00FF', opacity: 0.35 }, // domain-violet
  { color: '#FF4E00', opacity: 0.32 }, // rengoku-flame
  { color: '#FFD000', opacity: 0.30 }, // zenitsu-lightning
  { color: '#00A676', opacity: 0.33 }, // checkered-green
  { color: '#FF006E', opacity: 0.30 }, // magenta accent
];

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
}

const InteractiveSmoke = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const animationFrameRef = useRef<number>();

  // Initialize particles - Simple and clean
  useEffect(() => {
    const initialParticles: SmokeParticle[] = Array.from({ length: 15 }, (_, i) => {
      const colorData = smokeColors[i % smokeColors.length];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 200 + 150, // Larger particles: 150-350px
        color: colorData.color,
        opacity: colorData.opacity,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02 - 0.01, // Upward drift
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.4,
      };
    });
    setParticles(initialParticles);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Mouse influence (subtle attraction)
          const dx = mousePos.x * 100 - particle.x;
          const dy = mousePos.y * 100 - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.min(0.3 / (distance * 0.01 + 1), 0.15);

          // Update position with mouse influence
          let newX = particle.x + particle.speedX * 2 + dx * influence * 0.1;
          let newY = particle.y + particle.speedY * 2 + dy * influence * 0.1;

          // Wrap around edges
          if (newX < -10) newX = 110;
          if (newX > 110) newX = -10;
          if (newY < -10) newY = 110;
          if (newY > 110) newY = -10;

          // Simple opacity variation
          const baseOpacity = smokeColors[particle.id % smokeColors.length].opacity;
          const newOpacity = Math.max(
            baseOpacity * 0.7,
            Math.min(baseOpacity * 1.5, particle.opacity + (Math.random() - 0.5) * 0.008)
          );

          return {
            ...particle,
            x: newX,
            y: newY,
            rotation: particle.rotation + particle.rotationSpeed,
            opacity: newOpacity,
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{ 
        mixBlendMode: 'normal', // Changed from 'screen' for better dark theme visibility
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color}${Math.round(particle.opacity * 255).toString(16).padStart(2, '0')} 0%, ${particle.color}00 65%)`,
            filter: 'blur(60px)', // Increased blur for softer smoke
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.3, 0.9, 1],
            opacity: [
              particle.opacity * 0.9,
              particle.opacity * 1.5,
              particle.opacity,
              particle.opacity * 0.9,
            ],
          }}
          transition={{
            duration: 12 + particle.id * 0.9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveSmoke;

