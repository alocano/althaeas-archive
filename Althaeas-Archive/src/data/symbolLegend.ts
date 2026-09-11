import type { SymbolLegendEntry } from "../types";

const base = import.meta.env.BASE_URL;
// grid layout: top-left = Software, top-right = Hardware,
// bottom-left = Demo Available, bottom-right = Complete/Incomplete.
// icons in public/symbols
export const symbolLegend: SymbolLegendEntry[] = [
  {
    image: `${base}symbols/Software.svg`,
    label: "Software",
    description: "This project has a software component!",
  },
  {
    image: `${base}symbols/Hardware.svg`,
    label: "Hardware",
    description: "This project has a hardware component!",
  },
  {
    image: `${base}symbols/Demo.svg`,
    label: "Demo Available",
    description: "A video/live demo and/or GitHub repository is available (Check tags for link/s).",
  },
  {
    image: `${base}symbols/Complete.svg`,
    label: "Complete",
    description: "This project is finished.",
  },
  {
    image: `${base}symbols/Incomplete.svg`,
    label: "Incomplete",
    description: "This project is still in progress/unfulfilled.",
  },
  {
    image:"",
    label: "",
    description: "This work's status is unknown/has not been updated recently or does not apply (e.g. no hardware)."
  }
];