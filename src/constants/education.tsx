import React from 'react';
import { EducationEntry } from '../types/education';

const WaterBreathingCrest: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90" stroke="#3A86FF" strokeWidth="8" strokeLinecap="round"/>
    <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="#7F00FF" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12"/>
    <path d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50Z" fill="#1A1A2E" />
    <path d="M50 40C48.067 40 46.5 41.567 46.5 43.5C46.5 45.433 48.067 47 50 47C55.5228 47 60 51.4772 60 57C60 62.5228 55.5228 67 50 67C44.4772 67 40 62.5228 40 57" stroke="#FFD000" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const SunBreathingCrest: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <circle cx="50" cy="50" r="35" fill="#FFD000" stroke="#FF4E00" strokeWidth="4"/>
    <path d="M50 15L55 25L65 25L57.5 32.5L60 42.5L50 37.5L40 42.5L42.5 32.5L35 25L45 25L50 15Z" fill="#FF4E00"/>
    <path d="M50 85L45 75L35 75L42.5 67.5L40 57.5L50 62.5L60 57.5L57.5 67.5L65 75L55 75L50 85Z" fill="#FF4E00"/>
    <path d="M15 50L25 45L25 35L32.5 42.5L42.5 40L37.5 50L42.5 60L32.5 57.5L25 65L25 55L15 50Z" fill="#FF4E00"/>
    <path d="M85 50L75 55L75 65L67.5 57.5L57.5 60L62.5 50L57.5 40L67.5 42.5L75 35L75 45L85 50Z" fill="#FF4E00"/>
    <circle cx="50" cy="50" r="15" fill="#FF4E00" stroke="#FFD000" strokeWidth="2"/>
  </svg>
);

export const EDUCATION_DATA: EducationEntry[] = [
  {
    id: 1,
    degree: "MEng in Software Engineering",
    technique: "Sun Breathing: Hinokami Kagura",
    institution: "Concordia University",
    duration: "Sep 2023 – Present",
    description: "Mastering advanced software engineering techniques, focusing on project management, software comprehension, and human-computer interaction.",
    theme: {
      pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zenitsu-lightning/50 via-ghost-black to-deep-charcoal",
      glowColor: "shadow-zenitsu-lightning/40",
      crest: <SunBreathingCrest />
    }
  },
  {
    id: 2,
    degree: "BSc in Software Engineering with Multimedia",
    technique: "Water Breathing: First Form",
    institution: "Limkokwing University of Creative Technology",
    duration: "Aug 2019 – July 2022",
    description: "Honed skills in Software Engineering with Multimedia specialization. Mastered business communication, interaction design, and database architecture.",
    theme: {
      pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cursed-blue/50 via-ghost-black to-deep-charcoal",
      glowColor: "shadow-cursed-blue/40",
      crest: <WaterBreathingCrest />
    }
  }
];
