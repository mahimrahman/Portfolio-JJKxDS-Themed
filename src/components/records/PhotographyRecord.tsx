import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, MapPin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import japaneseBg from '../../japanese.jpg';

interface ImageMetadata {
  model?: string;
  location?: string;
}

interface Photo {
  src: string;
  location: string;
  model?: string;
  name: string;
  metadata: ImageMetadata | null;
  category: string;
}

interface Category {
  name: string;
  path: string;
  imageCount: number;
  images: any[];
}

interface SakuraPetalProps {
  delay: number;
  size: number;
  duration: number;
  xOffset: number;
  swayAmount: number;
}

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
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    // Load photography manifest
    fetch('/assets/Pic/photography-manifest.json')
      .then(res => res.json())
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading photography:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Update photos when category is selected
    if (selectedCategory && categories.length > 0) {
      const category = categories.find(cat => cat.name === selectedCategory);
      if (category) {
        const categoryPhotos: Photo[] = category.images.map((img: any) => ({
          src: img.path,
          location: img.metadata?.location || 'Unknown Location',
          model: img.metadata?.model,
          name: img.name,
          metadata: img.metadata,
          category: img.category
        }));
        setPhotos(categoryPhotos);
      }
    }
  }, [selectedCategory, categories]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (openIdx === null) return;
    if (e.key === 'ArrowLeft') {
      setOpenIdx((prev) => (prev === 0 ? photos.length - 1 : prev! - 1));
    } else if (e.key === 'ArrowRight') {
      setOpenIdx((prev) => (prev === photos.length - 1 ? 0 : prev! + 1));
    } else if (e.key === 'Escape') {
      setOpenIdx(null);
    }
  }, [openIdx, photos.length]);

  useEffect(() => {
    if (openIdx === null) return;
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openIdx, handleKey]);

  if (loading) {
    return (
      <div className="relative h-screen bg-deep-charcoal overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-zenitsu-lightning border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-snow-white text-xl">Loading Photography...</p>
        </div>
      </div>
    );
  }

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

        {/* Category Selection */}
        {!selectedCategory ? (
          <motion.div
            className="flex-1 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
              {categories.map((category, idx) => (
                <motion.div
                  key={category.name}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-zenitsu-lightning transition-all duration-300 shadow-2xl">
                    {/* Category Cover Image */}
                    <img
                      src={category.images[0]?.path}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Category Info */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                      <motion.h3
                        className="text-4xl md:text-5xl font-mochiy text-snow-white mb-3 group-hover:text-zenitsu-lightning transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        {category.name}
                      </motion.h3>
                      <div className="flex items-center gap-2 text-snow-white/80 text-lg">
                        <span className="font-anime">{category.imageCount} Photos</span>
                      </div>
                      <motion.div
                        className="mt-4 px-6 py-2 bg-zenitsu-lightning/20 backdrop-blur-sm border border-zenitsu-lightning/50 rounded-full text-snow-white font-medium group-hover:bg-zenitsu-lightning/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        View Collection
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <>
            {/* Back to Categories Button */}
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setOpenIdx(null);
                }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl text-zenitsu-lightning hover:text-snow-white transition-all duration-300 font-medium shadow-lg group"
              >
                <motion.div
                  whileHover={{ x: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowLeft size={18} />
                </motion.div>
                <span className="group-hover:underline">Back to Categories</span>
              </button>
            </motion.div>

            <div className="flex-1 relative max-h-[calc(100vh-16rem)]">
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
                    alt={photo.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    {photo.model && (
                      <p className="text-snow-white font-anime text-xs mb-1 flex items-center gap-1">
                        <User size={12} /> {photo.model}
                      </p>
                    )}
                    <p className="text-snow-white font-anime text-sm flex items-center gap-1">
                      <MapPin size={12} /> {photo.location}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </>
        )}

        <AnimatePresence>
          {openIdx !== null && selectedCategory && (
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
                alt={photos[openIdx].name}
                className="max-h-[80vh] max-w-[80vw] object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center bg-black/80 backdrop-blur-md px-6 py-3 rounded-xl">
                {photos[openIdx].model && (
                  <div className="flex items-center justify-center gap-2 text-zenitsu-lightning mb-2">
                    <User size={18} />
                    <span className="font-bold">In Frame:</span>
                    <span className="text-snow-white">{photos[openIdx].model}</span>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 text-zenitsu-lightning">
                  <MapPin size={18} />
                  <span className="font-bold">Location:</span>
                  <span className="text-snow-white font-anime">{photos[openIdx].location}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotographyRecord;
