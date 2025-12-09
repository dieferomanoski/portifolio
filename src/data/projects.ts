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
    demoUrl: "dieferomanoski.dev",
    codeUrl: "https://github.com/dieferomanoski/portifolio",
  },
];
