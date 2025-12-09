"use client";

import MagicBento, { BentoItem } from "@/components/ui/MagicBento";
import ElectricBorder from "@/components/ui/ElectricBorder";
import GlitchText from "@/components/text/GlitchText";
import WaveText from "@/components/text/WaveText";

const skills = [
  { name: "React", icon: "⚛️", level: "Expert", color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", icon: "▲", level: "Expert", color: "from-slate-100 to-slate-400" },
  { name: "TypeScript", icon: "TS", level: "Advanced", color: "from-blue-500 to-blue-600" },
  { name: "Node.js", icon: "◆", level: "Expert", color: "from-green-500 to-emerald-600" },
  { name: "Tailwind CSS", icon: "🎨", level: "Expert", color: "from-cyan-400 to-cyan-600" },
  { name: "Express", icon: "🚀", level: "Advanced", color: "from-slate-400 to-slate-600" },
  { name: "MongoDB", icon: "🍃", level: "Advanced", color: "from-green-600 to-green-700" },
  { name: "PostgreSQL", icon: "🐘", level: "Intermediate", color: "from-blue-600 to-indigo-600" },
  { name: "Docker", icon: "🐳", level: "Intermediate", color: "from-blue-500 to-cyan-500" },
  { name: "Git", icon: "⎇", level: "Expert", color: "from-orange-500 to-red-500" },
  { name: "REST APIs", icon: "🔌", level: "Expert", color: "from-purple-500 to-pink-500" },
  { name: "GraphQL", icon: "◈", level: "Intermediate", color: "from-pink-500 to-rose-500" },
];

export default function SkillsSectionNew() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 mb-4">
            <GlitchText text="Technical Stack" />
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100">
            <WaveText text="Skills & Expertise" />
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <MagicBento>
          {skills.map((skill, index) => (
            <BentoItem key={skill.name} span={index % 5 === 0 ? "2" : "1"}>
              <ElectricBorder className="h-full">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{skill.icon}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                        {skill.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      {skill.name}
                    </h3>
                  </div>
                  
                  {/* Skill level bar */}
                  <div className="mt-4">
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{
                          width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "80%" : "60%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </BentoItem>
          ))}
        </MagicBento>
      </div>
    </div>
  );
}
