import type { Bookmark } from "../types";

export const bookmarks: Bookmark[] = [
  {
    id: "neetcode",
    title: "Neetcode Practice",
    category: "Python, DSA",
    description:
      "Currently improving my Python skills and trying to solidify DSA concepts with a Neetcode roadmap.",
    status: "in-progress",
  },
  {
    id: "hail-mary",
    title: "Project Hail Mary",
    category: "Non-Technical, Books I'm Currently Reading, Science Fiction",
    description:
      "A personal, non-technical goal I am working on is reading more. My current read is Project Hail Mary by Andy Weir.",
    status: "in-progress",
  },
  {
    id: "star-blanket",
    title: "Star Blanket",
    category: "Non-Technical, Crochet",
    description:
      'Currently working on a crocheted 8-point blanket following Betty McKnit\'s "6-Day Star Blanket" pattern.',
    status: "in-progress",
  },
];
