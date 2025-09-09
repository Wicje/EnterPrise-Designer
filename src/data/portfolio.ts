import type { PortfolioItem } from "../types/portfolio";

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "Project Alpha",
    desc: "Enterprise rebrand + system",
    img: ["/portfolio1.jpg", "/portfolio1b.jpg"], // multiple images
  },
  {
    id: "p2",
    title: "Project Beta",
    desc: "Global logo suite",
    img: ["/portfolio2.jpg"], // can still be just one
  },
  {
    id: "p3",
    title: "Project Gamma",
    desc: "Product identity & tokens",
    img: ["/portfolio3.jpg", "/portfolio3b.jpg"],
  },
  {
    id: "p4",
    title: "Project Delta",
    desc: "Design system integration",
    img: ["/portfolio4.jpg"],
  },
];
