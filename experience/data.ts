import { ExperienceNode, ExperienceLink, Region, GraphData } from './types';

const nodes: ExperienceNode[] = [
  // Canada Nodes (Cyan/Blue Theme - Water Breathing)
  {
    id: 'n1',
    role: 'Software Engineer',
    company: 'Bassili Group',
    region: Region.CANADA,
    description: 'Developed scalable frontend architectures and optimized backend microservices for high-traffic applications.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    date: '2022 - Present',
    type: 'work',
    color: '#06b6d4' 
  },
  {
    id: 'n2',
    role: 'Graduate TA',
    company: 'Gina Cody School',
    region: Region.CANADA,
    description: 'Mentored over 100 students in Advanced Software Engineering principles and algorithms.',
    skills: ['Teaching', 'Algorithms', 'Java'],
    date: '2021 - 2022',
    type: 'education',
    color: '#06b6d4'
  },
  {
    id: 'n3',
    role: 'VP Marketing',
    company: 'HackConcordia',
    region: Region.CANADA,
    description: 'Led marketing strategies for one of Canada\'s largest hackathons, increasing reach by 200%.',
    skills: ['Marketing', 'Strategy', 'Event Planning'],
    date: '2021 - 2022',
    type: 'leadership',
    color: '#3b82f6'
  },
  {
    id: 'n4',
    role: 'Director',
    company: 'Graduate Students Assoc.',
    region: Region.CANADA,
    description: 'Represented graduate student interests and managed budget allocations for student activities.',
    skills: ['Leadership', 'Budgeting', 'Governance'],
    date: '2020 - 2021',
    type: 'leadership',
    color: '#3b82f6'
  },
  {
    id: 'n5',
    role: 'Marketing/Comm',
    company: 'TEDx Concordia',
    region: Region.CANADA,
    description: 'Orchestrated communication channels and social media campaigns for TEDx events.',
    skills: ['Public Relations', 'Content Creation'],
    date: '2020 - 2021',
    type: 'leadership',
    color: '#3b82f6'
  },

  // Malaysia Nodes (Purple/Dark Theme - Void/Cursed)
  {
    id: 'n6',
    role: 'Web Developer',
    company: 'Zavy Technologies',
    region: Region.MALAYSIA,
    description: 'Full stack development for fintech solutions, focusing on secure transaction processing.',
    skills: ['Vue.js', 'Laravel', 'MySQL'],
    date: '2018 - 2020',
    type: 'work',
    color: '#8b5cf6'
  },
  {
    id: 'n7',
    role: 'Student Facilitator',
    company: 'Dean of Students Office',
    region: Region.MALAYSIA,
    description: 'Facilitated workshops on leadership and personal development for undergraduates.',
    skills: ['Mentoring', 'Public Speaking'],
    date: '2017 - 2018',
    type: 'education',
    color: '#a855f7'
  },

  // Bangladesh Nodes (Red/Orange Theme - Fire/Sun Breathing)
  {
    id: 'n8',
    role: 'Member',
    company: 'Bangladesh Scouts',
    region: Region.BANGLADESH,
    description: 'Participated in community service projects and disaster relief coordination efforts.',
    skills: ['Volunteering', 'Teamwork', 'Resilience'],
    date: '2015 - 2017',
    type: 'leadership',
    color: '#f97316'
  },
  {
    id: 'n9',
    role: 'Senior Member',
    company: 'Connecting Youth',
    region: Region.BANGLADESH,
    description: 'Organized nationwide youth connectivity programs to foster digital literacy.',
    skills: ['Organization', 'Community Building'],
    date: '2016 - 2017',
    type: 'leadership',
    color: '#ef4444'
  },
  {
    id: 'n10',
    role: 'General Secretary',
    company: 'BD Student Assoc.',
    region: Region.BANGLADESH,
    description: 'Managed administrative operations and coordinated annual cultural events.',
    skills: ['Administration', 'Management'],
    date: '2015 - 2016',
    type: 'leadership',
    color: '#ef4444'
  },
];

const links: ExperienceLink[] = [
  // Inter-region connections (The Constellation Path)
  { source: 'n1', target: 'n2', value: 1 },
  { source: 'n2', target: 'n3', value: 1 },
  { source: 'n3', target: 'n4', value: 1 },
  { source: 'n4', target: 'n5', value: 1 },
  // Connection to Malaysia
  { source: 'n5', target: 'n6', value: 2 }, 
  { source: 'n6', target: 'n7', value: 1 },
  // Connection to Bangladesh
  { source: 'n7', target: 'n8', value: 2 },
  { source: 'n8', target: 'n9', value: 1 },
  { source: 'n9', target: 'n10', value: 1 },
  // Cross connections for stability and aesthetics
  { source: 'n1', target: 'n3', value: 3 },
  { source: 'n6', target: 'n8', value: 3 },
];

export const initialData: GraphData = { nodes, links };