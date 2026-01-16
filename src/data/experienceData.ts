/**
 * @fileoverview Experience Data Configuration
 * @description Static data for the experience constellation graph including
 * work history, leadership roles, and education across multiple regions
 */
import { ExperienceNode, ExperienceLink, Region, GraphData } from '../types/experience';

const nodes: ExperienceNode[] = [
  // Canada Nodes (Cyan/Blue Theme - Water Breathing / Cursed Energy)
  {
    id: 'n1',
    role: 'Software Engineer',
    company: 'Bassilichat Inc.',
    region: Region.CANADA,
    description: 'Developed and deployed BassiliChat AI and BassiliTrade platforms. Architected scalable backend solutions using modern frameworks and cloud technologies. Optimized application performance across both flagship products.',
    skills: ['React', 'Node.js', 'AI Development', 'Trading Platform', 'Cloud Technologies', 'TypeScript'],
    date: 'Sep 2025 - Present',
    type: 'work',
    color: '#3F51B5'
  },
  {
    id: 'n2',
    role: 'VP Marketing',
    company: 'HackConcordia',
    region: Region.CANADA,
    description: "Led comprehensive marketing strategies for Canada's largest student-run hackathon. Managed social media campaigns reaching 10,000+ students across universities.",
    skills: ['Marketing Strategy', 'Social Media', 'Event Planning', 'Community Engagement'],
    date: 'May 2024 - Present',
    type: 'leadership',
    color: '#3F51B5'
  },
  {
    id: 'n3',
    role: 'Graduate TA',
    company: 'Gina Cody School',
    region: Region.CANADA,
    description: 'Teaching Assistant for SOEN 6431 Software Systems Requirements Engineering. Graded assignments and projects for 80+ graduate students with detailed feedback.',
    skills: ['Teaching', 'Software Engineering', 'Requirements Engineering', 'Mentoring'],
    date: 'Fall 2024 - Winter 2025',
    type: 'education',
    color: '#06b6d4'
  },
  {
    id: 'n4',
    role: 'Director',
    company: 'Graduate Students Assoc.',
    region: Region.CANADA,
    description: 'Elected Director representing graduate student interests university-wide. Participated in Student Handbook and Healthcare Committee initiatives.',
    skills: ['Leadership', 'Student Advocacy', 'Policy Development', 'Committee Management'],
    date: 'June 2024 - May 2025',
    type: 'leadership',
    color: '#3b82f6'
  },
  {
    id: 'n5',
    role: 'Student Facilitator',
    company: 'Dean of Students Office',
    region: Region.CANADA,
    description: 'Facilitated peer-led discussions and collaborative learning activities for new students. Provided mentorship and guidance to support academic transition.',
    skills: ['Mentorship', 'Facilitation', 'Student Support', 'Community Building'],
    date: 'Sep 2024 - Aug 2025',
    type: 'education',
    color: '#06b6d4'
  },
  {
    id: 'n6',
    role: 'Marketing/Comm',
    company: 'TEDx Concordia',
    region: Region.CANADA,
    description: 'Developed and executed marketing strategies for TEDx Concordia University 2025 event. Created compelling content and managed social media campaigns.',
    skills: ['Marketing', 'Social Media', 'Content Creation', 'Event Promotion'],
    date: 'Jan 2025 - Mar 2025',
    type: 'leadership',
    color: '#3b82f6'
  },

  // Malaysia Nodes (Purple/Dark Theme - Void/Cursed Energy)
  {
    id: 'n7',
    role: 'Web Developer',
    company: 'Zavy Technologies',
    region: Region.MALAYSIA,
    description: 'Delivered customized web solutions for diverse clients. Developed responsive websites using modern web technologies and managed ERP systems.',
    skills: ['Web Development', 'Vue.js', 'Laravel', 'ERP Systems', 'Client Solutions'],
    date: 'Dec 2021 - Aug 2022',
    type: 'work',
    color: '#8b5cf6'
  },
  {
    id: 'n8',
    role: 'General Secretary',
    company: 'BD Student Assoc. LUCT',
    region: Region.MALAYSIA,
    description: 'Coordinated events and cultural programs to promote Bangladeshi culture. Managed communication between executive committee and members.',
    skills: ['Event Coordination', 'Administration', 'Cultural Programs', 'Leadership'],
    date: '2019 - 2021',
    type: 'leadership',
    color: '#a855f7'
  },

  // Bangladesh Nodes (Red/Orange Theme - Fire/Sun Breathing)
  {
    id: 'n9',
    role: 'PR Team Member',
    company: 'Volunteer for Bangladesh, JAAGO Foundation',
    region: Region.BANGLADESH,
    description: "Worked with JAAGO Foundation's youth wing to develop and implement campaigns aligned with the UN Sustainable Development Goals (SDGs) that promote quality education, gender equality, and climate awareness. Coordinated public outreach and social media, creating effective design and written content using Canva and comparable tools. Coordinated community outreach programs and awareness campaigns, managing logistics, volunteers, and impact evaluations. Recipient of multiple awards for leadership, innovation, and outstanding contribution to advancing the organization's cause and community impact.",
    skills: ['Public Relations', 'Social Media', 'Campaign Development', 'Youth Advocacy', 'Community Outreach'],
    date: 'May 2015 - July 2019',
    type: 'leadership',
    color: '#ef4444'
  },
  {
    id: 'n10',
    role: 'Senior Member',
    company: 'Connecting Youth for Change',
    region: Region.BANGLADESH,
    description: 'Led youth-driven social service projects focused on education and community welfare. Mentored junior members and coordinated cross-organizational partnerships.',
    skills: ['Youth Leadership', 'Social Service', 'Mentoring', 'Community Development'],
    date: 'Jun 2014 - May 2019',
    type: 'leadership',
    color: '#ef4444'
  },
  {
    id: 'n11',
    role: 'Member',
    company: 'Bangladesh Scouts',
    region: Region.BANGLADESH,
    description: 'Participated in national scouting programs developing leadership and teamwork. Contributed to community service initiatives including disaster relief.',
    skills: ['Leadership', 'Community Service', 'Disaster Relief', 'Teamwork'],
    date: '2011 - 2019',
    type: 'leadership',
    color: '#f97316'
  },

  // New Canada Nodes
  {
    id: 'n12',
    role: 'VP - Events',
    company: 'Best Buddies Concordia',
    region: Region.CANADA,
    description: 'Plan and execute inclusive events for the Best Buddies Concordia Chapter, promoting friendships and social inclusion for individuals with intellectual and developmental disabilities. Collaborate with team members and community partners to design engaging activities and manage event logistics.',
    skills: ['Event Planning', 'Inclusive Design', 'Community Engagement', 'Team Collaboration'],
    date: 'Jan 2024 - May 2025',
    type: 'leadership',
    color: '#3b82f6'
  },
  {
    id: 'n13',
    role: 'Peer Ambassador',
    company: 'SARC - Concordia',
    region: Region.CANADA,
    description: 'Provide compassionate support and connect survivors of sexual assault to essential resources. Raise awareness about sexual violence through prevention initiatives and advocacy.',
    skills: ['Peer Support', 'Advocacy', 'Prevention Education', 'Community Building'],
    date: 'Aug 2024 - Present',
    type: 'leadership',
    color: '#3b82f6'
  },
  {
    id: 'n14',
    role: 'Finance Portfolio',
    company: 'AIESEC Concordia',
    region: Region.CANADA,
    description: 'Manage and oversee financial activities, including budgeting, financial planning, and expense tracking.',
    skills: ['Financial Management', 'Budgeting', 'Financial Planning', 'Expense Tracking'],
    date: 'July 2024 - Aug 2025',
    type: 'leadership',
    color: '#3b82f6'
  },
  {
    id: 'n15',
    role: 'Project Manager',
    company: 'TECH-NEST',
    region: Region.CANADA,
    description: 'Led TECH-NEST as Project Manager for the Forces AVENIR Competition, overseeing a multidisciplinary team and project execution from concept to delivery. Coordinated planning, stakeholder engagement, and team collaboration, resulting in innovative solutions and impactful outcomes.',
    skills: ['Project Management', 'Team Leadership', 'Stakeholder Engagement', 'Strategic Planning'],
    date: 'Jan 2025 - Aug 2025',
    type: 'leadership',
    color: '#3b82f6'
  },
];

const links: ExperienceLink[] = [
  // Inter-region connections (The Constellation Path)
  { source: 'n1', target: 'n2', value: 1 },
  { source: 'n2', target: 'n3', value: 1 },
  { source: 'n3', target: 'n4', value: 1 },
  { source: 'n4', target: 'n5', value: 1 },
  { source: 'n5', target: 'n6', value: 1 },
  // Connection to Malaysia
  { source: 'n6', target: 'n7', value: 2 },
  { source: 'n7', target: 'n8', value: 1 },
  // Connection to Bangladesh
  { source: 'n8', target: 'n9', value: 2 },
  { source: 'n9', target: 'n10', value: 1 },
  { source: 'n10', target: 'n11', value: 1 },
  // New Canada connections
  { source: 'n6', target: 'n12', value: 1 },
  { source: 'n12', target: 'n13', value: 1 },
  { source: 'n13', target: 'n14', value: 1 },
  { source: 'n14', target: 'n15', value: 1 },
  // Cross connections for stability and aesthetics
  { source: 'n1', target: 'n3', value: 3 },
  { source: 'n2', target: 'n4', value: 3 },
  { source: 'n7', target: 'n9', value: 3 },
  { source: 'n2', target: 'n12', value: 3 },
  { source: 'n4', target: 'n13', value: 3 },
];

export const initialData: GraphData = { nodes, links };
