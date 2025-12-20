
import { SkillCategory } from './types';

export const ABOUT_ME = {
  title: "The Sorcerer's Path",
  subtitle: "Special Grade Talent",
  description: [
    "Software Engineering graduate with a strong foundation in IT solutions, project management, and data analysis. Driven to transform complex challenges into elegant solutions through innovative thinking and continuous learning.",
    "Specialized in full-stack development, UI/UX design, and data-driven decision making. Passionate about creating impactful digital experiences that bridge the gap between human needs and technical excellence.",
    "Committed to collaborative excellence, bringing teams together to deliver solutions that drive real-world impact and push the boundaries of modern technology."
  ],
  kanji: "魂"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & Design',
    subLabel: 'Thunder Style',
    description: 'Mastery of visual interfaces.',
    style: 'thunder',
    icon: 'Palette',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'Wordpress']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subLabel: 'Wind Style',
    description: 'The internal logic architecture.',
    style: 'water', // Reusing 'water' theme but label as 'Wind' for variety
    icon: 'Code2',
    skills: ['Python', 'Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Rest APIs', 'Git/Github']
  },
  {
    id: 'management',
    title: 'Project Management',
    subLabel: 'Cursed Energy',
    description: 'Strategic team coordination.',
    style: 'cursed',
    icon: 'Users',
    skills: ['Agile/Scrum', 'Jira', 'Azure DevOps', 'Trello', 'Team Leadership', 'Resource Planning', 'SEO Strategy', 'Analytics']
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    subLabel: 'Flame Style',
    description: 'Essential digital toolkit.',
    style: 'flame',
    icon: 'Settings',
    skills: ['Microsoft Office', 'Power BI', 'Latex/Overleaf', 'Data Analysis', 'Digital Marketing', 'Content Strategy', 'AI/Prompt Engineering', 'Cloud Services']
  }
];
