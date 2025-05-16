import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allExperiences = [
  // Canada (real data)
  {
    title: 'Web Developer & Designer',
    company: 'Zavy Technologies Sdn Bhd',
    location: 'Canada',
    city: 'Montreal',
    period: 'Dec 2021 - Aug 2022',
    description: 'Worked as a web developer and designer at Zavy Technologies Sdn Bhd, delivering customized solutions for diverse clients. Proposed creative campaign ideas, implemented recommendations, and ensured seamless execution. Conducted software acceptance testing and managed ERP systems to enhance operational efficiency.',
  },
  {
    title: 'VP – Marketing',
    company: 'HackConcordia, Concordia University',
    location: 'Canada',
    city: 'Montreal',
    period: 'May 2024 – Present',
    description: 'Lead marketing efforts as VP of Marketing at HackConcordia, promoting events and driving community engagement. Managed social media campaigns, designed promotional materials, and coordinated outreach to attract participants, sponsors, and partners. Collaborated with teams to ensure consistent branding and communication, ensuring the success of ConUHacks IX.',
  },
  {
    title: 'Marketing/Communications',
    company: 'TEDx Concordia University 2025',
    location: 'Canada',
    city: 'Montreal',
    period: 'Jan 2025 – Mar 2025',
    description: "Strategized marketing efforts to enhance TEDx Concordia University's 2025 event visibility. Managed content creation and social media campaigns to drive audience engagement. Collaborated with other clubs and sponsors to promote the event and maximize outreach.",
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'SOEN 6431, Gina Cody School of Engineering and Computer Science',
    location: 'Canada',
    city: 'Montreal',
    period: 'Fall 2024 – Winter 2025',
    description: 'Grade assignments, projects, and midterms while addressing student inquiries to ensure clarity, understanding, and fair evaluation.',
  },
  {
    title: 'Director',
    company: "Graduate Students' Association (GSA), Concordia University",
    location: 'Canada',
    city: 'Montreal',
    period: 'June 2024 – Present',
    description: 'Led as Graduate Student Association Director, advocating for student interests and fostering partnerships. Represented Gina Cody School on the Student Handbook and Healthcare Committees to address student needs.',
  },
  {
    title: 'Student Facilitator',
    company: 'Homeroom, Dean of Students Office, Concordia University',
    location: 'Canada',
    city: 'Montreal',
    period: 'Sep 2024 – Present',
    description: 'Facilitate engaging discussions and peer-led activities to promote a collaborative learning environment. Provide mentorship to new students, supporting their academic and social transition into university life.',
  },
  // Malaysia (placeholder)
  {
    title: 'Software Engineer Intern',
    company: 'Tech Malaysia Sdn Bhd',
    location: 'Malaysia',
    city: 'Kuala Lumpur',
    period: 'Jan 2020 – Jun 2020',
    description: 'Placeholder: Assisted in software development and testing for client projects. Collaborated with a multicultural team and learned agile methodologies.',
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Studio Malaysia',
    location: 'Malaysia',
    city: 'Penang',
    period: 'Jul 2020 – Dec 2020',
    description: 'Placeholder: Designed user interfaces and improved user experience for mobile apps. Conducted user research and prototyping.',
  },
  // Bangladesh (placeholder)
  {
    title: 'Junior Web Developer',
    company: 'Dhaka Web Solutions',
    location: 'Bangladesh',
    city: 'Dhaka',
    period: 'Jan 2019 – Jun 2019',
    description: 'Placeholder: Developed and maintained websites for local businesses. Gained experience in HTML, CSS, and JavaScript.',
  },
  {
    title: 'IT Support Assistant',
    company: 'Bangladesh IT Hub',
    location: 'Bangladesh',
    city: 'Chittagong',
    period: 'Jul 2019 – Dec 2019',
    description: 'Placeholder: Provided IT support and troubleshooting for office staff. Assisted in network setup and maintenance.',
  },
];

const locations = ['All', 'Canada', 'Malaysia', 'Bangladesh'];

const cardVariants = {
  initial: { rotateY: 0, opacity: 1 },
  flipped: { rotateY: 180, opacity: 1 },
};

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [flipped, setFlipped] = useState<{ [idx: number]: boolean }>({});
  const [showRows, setShowRows] = useState(1);
  const [columns, setColumns] = useState(1);

  // Responsive columns calculation
  useEffect(() => {
    const calcCols = () => {
      if (window.innerWidth >= 1280) setColumns(4);
      else if (window.innerWidth >= 1024) setColumns(3);
      else if (window.innerWidth >= 640) setColumns(2);
      else setColumns(1);
    };
    calcCols();
    window.addEventListener('resize', calcCols);
    return () => window.removeEventListener('resize', calcCols);
  }, []);

  // Filtered and paginated experiences
  const filtered = allExperiences.filter(
    (exp) => activeFilter === 'All' || exp.location === activeFilter
  );
  const showCount = columns * showRows;
  const shown = filtered.slice(0, showCount);

  // Flip handler (keyboard and click)
  const handleFlip = (idx: number) => {
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

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
        {/* Filter Menu */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => { setActiveFilter(loc); setShowRows(1); }}
              className={`px-5 py-2 rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/60 text-base
                ${activeFilter === loc
                  ? 'bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white shadow-lg'
                  : 'bg-ghost-black/60 text-zenitsu-lightning hover:bg-zenitsu-lightning/10'}`}
              tabIndex={0}
            >
              {loc}
            </button>
          ))}
        </div>
        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {shown.map((exp, idx) => (
              <motion.div
                key={exp.title + exp.company}
                className="relative perspective min-h-[20rem] sm:min-h-[22rem] md:min-h-[24rem] h-full"
                initial={false}
                animate={flipped[idx] ? 'flipped' : 'initial'}
                variants={{
                  initial: { rotateY: 0, opacity: 1, transition: { duration: 0.5 } },
                  flipped: { rotateY: 180, opacity: 1, transition: { duration: 0.5 } },
                }}
                style={{ transformStyle: 'preserve-3d' }}
                tabIndex={0}
                onClick={() => handleFlip(idx)}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleFlip(idx)}
                aria-pressed={!!flipped[idx]}
                role="button"
              >
                {/* Front */}
                <motion.div
                  className="absolute inset-0 w-full h-full min-h-[20rem] sm:min-h-[22rem] md:min-h-[24rem] bg-gradient-to-br from-rengoku-flame to-domain-violet rounded-2xl shadow-xl p-6 md:p-8 flex flex-col justify-center items-center text-center cursor-pointer select-none transition-all duration-300 text-snow-white overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}
                  aria-hidden={!!flipped[idx]}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-2 break-words w-full">{exp.title}</h3>
                  <p className="font-semibold mb-1 break-words w-full">{exp.company}</p>
                  <p className="text-zenitsu-lightning font-bold mb-1">{exp.period}</p>
                  <p className="text-xs text-ash-gray break-words w-full">{exp.city}, {exp.location}</p>
                </motion.div>
                {/* Back */}
                <motion.div
                  className="absolute inset-0 w-full h-full min-h-[20rem] sm:min-h-[22rem] md:min-h-[24rem] bg-gradient-to-br from-domain-violet to-rengoku-flame rounded-2xl shadow-xl p-6 md:p-8 flex flex-col justify-center items-center text-center cursor-pointer select-none transition-all duration-300 text-snow-white overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}
                  aria-hidden={!flipped[idx]}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-2">Details</h3>
                  <p className="text-sm md:text-base break-words w-full">{exp.description || 'Detailed description of the role and responsibilities.'}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Show More Button */}
        {showCount < filtered.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowRows(r => r + 1)}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
      <style>{`
        .perspective { perspective: 1200px; }
      `}</style>
    </section>
  );
};

export default Experience; 