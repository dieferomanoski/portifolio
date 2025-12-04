export type Project = {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Neon Portfolio",
    description:
      "A dark, neon-themed portfolio experience built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Interactive Dashboard",
    description:
      "Real-time analytics dashboard with smooth animations and responsive design.",
    tech: ["React", "Chart.js", "Node.js"],
    demoUrl: "#",
    codeUrl: "#",
  },
];


