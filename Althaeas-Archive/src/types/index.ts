export type Status = "in-progress" | "complete";

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
  hasDemo: boolean;
}

export interface Bookmark {
  id: string;
  title: string;
  category: string; // e.g. "Python, DSA"
  description: string;
  status: Status;
}

export type InterestCategory =
  | "Coursework"
  | "Programming Languages"
  | "Web Development"
  | "Development Tools"
  | "Hardware & Embedded"
  | "Hardware Dev Languages & Tools"
  | "Non-Technical Interests";

export interface InterestGroup {
  id: string;
  category: InterestCategory;
  items: string[]; // rendered as comma separated, or map individually if you want tags
}
