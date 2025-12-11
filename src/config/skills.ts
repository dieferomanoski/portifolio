export interface Skill {
  name: string;
  icon: string; // Icon name from react-icons
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Icon names from react-icons (using Si prefix for Simple Icons, Fa for Font Awesome)
export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: "SiTypescript", category: "Languages" },
      { name: "JavaScript", icon: "SiJavascript", category: "Languages" },
      { name: "Dart", icon: "SiDart", category: "Languages" },
      { name: "Go", icon: "SiGo", category: "Languages" },
      { name: "SQL", icon: "SiPostgresql", category: "Languages" },
      { name: "NoSQL", icon: "SiMongodb", category: "Languages" },
      { name: "Solidity", icon: "SiSolidity", category: "Languages" },
      { name: "Python", icon: "SiPython", category: "Languages" },
    ],
  },
  {
    title: "Frontend Web",
    skills: [
      { name: "React", icon: "SiReact", category: "Frontend" },
      { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
      { name: "Angular", icon: "SiAngular", category: "Frontend" },
      { name: "UI Libraries", icon: "FaLayerGroup", category: "Frontend" },
      { name: "TailwindCSS", icon: "SiTailwindcss", category: "Frontend" },
    ],
  },
  {
    title: "Mobile Apps",
    skills: [
      { name: "Flutter", icon: "SiFlutter", category: "Mobile" },
      { name: "React Native", icon: "SiReact", category: "Mobile" },
      { name: "iOS/Android", icon: "FaMobileAlt", category: "Mobile" },
      { name: "Firebase", icon: "SiFirebase", category: "Mobile" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", category: "Backend" },
      { name: "NestJS", icon: "SiNestjs", category: "Backend" },
      { name: "Adonis", icon: "SiAdonisjs", category: "Backend" },
      { name: "ORMs", icon: "SiPrisma", category: "Backend" },
      { name: "REST APIs", icon: "FaServer", category: "Backend" },
      { name: "RabbitMQ", icon: "SiRabbitmq", category: "Backend" },
      { name: "Redis", icon: "SiRedis", category: "Backend" },
      { name: "BullMQ", icon: "SiRedis", category: "Backend" },
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      {
        name: "Microservices",
        icon: "FaProjectDiagram",
        category: "Architecture",
      },
      { name: "Event-Driven", icon: "FaBolt", category: "Architecture" },
      { name: "Monorepos", icon: "SiTurborepo", category: "Architecture" },
      { name: "MVC/MVVM", icon: "FaCubes", category: "Architecture" },
      { name: "TDD", icon: "FaCheckCircle", category: "Architecture" },
      {
        name: "Design Patterns",
        icon: "FaLayerGroup",
        category: "Architecture",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: "SiDocker", category: "DevOps" },
      { name: "Vercel", icon: "SiVercel", category: "DevOps" },
      { name: "AWS", icon: "SiAmazonaws", category: "DevOps" },
      { name: "CI/CD", icon: "FaCodeBranch", category: "DevOps" },
      { name: "Github Actions", icon: "SiGithubactions", category: "DevOps" },
      { name: "Linux", icon: "SiLinux", category: "DevOps" },
    ],
  },
  {
    title: "Security & Auth",
    skills: [
      { name: "Keycloak", icon: "FaKey", category: "Security" },
      { name: "Auth & OAuth", icon: "FaShieldAlt", category: "Security" },
      { name: "Secure-by-design", icon: "FaLock", category: "Security" },
    ],
  },
  {
    title: "Web3 & Blockchain",
    skills: [
      { name: "Web3", icon: "SiWeb3dotjs", category: "Web3" },
      { name: "Ethereum", icon: "SiEthereum", category: "Web3" },
      { name: "Solidity", icon: "SiSolidity", category: "Web3" },
      { name: "ERC-20/721", icon: "SiEthereum", category: "Web3" },
      { name: "Smart Contracts", icon: "FaFileContract", category: "Web3" },
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: "SiGit", category: "Tools" },
      { name: "Github", icon: "SiGithub", category: "Tools" },
      { name: "Github Workflows", icon: "SiGithubactions", category: "Tools" },
    ],
  },
];
