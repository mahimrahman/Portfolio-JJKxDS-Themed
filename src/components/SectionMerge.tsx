import { memo } from 'react';

interface SectionMergeProps {
  position: 'top' | 'bottom';
  intensity?: 'light' | 'medium' | 'strong';
}

const SectionMerge = memo(({ position, intensity = 'light' }: SectionMergeProps) => {
  // Much more subtle heights
  const heightMap = {
    light: 'h-16',
    medium: 'h-24',
    strong: 'h-32'
  };

  // Match background colors: deep-charcoal (#121212) and ghost-black (#1A1A2E)
  return (
    <div 
      className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 ${heightMap[intensity]} pointer-events-none z-20`}
      style={{
        background: position === 'top'
          ? 'linear-gradient(to bottom, rgba(26, 26, 46, 0.5) 0%, rgba(18, 18, 18, 0.3) 40%, transparent 100%)'
          : 'linear-gradient(to top, rgba(26, 26, 46, 0.5) 0%, rgba(18, 18, 18, 0.3) 40%, transparent 100%)',
      }}
    />
  );
});

SectionMerge.displayName = 'SectionMerge';

export default SectionMerge;

