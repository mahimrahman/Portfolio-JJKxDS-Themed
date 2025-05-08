import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Developer & Designer',
      company: 'Zavy Technologies Sdn Bhd | Cyberjaya, Malaysia',
      period: 'Dec 2021 - Aug 2022',
      description: 'Worked as a web developer and designer at Zavy Technologies Sdn Bhd, delivering customized solutions for diverse clients. Proposed creative campaign ideas, implemented recommendations, and ensured seamless execution. Conducted software acceptance testing and managed ERP systems to enhance operational efficiency.',
      skills: ['React', 'UI/UX', 'ERP', 'Campaigns'],
      color: 'from-rengoku-flame to-domain-violet',
    },
    {
      title: 'VP – Marketing',
      company: 'HackConcordia, Concordia University | Montreal',
      period: 'May 2024 – Present',
      description: 'Lead marketing efforts as VP of Marketing at HackConcordia, promoting events and driving community engagement. Managed social media campaigns, designed promotional materials, and coordinated outreach to attract participants, sponsors, and partners. Collaborated with teams to ensure consistent branding and communication, ensuring the success of ConUHacks IX.',
      skills: ['Marketing', 'Social Media', 'Branding', 'Leadership'],
      color: 'from-cursed-blue to-domain-violet',
    },
    {
      title: 'Marketing/Communications',
      company: 'TEDx Concordia University 2025 | Montreal',
      period: 'Jan 2025 – Mar 2025',
      description: "Strategized marketing efforts to enhance TEDx Concordia University's 2025 event visibility. Managed content creation and social media campaigns to drive audience engagement. Collaborated with other clubs and sponsors to promote the event and maximize outreach.",
      skills: ['Marketing', 'Content Creation', 'Event Management'],
      color: 'from-checkered-green to-zenitsu-lightning',
    },
    {
      title: 'Graduate Teaching Assistant',
      company: 'SOEN 6431, Gina Cody School of Engineering and Computer Science',
      period: 'Fall 2024 – Winter 2025',
      description: "Grade assignments, projects, and midterms while addressing student inquiries to ensure clarity, understanding, and fair evaluation.",
      skills: ['Teaching', 'Grading', 'Communication'],
      color: 'from-zenitsu-lightning to-rengoku-flame',
    },
    {
      title: 'Director',
      company: "Graduate Students' Association (GSA), Concordia University | Montreal",
      period: 'June 2024 – Present',
      description: "Led as Graduate Student Association Director, advocating for student interests and fostering partnerships. Represented Gina Cody School on the Student Handbook and Healthcare Committees to address student needs.",
      skills: ['Leadership', 'Advocacy', 'Representation'],
      color: 'from-cursed-blue to-domain-violet',
    },
    {
      title: 'Student Facilitator',
      company: 'Homeroom, Dean of Students Office, Concordia University | Montreal',
      period: 'Sep 2024 – Present',
      description: 'Facilitate engaging discussions and peer-led activities to promote a collaborative learning environment. Provide mentorship to new students, supporting their academic and social transition into university life.',
      skills: ['Facilitation', 'Mentorship', 'Collaboration'],
      color: 'from-rengoku-flame to-domain-violet',
    },
    {
      title: 'Peer Ambassador',
      company: 'Sexual Assault Resource Center (SARC), Concordia University | Montreal',
      period: 'Aug 2024 – Present',
      description: 'Provide compassionate support and connect survivors of sexual assault to essential resources. Raise awareness about sexual violence through prevention initiatives and advocacy. Collaborate with campus organizations to foster a safe, inclusive, and supportive environment for all students.',
      skills: ['Support', 'Advocacy', 'Awareness'],
      color: 'from-checkered-green to-zenitsu-lightning',
    },
    {
      title: 'VP – Events',
      company: 'Best Buddies Concordia | Montreal',
      period: 'Jan 2024 – Present',
      description: 'Plan and execute inclusive events for the Best Buddies Concordia Chapter, promoting friendships and social inclusion for individuals with intellectual and developmental disabilities. Collaborate with team members and community partners to design engaging activities and manage event logistics. Oversee event budgets, secure venues, and foster effective communication to maximize participation and impact.',
      skills: ['Event Planning', 'Inclusion', 'Teamwork'],
      color: 'from-zenitsu-lightning to-rengoku-flame',
    },
    {
      title: 'Portfolio Member – Finance',
      company: 'AIESEC Concordia, Concordia University | Montreal',
      period: 'July 2024 – Present',
      description: 'Manage and oversee financial activities, including budgeting, financial planning, and expense tracking.',
      skills: ['Finance', 'Budgeting', 'Planning'],
      color: 'from-cursed-blue to-domain-violet',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-domain-violet/2 via-deep-charcoal to-deep-charcoal pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Missions & Mastery
          </h2>
          <span className="block w-24 h-1 mx-auto mb-8 bg-zenitsu-lightning rounded-full animate-pulse" />
        </motion.div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rengoku-flame to-domain-violet" />
              <div className={`ml-8 bg-gradient-to-r ${exp.color} p-6 rounded-lg border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-snow-white">{exp.title}</h3>
                    <p className="text-ash-gray">{exp.company}</p>
                  </div>
                  <span className="text-zenitsu-lightning/80 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-snow-white mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-ghost-black/50 text-zenitsu-lightning rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 