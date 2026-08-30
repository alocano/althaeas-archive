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
      "A personal portfolio site styled after Archive of Our Own, built to organize my projects, interests, and reading in one place.",
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
      "Led firmware development for sensor integration and built the Flask backend for data logging.",
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
      "Built the GPIO button logic and the Flask app that coordinated hardware state with the frontend.",
    status: "complete",
    hasVideo: false,
    hasDemo: true,
  },
];
