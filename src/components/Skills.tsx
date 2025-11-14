import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, Users, Settings, ChevronDown } from 'lucide-react';

// Anime Icon Container Component
const AnimeIconContainer = ({ isActive, color, icon }: {
  isActive: boolean;
  color: string;
  icon: ReactNode;
}) => (
  <motion.div
    className="relative w-12 h-12 flex items-center justify-center"
    animate={{
      scale: isActive ? 1.1 : 1,
    }}
    transition={{ duration: 0.3 }}
  >
    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} shadow-lg border border-white/10`}>
      <div className="absolute inset-1 rounded-lg bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
    </div>
    <div className="relative z-10 text-white">
      {icon}
    </div>
  </motion.div>
);

// Skill Card Component
const SkillCard = ({ skill, index, isVisible, categoryColor }: {
  skill: string;
  index: number;
  isVisible: boolean;
  categoryColor: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ 
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.8,
      y: isVisible ? 0 : 20,
    }}
    transition={{ 
      duration: 0.4, 
      delay: isVisible ? index * 0.05 : 0,
      ease: "easeOut"
    }}
    className="group relative"
  >
    <div className="relative bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 backdrop-blur-sm rounded-lg border border-white/10 p-3 transition-all duration-300 hover:border-white/20 hover:transform hover:scale-105">
      
      <span className="relative z-10 text-snow-white text-sm font-medium text-center block">
        {skill}
      </span>
      
      {/* Subtle hover effect */}
      <motion.div
        className={`absolute inset-0 rounded-lg bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />
    </div>
  </motion.div>
);

// Category Card Component
const CategoryCard = ({ title, skills, icon, isExpanded, onToggle, categoryColor }: {
  title: string;
  skills: string[];
  icon: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  categoryColor: string;
}) => {
  return (
    <motion.div
      className="relative cursor-pointer group touch-manipulation"
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Category Container */}
      <div className="relative bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-xl group-hover:border-white/20 transition-all duration-300">
        
        {/* Anime-style accent gradient */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${categoryColor}`}></div>
        
        {/* Header */}
        <div className="relative z-10 p-6 flex items-center gap-4">
          <AnimeIconContainer 
            isActive={isExpanded} 
            color={categoryColor}
            icon={icon}
          />
          
          <div className="flex-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
              {title}
            </h3>
            
            <motion.div
              className="mt-2 text-ash-gray text-sm"
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {skills.length} skills • Click to expand
            </motion.div>
          </div>
          
          {/* Expansion indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-zenitsu-lightning"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
        
        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={skill}
                      skill={skill}
                      index={index}
                      isVisible={isExpanded}
                      categoryColor={categoryColor}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Main Skills component
const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const skillCategories = [
    {
      id: 'frontend-design',
      title: 'Frontend & Design',
      icon: <Palette size={24} />,
      categoryColor: 'from-rengoku-flame to-zenitsu-lightning',
      skills: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Figma',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'UI/UX Design',
        'WordPress'
      ]
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      icon: <Code size={24} />,
      categoryColor: 'from-zenitsu-lightning to-checkered-green',
      skills: [
        'Python',
        'Java',
        'Node.js',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'REST APIs',
        'Git/GitHub'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: <Users size={24} />,
      categoryColor: 'from-domain-violet to-cursed-blue',
      skills: [
        'Agile/Scrum',
        'Jira',
        'Azure DevOps',
        'Trello',
        'Team Leadership',
        'Resource Planning',
        'SEO Strategy',
        'Analytics'
      ]
    },
    {
      id: 'tools-technologies',
      title: 'Tools & Technologies',
      icon: <Settings size={24} />,
      categoryColor: 'from-cursed-blue to-rengoku-flame',
      skills: [
        'Microsoft Office',
        'Power BI',
        'LaTeX/Overleaf',
        'Data Analysis',
        'Digital Marketing',
        'Content Strategy',
        'AI/Prompt Engineering',
        'Cloud Services'
      ]
    }
  ];

  const handleToggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <section id="skills" className="py-16 px-4 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-ghost-black to-deep-charcoal pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-zenitsu-lightning to-transparent"></div>
            <div className="w-2 h-2 bg-zenitsu-lightning rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-zenitsu-lightning via-transparent to-transparent"></div>
          </div>
          <p className="text-lg text-ash-gray max-w-2xl mx-auto">
            Professional expertise across multiple technology domains
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
               <CategoryCard
                 title={category.title}
                 skills={category.skills}
                 icon={category.icon}
                 isExpanded={expandedCategories.has(category.id)}
                 onToggle={() => handleToggleCategory(category.id)}
                 categoryColor={category.categoryColor}
               />
            </motion.div>
          ))}
        </div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
           <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-ghost-black/80 to-deep-charcoal/80 backdrop-blur-sm rounded-full border border-white/10">
             <div className="w-2 h-2 bg-zenitsu-lightning rounded-full"></div>
             <span className="text-ash-gray text-sm font-medium">
               {expandedCategories.size > 0 ? `${expandedCategories.size} Categories Expanded` : 'All Categories Available'}
             </span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
