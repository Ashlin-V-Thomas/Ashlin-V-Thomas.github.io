export interface Experience {
  id: string;
  title: string;
  period?: string;
  description?: string;
  points?: string[];
}

export interface Education {
  id: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  fullMark?: number;
}

export interface Guide {
  name: string;
  image: string;
  description: string;
}

export interface ResearchItem {
  title: string;
  description: string;
  link?: string;
}

export interface Contribution {
  type: 'Talk' | 'Project';
  title: string;
  abstract: string;
  links: {
    label: string;
    url: string;
  }[];
}

export enum Tab {
  ABOUT = 'About',
  RESUME = 'Resume',
  RESEARCH = 'Research',
  CONTRIBUTIONS = 'Contributions'
}