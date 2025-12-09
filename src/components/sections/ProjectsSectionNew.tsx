"use client";

import { projects } from "@/data/projects";
import GlowCard from "@/components/ui/GlowCard";
import TypewriterText from "@/components/text/TypewriterText";
import SlideInText from "@/components/text/SlideInText";

export default function ProjectsSectionNew() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 mb-4">
            <TypewriterText text="Recent Work" delay={0} speed={80} />
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            <SlideInText text="Featured" delay={200} direction="left" className="mr-4" />
            <SlideInText text="Projects" delay={400} direction="right" />
          </h2>
          <SlideInText
            text="A collection of my favorite projects that showcase my skills"
            delay={600}
            direction="up"
            className="block mt-4 text-slate-400 max-w-2xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlowCard
              key={project.title}
              className="group p-6 transition-all duration-300 hover:scale-105"
              glowColor={index % 3 === 0 ? "rgba(6, 182, 212, 0.4)" : index % 3 === 1 ? "rgba(147, 51, 234, 0.4)" : "rgba(59, 130, 246, 0.4)"}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Project icon/number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="flex gap-1">
                      {project.demoUrl && (
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      )}
                      {project.codeUrl && (
                        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-slate-800/60 text-cyan-300 border border-cyan-500/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 text-xs font-medium pt-4 border-t border-slate-800">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <span>Source Code</span>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
