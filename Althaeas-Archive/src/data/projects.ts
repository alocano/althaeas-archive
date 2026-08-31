import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ao3-site",
    title: "AO3-Themed Personal Website",
    repoUrl: "https://github.com/alocano/",
    dateRange: "Aug 2026 - Present",
    role: "Personal Project",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    description:
      "A personal website to highlight projects, achievements, and skills as well as improve web development skills, specifically React, TS, and Tailwind.",
    myContribution: "Solo project. Designed, built, and deployed independently.",
    status: "in-progress",
    hasVideo: false,
    hasDemo: true,
  },
  {
    id: "pawd",
    title: "Parkinson's Assistive Wearable Device (PAWD)",
    repoUrl: "https://github.com/alocano/pawd",
    dateRange: "Aug 2025 - May 2026",
    role: "Senior Design",
    stack: ["TFT Display", "IMU", "FSR", "ESP32", "Flask", "HTML", "CSS", "JS"],
    description:
      "An IRB-compliant glove designed to improve clinical workflow by providing real-time feedback during the Unified Parkinson's Disease Rating Scale (UPDRS) assessment, focusing on motor symptoms: finger tapping and pronation-supination. The accompanying web application provides time stamps of the assessment and graphs the data for further analysis.",
    myContribution:
      "Led firmware development for sensor integration and built the Flask backend for data logging and full-stack HTML, CSS, JS, and Flask application for real-time visualizations.",
    status: "complete",
    hasVideo: true,
    hasDemo: false,
  },
  {
    id: "senso",
    title: "Senso - Braille-learning Device",
    repoUrl: "https://github.com/g35k/senso",
    dateRange: "March 2026",
    role: "Hackathon Win, Open Innovation",
    stack: ["Raspberry Pi 3 Model B", "Python", "GPIO", "Flask", "HTML", "CSS", "JavaScript"],
    description:
      "A hardware device that teaches Braille to pre-adolescent children through tactile feedback and an external speaker for audio cues.",
    myContribution:
      "Built the GPIO button logic and assisted with Python development for lesson navigation and text-to-speech feedback.",
    status: "complete",
    hasVideo: false,
    hasDemo: true,
  },
  {
    id: "handitdown",
    title: "HandItDown - College Material Exchange Platform",
    repoUrl: "https://github.com/g35k/handitdown",
    dateRange: "October 2025",
    role: "Hackathon Win, Sustainability",
    stack: ["Flask", "Supabase", "React", "Vite", "Tailwind", "TypeScript"],
    description:
        "HandItDown is a student-run material exchange platform that allows  fellow students to purchase and donate used textbooks, electronic kits,  and other course equipment, reducing waste and costs. HandItDown was created in 48 hours for Hornet Hacks 3.0 and won the Sustainability category, additionally gaining community feedback from a survey with 70+ student responses.",
    myContribution:
        "Built frontend and frontend components using React, Vite, Tailwind, and TypeScript, focusing on UX decisions with students in mind.",
    status: "complete",
    hasVideo: false,
    hasDemo: true,
  },
];
