import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Palette,
  FileText,
  Monitor,
  Pen,
  Image as ImageIcon,
  Briefcase,
  Trophy,
  Folder,
  Award,
  GraduationCap,
  Box,
  Grid,
  Filter,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ImageData {
  name: string;
  path: string;
}

interface Subcategory {
  id: string;
  title: string;
  folder: string;
  description: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  folder: string;
  images: ImageData[];
  subcategories?: Subcategory[];
  hasSubfolders?: boolean;
  subfoldersAsCategories?: boolean;
  dynamicSubfolders?: Subcategory[];
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<any>> = {
  Palette,
  FileText,
  Monitor,
  Pen,
  Image: ImageIcon,
  Briefcase,
  Trophy,
  Folder,
  Award,
  GraduationCap,
  Box
};

const GraphicDesignRecord: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [allImages, setAllImages] = useState<ImageData[]>([]);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
  const [showAllView, setShowAllView] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showGridView, setShowGridView] = useState(false);
  const [selectedImageForCarousel, setSelectedImageForCarousel] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(50); // Show 50 images per page
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when carousel is open
  useEffect(() => {
    if (selectedImageForCarousel !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageForCarousel]);

  // Handle browser back button navigation
  useEffect(() => {
    const handlePopState = () => {
      if (selectedImageForCarousel !== null) {
        setSelectedImageForCarousel(null);
      } else if (showGridView && selectedSubcategory) {
        setSelectedSubcategory(null);
        setShowGridView(false);
      } else if (showAllView) {
        setShowAllView(false);
        setFilterCategory('all');
      } else if (openIdx !== null) {
        handleClose();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedImageForCarousel, showGridView, selectedSubcategory, showAllView, openIdx]);

  useEffect(() => {
    // Load categories and images
    Promise.all([
      fetch('/assets/Graphics/categories.json').then(res => res.json()),
      fetch('/assets/Graphics/images-manifest.json').then(res => res.json())
    ])
      .then(([categoriesData, manifestData]) => {
        // Store all images
        setAllImages(manifestData.images);

        // Map categories with their images
        const categoriesWithImages = categoriesData.categories.map((cat: any) => {
          // If this category has subfolders as categories, discover them
          if (cat.hasSubfolders && cat.subfoldersAsCategories) {
            const folderImages = manifestData.images.filter((img: ImageData) =>
              img.path.includes(cat.folder)
            );

            // Extract unique subfolder names
            const subfolderSet = new Set<string>();
            folderImages.forEach((img: ImageData) => {
              // Handle both local paths and Cloudinary URLs
              let pathToProcess = img.path;
              if (pathToProcess.includes('cloudinary.com')) {
                // Extract path from Cloudinary URL: .../Portfolio/Graphic Design/folder/subfolder/image.jpg
                const urlParts = decodeURIComponent(pathToProcess).split('/Portfolio/Graphic Design/');
                if (urlParts.length > 1) {
                  pathToProcess = urlParts[1];
                }
              } else {
                // Local path
                pathToProcess = pathToProcess.replace('/assets/Graphics/', '');
              }
              
              const pathParts = pathToProcess.split('/');
              if (pathParts.length > 1) {
                subfolderSet.add(pathParts[1]); // Get the immediate subfolder
              }
            });

            // Create dynamic subcategories
            const dynamicSubfolders = Array.from(subfolderSet).map(folderName => ({
              id: folderName.toLowerCase().replace(/\s+/g, '-'),
              title: folderName.replace(/-/g, ' '),
              folder: folderName,
              description: `${folderName.replace(/-/g, ' ')} project`
            }));

            return {
              ...cat,
              dynamicSubfolders,
              images: folderImages
            };
          }

          const categoryImages = manifestData.images.filter((img: ImageData) =>
            img.path.includes(cat.folder)
          );

          return {
            ...cat,
            images: categoryImages
          };
        }).filter((cat: Category) => cat.images.length > 0); // Only show categories with images

        setCategories(categoriesWithImages);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading graphics:', err);
        setLoading(false);
      });
  }, []);

  const handleOpen = (idx: number) => {
    setOpenIdx(idx);
    setCarouselIdx(0);
    setSelectedSubcategory(null);
    setShowGridView(false);
    setSelectedImageForCarousel(null);
    setCurrentPage(1); // Reset pagination
    // Push state for browser back button
    window.history.pushState({ page: 'category' }, '', window.location.pathname);
  };

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    setSelectedSubcategory(subcategory);
    setCarouselIdx(0);
    setShowGridView(true);
    setSelectedImageForCarousel(null);
    setCurrentPage(1); // Reset pagination
    // Push state for browser back button
    window.history.pushState({ page: 'subcategory' }, '', window.location.pathname);
  };

  const handleClose = () => {
    setOpenIdx(null);
    setSelectedSubcategory(null);
    setShowAllView(false);
    setShowGridView(false);
    setSelectedImageForCarousel(null);
    setFilterCategory('all');
  };

  const handleBack = () => {
    if (selectedImageForCarousel !== null) {
      setSelectedImageForCarousel(null);
    } else if (showGridView && selectedSubcategory) {
      setSelectedSubcategory(null);
      setShowGridView(false);
    } else if (showGridView && !selectedSubcategory) {
      setShowGridView(false);
    } else if (selectedSubcategory) {
      setSelectedSubcategory(null);
      setCarouselIdx(0);
    } else if (showAllView) {
      setShowAllView(false);
      setFilterCategory('all');
    } else {
      handleClose();
    }
  };

  const handleViewAll = () => {
    setShowAllView(true);
    setOpenIdx(null);
    setSelectedSubcategory(null);
    setShowGridView(true);
    setFilterCategory('all');
    setSelectedImageForCarousel(null);
    setCurrentPage(1); // Reset pagination
    // Push state for browser back button
    window.history.pushState({ page: 'all' }, '', window.location.pathname);
  };

  const handleImageClick = (imageIdx: number) => {
    setSelectedImageForCarousel(imageIdx);
    setCarouselIdx(imageIdx);
    // Push state for browser back button
    window.history.pushState({ page: 'carousel' }, '', window.location.pathname);
  };

  const handleNext = () => {
    const currentImages = getDisplayImages();
    setCarouselIdx((carouselIdx + 1) % currentImages.length);
  };

  const handlePrev = () => {
    const currentImages = getDisplayImages();
    setCarouselIdx((carouselIdx - 1 + currentImages.length) % currentImages.length);
  };

  const getDisplayImages = (): ImageData[] => {
    let images: ImageData[] = [];

    if (showAllView) {
      if (filterCategory === 'all') {
        images = allImages;
      } else {
        const category = categories.find(cat => cat.id === filterCategory);
        images = category ? category.images : allImages;
      }
    } else if (openIdx !== null) {
      const category = categories[openIdx];
      if (selectedSubcategory) {
        images = category.images.filter(img =>
          img.path.includes(`${category.folder}/${selectedSubcategory.folder}`)
        );
      } else {
        images = category.images;
      }
    }

    // Apply pagination
    const startIdx = (currentPage - 1) * imagesPerPage;
    const endIdx = startIdx + imagesPerPage;
    return images.slice(startIdx, endIdx);
  };

  const getTotalImages = (): number => {
    if (showAllView) {
      if (filterCategory === 'all') {
        return allImages.length;
      } else {
        const category = categories.find(cat => cat.id === filterCategory);
        return category ? category.images.length : allImages.length;
      }
    }
    if (openIdx === null) return 0;
    const category = categories[openIdx];
    if (selectedSubcategory) {
      return category.images.filter(img =>
        img.path.includes(`${category.folder}/${selectedSubcategory.folder}`)
      ).length;
    }
    return category.images.length;
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (selectedImageForCarousel !== null) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line
  }, [selectedImageForCarousel, carouselIdx]);

  const folderColors = [
    'from-rengoku-flame to-domain-violet',
    'from-cursed-blue to-zenitsu-lightning',
    'from-zenitsu-lightning to-rengoku-flame',
    'from-domain-violet to-cursed-blue',
    'from-rengoku-flame to-cursed-blue',
    'from-zenitsu-lightning to-domain-violet',
    'from-domain-violet to-rengoku-flame',
    'from-cursed-blue to-domain-violet',
    'from-rengoku-flame to-zenitsu-lightning',
    'from-domain-violet to-zenitsu-lightning',
  ];

  if (loading) {
    return (
      <section
        className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/src/graphicbg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-zenitsu-lightning border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-snow-white text-xl">Loading Portfolio...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/src/graphicbg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
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

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
          Graphic Design
        </h1>
        <p className="text-snow-white/70 text-lg mb-2">
          Explore {allImages.length} creative works across {categories.length} categories
        </p>
        <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />

        {/* View All Button */}
        <motion.button
          onClick={handleViewAll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame text-deep-charcoal font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <Grid size={20} />
          View All Graphics
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => {
          const IconComponent = iconMap[category.icon] || Folder;

          return (
            <motion.button
              key={category.id}
              onClick={() => handleOpen(idx)}
              whileHover={{ scale: 1.06, boxShadow: '0 0 32px 8px #FFD00055' }}
              whileTap={{ scale: 0.98 }}
              className={`group relative bg-gradient-to-br ${folderColors[idx % folderColors.length]} rounded-2xl p-0 flex flex-col items-center justify-center shadow-lg border-4 border-zenitsu-lightning/20 hover:border-zenitsu-lightning/60 transition-all duration-300 cursor-pointer overflow-hidden`}
              style={{ minHeight: 240 }}
            >
              <div className="w-full h-40 flex items-center justify-center bg-black/40 rounded-t-2xl overflow-hidden">
                {category.images && category.images.length > 0 && category.images[0] ? (
                  <img
                    src={category.images[0].path}
                    alt={category.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <IconComponent size={64} className="text-snow-white/30" />
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-4">
                <span className="text-xl md:text-xl font-bold text-snow-white drop-shadow-lg text-center mb-1 break-words whitespace-normal min-w-0">
                  {category.title}
                </span>
                <span className="text-sm text-snow-white/70 mb-2">
                  {category.images.length} items
                </span>
                <div className="text-snow-white/90 drop-shadow-lg">
                  <IconComponent size={36} />
                </div>
              </div>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-zenitsu-lightning rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </motion.button>
          );
        })}
      </div>

      {/* Modal for Category/Subcategory/Grid/Carousel Views */}
      <AnimatePresence>
        {(openIdx !== null || showAllView) && (
          <motion.div
            ref={modalRef}
            className="fixed inset-0 z-50 backdrop-blur-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.92)), url(/src/graphicbg.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              overflow: selectedImageForCarousel !== null ? 'hidden' : 'auto'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // Only close if clicking the backdrop, not the modal content
              if (e.target === modalRef.current && !showGridView && !selectedSubcategory) {
                handleClose();
              }
            }}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <div className="w-full min-h-full flex items-start justify-center py-12">
              <motion.div
                className="relative w-full max-w-7xl px-6"
                initial={{ scale: 0.95, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 40 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
              {/* Header with Back/Close Button */}
              <div className={`w-full flex flex-wrap items-center justify-between gap-4 mb-8 ${selectedImageForCarousel !== null ? 'hidden' : ''}`}>
                <button
                  onClick={handleBack}
                  className="text-snow-white hover:text-zenitsu-lightning transition-colors z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg hover:shadow-zenitsu-lightning/20"
                  aria-label="Back"
                >
                  <ArrowLeft size={20} />
                  <span className="font-medium">Back</span>
                </button>

                {showAllView && (
                  <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-zenitsu-lightning/20">
                    <Filter size={20} className="text-zenitsu-lightning" />
                    <select
                      value={filterCategory}
                      onChange={(e) => {
                        setFilterCategory(e.target.value);
                        setCurrentPage(1); // Reset to page 1 when filter changes
                      }}
                      className="bg-transparent text-snow-white border-none outline-none cursor-pointer font-medium pr-2"
                    >
                      <option value="all" className="bg-deep-charcoal">All Categories ({allImages.length})</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-deep-charcoal">
                          {cat.title} ({cat.images.length})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  onClick={handleClose}
                  className="text-snow-white hover:text-zenitsu-lightning transition-colors z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg hover:shadow-zenitsu-lightning/20"
                  aria-label="Close"
                >
                  <X size={20} />
                  <span className="font-medium">Close</span>
                </button>
              </div>

              {/* Title */}
              {openIdx !== null && (
                <h2 className="text-3xl font-bold text-snow-white mb-6">
                  {selectedSubcategory ? selectedSubcategory.title : categories[openIdx].title}
                </h2>
              )}
              {showAllView && (
                <h2 className="text-3xl font-bold text-snow-white mb-6">
                  All Graphics{filterCategory !== 'all' && ` - ${categories.find(c => c.id === filterCategory)?.title}`}
                </h2>
              )}

              {/* Subcategory Selection (Improved UI) */}
              {openIdx !== null && !selectedSubcategory && !showGridView && (categories[openIdx].subcategories || categories[openIdx].dynamicSubfolders) && (
                <div className="w-full max-w-6xl px-4">
                  <p className="text-snow-white/80 text-center mb-8 text-lg">
                    Select a subcategory to view its contents
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(categories[openIdx].dynamicSubfolders || categories[openIdx].subcategories || []).map((sub) => {
                      const subImages = categories[openIdx].images.filter(img =>
                        img.path.includes(`${categories[openIdx].folder}/${sub.folder}`)
                      );

                      return (
                        <motion.button
                          key={sub.id}
                          onClick={() => handleSubcategoryClick(sub)}
                          whileHover={{ scale: 1.05, y: -6 }}
                          whileTap={{ scale: 0.97 }}
                          className="group relative bg-gradient-to-br from-deep-charcoal/95 to-ghost-black/95 border-2 border-zenitsu-lightning/30 hover:border-zenitsu-lightning rounded-2xl p-8 text-left transition-all overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-zenitsu-lightning/20"
                        >
                          {/* Background gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-zenitsu-lightning/10 to-rengoku-flame/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                              <div className="p-4 bg-zenitsu-lightning/20 rounded-xl group-hover:bg-zenitsu-lightning/30 transition-all shadow-lg">
                                <Folder className="text-zenitsu-lightning" size={36} />
                              </div>
                              <div className="flex items-center gap-2 px-4 py-2 bg-zenitsu-lightning/20 rounded-full">
                                <ImageIcon size={16} className="text-zenitsu-lightning" />
                                <span className="text-sm font-bold text-zenitsu-lightning">
                                  {subImages.length} items
                                </span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-snow-white mb-3 group-hover:text-zenitsu-lightning transition-colors">
                                {sub.title}
                              </h4>
                              <p className="text-sm text-snow-white/70 leading-relaxed line-clamp-2">
                                {sub.description}
                              </p>
                            </div>
                          </div>

                          {/* Decorative element */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Grid View */}
              {showGridView && selectedImageForCarousel === null && (
                <div className="w-full max-w-7xl px-4">
                  <div className="text-snow-white/80 text-center mb-6 text-lg font-semibold">
                    Showing {Math.min((currentPage - 1) * imagesPerPage + 1, getTotalImages())}-{Math.min(currentPage * imagesPerPage, getTotalImages())} of {getTotalImages()} items
                  </div>

                  {/* Pagination Controls - Top */}
                  {getTotalImages() > imagesPerPage && (
                    <div className="flex justify-center items-center gap-4 mb-8">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-black/80 backdrop-blur-md text-snow-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zenitsu-lightning/20 transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="text-snow-white font-medium">
                        Page {currentPage} of {Math.ceil(getTotalImages() / imagesPerPage)}
                      </span>
                      <button
                        onClick={() => setCurrentPage(Math.min(Math.ceil(getTotalImages() / imagesPerPage), currentPage + 1))}
                        disabled={currentPage >= Math.ceil(getTotalImages() / imagesPerPage)}
                        className="px-4 py-2 bg-black/80 backdrop-blur-md text-snow-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zenitsu-lightning/20 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                    {getDisplayImages().map((img, idx) => (
                      <motion.div
                        key={img.path}
                        whileHover={{ scale: 1.08, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleImageClick(idx)}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-zenitsu-lightning/20 hover:border-zenitsu-lightning transition-all group shadow-lg hover:shadow-2xl hover:shadow-zenitsu-lightning/30"
                      >
                        {img.path.endsWith('.mp4') ? (
                          <video
                            src={img.path}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => {
                              e.currentTarget.pause();
                              e.currentTarget.currentTime = 0;
                            }}
                          />
                        ) : (
                          <img
                            src={img.path}
                            alt={img.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                            <div className="bg-zenitsu-lightning text-deep-charcoal px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                              View
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination Controls - Bottom */}
                  {getTotalImages() > imagesPerPage && (
                    <div className="flex justify-center items-center gap-4 mt-8">
                      <button
                        onClick={() => {
                          setCurrentPage(Math.max(1, currentPage - 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-black/80 backdrop-blur-md text-snow-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zenitsu-lightning/20 transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="text-snow-white font-medium">
                        Page {currentPage} of {Math.ceil(getTotalImages() / imagesPerPage)}
                      </span>
                      <button
                        onClick={() => {
                          setCurrentPage(Math.min(Math.ceil(getTotalImages() / imagesPerPage), currentPage + 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage >= Math.ceil(getTotalImages() / imagesPerPage)}
                        className="px-4 py-2 bg-black/80 backdrop-blur-md text-snow-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zenitsu-lightning/20 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Carousel View for Single Category without subcategories */}
              {openIdx !== null && !showGridView && !selectedSubcategory && !categories[openIdx].subcategories && !categories[openIdx].dynamicSubfolders && (() => {
                const currentImages = getDisplayImages();

                if (currentImages.length === 0) {
                  return (
                    <div className="text-center py-20">
                      <p className="text-snow-white/70 text-lg">No images in this category</p>
                    </div>
                  );
                }

                const currentImage = currentImages[carouselIdx];
                if (!currentImage) {
                  return null;
                }

                return (
                  <div className="flex flex-col items-center justify-center w-full px-4 py-8">
                    {currentImages.length > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className="fixed left-6 top-1/2 -translate-y-1/2 text-snow-white hover:text-zenitsu-lightning px-3 py-6 z-30 bg-black/80 backdrop-blur-md rounded-full transition-colors shadow-2xl hover:shadow-zenitsu-lightning/30"
                          aria-label="Previous"
                        >
                          <ChevronLeft size={28} />
                        </button>
                        <button
                          onClick={handleNext}
                          className="fixed right-6 top-1/2 -translate-y-1/2 text-snow-white hover:text-zenitsu-lightning px-3 py-6 z-30 bg-black/80 backdrop-blur-md rounded-full transition-colors shadow-2xl hover:shadow-zenitsu-lightning/30"
                          aria-label="Next"
                        >
                          <ChevronRight size={28} />
                        </button>
                      </>
                    )}

                    <div className="flex items-center justify-center w-full mb-6">
                      {currentImage.path.endsWith('.mp4') ? (
                        <video
                          key={currentImage.path}
                          src={currentImage.path}
                          className="max-w-[70vw] max-h-[55vh] w-auto h-auto object-contain rounded-xl shadow-2xl border-2 border-domain-violet/50 bg-black"
                          controls
                          autoPlay
                          loop
                        />
                      ) : (
                        <motion.img
                          key={currentImage.path}
                          src={currentImage.path}
                          alt={currentImage.name}
                          className="max-w-[70vw] max-h-[55vh] w-auto h-auto object-contain rounded-xl shadow-2xl border-2 border-domain-violet/50 bg-black"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          loading="lazy"
                        />
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <div className="bg-black/70 backdrop-blur-md px-6 py-3 rounded-full">
                        <div className="flex justify-center gap-2 flex-wrap max-w-xl mb-2">
                          {currentImages.slice(0, 15).map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCarouselIdx(i)}
                              className={`w-2.5 h-2.5 rounded-full border-2 ${i === carouselIdx ? 'bg-zenitsu-lightning border-zenitsu-lightning' : 'bg-ghost-black border-domain-violet'} transition-all`}
                              aria-label={`Go to slide ${i + 1}`}
                            />
                          ))}
                          {currentImages.length > 15 && (
                            <span className="text-snow-white/50 text-xs">
                              +{currentImages.length - 15} more
                            </span>
                          )}
                        </div>
                        <div className="text-snow-white/70 text-center text-sm">
                          {carouselIdx + 1} / {currentImages.length}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Carousel View from Grid - Fullscreen Overlay */}
              {selectedImageForCarousel !== null && (() => {
                const currentImages = getDisplayImages();

                if (currentImages.length === 0) {
                  return null;
                }

                const currentImage = currentImages[carouselIdx];
                if (!currentImage) {
                  return null;
                }

                return (
                  <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url(/src/graphicbg.jpg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundAttachment: 'fixed'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        setSelectedImageForCarousel(null);
                      }
                    }}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedImageForCarousel(null)}
                      className="fixed top-6 right-6 text-snow-white hover:text-zenitsu-lightning p-3 z-[110] bg-black/80 backdrop-blur-md rounded-full transition-colors shadow-2xl hover:shadow-zenitsu-lightning/30"
                      aria-label="Close carousel"
                    >
                      <X size={28} />
                    </button>

                    {currentImages.length > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className="fixed left-6 top-1/2 -translate-y-1/2 text-snow-white hover:text-zenitsu-lightning px-4 py-8 z-[110] bg-black/80 backdrop-blur-md rounded-full transition-colors shadow-2xl hover:shadow-zenitsu-lightning/30"
                          aria-label="Previous"
                        >
                          <ChevronLeft size={32} />
                        </button>
                        <button
                          onClick={handleNext}
                          className="fixed right-6 top-1/2 -translate-y-1/2 text-snow-white hover:text-zenitsu-lightning px-4 py-8 z-[110] bg-black/80 backdrop-blur-md rounded-full transition-colors shadow-2xl hover:shadow-zenitsu-lightning/30"
                          aria-label="Next"
                        >
                          <ChevronRight size={32} />
                        </button>
                      </>
                    )}

                    <div className="flex flex-col items-center justify-center gap-4 w-full h-full px-4 py-20">
                      <div className="flex items-center justify-center w-full h-full">
                        {currentImage.path.endsWith('.mp4') ? (
                          <video
                            key={currentImage.path}
                            src={currentImage.path}
                            className="max-w-[75vw] max-h-[65vh] w-auto h-auto object-contain rounded-xl shadow-2xl border-2 border-domain-violet/50 bg-black"
                            controls
                            autoPlay
                            loop
                          />
                        ) : (
                          <motion.img
                            key={currentImage.path}
                            src={currentImage.path}
                            alt={currentImage.name}
                            className="max-w-[75vw] max-h-[65vh] w-auto h-auto object-contain rounded-xl shadow-2xl border-2 border-domain-violet/50 bg-black"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            loading="lazy"
                          />
                        )}
                      </div>

                      <div className="text-snow-white text-center bg-black/80 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl">
                        <p className="font-semibold text-base truncate max-w-md">{currentImage.name}</p>
                        <p className="text-snow-white/70 text-sm mt-1">
                          {carouselIdx + 1} / {currentImages.length}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GraphicDesignRecord;
