export type Project = {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Token Craft",
    description:
      "A WebApp Saas to create smart contracts with multi-chain support. (Tokens & NFTs) ",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Solidity",
      "Solana",
      "Rust",
      "Blockchain",
      "Web3",
    ],
    demoUrl: "token-craft-rust.vercel.app",
  },
  {
    title: "Neon Portfolio",
    description:
      "A dark, neon-themed portfolio experience built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "dieferomanoski.dev",
    codeUrl: "https://github.com/dieferomanoski/portifolio",
  },
];
