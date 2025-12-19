
import React from 'react';
import { Sword, Waves, Flame, Eye, Zap, Crosshair, ChevronRight, Hash, ShieldAlert, Cpu, Maximize, ArrowRight } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const IconRenderer: React.FC<IconProps> = ({ name, className, size = 20 }) => {
  switch (name) {
    case 'sword': return <Sword className={className} size={size} />;
    case 'waves': return <Waves className={className} size={size} />;
    case 'flame': return <Flame className={className} size={size} />;
    case 'eye': return <Eye className={className} size={size} />;
    case 'zap': return <Zap className={className} size={size} />;
    case 'chevron-right': return <ChevronRight className={className} size={size} />;
    case 'hash': return <Hash className={className} size={size} />;
    case 'seal': return <ShieldAlert className={className} size={size} />;
    case 'cpu': return <Cpu className={className} size={size} />;
    case 'maximize': return <Maximize className={className} size={size} />;
    case 'arrow-right': return <ArrowRight className={className} size={size} />;
    default: return <Crosshair className={className} size={size} />;
  }
};

export default IconRenderer;
