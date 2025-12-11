"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { FiChevronDown, FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectsCollapsible() {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([0]);

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 bg-slate-900/50 border border-slate-800/50 rounded-full px-4 py-2">
              Recent Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Click on any project to see details and explore what I've built
          </p>
        </div>

        {/* Collapsible Projects */}
        <div className="space-y-4">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects.includes(index);
            return (
              <div
                key={project.title}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-slate-700/0 via-slate-600/50 to-slate-700/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative border border-slate-800/50 rounded-2xl bg-slate-950/80 backdrop-blur-sm overflow-hidden">
                  {/* Header - Always visible */}
                  <button
                    onClick={() => toggleProject(index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-900/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-slate-300 font-bold text-lg shadow-lg">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-slate-50 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 items-center">
                          {project.demoUrl && (
                            <span className="flex items-center gap-1 text-xs text-green-400">
                              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                              Live
                            </span>
                          )}
                          {project.codeUrl ? (
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                              <FiGithub className="w-3 h-3" />
                              Open Source
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                              <FiGithub className="w-3 h-3" />
                              In progress
                            </span>
                          )}
                        </div>
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
                    <div className="px-6 pb-6 space-y-4">
                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/60 text-slate-300 border border-slate-800/50 font-mono hover:border-slate-700 hover:bg-slate-800/60 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-2">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-200 text-sm font-medium hover:bg-slate-700/60 hover:border-slate-600/70 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800/50 text-slate-400 text-sm font-medium hover:text-slate-200 hover:bg-slate-800/60 hover:border-slate-700/70 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiGithub className="w-4 h-4" />
                            Source Code
                          </a>
                        )}
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
      `}</style>
    </div>
  );
}
