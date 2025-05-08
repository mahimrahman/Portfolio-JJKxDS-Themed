import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'HackConcordia Marketing Platform',
      description: 'Developed and managed a marketing platform for HackConcordia, enabling event promotion, participant engagement, and sponsor outreach.',
      tech: ['React', 'Node.js', 'Marketing', 'Branding'],
      image: 'https://placehold.co/600x400/121212/FFD000?text=HackConcordia',
      color: 'from-rengoku-flame to-domain-violet',
    },
    {
      title: 'ERP System Enhancement',
      description: 'Implemented and tested ERP system modules for Zavy Technologies, improving operational efficiency and client satisfaction.',
      tech: ['ERP', 'Testing', 'UI/UX', 'Project Management'],
      image: 'https://placehold.co/600x400/121212/3A86FF?text=ERP+System',
      color: 'from-cursed-blue to-domain-violet',
    },
    {
      title: 'Best Buddies Event Portal',
      description: 'Created an event management portal for Best Buddies Concordia, supporting inclusive event planning and communication.',
      tech: ['React', 'Node.js', 'Event Management'],
      image: 'https://placehold.co/600x400/121212/00A676?text=Best+Buddies',
      color: 'from-checkered-green to-zenitsu-lightning',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-domain-violet/10 via-deep-charcoal to-deep-charcoal" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Battle Records
          </h2>
          <span className="block w-24 h-1 mx-auto mb-8 bg-zenitsu-lightning rounded-full animate-pulse" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-b ${project.color} rounded-lg overflow-hidden border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-snow-white mb-2">{project.title}</h3>
                <p className="text-ash-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-ghost-black/50 text-zenitsu-lightning rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Skills Section */}
        <div className="mt-16 bg-gradient-to-r from-cursed-blue to-domain-violet rounded-lg p-8 border border-zenitsu-lightning/20">
          <h3 className="text-2xl font-bold text-snow-white mb-4">Education</h3>
          <div className="mb-4">
            <div className="text-lg text-zenitsu-lightning font-semibold">MEng in Software Engineering</div>
            <div className="text-snow-white">Concordia University, Sep 2023 – Present</div>
            <div className="text-ash-gray text-sm">Relevant Courses: Software Project Management, Total Quality Project Management, Software Comprehension and Maintenance, Programming and Problem Solving, Software Measurement, Software Design Methodologies, Human Computer Interaction</div>
          </div>
          <div className="mb-4">
            <div className="text-lg text-zenitsu-lightning font-semibold">BSc in Software Engineering with Multimedia</div>
            <div className="text-snow-white">Limkokwing University of Creative Technology, Malaysia, Aug 2019 – July 2022</div>
            <div className="text-ash-gray text-sm">Relevant Courses: Software Project Management, Leadership Skills and Human Relations, Multimedia Authoring, Business Communication Skills, Interaction Design, Database Design, Business Planning & Idea Generation Requirement Engineering</div>
          </div>
          <h3 className="text-2xl font-bold text-snow-white mt-8 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Microsoft Office', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva', 'Graphics Designing', 'Social Media Management & Marketing', 'SEO', 'Overleaf', 'Jira', 'Scrum', 'Agile', 'Azure DevOps', 'Trello', 'Project Management', 'Resource Allocation', 'Power BI', 'Python', 'Pandas', 'Numpy', 'Docker', 'MVC', 'Prompt Engineering', 'Github', 'MySql', 'NoSql', 'Java', 'WordPress', 'Html', 'Tailwind CSS'].map(skill => (
              <span key={skill} className="px-3 py-1 text-sm bg-ghost-black/50 text-zenitsu-lightning rounded-full">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 