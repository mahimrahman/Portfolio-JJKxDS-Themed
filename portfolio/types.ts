
export type DesignStyle = 'DEFAULT' | 'MONOLITH' | 'REFRACTION' | 'ARCHIVE' | 'NEO_CYBER' | 'EDITORIAL' | 'CURSED' | 'VOID' | 'MANGA';

export interface Stat {
  label: string;
  value: string;
}

export interface DomainData {
  id: string;
  title: string;
  character: string;
  technique: string;
  description: string;
  portfolioOverview: string[];
  tags: string[];
  icon: string;
  color: string;
  secondaryColor: string;
  image: string;
  // Missing properties used in view components
  stats: Stat[];
  highlights: string[];
  metrics: Stat[];
  keywords: string[];
  rank: string;
  form: string;
  category: string;
  accent: string;
}
