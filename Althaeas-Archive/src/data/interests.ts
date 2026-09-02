import type { InterestGroup } from "../types";

export const interests: InterestGroup[] = [
  {
    id: "coursework",
    name: "Coursework",
    category: ["Coursework"],
    items: [
      "Embedded Systems Design",
      "CMOS & Digital VLSI Design",
      "Logic Design",
      "Signals & Systems",
      "Computer Interfacing",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Systems Programming in UNIX",
      "Software Engineering Principles",
      "Web Programming",
    ],
  },
  {
    id: "prog-languages",
    name: "Programming Languages",
    category: ["Programming Languages", "Software"],
    items: ["C", "Java", "MATLAB", "Python", "x86 Assembly"],
  },
  {
    id: "web-dev",
    name: "Web Development",
    category: ["Programming Languages", "Software"],
    items: ["HTML", "CSS", "JavaScript", "React", "Flask", "MERN"],
  },
  {
    id: "dev-tools",
    name: "Development Tools",
    category: ["Software", "Tools"],
    items: ["Git/GitHub", "VS Code", "Bash", "Ubuntu/Linux", "Figma", "Jira"],
  },
  {
    id: "hardware-embedded",
    name: "Hardware & Embedded",
    category: ["Hardware"],
    items: [
      "STM32",
      "Raspberry Pi",
      "ESP32",
      "Arduino",
      "GPIO",
      "I2C",
      "sensor systems",
    ],
  },
  {
    id: "hardware-dev-tools",
    name: "Hardware Tools",
    category: ["Hardware", "Tools"],
    items: [
      "Verilog",
      "SystemVerilog",
      "VHDL",
      "LogiSim",
      "Multisim",
      "Xilinx Vivado",
    ],
  },
  {
    id: "non-technical",
    name: "Non-Technical Interests",
    category: ["Non-Technical Interests"],
    items: ["Crochet", "Music", "Roguelike Games", "Crosswords"],
  },
];
