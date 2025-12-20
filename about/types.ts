
export type BreathingStyle = 'water' | 'flame' | 'thunder' | 'cursed';

export interface SkillCategory {
  id: string;
  title: string;
  subLabel: string;
  description: string;
  style: BreathingStyle;
  skills: string[];
  icon: string;
}
