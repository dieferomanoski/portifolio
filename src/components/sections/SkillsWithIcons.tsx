"use client";

import { skillsData } from "@/config/skills";
import FadeInText from "@/components/text/FadeInText";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

export default function SkillsWithIcons() {
  const getIcon = (iconName: string) => {
    const allIcons = { ...SiIcons, ...FaIcons } as any;
    const IconComponent = allIcons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4">
            <FadeInText text="Technical Stack" delay={0} />
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-100 mb-4">
            <FadeInText text="Skills & Expertise" delay={200} />
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, secure, and modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${categoryIndex * 0.1}s both`,
              }}
            >
              <div className="border border-slate-800/50 rounded-xl bg-slate-950/40 backdrop-blur-sm p-6 hover:border-slate-700/70 transition-all duration-300 h-full">
                <h3 className="text-sm font-semibold text-slate-200 mb-6 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800/30 hover:border-slate-700/50 hover:bg-slate-800/40 transition-all group/item"
                    >
                      <span className="text-2xl text-slate-400 group-hover/item:scale-110 group-hover/item:text-slate-200 transition-all">
                        {getIcon(skill.icon)}
                      </span>
                      <span className="text-xs text-slate-400 text-center leading-tight font-mono">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
