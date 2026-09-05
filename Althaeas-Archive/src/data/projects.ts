import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ao3-site",
    title: "AO3-Themed Personal Website",
    repoUrl: "https://github.com/alocano/althaeas-archive",
    dateRange: "Aug 2026 - Present",
    role: "Personal Project",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    description:
      "A personal website to highlight projects, achievements, and skills as well as improve web development skills, specifically React, TS, and Tailwind.",
    myContribution: "Solo project. Designed, built, and deployed independently. Most of the layout and assets including the symbols and the favicon were made in Figma!",
    status: "in-progress",
    hasVideo: false,
    hasDemo: true,
    symbolGrid: {
      isSoftware: true,
      isHardware: false,
      hasDemo: true,
      isComplete: false,
    },
  },
  {
    id: "pawd",
    title: "Parkinson's Assistive Wearable Device (PAWD)",
    repoUrl: "https://github.com/alocano/pawd",
    dateRange: "Aug 2025 - May 2026",
    role: "Senior Design",
    stack: ["TFT Display", "IMU", "FSR", "ESP32", "Flask", "HTML", "CSS", "JavaScript"],
    description:
      "An IRB-compliant glove designed to improve clinical workflow by providing real-time feedback during the Unified Parkinson's Disease Rating Scale (UPDRS) assessment, focusing on motor symptoms: finger tapping and pronation-supination. The accompanying web application provides time stamps of the assessment and graphs the data for further analysis.",
    myContribution:
      "Led firmware development for sensor integration and built the Flask backend for data logging.",
    status: "complete",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/watch?v=zm-nQzR8mFA&feature=youtu.be",
    hasDemo: true,
    demoUrl:"https://mysacstate-my.sharepoint.com/personal/jmansyur_csus_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fjmansyur_csus_edu%2FDocuments%2FAttachments%2F20260424%20121612.mp4&ct=1778708821615&or=OWA-NT-Mail&cid=258dc759-340e-66d2-8c60-165651666024&ga=1&referrer=StreamWebApp.Web&referrerScenario=AddressBarCopied.view.483a3971-ca41-417d-8cac-852c3acd21e9&isDarkMode=true",
    symbolGrid: {
      isSoftware: true,
      isHardware: true,
      hasDemo: false,
      isComplete: true,
    },
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
      "Built the GPIO button logic and the Flask app that coordinated hardware state with the frontend.",
    status: "complete",
    hasVideo: false,
    hasDemo: false,
    symbolGrid: {
      isSoftware: true,
      isHardware: true,
      hasDemo: true,
      isComplete: true,
    },
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
    demoUrl: "https://handitdown.netlify.app",
    symbolGrid: {
      isSoftware: true,
      isHardware: false,
      hasDemo: true,
      isComplete: true,
    },
  },
];