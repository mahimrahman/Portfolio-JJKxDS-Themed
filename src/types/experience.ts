import { SimulationNodeDatum, SimulationLinkDatum } from 'd3';

export enum Region {
  ALL = 'All Regions',
  CANADA = 'Canada',
  MALAYSIA = 'Malaysia',
  BANGLADESH = 'Bangladesh'
}

export interface ExperienceNode extends SimulationNodeDatum {
  id: string;
  role: string;
  company: string;
  region: Region;
  description: string;
  skills: string[];
  date: string;
  type: 'work' | 'leadership' | 'education';
  color?: string; // Hex color for the node
  radius?: number; // Visual size
  // Explicitly add d3 properties to ensure correct typing
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface ExperienceLink extends SimulationLinkDatum<ExperienceNode> {
  // Explicitly add source/target to allow string IDs during initialization and objects during simulation
  source: string | ExperienceNode;
  target: string | ExperienceNode;
  value: number; // Strength/Distance factor
}

export interface GraphData {
  nodes: ExperienceNode[];
  links: ExperienceLink[];
}
