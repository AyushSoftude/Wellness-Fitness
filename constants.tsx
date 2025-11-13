
import React from 'react';
import { Project, Skill } from './types';

export const SKILLS: Skill[] = [
  {
    name: "Mobile App Dev (iOS & Android)",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  },
  {
    name: "AI & Machine Learning",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    name: "Wearable & IoT Integration",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
  },
  {
    name: "Data Analytics & BI",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  },
  {
    name: "User Experience (UX)",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
  {
    name: "Compliance & Privacy",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  },
];

export const TECH_STACK = [
  {
    category: "Mobile Apps",
    technologies: ["iOS", "Android", "React Native"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  },
  {
    category: "Web",
    technologies: ["ASP.Net", "Power BI", "PWA"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m0 18a9 9 0 00-9-9m-9 9h18" /></svg>
  },
  {
    category: "AI/ML",
    technologies: ["Chatbots", "Machine Learning", "Predictive Analytics"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
  },
  {
    category: "IoT",
    technologies: ["Wearable Integration"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.128 19.825A1.5 1.5 0 0112 18a1.5 1.5 0 013.872 1.825l-.01.012a4.5 4.5 0 01-7.73 0l-.01-.012zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>
  },
];


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Virtual Personal Fitness Trainer",
    category: "Revamped Case Study",
    description: "A personal digital trainer designed to make you fit, directly applicable for fitness training apps and digital fitness coaching. Client: Amore.",
    technologies: ["iOS", "Swift", "UI/UX Design", "AI Coaching"],
    images: [
      "https://picsum.photos/seed/project1a/800/600",
      "https://picsum.photos/seed/project1b/800/600",
      "https://picsum.photos/seed/project1c/800/600",
    ],
    links: [
        { label: "Case Study", url: "https://cloudfiles.to/6HqlxMfUzWA" },
        { label: "Alternative PDF", url: "https://uploads-ssl.webflow.com/6320125ace536b6ad148eca3/64e8a166b886f50a3639ce2b_A%20Virtual%20Personal%20Fitness%20Trainer.pdf"}
    ],
  },
  {
    id: 2,
    title: "Wearable Health App for Diabetes",
    category: "New Case Study",
    description: "Leveraging wearable technology for health and wellness tracking, this app is suitable for fitness wearables and health monitoring, aiming to help reverse diabetes.",
    technologies: ["Android", "iOS", "Kotlin", "Swift", "Bluetooth LE"],
    images: [
      "https://picsum.photos/seed/project2a/800/600",
      "https://picsum.photos/seed/project2b/800/600",
      "https://picsum.photos/seed/project2c/800/600",
    ],
    links: [
        { label: "Case Study", url: "https://cloudfiles.to/dCjis73as7I" },
        { label: "Success Story", url: "https://www.softude.com/success-stories/wearable-diabetes-management-mobile-app/" },
        { label: "Alternative PDF", url: "https://uploads-ssl.webflow.com/6320125ace536b6ad148eca3/64c3b874eae8186199f33c79_A%20Wearable%20App%20for%20Reversing%20Diabetes.pdf" },
    ],
  },
  {
    id: 3,
    title: "Cardiometabolic Wellness App",
    category: "New Case Study",
    description: "A comprehensive wellness app for cardiovascular and metabolic health management. Developed for Endless Health.",
    technologies: ["Android", "iOS", "React Native", "Firebase"],
    images: [
      "https://picsum.photos/seed/project3a/800/600",
      "https://picsum.photos/seed/project3b/800/600",
      "https://picsum.photos/seed/project3c/800/600",
    ],
    links: [
        { label: "Case Study", url: "https://cloudfiles.to/FDwZIrhyrS2" },
        { label: "Success Story", url: "https://www.softude.com/success-stories/cardiometabolic-health-app-case-study/" }
    ],
  },
  {
    id: 4,
    title: "Diabetes Management Solution",
    category: "New Case Study",
    description: "A Privacy Act 1988 compliant solution for diabetes management in Australia, applicable to wellness tracking and chronic disease management. Client: Defeat Diabetes.",
    technologies: ["Web App", "React", "Node.js", "Compliance"],
    images: [
      "https://picsum.photos/seed/project4a/800/600",
      "https://picsum.photos/seed/project4b/800/600",
      "https://picsum.photos/seed/project4c/800/600",
    ],
    links: [
        { label: "Case Study", url: "https://cloudfiles.to/cFjsGIYIgsC" },
        { label: "Alternative PDF", url: "https://uploads-ssl.webflow.com/6320125ace536b6ad148eca3/64df68baf1cd1018c925bfaa_Privacy%20Act%201988%20Compliant%20Diabetes%20Management%20Solution%20for%20Australia.pdf" }
    ],
  },
  {
    id: 9,
    title: "AI Virtual Therapist",
    category: "Healthcare AI",
    description: "Enhancing emotional support in-between sessions with an AI virtual therapist. A mental wellness and stress management solution for fitness app ecosystems.",
    technologies: ["AI Chatbot", "Healthcare", "Mental Wellness"],
    images: [
      "https://picsum.photos/seed/project9a/800/600",
      "https://picsum.photos/seed/project9b/800/600",
      "https://picsum.photos/seed/project9c/800/600",
    ],
    links: [
        { label: "Success Story", url: "https://www.softude.com/success-stories/ai-virtual-therapist-chatbot/" },
    ],
  },
  {
    id: 10,
    title: "AI Clinical Dashboard with Patient Monitoring",
    category: "Healthcare AI",
    description: "AI clinical dashboards supporting proactive patient monitoring. A real-time health monitoring solution applicable to fitness tracking.",
    technologies: ["AI", "Dashboard", "Patient Monitoring", "Healthcare"],
    images: [
      "https://picsum.photos/seed/project10a/800/600",
      "https://picsum.photos/seed/project10b/800/600",
      "https://picsum.photos/seed/project10c/800/600",
    ],
    links: [
        { label: "Success Story", url: "https://www.softude.com/success-stories/ai-clinical-dashboard-for-patient-monitoring/" },
    ],
  },
  {
    id: 11,
    title: "AI Chatbot for Therapy Mood Tracking",
    category: "Mental Wellness",
    description: "An AI chatbot for monitoring mood and progress between therapy sessions. A mental wellness tracking feature for holistic fitness platforms.",
    technologies: ["AI Chatbot", "Mood Tracking", "Mental Wellness", "Healthcare"],
    images: [
      "https://picsum.photos/seed/project11a/800/600",
      "https://picsum.photos/seed/project11b/800/600",
      "https://picsum.photos/seed/project11c/800/600",
    ],
    links: [
        { label: "Success Story", url: "https://www.softude.com/success-stories/ai-chatbot-for-monitoring-mood/" },
    ],
  },
  {
    id: 12,
    title: "Automated Clinical Assessment System",
    category: "Healthcare Automation",
    description: "Modernized a standard clinical assessment with automated scoring. Automated health assessment for fitness and wellness evaluations.",
    technologies: ["AI Automation", "Clinical Assessment", "Healthcare"],
    images: [
      "https://picsum.photos/seed/project12a/800/600",
      "https://picsum.photos/seed/project12b/800/600",
      "https://picsum.photos/seed/project12c/800/600",
    ],
    links: [
        { label: "Success Story", url: "https://www.softude.com/success-stories/digital-clinical-assessment/" },
    ],
  },
  {
    id: 13,
    title: "AI Genetic Counselling Triage",
    category: "Healthcare AI",
    description: "Achieved a 33% reduction in patient wait times with an AI Genetic Counselling Triage system. AI-powered health assessment and personalization for fitness recommendations.",
    technologies: ["AI Triage", "Genetic Counselling", "Personalization"],
    images: [
      "https://picsum.photos/seed/project13a/800/600",
      "https://picsum.photos/seed/project13b/800/600",
      "https://picsum.photos/seed/project13c/800/600",
    ],
    links: [
        { label: "Case Study", url: "https://cloudfiles.to/zHnz0wgZ6fv" },
    ],
  },
  {
    id: 5,
    title: "Mindfulness & Meditation App",
    category: "Upcoming Project",
    description: "Currently in development, 'SereneMind' is an application that will offer guided meditations, breathing exercises, and mindfulness courses to reduce stress and improve mental clarity.",
    technologies: ["Flutter", "Firebase", "Google Cloud", "Contentful CMS"],
    images: [
      "https://picsum.photos/seed/project5a/800/600",
      "https://picsum.photos/seed/project5b/800/600",
      "https://picsum.photos/seed/project5c/800/600",
    ],
    links: [
        { label: "Coming Soon", url: "#" },
    ],
  },
  {
    id: 6,
    title: "AI-Powered Nutrition Planner",
    category: "Upcoming Project",
    description: "We are building 'NutriPlan,' a web platform that uses AI to generate personalized meal plans. It will feature a recipe database and grocery list generation based on dietary needs and fitness goals.",
    technologies: ["Vue.js", "Python", "Flask", "PostgreSQL", "Machine Learning"],
    images: [
      "https://picsum.photos/seed/project6a/800/600",
      "https://picsum.photos/seed/project6b/800/600",
      "https://picsum.photos/seed/project6c/800/600",
    ],
    links: [
      { label: "Coming Soon", url: "#" },
    ],
  },
  {
    id: 7,
    title: "Corporate Wellness Platform",
    category: "Upcoming Project",
    description: "Now engineering 'WellCorp,' a B2B SaaS platform for companies to manage employee wellness programs. It will feature activity challenges, mental health resources, and rewards systems.",
    technologies: ["Angular", "ASP.NET Core", "Azure", "Power BI"],
    images: [
      "https://picsum.photos/seed/project7a/800/600",
      "https://picsum.photos/seed/project7b/800/600",
      "https://picsum.photos/seed/project7c/800/600",
    ],
    links: [
      { label: "Coming Soon", url: "#" },
    ],
  },
  {
    id: 8,
    title: "Telehealth Physical Therapy App",
    category: "Upcoming Project",
    description: "In progress: 'FlexiCare,' a mobile app to connect patients with physical therapists for remote consultations. It will feature personalized exercise plans and progress tracking using computer vision.",
    technologies: ["React Native", "WebRTC", "TensorFlow.js", "AWS"],
    images: [
      "https://picsum.photos/seed/project8a/800/600",
      "https://picsum.photos/seed/project8b/800/600",
      "https://picsum.photos/seed/project8c/800/600",
    ],
    links: [
      { label: "Coming Soon", url: "#" },
    ],
  },
];