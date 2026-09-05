export type Status = "in-progress" | "complete";

// quadrant meanings: top-left = software, top-right = hardware,
// bottom-left = demo available, bottom-right = complete/incomplete
export interface SymbolGrid {
  isSoftware: boolean;
  isHardware: boolean;
  hasDemo: boolean;
  isComplete: boolean;
}

export interface SymbolLegendEntry {
  image: string;   // image path
  label: string;   // short name, e.g. "Complete"
  description: string; // what it means
}

export interface Project {
  id: string;
  title: string;
  repoUrl: string;
  dateRange: string;
  role: string; // e.g. "Senior Design"
  stack: string[]; // e.g. ["ESP32", "Flask", "HTML", "CSS", "JS"]
  description: string;
  myContribution: string;
  status: Status;
  hasVideo: boolean;
  videoUrl?: string;
  hasDemo: boolean;
  demoUrl?: string;
  symbolGrid: SymbolGrid;
}

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  category: string; // e.g. "Python, DSA"
  description: string;
  status: Status;
  symbolGrid?: SymbolGrid;
}

export type InterestCategory =
  | "Coursework"
  | "Programming Languages"
  | "Software"
  | "Hardware"
  | "Tools"
  | "Non-Technical Interests"
;

export interface InterestGroup {
  name: string;
  id: string;
  category: InterestCategory[];
  items: string[]; // rendered as comma separated
}