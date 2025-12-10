import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import japaneseBg from '../../japanese.jpg';

interface Photo {
  src: string;
  location: string;
}

interface SakuraPetalProps {
  delay: number;
  size: number;
  duration: number;
  xOffset: number;
  swayAmount: number;
}

const locations = [
  'Tokyo', 'Kyoto', 'Osaka', 'Mount Fuji', 'Shibuya', 'Akihabara', 'Nara', 'Sapporo', 'Fukuoka', 'Nagoya',
  'Sendai', 'Hiroshima', 'Kobe', 'Yokohama', 'Okinawa', 'Hakone', 'Kamakura', 'Nikko', 'Takayama', 'Kanazawa',
  'Matsumoto', 'Nagano', 'Beppu', 'Kagoshima', 'Miyajima', 'Kurashiki', 'Shirakawa-go', 'Ise', 'Kushiro', 'Aomori',
  'Miyazaki', 'Furano', 'Nagasaki', 'Kochi', 'Tottori', 'Wakayama', 'Uji', 'Narita', 'Chiba', 'Himeji'
];

const photos: Photo[] = Array.from({ length: 40 }).map((_, i) => ({
  src: `https://placehold.co/600x750/1a1a2e/fff?text=Photo+${i + 1}`,
  location: locations[i % locations.length],
}));

const SakuraPetal: React.FC<SakuraPetalProps> = ({ delay, size, duration, xOffset, swayAmount }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ width: size, height: size }}
    initial={{ 
      x: xOffset,
      y: -20,
      rotate: 0,
      opacity: 0.6
    }}
    animate={{
      y: window.innerHeight + 20,
      x: xOffset + swayAmount,
      rotate: 360,
      opacity: 0
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <div className="w-full h-full bg-gradient-to-r from-pink-300/80 to-pink-500/80 rounded-full transform rotate-45 blur-[0.5px]" />
  </motion.div>
);

const PhotographyRecord: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (openIdx === null) return;
    if (e.key === 'ArrowLeft') {
      setOpenIdx((prev) => (prev === 0 ? photos.length - 1 : prev! - 1));
    } else if (e.key === 'ArrowRight') {
      setOpenIdx((prev) => (prev === photos.length - 1 ? 0 : prev! + 1));
    } else if (e.key === 'Escape') {
      setOpenIdx(null);
    }
  }, [openIdx]);

  useEffect(() => {
    if (openIdx === null) return;
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openIdx, handleKey]);

  return (
    <div className="relative h-screen bg-deep-charcoal overflow-hidden">
      {/* Enhanced Sakura petals */}
      {Array.from({ length: 30 }).map((_, i) => (
        <SakuraPetal 
          key={i} 
          delay={i * 0.3} 
          size={16 + Math.random() * 16}
          duration={15 + Math.random() * 20}
          xOffset={Math.random() * window.innerWidth}
          swayAmount={Math.random() * 200 - 100}
        />
      ))}

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal via-cursed-blue/20 to-deep-charcoal" />
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${japaneseBg})` }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Back to Portfolio Button */}
        <motion.div
          className="absolute top-6 left-6 z-40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl text-zenitsu-lightning hover:text-snow-white transition-all duration-300 font-medium shadow-lg group"
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft size={18} />
            </motion.div>
            <span className="group-hover:underline">Back to Portfolio</span>
          </Link>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl font-mochiy text-snow-white py-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Photography
        </motion.h2>

        <div className="flex-1 relative max-h-[calc(100vh-12rem)]">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            initialSlide={0}
            spaceBetween={40}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 300,
              modifier: 1.5,
              slideShadows: true,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
            className="h-full"
            onSwiper={() => {}}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40
              }
            }}
          >
            {photos.map((photo, idx) => (
              <SwiperSlide key={idx} className="w-[240px] h-[300px]">
                <motion.div
                  className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  onClick={() => setOpenIdx(idx)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={photo.src}
                    alt={`Photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-snow-white font-anime text-sm">{photo.location}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <AnimatePresence>
          {openIdx !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-snow-white text-2xl hover:text-zenitsu-lightning transition-colors"
                onClick={() => setOpenIdx(null)}
              >
                ×
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-snow-white text-4xl hover:text-zenitsu-lightning transition-colors"
                onClick={() => setOpenIdx((prev) => (prev === 0 ? photos.length - 1 : prev! - 1))}
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-snow-white text-4xl hover:text-zenitsu-lightning transition-colors"
                onClick={() => setOpenIdx((prev) => (prev === photos.length - 1 ? 0 : prev! + 1))}
              >
                ›
              </button>
              <motion.img
                key={openIdx}
                src={photos[openIdx].src}
                alt={`Photo ${openIdx + 1}`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-snow-white font-anime">
                {photos[openIdx].location}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotographyRecord;
