import React, { useState, useCallback, useEffect, useMemo } from 'react';
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

interface Category {
  name: string;
  path: string;
  imageCount: number;
  images: any[];
}

const PhotographyRecord: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [, setHoveredIdx] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  useEffect(() => {
    // Load photography manifest
    fetch('/assets/Photography/photography-manifest.json')
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

  // Memoize photos to prevent unnecessary recalculations
  const photos = useMemo(() => {
    if (selectedCategory && categories.length > 0) {
      const category = categories.find(cat => cat.name === selectedCategory);
      if (category) {
        return category.images.map((img: any) => ({
          src: img.path,
          location: img.metadata?.location || 'Unknown Location',
          model: img.metadata?.model,
          client: img.metadata?.client,
          name: img.name,
          metadata: img.metadata,
          category: selectedCategory
        }));
      }
    }
    return [];
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
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal via-cursed-blue/20 to-deep-charcoal" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${japaneseBg})` }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Back to Portfolio Button - Only show when no category selected */}
        {!selectedCategory && (
          <motion.div
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
        )}

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
            className="flex-1 flex items-center justify-center px-4 md:px-8 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl w-full my-auto">
              {categories.map((category, idx) => (
                <motion.div
                  key={category.name}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="relative h-[350px] md:h-[420px] rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-zenitsu-lightning transition-all duration-300 shadow-2xl">
                    {/* Category Cover Image */}
                    <img
                      src={category.images[0]?.path}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
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
              className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 mb-6 gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back Button and Category Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
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

                  {/* View Mode Toggle - Mobile position */}
                  <div className="sm:hidden">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl p-1">
                      <button
                        onClick={() => setViewMode('carousel')}
                        className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          viewMode === 'carousel'
                            ? 'bg-zenitsu-lightning text-deep-charcoal font-bold'
                            : 'text-snow-white/70 hover:text-snow-white'
                        }`}
                      >
                        <Layers size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          viewMode === 'grid'
                            ? 'bg-zenitsu-lightning text-deep-charcoal font-bold'
                            : 'text-snow-white/70 hover:text-snow-white'
                        }`}
                      >
                        <Grid3x3 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

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

              {/* View Mode Toggle - Desktop only */}
              <motion.div
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl p-1"
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
                  <span className="text-sm">Carousel</span>
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
                  <span className="text-sm">Grid</span>
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
            slidesPerView={'auto'}
            initialSlide={0}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 250,
              modifier: 1.2,
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
            className="h-full w-full"
            onSwiper={() => {}}
            breakpoints={{
              320: {
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 15,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }
              },
              640: {
                spaceBetween: 25,
                coverflowEffect: {
                  rotate: 18,
                  stretch: 0,
                  depth: 220,
                  modifier: 1.1,
                  slideShadows: true,
                }
              },
              1024: {
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 20,
                  stretch: 0,
                  depth: 250,
                  modifier: 1.2,
                  slideShadows: true,
                }
              }
            }}
          >
            {photos.map((photo, idx) => (
              <SwiperSlide key={idx} className="!w-[200px] md:!w-[280px] h-[280px] md:h-[380px]">
                <motion.div
                  className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer shadow-xl"
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
                    decoding="async"
                  />
                  {/* Always visible subtle info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                    {photo.client && (
                      <p className="text-white/70 text-[10px] font-light mb-0.5">Client: {photo.client}</p>
                    )}
                    {photo.model && (
                      <p className="text-white/70 text-[10px] font-light mb-0.5">{photo.model}</p>
                    )}
                    {(!photo.client || selectedCategory !== 'Product Shoot') && (
                      <p className="text-white/60 text-[9px] font-light">
                        {photo.location.split(',').slice(0, 2).join(', ')}
                      </p>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
            )}

            {/* Grid View - Instagram Style */}
            {viewMode === 'grid' && (
              <motion.div
                className="flex-1 px-4 md:px-6 pb-6 overflow-y-auto max-h-[calc(100vh-18rem)] flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2 w-full" style={{ maxWidth: '1200px' }}>
                  {photos.map((photo, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group cursor-pointer aspect-square bg-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.01 }}
                      onClick={() => setOpenIdx(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      {/* Image */}
                      <img
                        src={photo.src}
                        alt={photo.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Simple dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <div className="text-center px-3">
                          {photo.client && (
                            <p className="text-white text-xs md:text-sm font-medium mb-1">{photo.client}</p>
                          )}
                          {photo.model && (
                            <p className="text-white text-xs md:text-sm font-medium mb-1">{photo.model}</p>
                          )}
                          {(!photo.client || selectedCategory !== 'Product Shoot') && (
                            <p className="text-white/80 text-[10px] md:text-xs">
                              {photo.location.split(',')[0]}
                            </p>
                          )}
                        </div>
                      </div>
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

              {/* Enhanced Navigation Buttons - Mobile optimized */}
              <motion.button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 text-snow-white hover:text-zenitsu-lightning hover:border-zenitsu-lightning transition-all duration-300 flex items-center justify-center shadow-2xl z-50"
                onClick={() => setOpenIdx((prev) => (prev === 0 ? photos.length - 1 : prev! - 1))}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-2xl md:text-3xl">‹</span>
              </motion.button>

              <motion.button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 text-snow-white hover:text-zenitsu-lightning hover:border-zenitsu-lightning transition-all duration-300 flex items-center justify-center shadow-2xl z-50"
                onClick={() => setOpenIdx((prev) => (prev === photos.length - 1 ? 0 : prev! + 1))}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-2xl md:text-3xl">›</span>
              </motion.button>

              {/* Main Image with Enhanced Animation */}
              <motion.div
                key={openIdx}
                className="relative max-h-[70vh] md:max-h-[75vh] max-w-[90vw] md:max-w-[85vw]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={photos[openIdx].src}
                  alt={photos[openIdx].name}
                  className="max-h-[70vh] md:max-h-[75vh] max-w-[90vw] md:max-w-[85vw] object-contain rounded-lg shadow-2xl"
                  loading="eager"
                />

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-zenitsu-lightning/30 shadow-[0_0_30px_rgba(255,215,0,0.3)]" />
              </motion.div>

              {/* Info Panel - Bottom positioned with labels */}
              <motion.div
                className="absolute bottom-16 md:bottom-20 left-4 right-4 md:left-auto md:right-8 md:max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-deep-charcoal/90 backdrop-blur-md border border-white/20 rounded-lg px-4 md:px-5 py-3 md:py-4 space-y-2 md:space-y-3">
                  {photos[openIdx].client && (
                    <motion.div
                      className="flex items-start gap-2 md:gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <User size={16} className="text-zenitsu-lightning mt-0.5 md:mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-snow-white/50 mb-0.5 md:mb-1">Client</p>
                        <p className="text-snow-white text-sm md:text-base lg:text-lg font-medium">
                          {photos[openIdx].client}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  {photos[openIdx].model && (
                    <motion.div
                      className="flex items-start gap-2 md:gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <User size={16} className="text-zenitsu-lightning mt-0.5 md:mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-snow-white/50 mb-0.5 md:mb-1">In Frame</p>
                        <p className="text-snow-white text-sm md:text-base lg:text-lg font-medium">
                          {photos[openIdx].model}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  {(selectedCategory !== 'Product Shoot' || !photos[openIdx].client) && (
                    <motion.div
                      className="flex items-start gap-2 md:gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <MapPin size={16} className="text-zenitsu-lightning mt-0.5 md:mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-snow-white/50 mb-0.5 md:mb-1">Location</p>
                        <p className="text-snow-white/90 text-xs md:text-sm lg:text-base">
                          {photos[openIdx].location}
                        </p>
                      </div>
                    </motion.div>
                  )}
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
