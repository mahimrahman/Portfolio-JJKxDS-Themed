import React from 'react';
import { motion } from 'framer-motion';

const degrees = [
  {
    title: 'MEng in Software Engineering',
    institution: 'Concordia University',
    period: 'Sep 2023 – Present',
    courses: [
      'Software Project Management',
      'Total Quality Project Management',
      'Software Comprehension and Maintenance',
      'Programming and Problem Solving',
      'Software Measurement',
      'Software Design Methodologies',
      'Human Computer Interaction',
    ],
    color: 'from-rengoku-flame to-domain-violet',
    accent: 'text-zenitsu-lightning',
  },
  {
    title: 'BSc in Software Engineering with Multimedia',
    institution: 'Limkokwing University of Creative Technology, Malaysia',
    period: 'Aug 2019 – July 2022',
    courses: [
      'Software Project Management',
      'Leadership Skills and Human Relations',
      'Multimedia Authoring',
      'Business Communication Skills',
      'Interaction Design',
      'Database Design',
      'Business Planning & Idea Generation',
      'Requirement Engineering',
    ],
    color: 'from-zenitsu-lightning to-rengoku-flame',
    accent: 'text-domain-violet',
  },
];

const skills = [
  'Microsoft Office', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva', 'Graphics Designing',
  'Social Media Management & Marketing', 'SEO', 'Overleaf', 'Jira', 'Scrum', 'Agile', 'Azure DevOps',
  'Trello', 'Project Management', 'Resource Allocation', 'Power BI', 'Python', 'Pandas', 'Numpy',
  'Docker', 'MVC', 'Prompt Engineering', 'Github', 'MySql', 'NoSql', 'Java', 'WordPress', 'Html', 'Tailwind CSS',
];

const cardVariants = {
  hidden: (i: number) => ({ opacity: 0, y: 40, scale: 0.95 }),
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.2, duration: 0.8, type: 'spring' } }),
  hover: { scale: 1.03, boxShadow: '0 8px 32px 0 rgba(255,208,0,0.15)' },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.03, duration: 0.4 } }),
};

const Training: React.FC = () => (
  <section id="training" className="min-h-screen py-20 px-2 md:px-4 bg-deep-charcoal relative overflow-hidden">
    {/* Timeline Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
        Training Journey
      </h2>
      <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />
    </div>
    {/* Cards Row for Desktop, Stack on Mobile */}
    <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 md:gap-16 mb-20">
      {degrees.map((deg, i) => (
        <motion.div
          key={deg.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          className={`flex-1 max-w-xl bg-gradient-to-br ${deg.color} p-8 md:p-10 rounded-3xl shadow-2xl border border-zenitsu-lightning/30 hover:border-zenitsu-lightning/80 transition-all duration-300 relative z-10 flex flex-col gap-2`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-snow-white mb-1 anime-heading drop-shadow-lg">{deg.title}</h3>
              <p className="text-ash-gray text-base md:text-lg font-semibold">{deg.institution}</p>
            </div>
            <span className={`mt-2 md:mt-0 font-semibold whitespace-nowrap ${deg.accent}`}>{deg.period}</span>
          </div>
          <ul className="list-disc pl-5 text-snow-white/90 text-sm md:text-base mt-2 space-y-1">
            {deg.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
    {/* Skills Arsenal */}
    <motion.div
      className="w-full mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center tracking-wider anime-heading bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg">
        Skill Arsenal
      </h3>
      {/* Unique Masonry Grid Layout for Skills */}
      <div className="w-full flex justify-center">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 [column-fill:_balance]"><div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              custom={i}
              variants={tagVariants}
              className="inline-block w-full mb-4 px-4 py-3 text-xs md:text-base bg-gradient-to-br from-rengoku-flame to-domain-violet text-snow-white rounded-2xl shadow-lg font-bold flex items-center justify-center select-none transition-all duration-200 border border-domain-violet/30 cursor-pointer anime-heading"
              whileHover={{
                scale: 1.08,
                background: 'linear-gradient(135deg, #FFD000 0%, #3A86FF 100%)',
                color: '#fff',
                boxShadow: '0 0 16px #FFD00055',
                borderColor: '#FFD000',
              }}
              style={{ color: 'inherit' }}
            >
              <span className="drop-shadow-lg text-center w-full">{skill}</span>
            </motion.div>
          ))}
        </div></div>
      </div>
    </motion.div>
  </section>
);

export default Training; 