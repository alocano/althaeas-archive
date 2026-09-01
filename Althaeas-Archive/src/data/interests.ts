import type { InterestGroup } from "../types";

export const interests: InterestGroup[] = [
  {
    id: "coursework",
    category: "Coursework",
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
    category: "Programming Languages",
    items: ["C", "Java", "MATLAB", "Python", "x86 Assembly"],
  },
  {
    id: "web-dev",
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Flask", "MERN"],
  },
  {
    id: "dev-tools",
    category: "Development Tools",
    items: ["Git/GitHub", "VS Code", "Bash", "Ubuntu/Linux", "Figma", "Jira"],
  },
  {
    id: "hardware-embedded",
    category: "Hardware & Embedded",
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
    category: "Hardware Dev Languages & Tools",
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
    category: "Non-Technical Interests",
    items: ["Crochet", "Music", "Roguelike Games", "Crosswords"],
  },
];
