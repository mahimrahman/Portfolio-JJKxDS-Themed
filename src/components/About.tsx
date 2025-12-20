import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import SmokeBackground from './SmokeBackground';
import { ThemeMode, useTheme } from '../context/ThemeContext';
import {
  Code2, Users, Settings, ChevronUp, Palette
} from 'lucide-react';

const ABOUT_ME = {
  title: "The Sorcerer's Path",
  subtitle: "Special Grade Talent",
  description: [
    "Software Engineering graduate with a strong foundation in IT solutions, project management, and data analysis. Driven to transform complex challenges into elegant solutions through innovative thinking and continuous learning.",
    "Specialized in full-stack development, UI/UX design, and data-driven decision making. Passionate about creating impactful digital experiences that bridge the gap between human needs and technical excellence.",
    "Committed to collaborative excellence, bringing teams together to deliver solutions that drive real-world impact and push the boundaries of modern technology."
  ],
  kanji: "魂"
};

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend & Design',
    subLabel: 'Thunder Style',
    style: 'thunder',
    icon: Palette,
    kanji: '雷',
    grade: 'First Class',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'Wordpress']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subLabel: 'Wind Style',
    style: 'water',
    icon: Code2,
    kanji: '流',
    grade: 'Grade 1',
    skills: ['Python', 'Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Rest APIs', 'Git/Github']
  },
  {
    id: 'management',
    title: 'Project Management',
    subLabel: 'Cursed Energy',
    style: 'cursed',
    icon: Users,
    kanji: '呪',
    grade: 'Supreme Grade',
    skills: ['Agile/Scrum', 'Jira', 'Azure DevOps', 'Trello', 'Team Leadership', 'Resource Planning', 'SEO Strategy', 'Analytics']
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    subLabel: 'Flame Style',
    style: 'flame',
    icon: Settings,
    kanji: '炎',
    grade: 'Special Grade',
    skills: ['Microsoft Office', 'Power BI', 'Latex/Overleaf', 'Data Analysis', 'Digital Marketing', 'Content Strategy', 'AI/Prompt Engineering', 'Cloud Services']
  }
];

const StyleTheme: Record<string, any> = {
  water: { color: 'text-blue-500', accent: 'bg-blue-500', glow: 'from-blue-500' },
  flame: { color: 'text-red-500', accent: 'bg-red-500', glow: 'from-red-500' },
  thunder: { color: 'text-orange-500', accent: 'bg-orange-500', glow: 'from-orange-500' },
  cursed: { color: 'text-purple-600', accent: 'bg-purple-600', glow: 'from-purple-600' }
};

const AboutBase = () => {
  const { activeTheme } = useTheme();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Two-color gradient: hero color to blue only
  const getGradientColors = () => {
    switch (activeTheme) {
      case ThemeMode.YUJI:
        return 'from-[#F5A7B8]/20 to-cursed-blue/25'; // Pink to Blue
      case ThemeMode.GOJO:
        return 'from-[#A1C4FD]/20 to-cursed-blue/25'; // Light Blue to Blue
      case ThemeMode.TANJIRO:
        return 'from-[#00A19D]/25 to-cursed-blue/25'; // Tanjiro Green to Blue
      case ThemeMode.ZENITSU:
        return 'from-[#FFD700]/20 to-cursed-blue/25'; // Gold to Blue
      case ThemeMode.INOSUKE:
        return 'from-[#3F51B5]/20 to-cursed-blue/25'; // Indigo to Blue
      default:
        return 'from-[#00A19D]/25 to-cursed-blue/25';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientY - window.innerHeight / 2) / 300;
    const y = (clientX - window.innerWidth / 2) / 300;
    setRotation({ x, y });
  };

  return (
    <section
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12"
      onMouseMove={handleMouseMove}
    >
      {/* Two-color gradient background for smooth transitions */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getGradientColors()} z-0`}></div>
      {/* Smoke Effect Background - Mouse tracking disabled */}
      <SmokeBackground disableMouseTracking={true} />

      {/* MAIN CONTAINER */}
      <div
        className="relative z-30 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-stretch"
        style={{
          transform: `rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.6s ease-out'
        }}
      >
        {/* ABOUT ME COLUMN */}
        <motion.div
          className="lg:col-span-5 relative h-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

        >
          <motion.div
            className="relative h-full p-6 sm:p-8 lg:p-10 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden group"
            whileHover={{ rotateY: 2, rotateX: -2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] md:h-[3px] bg-gradient-to-r from-purple-600 via-blue-500 to-red-600 opacity-60" />

            <div className="absolute -right-4 -bottom-10 font-kanji text-[18rem] sm:text-[20rem] md:text-[24rem] text-white/[0.02] group-hover:text-white/[0.06] transition-all duration-700 select-none pointer-events-none">
              {ABOUT_ME.kanji}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-1 sm:w-1.5 h-10 sm:h-12 bg-white/10" />
                <div>
                  <h2 className="section-title mb-0">{ABOUT_ME.title}</h2>
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-subtitle text-white/40 tracking-[0.4em] uppercase mt-2 block">{ABOUT_ME.subtitle}</span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 flex-1">
                {ABOUT_ME.description.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base lg:text-lg font-body text-white/50 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]" />
                </div>
                <span className="text-[9px] font-subtitle text-white/20 uppercase tracking-[0.2em] ml-4">DOMAIN_AUTHENTICATED</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* SKILLS MATRIX COLUMN */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {SKILL_CATEGORIES.map((category) => {
            const theme = StyleTheme[category.style];
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateY: 2, rotateX: -2 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="relative bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-white/20 transition-all duration-300 shadow-2xl"
              >
                {/* Glowing Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${theme.glow} to-transparent opacity-80 group-hover:opacity-100 transition-opacity`} />

                {/* Background Kanji - VISIBLE ON HOVER */}
                <div className={`absolute -right-6 -bottom-10 font-kanji text-[14rem] sm:text-[16rem] md:text-[18rem] ${theme.color} opacity-0 group-hover:opacity-[0.07] transition-all duration-700 select-none pointer-events-none transform group-hover:translate-y-[-10px]`}>
                  {category.kanji}
                </div>

                <div className="p-4 sm:p-5 md:p-6 relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6 sm:mb-7 md:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${theme.accent} bg-opacity-20 flex items-center justify-center border border-white/5 shadow-inner`}>
                        <CategoryIcon size={18} className={`sm:w-[19px] sm:h-[19px] md:w-5 md:h-5 ${theme.color}`} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-title text-white italic tracking-tight uppercase leading-none">
                          {category.title}
                        </h3>
                        <span className={`text-[8px] sm:text-[9px] font-subtitle tracking-widest uppercase ${theme.color} mt-1 block opacity-60`}>
                          {category.subLabel}
                        </span>
                      </div>
                    </div>
                    <ChevronUp size={16} className="sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px] text-yellow-500/50" />
                  </div>

                  {/* Skill Pills - 4x2 Grid */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-[#141414]/80 backdrop-blur-sm border border-white/[0.03] hover:border-white/20 transition-all py-1.5 sm:py-2 rounded-sm flex items-center justify-center h-8 sm:h-9 md:h-10 w-full"
                      >
                        <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-subtitle text-white/80 tracking-[0.05em] uppercase text-center px-1 sm:px-2">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer HUD */}
                <div className="mt-auto px-6 pb-5 pt-2 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <div className={`w-1 h-1 rounded-full ${theme.accent}`} />
                    <span className="text-[8px] font-subtitle text-white tracking-widest">{category.grade}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-3 h-1 skew-x-[-15deg] ${i <= 4 ? theme.accent : 'bg-white/5'}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const About = memo(AboutBase);

export default About;
