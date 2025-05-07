import React from 'react';
import { motion } from 'framer-motion';

interface SealProps {
  title: string;
  icon: string;
  element: 'water' | 'fire' | 'cursed' | 'wind';
  href: string;
  delay: number;
}

const Seal: React.FC<SealProps> = ({ title, icon, element, href, delay }) => {
  const getElementClass = () => {
    switch (element) {
      case 'water':
        return 'hover:shadow-[0_0_30px_rgba(0,166,118,0.6)] hover:border-checkered-green animate-water-flow';
      case 'fire':
        return 'hover:shadow-[0_0_30px_rgba(255,78,0,0.6)] hover:border-rengoku-flame animate-flame-flicker';
      case 'cursed':
        return 'hover:shadow-[0_0_30px_rgba(58,134,255,0.6)] hover:border-cursed-blue animate-cursed-pulse';
      case 'wind':
        return 'hover:shadow-[0_0_30px_rgba(255,208,0,0.6)] hover:border-zenitsu-lightning animate-wind-sweep';
      default:
        return '';
    }
  };

  const getElementBg = () => {
    switch (element) {
      case 'water':
        return 'bg-gradient-to-br from-checkered-green/20 to-transparent';
      case 'fire':
        return 'bg-gradient-to-br from-rengoku-flame/20 to-transparent';
      case 'cursed':
        return 'bg-gradient-to-br from-cursed-blue/20 to-transparent';
      case 'wind':
        return 'bg-gradient-to-br from-zenitsu-lightning/20 to-transparent';
      default:
        return '';
    }
  };

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.1 }}
      className={`relative group block w-32 h-32 rounded-full border-2 border-ghost-black ${getElementClass()} ${getElementBg()} transition-all duration-300`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl">{icon}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-snow-white font-bold text-sm text-center px-2">
          {title}
        </span>
      </div>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20" />
      </div>
    </motion.a>
  );
};

const FloatingSeals: React.FC = () => {
  const seals = [
    {
      title: 'Development',
      icon: '💻',
      element: 'water' as const,
      href: '/development',
      delay: 0.2,
    },
    {
      title: 'Photography',
      icon: '📸',
      element: 'fire' as const,
      href: '/photography',
      delay: 0.4,
    },
    {
      title: 'Graphic Design',
      icon: '🎨',
      element: 'cursed' as const,
      href: '/design',
      delay: 0.6,
    },
    {
      title: 'UI/UX',
      icon: '🧠',
      element: 'wind' as const,
      href: '/uiux',
      delay: 0.8,
    },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-40">
      {seals.map((seal) => (
        <Seal key={seal.title} {...seal} />
      ))}
    </div>
  );
};

export default FloatingSeals; 