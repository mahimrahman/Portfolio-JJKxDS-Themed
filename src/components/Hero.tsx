import { useMemo, useCallback, useState, memo, FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionMerge from './SectionMerge';

// Animation variants for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const fadeInUpDelayed = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay }
});

// Hover animation variants
const hoverVariants = {
  hover: { 
    scale: 1.1, 
    y: -8,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.95 }
};

const rotateVariants = {
  hover: { 
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.6, ease: "easeInOut" as const }
  }
};

// Social media data configuration
const socialLinks = [
  {
    name: 'Email Me',
    href: 'mailto:mahimrk.a@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-rengoku-flame/80 to-domain-violet/80',
    shadow: 'shadow-rengoku-flame/30 hover:shadow-rengoku-flame/50 group-hover:shadow-rengoku-flame/40',
    glow: 'from-rengoku-flame/40 to-domain-violet/40'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahimurrahman-khan',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    gradient: 'from-zenitsu-lightning/80 to-zenitsu-lightning/60',
    shadow: 'shadow-zenitsu-lightning/30 hover:shadow-zenitsu-lightning/50 group-hover:shadow-zenitsu-lightning/40',
    glow: 'from-zenitsu-lightning/40 to-zenitsu-lightning/20'
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/mahimrahman',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7V5h7v2zm1.794 12.808c-.456 1.275-1.71 2.301-3.456 2.301-2.338 0-4.338-1.653-4.338-4.138 0-2.485 2-4.138 4.338-4.138 1.745 0 3 1.026 3.456 2.301l3.456-1.71C25.245 14.026 22.745 12 19.794 12c-3.456 0-6.338 2.485-6.338 6.138 0 3.653 2.882 6.138 6.338 6.138 2.951 0 5.451-2.026 6.338-4.138l-3.456-1.71zM9 5H2v2h5v2H2v2h5v2H2v2h5v2H2v2h7V5H9z"/>
      </svg>
    ),
    gradient: 'from-domain-violet/80 to-domain-violet/60',
    shadow: 'shadow-domain-violet/30 hover:shadow-domain-violet/50 group-hover:shadow-domain-violet/40',
    glow: 'from-domain-violet/40 to-domain-violet/20'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/mahimrahman',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    gradient: 'from-cursed-blue/80 to-cursed-blue/60',
    shadow: 'shadow-cursed-blue/30 hover:shadow-cursed-blue/50 group-hover:shadow-cursed-blue/40',
    glow: 'from-cursed-blue/40 to-cursed-blue/20'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/snazzy_memories/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    gradient: 'from-rengoku-flame/80 to-rengoku-flame/60',
    shadow: 'shadow-rengoku-flame/30 hover:shadow-rengoku-flame/50 group-hover:shadow-rengoku-flame/40',
    glow: 'from-rengoku-flame/40 to-rengoku-flame/20'
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/1196964174530629725',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
      </svg>
    ),
    gradient: 'from-domain-violet/80 to-cursed-blue/80',
    shadow: 'shadow-domain-violet/30 hover:shadow-domain-violet/50 group-hover:shadow-domain-violet/40',
    glow: 'from-domain-violet/40 to-cursed-blue/40'
  }
];

// Optimized Social Button Component
const SocialButton: FC<{
  link: typeof socialLinks[0];
  index: number;
}> = memo(({ link }) => {
  const handleClick = useCallback(() => {
    // Analytics tracking could go here
    console.log(`Clicked ${link.name}`);
  }, [link.name]);

  return (
    <motion.div
      variants={hoverVariants}
      whileHover="hover"
      whileTap="tap"
      className="group relative"
    >
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-ghost-black/90 text-snow-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-snow-white/20">
        {link.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ghost-black/90"></div>
      </div>
      
      {/* Button */}
      <motion.a
        href={link.href}
        target={link.name === 'Email Me' ? undefined : '_blank'}
        rel={link.name === 'Email Me' ? undefined : 'noopener noreferrer'}
        onClick={handleClick}
        className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${link.gradient} text-snow-white shadow-lg ${link.shadow} transition-all duration-300 group-hover:shadow-2xl touch-manipulation`}
        variants={rotateVariants}
        whileHover="hover"
      >
        {link.icon}
        
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${link.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
      </motion.a>
    </motion.div>
  );
});

SocialButton.displayName = 'SocialButton';

// Optimized Floating Particle Component
const FloatingParticle: FC<{ index: number }> = memo(({ index }) => {
  const particleStyle = useMemo(() => ({
    left: `${20 + index * 15}%`,
    top: `${30 + (index % 2) * 20}%`,
  }), [index]);

  const animationDelay = useMemo(() => index * 0.2, [index]);

  return (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-cursed-blue/40 to-domain-violet/40 rounded-full"
      style={particleStyle}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay,
      }}
    />
  );
});

FloatingParticle.displayName = 'FloatingParticle';

// Optimized Decorative Emoji Component
const DecorativeEmoji: FC<{
  emoji: string;
  position: string;
  animation: 'up' | 'down';
  color: string;
  duration: number;
}> = memo(({ emoji, position, animation, color, duration }) => {
  const yValues = animation === 'up' ? [0, -20, 0] : [0, 20, 0];
  const rotateValues = animation === 'up' ? [0, 5, 0] : [0, -5, 0];

  return (
    <motion.div
      animate={{ y: yValues, rotate: rotateValues }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${position} w-16 h-16 text-${color} opacity-30 z-[25]`}
    >
      {emoji}
    </motion.div>
  );
});

DecorativeEmoji.displayName = 'DecorativeEmoji';

// Main Hero Component
const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  // Determine which video to load based on screen size - only set once on mount
  const [videoSource] = useState(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 768) return '/hero_mobile.mp4';
      if (width >= 1440) return '/Hero_large.mp4';
      return '/1.mp4'; // Default for laptops/MacBooks
    }
    return '/1.mp4';
  });

  // Reduce particle count to 0 for better performance - removed animations
  const particles = useMemo(() => [], []);

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
    setVideoError(false);
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
    setVideoLoaded(false);
  }, []);

  // Timeout mechanism for slow loading videos - reduced to 3 seconds for faster fallback
  useEffect(() => {
    if (!videoLoaded && !videoError) {
      const timeout = setTimeout(() => {
        if (!videoLoaded) {
          console.warn('Video loading timeout, showing fallback background');
          setVideoError(true);
        }
      }, 3000); // 3 second timeout for faster fallback

      return () => clearTimeout(timeout);
    }
  }, [videoLoaded, videoError]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Subtle Section Merge Overlay - bottom only for Hero */}
      <SectionMerge position="bottom" intensity="light" />
      {/* Video/Image background with optimized loading */}
      <div className="absolute inset-0 flex items-center justify-center z-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black">
          {!videoError && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-40' : 'opacity-0'
              }`}
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
            >
              <source src={videoSource} type="video/mp4" />
            </video>
          )}
          
          {/* Fallback background gradient when video fails or is loading */}
          {(videoError || !videoLoaded) && (
            <div className="absolute inset-0 bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black opacity-90">
              {/* Loading indicator */}
              {!videoError && !videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center space-x-2 text-domain-violet">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ghost-black/50 to-ghost-black/70 z-20"></div>
          
          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 z-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(127, 0, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(127, 0, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
      </div>

      {/* Main content - Redesigned Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 absolute inset-0 flex flex-col items-center justify-center z-[40]">
        {/* Main Name - Large and Bold with Morphing Animation */}
        <motion.div
          className="text-center mb-4 sm:mb-6"
          {...fadeInUp}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4 leading-[1.1] tracking-tight relative"
            {...fadeInUpDelayed(0.2)}
            style={{ perspective: '1000px' }}
          >
            
            {/* Name - First Line with subtle gradient */}
            <span
              className="block relative text-snow-white"
              style={{
                textShadow: '0 0 30px rgba(127, 0, 255, 0.5), 0 0 60px rgba(127, 0, 255, 0.3)',
              }}
            >
              MAHIMUR
            </span>

            {/* Name - Second Line with subtle gradient */}
            <span
              className="block relative text-snow-white mt-1 sm:mt-2"
              style={{
                textShadow: '0 0 30px rgba(127, 0, 255, 0.5), 0 0 60px rgba(127, 0, 255, 0.3)',
              }}
            >
              RAHMAN KHAN
            </span>
            
          </motion.h1>
          
          {/* Animated Underline */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-4 sm:mt-6"
            {...fadeInUpDelayed(0.3)}
          >
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-zenitsu-lightning to-transparent"></div>
            <motion.div
              className="w-2 h-2 rounded-full bg-zenitsu-lightning"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-zenitsu-lightning to-transparent"></div>
          </motion.div>
        </motion.div>
        
        {/* Role Tags - Modern Badge Style */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          {...fadeInUpDelayed(0.4)}
        >
          {['Software Engineer', 'Web Developer', 'UI/UX Designer'].map((role, index) => (
            <motion.div
              key={role}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-ghost-black/80 to-deep-charcoal/80 backdrop-blur-sm border border-snow-white/10 text-snow-white text-xs sm:text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(127, 0, 255, 0.5)',
                boxShadow: '0 0 20px rgba(127, 0, 255, 0.3)'
              }}
            >
              {role}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social Links - Enhanced Design */}
        <motion.div
          {...fadeInUpDelayed(0.6)}
          transition={{ ease: "easeOut" }}
          className="relative w-full max-w-2xl"
        >
          {/* Glassmorphic Container */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-ghost-black/40 via-deep-charcoal/40 to-ghost-black/40 rounded-3xl border border-snow-white/10 p-4 sm:p-6 shadow-2xl">
            {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cursed-blue/20 via-domain-violet/20 to-rengoku-flame/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Social Icons Grid */}
            <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
              {socialLinks.map((link, index) => (
                <SocialButton key={link.name} link={link} index={index} />
              ))}
            </div>
            
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-domain-violet/30 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rengoku-flame/30 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cursed-blue/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-domain-violet/30 rounded-br-3xl"></div>
          </div>

          {/* Enhanced Floating Particles - Brought Forward */}
          <div className="absolute inset-0 z-[25] pointer-events-none">
            {particles.map((index) => (
              <FloatingParticle key={index} index={index} />
            ))}
          </div>
        </motion.div>

      </div>

      {/* Decorative Elements - Redesigned */}
      <motion.div
        className="absolute top-20 left-10 text-4xl sm:text-5xl opacity-20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ⚔️
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl sm:text-5xl opacity-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        🗡️
      </motion.div>
    </div>
  );
};

export default memo(Hero);
