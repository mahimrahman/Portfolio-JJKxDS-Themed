import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimationControls, useViewportScroll, useTransform } from 'framer-motion';

// 3D-like radial gradients for blobs
const gradients = [
  [
    { offset: '0%', color: '#3A86FF', opacity: 1 },
    { offset: '60%', color: '#7F00FF', opacity: 0.85 },
    { offset: '100%', color: '#121212', opacity: 0.0 },
  ],
  [
    { offset: '0%', color: '#FF4E00', opacity: 1 },
    { offset: '60%', color: '#FFD000', opacity: 0.85 },
    { offset: '100%', color: '#121212', opacity: 0.0 },
  ],
  [
    { offset: '0%', color: '#7F00FF', opacity: 1 },
    { offset: '60%', color: '#FF4E00', opacity: 0.85 },
    { offset: '100%', color: '#121212', opacity: 0.0 },
  ],
  [
    { offset: '0%', color: '#3A86FF', opacity: 1 },
    { offset: '60%', color: '#FFD000', opacity: 0.85 },
    { offset: '100%', color: '#121212', opacity: 0.0 },
  ],
];

const baseGradients = [
  // These are the base gradients for different scroll positions
  'radial-gradient(ellipse at 60% 20%, #3A86FF33 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #FF4E0033 0%, transparent 70%), linear-gradient(120deg, #1A1A2E 60%, #3A86FF 100%)',
  'radial-gradient(ellipse at 60% 20%, #FFD00033 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #7F00FF33 0%, transparent 70%), linear-gradient(120deg, #1A1A2E 60%, #FFD000 100%)',
  'radial-gradient(ellipse at 60% 20%, #FF4E0033 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #3A86FF33 0%, transparent 70%), linear-gradient(120deg, #1A1A2E 60%, #FF4E00 100%)',
  'radial-gradient(ellipse at 60% 20%, #7F00FF33 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #FFD00033 0%, transparent 70%), linear-gradient(120deg, #1A1A2E 60%, #7F00FF 100%)',
];

// Blob shapes (SVG paths)
const blobPaths = [
  'M44.8,-67.2C56.7,-59.2,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.7,0.8,70.2,14.7C65.7,28.6,54.7,41.4,41.2,50.2C27.7,59,11.8,63.8,-3.7,67.1C-19.2,70.4,-34.3,72.2,-47.2,65.1C-60.1,58,-70.8,42,-74.2,25.2C-77.6,8.4,-73.7,-9.2,-66.2,-24.7C-58.7,-40.2,-47.7,-53.6,-33.7,-61.7C-19.7,-69.8,-2.8,-72.7,13.7,-74.7C30.2,-76.7,60.2,-75.2,44.8,-67.2Z',
  'M54.2,-66.2C68.2,-56.2,75.7,-34.2,74.2,-15.7C72.7,2.8,62.2,18.8,51.2,32.2C40.2,45.6,28.7,56.4,13.7,62.2C-1.3,68,-20.7,68.7,-36.2,61.7C-51.7,54.7,-63.2,40,-67.2,24.2C-71.2,8.4,-67.7,-8.5,-60.2,-23.2C-52.7,-37.9,-41.2,-50.4,-27.2,-60.2C-13.2,-70,3.3,-77,20.2,-77.2C37.1,-77.4,54.2,-70.2,54.2,-66.2Z',
  'M44.8,-67.2C56.7,-59.2,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.7,0.8,70.2,14.7C65.7,28.6,54.7,41.4,41.2,50.2C27.7,59,11.8,63.8,-3.7,67.1C-19.2,70.4,-34.3,72.2,-47.2,65.1C-60.1,58,-70.8,42,-74.2,25.2C-77.6,8.4,-73.7,-9.2,-66.2,-24.7C-58.7,-40.2,-47.7,-53.6,-33.7,-61.7C-19.7,-69.8,-2.8,-72.7,13.7,-74.7C30.2,-76.7,60.2,-75.2,44.8,-67.2Z',
  'M54.2,-66.2C68.2,-56.2,75.7,-34.2,74.2,-15.7C72.7,2.8,62.2,18.8,51.2,32.2C40.2,45.6,28.7,56.4,13.7,62.2C-1.3,68,-20.7,68.7,-36.2,61.7C-51.7,54.7,-63.2,40,-67.2,24.2C-71.2,8.4,-67.7,-8.5,-60.2,-23.2C-52.7,-37.9,-41.2,-50.4,-27.2,-60.2C-13.2,-70,3.3,-77,20.2,-77.2C37.1,-77.4,54.2,-70.2,54.2,-66.2Z',
];

const blobCount = 6;
const blobSize = [500, 400, 350, 600, 300, 420]; // larger, more spread out

const AnimatedBlobBackground: React.FC = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Call useAnimation at the top level for each blob
  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controlsArray = [controls0, controls1, controls2, controls3, controls4, controls5];

  // Scroll-based gradient
  const { scrollYProgress } = useViewportScroll();
  const gradientIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);
  const [currentGradient, setCurrentGradient] = useState(baseGradients[0]);
  useEffect(() => {
    const unsubscribe = gradientIndex.onChange((v) => {
      const idx = Math.round(v);
      setCurrentGradient(baseGradients[idx]);
    });
    return () => unsubscribe();
  }, [gradientIndex]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - top) / height - 0.5) * 2;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Morphing animation for each blob
  useEffect(() => {
    controlsArray.forEach((controls, i) => {
      let mounted = true;
      const animate = async () => {
        while (mounted) {
          await controls.start({
            d: blobPaths[(i + 1) % blobPaths.length],
            transition: { duration: 12 + i * 2, yoyo: Infinity, ease: 'easeInOut' },
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          });
          await controls.start({
            d: blobPaths[i % blobPaths.length],
            transition: { duration: 12 + i * 2, yoyo: Infinity, ease: 'easeInOut' },
            rotate: [360, 0],
            scale: [1.15, 1, 1.15],
          });
        }
      };
      animate();
      return () => { mounted = false; };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
      {/* Scroll-reactive, more colorful base gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: currentGradient,
          opacity: 0.8,
          zIndex: 0,
        }}
        animate={{ background: currentGradient }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" className="absolute w-full h-full">
        {controlsArray.map((controls, i) => {
          // Parallax offset
          const px = parallax.x * (120 + i * 40);
          const py = parallax.y * (120 + i * 40);

          // Position and size
          const cx = 200 + i * 300 + px * 20;
          const cy = 200 + (i % 2 === 0 ? i * 120 : i * 180) + py * 20;
          const size = blobSize[i % blobSize.length];

          return (
            <motion.path
              key={i}
              d={blobPaths[i % blobPaths.length]}
              animate={controls}
              fill={`url(#blob-gradient-3d-${i})`}
              style={{
                filter: 'blur(50px)',
                opacity: 0.32 - i * 0.02,
                transform: `translate(${cx}px, ${cy}px) scale(${size / 200})`,
                transition: 'transform 0.2s',
                mixBlendMode: 'lighten',
              }}
            />
          );
        })}
        {/* 3D Gradients */}
        {gradients.map((gradient, i) => (
          <radialGradient key={i} id={`blob-gradient-3d-${i}`} cx="50%" cy="40%" r="70%">
            {gradient.map((stop, j) => (
              <stop key={j} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
            ))}
          </radialGradient>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBlobBackground; 