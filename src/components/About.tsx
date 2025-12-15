import { memo } from 'react';
import { motion } from 'framer-motion';
import SmokeBackground from './SmokeBackground';
import SectionMerge from './SectionMerge';

// Professional skill domain icons - clean and minimalist
const domainIcons = {
  development: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  design: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  data: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  management: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
};

// Skill domains with anime-themed color associations
const skillDomains = [
  {
    title: 'Development',
    subtitle: 'Full-Stack Engineering',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'REST APIs'],
    icon: domainIcons.development,
    gradient: 'from-checkered-green/20 via-cursed-blue/10 to-transparent',
    borderGradient: 'from-checkered-green/40 to-cursed-blue/40',
    accentColor: 'snow-white',
    hoverShadow: 'hover:shadow-checkered-green/20',
  },
  {
    title: 'Design',
    subtitle: 'User Interface & User Experience Design',
    skills: ['Figma', 'Adobe Suite', 'Prototyping', 'Branding', 'User Research'],
    icon: domainIcons.design,
    gradient: 'from-rengoku-flame/20 via-zenitsu-lightning/10 to-transparent',
    borderGradient: 'from-rengoku-flame/40 to-zenitsu-lightning/40',
    accentColor: 'snow-white',
    hoverShadow: 'hover:shadow-rengoku-flame/20',
  },
  {
    title: 'Analytics',
    subtitle: 'Data Science & Business Intelligence',
    skills: ['Python', 'Power BI', 'SQL', 'Pandas', 'Data Visualization'],
    icon: domainIcons.data,
    gradient: 'from-cursed-blue/20 via-domain-violet/10 to-transparent',
    borderGradient: 'from-cursed-blue/40 to-domain-violet/40',
    accentColor: 'snow-white',
    hoverShadow: 'hover:shadow-cursed-blue/20',
  },
  {
    title: 'Management',
    subtitle: 'Project Management & Agile Methodologies',
    skills: ['Scrum', 'Jira', 'Team Coordination', 'Sprint Planning', 'Stakeholder Communication'],
    icon: domainIcons.management,
    gradient: 'from-domain-violet/20 via-zenitsu-lightning/10 to-transparent',
    borderGradient: 'from-domain-violet/40 to-zenitsu-lightning/40',
    accentColor: 'snow-white',
    hoverShadow: 'hover:shadow-domain-violet/20',
  },
];

const AboutBase = () =>
  <section className="min-h-screen py-16 px-6 md:px-8 lg:px-12 relative overflow-hidden flex items-center">
    {/* Subtle Section Merge Overlays */}
    <SectionMerge position="top" intensity="light" />
    <SectionMerge position="bottom" intensity="light" />
    {/* Dark theme background with transparency for smoke */}
    <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/95 via-ghost-black/95 to-deep-charcoal/95 backdrop-blur-sm z-0"></div>
    {/* Smoke Effect Background */}
    <SmokeBackground />
    {/* Simplified Background Effects - Brought Forward */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[25]">
      {/* Single subtle orb for ambiance */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(127,0,255,0.1) 0%, rgba(58,134,255,0.06) 50%, transparent 100%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated grid pattern overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127, 0, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127, 0, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto relative z-30 w-full">
      {/* Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-6 md:mb-8"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-domain-violet to-transparent mb-3"
        />
        <h2 className="section-title">
          The Story of the Slayer
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-rengoku-flame to-transparent mt-3"
        />
      </motion.div>

      {/* Main Content Grid - Equal Height Components */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        
        {/* Profile Card - Left Side (Spans 5 columns) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <motion.div 
            className="h-full bg-gradient-to-br from-snow-white/8 via-snow-white/5 to-transparent backdrop-blur-2xl rounded-3xl border border-snow-white/10 p-6 md:p-8 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-domain-violet/0 via-cursed-blue/5 to-rengoku-flame/0 rounded-3xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Animated corner accents */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-domain-violet/30 rounded-tl-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-rengoku-flame/30 rounded-br-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Title with accent line */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div 
                    className="w-1 h-10 bg-gradient-to-b from-domain-violet to-cursed-blue rounded-full"
                    animate={{
                      height: [40, 48, 40],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-snow-white">
                    The Sorcerer's Path
                  </h3>
                </div>
                <motion.div 
                  className="h-px bg-gradient-to-r from-zenitsu-lightning to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Bio Text - Compact */}
              <div className="space-y-4 text-snow-white/90 leading-relaxed flex-1">
                <p className="text-sm md:text-base">
                  Software Engineering graduate with a strong foundation in IT solutions, project management, and data analysis. Driven to transform complex challenges into elegant solutions through innovative thinking and continuous learning.
                </p>
                <p className="text-sm md:text-base">
                  Specialized in full-stack development, UI/UX design, and data-driven decision making. Passionate about creating impactful digital experiences.
                </p>
                <p className="text-sm md:text-base">
                  Committed to collaborative excellence, bringing teams together to deliver solutions that drive real-world impact.
                </p>
              </div>

              {/* Animated decorative element */}
              <div className="mt-5 flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-checkered-green"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-cursed-blue"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-rengoku-flame"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-domain-violet"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                />
                <div className="flex-1 h-px bg-gradient-to-r from-snow-white/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skill Domains - Right Side (Spans 7 columns) - Equal Height */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {skillDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`h-full bg-gradient-to-br ${domain.gradient} backdrop-blur-xl rounded-2xl border border-snow-white/10 hover:border-${domain.accentColor}/40 p-5 relative overflow-hidden transition-all duration-400 ${domain.hoverShadow} hover:shadow-2xl`}>
                  {/* Animated border gradient on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${domain.borderGradient} rounded-2xl`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${domain.borderGradient} rounded-2xl blur opacity-0 group-hover:opacity-20`}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div 
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${domain.borderGradient} p-2 flex items-center justify-center text-snow-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {domain.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-snow-white mb-0.5">
                          {domain.title}
                        </h3>
                        <p className={`text-xs text-${domain.accentColor}/80`}>
                          {domain.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Animated Divider */}
                    <motion.div 
                      className={`w-full h-px bg-gradient-to-r from-${domain.accentColor}/30 via-${domain.accentColor}/10 to-transparent mb-3`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
                      viewport={{ once: true }}
                    />

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {domain.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ 
                            duration: 0.2, 
                            delay: index * 0.08 + skillIndex * 0.03 
                          }}
                          viewport={{ once: true }}
                          className="px-2.5 py-1 text-xs font-medium text-snow-white/90 bg-snow-white/5 border border-snow-white/10 rounded-lg hover:bg-snow-white/15 hover:border-snow-white/25 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>;

const About = memo(AboutBase);

export default About; 