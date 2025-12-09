"use client";

import GlowCard from "@/components/ui/GlowCard";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Tools: ["Git", "GitHub", "Figma", "VS Code"],
};

export default function SkillsSection() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan/80">
        Skills
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-100">
        What I work with
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <GlowCard key={group} className="p-5">
            <h3 className="text-sm font-semibold text-slate-100">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}


