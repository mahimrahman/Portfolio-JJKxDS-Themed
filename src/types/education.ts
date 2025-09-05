import type React from 'react';

export interface EducationEntry {
  id: number;
  degree: string;
  technique: string;
  institution: string;
  duration: string;
  description: string;
  theme: {
    pattern: string;
    glowColor: string;
    crest: React.ReactNode;
  };
}
