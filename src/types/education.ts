/**
 * @fileoverview Education Section Type Definitions
 * @description TypeScript interfaces for the education entries displayed
 * as interactive "mastery seals" with flip animations
 */
import type React from 'react';

/**
 * Education entry representing an academic achievement
 * Styled as anime-inspired "breathing technique" mastery seals
 */
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
