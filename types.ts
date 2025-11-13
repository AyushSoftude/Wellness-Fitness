import React from 'react';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: string[];
  links: ProjectLink[];
}

export interface Skill {
    name: string;
    // FIX: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
    icon: React.ReactNode;
}

export interface TechStack {
    category: string;
    technologies: string[];
    // FIX: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
    icon: React.ReactNode;
}
