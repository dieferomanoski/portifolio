"use client";

import { useState } from "react";
import FadeInText from "@/components/text/FadeInText";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Dart", "Go", "SQL", "NoSQL", "Solidity"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Angular", "Flutter", "ShadCN", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Adonis", "ORMs", "REST APIs", "WebSockets"],
  },
  {
    title: "Architecture",
    skills: ["Microservices", "Distributed Systems", "Event-Driven Architecture", "Monorepos (Turborepo)"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS (EC2, S3, SQS, Lambda, RDS, CloudFront)", "CI/CD", "Github Actions", "Linux"],
  },
  {
    title: "Messaging & Queues",
    skills: ["RabbitMQ", "BullMQ"],
  },
  {
    title: "Security & Auth",
    skills: ["Keycloak", "Authentication & Authorization", "Secure-by-design coding", "Cybersecurity fundamentals"],
  },
  {
    title: "Mobile & Deployment",
    skills: ["Flutter mobile apps", "iOS/Android store deployment", "Firebase"],
  },
  {
    title: "Web3 & Blockchain",
    skills: ["Web3 basics", "ERC-20/721", "Blockchain fundamentals"],
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "Github Workflows"],
  },
];

export default function SkillsSectionMinimal() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4">
            <FadeInText text="Technical Stack" delay={0} />
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-100">
            <FadeInText text="Skills & Expertise" delay={200} />
          </h2>
        </div>

        <div className="space-y-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="border border-slate-800/50 rounded-lg bg-slate-950/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-slate-700/70"
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors hover:bg-slate-900/30"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 w-8">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {category.title}
                  </span>
                  <span className="text-xs text-slate-500">
                    ({category.skills.length})
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    openCategory === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCategory === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-4 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-md bg-slate-900/60 text-slate-300 border border-slate-800/50 font-mono hover:border-slate-700 hover:bg-slate-800/60 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
