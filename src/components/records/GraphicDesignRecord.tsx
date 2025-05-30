import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    name: 'Anime Poster Series',
    cover: 'https://placehold.co/400x250/1a1a2e/fff?text=Poster+Cover',
    images: [
      'https://placehold.co/800x500/1a1a2e/fff?text=Poster+1',
      'https://placehold.co/800x500/3a86ff/fff?text=Poster+2',
      'https://placehold.co/800x500/ffb300/fff?text=Poster+3',
    ],
  },
  {
    name: 'Event Branding',
    cover: 'https://placehold.co/400x250/ff5e13/fff?text=Brand+Cover',
    images: [
      'https://placehold.co/800x500/ff5e13/fff?text=Brand+1',
      'https://placehold.co/800x500/00a676/fff?text=Brand+2',
    ],
  },
  {
    name: 'Social Media Campaigns',
    cover: 'https://placehold.co/400x250/ffd000/fff?text=Campaign+Cover',
    images: [
      'https://placehold.co/800x500/ffd000/fff?text=Campaign+1',
      'https://placehold.co/800x500/3a86ff/fff?text=Campaign+2',
      'https://placehold.co/800x500/ff4e00/fff?text=Campaign+3',
    ],
  },
  {
    name: 'Club/Association Visuals',
    cover: 'https://placehold.co/400x250/121212/fff?text=Club+Cover',
    images: [
      'https://placehold.co/800x500/121212/fff?text=Club+1',
      'https://placehold.co/800x500/ffb300/fff?text=Club+2',
    ],
  },
];

const folderColors = [
  'from-rengoku-flame to-domain-violet',
  'from-cursed-blue to-zenitsu-lightning',
  'from-zenitsu-lightning to-rengoku-flame',
  'from-domain-violet to-cursed-blue',
];

const GraphicDesignRecord: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleOpen = (idx: number) => {
    setOpenIdx(idx);
    setCarouselIdx(0);
  };

  const handleClose = () => setOpenIdx(null);

  const handleNext = () => {
    if (openIdx !== null) {
      setCarouselIdx((carouselIdx + 1) % projects[openIdx].images.length);
    }
  };

  const handlePrev = () => {
    if (openIdx !== null) {
      setCarouselIdx((carouselIdx - 1 + projects[openIdx].images.length) % projects[openIdx].images.length);
    }
  };

  // Keyboard accessibility
  useEffect(() => {
    if (openIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line
  }, [openIdx, carouselIdx]);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
          Graphic Design
        </h1>
        <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {projects.map((project, idx) => (
          <motion.button
            key={project.name}
            onClick={() => handleOpen(idx)}
            whileHover={{ scale: 1.06, boxShadow: '0 0 32px 8px #FFD00055' }}
            whileTap={{ scale: 0.98 }}
            className={`group relative bg-gradient-to-br ${folderColors[idx % folderColors.length]} rounded-2xl p-0 flex flex-col items-center justify-center shadow-lg border-4 border-zenitsu-lightning/20 hover:border-zenitsu-lightning/60 transition-all duration-300 cursor-pointer overflow-hidden`}
            style={{ minHeight: 240 }}
          >
            <div className="w-full h-40 flex items-center justify-center bg-black/40 rounded-t-2xl overflow-hidden">
              <img src={project.cover} alt={project.name + ' cover'} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <span className="text-2xl md:text-2xl font-bold text-snow-white drop-shadow-lg text-center mb-2 break-words whitespace-normal min-w-0">
                {project.name}
              </span>
              <span className="text-5xl mb-2 drop-shadow-lg">📁</span>
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-zenitsu-lightning rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            ref={carouselRef}
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
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-3xl text-snow-white hover:text-zenitsu-lightning transition-colors z-10"
                aria-label="Close"
              >
                ×
              </button>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-4xl text-snow-white hover:text-zenitsu-lightning px-4 py-2 z-10 bg-black/40 rounded-full"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-4xl text-snow-white hover:text-zenitsu-lightning px-4 py-2 z-10 bg-black/40 rounded-full"
                aria-label="Next"
              >
                ›
              </button>
              <div className="flex items-center justify-between w-full mb-4 mt-8">
                <span className="text-xl md:text-2xl font-bold text-snow-white drop-shadow-lg text-center mx-auto break-words whitespace-normal min-w-0">
                  {projects[openIdx].name}
                </span>
              </div>
              <motion.img
                key={projects[openIdx].images[carouselIdx]}
                src={projects[openIdx].images[carouselIdx]}
                alt={projects[openIdx].name}
                className="w-full max-h-[60vh] object-contain rounded-xl shadow-2xl border-4 border-domain-violet bg-black"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex justify-center gap-2 mt-6">
                {projects[openIdx].images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIdx(i)}
                    className={`w-3 h-3 rounded-full border-2 ${i === carouselIdx ? 'bg-zenitsu-lightning border-zenitsu-lightning' : 'bg-ghost-black border-domain-violet'} transition-all`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GraphicDesignRecord; 