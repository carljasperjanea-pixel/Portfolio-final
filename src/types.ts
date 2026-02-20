import { LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
  link?: string;
  image?: string;
}
