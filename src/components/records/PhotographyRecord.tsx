import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Photo {
  src: string;
  location: string;
}

const locations = [
  'Tokyo', 'Kyoto', 'Osaka', 'Mount Fuji', 'Shibuya', 'Akihabara', 'Nara', 'Sapporo', 'Fukuoka', 'Nagoya',
  'Sendai', 'Hiroshima', 'Kobe', 'Yokohama', 'Okinawa', 'Hakone', 'Kamakura', 'Nikko', 'Takayama', 'Kanazawa',
  'Matsumoto', 'Nagano', 'Beppu', 'Kagoshima', 'Miyajima', 'Kurashiki', 'Shirakawa-go', 'Ise', 'Kushiro', 'Aomori',
  'Miyazaki', 'Furano', 'Nagasaki', 'Kochi', 'Tottori', 'Wakayama', 'Uji', 'Narita', 'Chiba', 'Himeji'
];

const photos: Photo[] = Array.from({ length: 40 }).map((_, i) => ({
  src: `https://placehold.co/600x${400 + (i % 5) * 40}/1a1a2e/fff?text=Photo+${i + 1}`,
  location: locations[i % locations.length],
}));

const CIRCLE_RADIUS = 1200; // px
const IMAGE_WIDTH = 340;
const IMAGE_HEIGHT = 220;
const STAR_COUNT = 120;

// Starfield background component
const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId: number;
    let stars: { x: number; y: number; z: number; size: number; speed: number }[] = [];
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 1 + 0.5,
        size: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.2 + 0.05,
      });
    }
    const animate = () => {
      ctx!.clearRect(0, 0, w, h);
      for (let star of stars) {
        ctx!.save();
        ctx!.globalAlpha = 0.7 + 0.3 * Math.sin(Date.now() * 0.001 + star.x);
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx!.fillStyle = '#fff';
        ctx!.shadowColor = '#fff';
        ctx!.shadowBlur = 8;
        ctx!.fill();
        ctx!.restore();
        // Move star gently
        star.x += Math.sin(Date.now() * 0.0002 + star.y) * star.speed;
        star.y += Math.cos(Date.now() * 0.0002 + star.x) * star.speed;
        // Wrap around
        if (star.x < 0) star.x = w;
        if (star.x > w) star.x = 0;
        if (star.y < 0) star.y = h;
        if (star.y > h) star.y = 0;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, #181825 80%, #0a0a16 100%)' }}
    />
  );
};

const getCircularStyle = (i: number, total: number, rotationY: number) => {
  // Place each image at an angle around the Y axis
  const angle = (360 / total) * i;
  // Calculate relative angle to camera
  let relAngle = ((angle - rotationY + 360) % 360);
  if (relAngle > 180) relAngle -= 360;
  // Perspective scaling: center images are larger, sides are smaller
  const scale = 1.1 - Math.abs(relAngle) / 180 * 0.55;
  const opacity = 0.25 + 0.75 * (1 - Math.abs(relAngle) / 180);
  const zIndex = 1000 - Math.abs(relAngle) * 10;
  return {
    transform: `rotateY(${angle}deg) translateZ(${CIRCLE_RADIUS}px) scale(${scale})`,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    marginLeft: -IMAGE_WIDTH / 2,
    marginTop: -IMAGE_HEIGHT / 2,
    boxShadow: '0 16px 48px 0 #000a, 0 0 0 2px #3a86ff33',
    background: 'linear-gradient(to bottom right, rgba(58,134,255,0.10), rgba(108,91,255,0.18))',
    border: '3px solid #FFD00044',
    borderRadius: '1.5rem',
    cursor: 'pointer',
    zIndex,
    opacity,
    transition: 'box-shadow 0.3s, border 0.3s, transform 0.5s cubic-bezier(.77,0,.18,1), opacity 0.5s',
    willChange: 'transform, opacity',
    filter: relAngle > 90 || relAngle < -90 ? 'blur(2px) grayscale(0.5)' : '',
    pointerEvents: (opacity < 0.3 ? 'none' : 'auto') as any,
  };
};

const PhotographyRecord: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [rotationY, setRotationY] = useState(0); // degrees
  const galleryRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Scroll handler to rotate the gallery
  useEffect(() => {
    const handleScroll = () => {
      // Map scrollY to rotationY (0 to 360deg for a full circle)
      const maxScroll = window.innerHeight * 2;
      const scroll = window.scrollY;
      const rot = (scroll / maxScroll) * 360;
      setRotationY(rot);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpen = (idx: number) => {
    setOpenIdx(idx);
    setCarouselIdx(idx);
  };
  const handleClose = () => setOpenIdx(null);
  const handleNext = () => setCarouselIdx((prev) => (prev + 1) % photos.length);
  const handlePrev = () => setCarouselIdx((prev) => (prev - 1 + photos.length) % photos.length);

  // Keyboard navigation for lightbox
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  }, []);

  useEffect(() => {
    if (openIdx === null) return;
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openIdx, handleKey]);

  return (
    <section className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-x-hidden overflow-y-auto" style={{ perspective: '1800px', height: '300vh', fontFamily: 'inherit' }}>
      <Starfield />
      <div className="text-center mb-16 sticky top-0 z-30">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cursed-blue to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
          Photography
        </h1>
        <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />
      </div>
      <div
        ref={galleryRef}
        className="relative w-full h-[900px] z-10"
        style={{
          perspective: '1800px',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            transformStyle: 'preserve-3d',
            transform: `rotateY(${-rotationY}deg)`,
            transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={getCircularStyle(i, photos.length, rotationY)}
              tabIndex={0}
              aria-label={`Open photo of ${photo.location}`}
              onClick={() => handleOpen(i)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleOpen(i)}
              className="group focus:outline-none hover:shadow-2xl hover:border-zenitsu-lightning transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={`Photo taken in ${photo.location}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                style={{ boxShadow: '0 4px 24px 0 #3a86ff44' }}
              />
              <span className="absolute left-3 bottom-3 bg-black/70 text-zenitsu-lightning text-xs md:text-sm px-3 py-1 rounded-full font-bold shadow-md animate-pulse pointer-events-none">
                {photo.location}
              </span>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative w-full max-w-4xl mx-auto flex flex-col items-center"
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            >
              <button onClick={handleClose} className="absolute top-4 right-4 text-3xl text-snow-white hover:text-zenitsu-lightning z-10" aria-label="Close">×</button>
              <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 text-4xl text-snow-white hover:text-zenitsu-lightning px-4 py-2 z-10 bg-black/40 rounded-full" aria-label="Previous">‹</button>
              <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 text-4xl text-snow-white hover:text-zenitsu-lightning px-4 py-2 z-10 bg-black/40 rounded-full" aria-label="Next">›</button>
              <div className="text-center mt-8 mb-4">
                <span className="text-xl md:text-2xl font-bold text-snow-white drop-shadow-lg">
                  {photos[carouselIdx].location}
                </span>
              </div>
              <motion.img
                key={photos[carouselIdx].src}
                src={photos[carouselIdx].src}
                alt={`Photo of ${photos[carouselIdx].location}`}
                className="w-full max-h-[60vh] object-contain rounded-xl shadow-2xl border-4 border-cursed-blue bg-black"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex justify-center gap-2 mt-6">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIdx(i)}
                    className={`w-3 h-3 rounded-full border-2 ${i === carouselIdx ? 'bg-zenitsu-lightning border-zenitsu-lightning' : 'bg-ghost-black border-cursed-blue'} transition-all`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        body { background: #181825; }
      `}</style>
    </section>
  );
};

export default PhotographyRecord;
