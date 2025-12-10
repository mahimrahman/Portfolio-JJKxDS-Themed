import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Grid3x3, Layers, Camera, MapPinned } from 'lucide-react';
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
  const [, setHoveredIdx] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

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
            {/* Enhanced Header with Stats and View Toggle */}
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center px-6 mb-6 gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back Button and Category Info */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setOpenIdx(null);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl text-zenitsu-lightning hover:text-snow-white transition-all duration-300 font-medium shadow-lg group"
                >
                  <motion.div
                    whileHover={{ x: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowLeft size={18} />
                  </motion.div>
                  <span className="group-hover:underline">Back</span>
                </button>

                {/* Category Stats */}
                <motion.div
                  className="hidden md:flex items-center gap-6 px-4 py-2 bg-gradient-to-r from-deep-charcoal/60 to-ghost-black/60 backdrop-blur-xl border border-white/10 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 text-snow-white/90">
                    <Camera size={16} className="text-zenitsu-lightning" />
                    <span className="text-sm font-medium">{photos.length} Photos</span>
                  </div>
                  <div className="flex items-center gap-2 text-snow-white/90">
                    <MapPinned size={16} className="text-zenitsu-lightning" />
                    <span className="text-sm font-medium">
                      {new Set(photos.map(p => p.location)).size} Locations
                    </span>
                  </div>
                  {selectedCategory === 'Portraits' && (
                    <div className="flex items-center gap-2 text-snow-white/90">
                      <User size={16} className="text-zenitsu-lightning" />
                      <span className="text-sm font-medium">
                        {new Set(photos.filter(p => p.model).map(p => p.model)).size} Models
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* View Mode Toggle */}
              <motion.div
                className="flex items-center gap-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl p-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    viewMode === 'carousel'
                      ? 'bg-zenitsu-lightning text-deep-charcoal font-bold'
                      : 'text-snow-white/70 hover:text-snow-white'
                  }`}
                >
                  <Layers size={16} />
                  <span className="text-sm hidden sm:inline">Carousel</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    viewMode === 'grid'
                      ? 'bg-zenitsu-lightning text-deep-charcoal font-bold'
                      : 'text-snow-white/70 hover:text-snow-white'
                  }`}
                >
                  <Grid3x3 size={16} />
                  <span className="text-sm hidden sm:inline">Grid</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Carousel View */}
            {viewMode === 'carousel' && (
            <div className="flex-1 relative max-h-[calc(100vh-18rem)]">
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
            )}

            {/* Grid View */}
            {viewMode === 'grid' && (
              <motion.div
                className="flex-1 px-6 pb-6 overflow-y-auto max-h-[calc(100vh-18rem)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {photos.map((photo, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group cursor-pointer aspect-[3/4] rounded-lg overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.02 }}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      onClick={() => setOpenIdx(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      {/* Image with overlay effects */}
                      <img
                        src={photo.src}
                        alt={photo.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Info overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {photo.model && (
                          <motion.p
                            className="text-snow-white font-anime text-xs mb-1 flex items-center gap-1"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <User size={12} className="text-zenitsu-lightning" /> {photo.model}
                          </motion.p>
                        )}
                        <motion.p
                          className="text-snow-white font-anime text-sm flex items-center gap-1"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.15 }}
                        >
                          <MapPin size={12} className="text-zenitsu-lightning" /> {photo.location.split(',')[0]}
                        </motion.p>
                      </div>

                      {/* Glowing border on hover */}
                      <div className="absolute inset-0 border-2 border-zenitsu-lightning/0 group-hover:border-zenitsu-lightning/60 transition-all duration-300 rounded-lg" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
        </>
        )}

        <AnimatePresence>
          {openIdx !== null && selectedCategory && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Enhanced Close Button */}
              <motion.button
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 text-snow-white hover:text-zenitsu-lightning hover:border-zenitsu-lightning transition-all duration-300 flex items-center justify-center shadow-2xl z-10"
                onClick={() => setOpenIdx(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-2xl">×</span>
              </motion.button>

              {/* Photo Counter */}
              <motion.div
                className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl text-snow-white font-medium shadow-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-zenitsu-lightning font-bold">{openIdx + 1}</span>
                <span className="text-snow-white/60"> / {photos.length}</span>
              </motion.div>

              {/* Enhanced Navigation Buttons */}
              <motion.button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 text-snow-white hover:text-zenitsu-lightning hover:border-zenitsu-lightning transition-all duration-300 flex items-center justify-center shadow-2xl"
                onClick={() => setOpenIdx((prev) => (prev === 0 ? photos.length - 1 : prev! - 1))}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-3xl">‹</span>
              </motion.button>

              <motion.button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 text-snow-white hover:text-zenitsu-lightning hover:border-zenitsu-lightning transition-all duration-300 flex items-center justify-center shadow-2xl"
                onClick={() => setOpenIdx((prev) => (prev === photos.length - 1 ? 0 : prev! + 1))}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-3xl">›</span>
              </motion.button>

              {/* Main Image with Enhanced Animation */}
              <motion.div
                key={openIdx}
                className="relative max-h-[75vh] max-w-[85vw]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={photos[openIdx].src}
                  alt={photos[openIdx].name}
                  className="max-h-[75vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
                />

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-zenitsu-lightning/30 shadow-[0_0_30px_rgba(255,215,0,0.3)]" />
              </motion.div>

              {/* Enhanced Info Panel */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-deep-charcoal/95 to-ghost-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col gap-3">
                      {photos[openIdx].model && (
                        <motion.div
                          className="flex items-center gap-3 text-snow-white"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-zenitsu-lightning/20 flex items-center justify-center border border-zenitsu-lightning/50">
                            <User size={18} className="text-zenitsu-lightning" />
                          </div>
                          <div>
                            <p className="text-xs text-snow-white/60 font-medium">In Frame</p>
                            <p className="text-lg font-bold">{photos[openIdx].model}</p>
                          </div>
                        </motion.div>
                      )}
                      <motion.div
                        className="flex items-center gap-3 text-snow-white"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-zenitsu-lightning/20 flex items-center justify-center border border-zenitsu-lightning/50">
                          <MapPin size={18} className="text-zenitsu-lightning" />
                        </div>
                        <div>
                          <p className="text-xs text-snow-white/60 font-medium">Location</p>
                          <p className="text-lg font-anime">{photos[openIdx].location}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1 bg-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-zenitsu-lightning to-cursed-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${((openIdx + 1) / photos.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Keyboard hint */}
              <motion.div
                className="absolute bottom-8 right-8 text-snow-white/40 text-xs font-medium hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Use ← → or ESC keys
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotographyRecord;
