"use client";

import { useState } from "react";
import { skillsData } from "@/config/skills";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { 
  FaCode, 
  FaDesktop, 
  FaMobileAlt, 
  FaServer, 
  FaProjectDiagram, 
  FaCloud, 
  FaShieldAlt, 
  FaEthereum, 
  FaGitAlt 
} from "react-icons/fa";

export default function SkillsCollapsible() {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([0]);

  const getIcon = (iconName: string) => {
    const allIcons = { ...SiIcons, ...FaIcons } as any;
    const IconComponent = allIcons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const getCategoryIcon = (title: string) => {
    const iconMap: Record<string, any> = {
      "Languages": FaCode,
      "Frontend Web": FaDesktop,
      "Mobile Apps": FaMobileAlt,
      "Backend & APIs": FaServer,
      "Architecture & Patterns": FaProjectDiagram,
      "DevOps & Cloud": FaCloud,
      "Security & Auth": FaShieldAlt,
      "Web3 & Blockchain": FaEthereum,
      "Tools & Version Control": FaGitAlt,
    };
    const Icon = iconMap[title];
    return Icon ? <Icon /> : <FaCode />;
  };

  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 bg-slate-900/50 border border-slate-800/50 rounded-full px-4 py-2">
              Technical Stack
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Click on any category to explore the technologies I work with
          </p>
        </div>

        {/* Collapsible Categories */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {skillsData.map((category, index) => {
            const isExpanded = expandedCategories.includes(index);
            return (
              <div
                key={category.title}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-slate-700/0 via-slate-600/50 to-slate-700/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative border border-slate-800/50 rounded-2xl bg-slate-950/80 backdrop-blur-sm overflow-hidden">
                  {/* Header - Always visible */}
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-900/40 transition-all duration-300 group/btn"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 text-slate-400 text-xl group-hover/btn:text-slate-200 group-hover/btn:border-slate-600/70 transition-all duration-300">
                        {getCategoryIcon(category.title)}
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-slate-100 mb-1 group-hover/btn:text-slate-50 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>
                    <FiChevronDown
                      className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Content - Expandable */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skill.name}
                            className="group/skill relative"
                            style={{
                              animation: isExpanded
                                ? `slideIn 0.4s ease-out ${skillIndex * 0.05}s both`
                                : "none",
                            }}
                          >
                            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-900/40 border border-slate-800/30 hover:border-slate-700/60 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                              <div className="text-2xl text-slate-400 group-hover/skill:text-slate-200 group-hover/skill:scale-110 transition-all duration-300">
                                {getIcon(skill.icon)}
                              </div>
                              <span className="text-xs text-slate-400 group-hover/skill:text-slate-300 text-center leading-tight font-mono transition-colors">
                                {skill.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
