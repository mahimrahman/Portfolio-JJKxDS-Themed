import React from 'react';

const Training: React.FC = () => (
  <section id="training" className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent drop-shadow-lg tracking-wider anime-heading">
        Training
      </h2>
      <span className="block w-24 h-1 mx-auto mt-2 bg-zenitsu-lightning rounded-full animate-pulse" />
    </div>
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="text-lg text-zenitsu-lightning font-semibold">MEng in Software Engineering</div>
        <div className="text-snow-white">Concordia University, Sep 2023 – Present</div>
        <div className="text-ash-gray text-sm">Relevant Courses: Software Project Management, Total Quality Project Management, Software Comprehension and Maintenance, Programming and Problem Solving, Software Measurement, Software Design Methodologies, Human Computer Interaction</div>
      </div>
      <div className="mb-8">
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
  </section>
);

export default Training; 