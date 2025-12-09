"use client";

import { siteConfig } from "@/config/site";
import SlideInText from "@/components/text/SlideInText";
import FadeInText from "@/components/text/FadeInText";
import HypnoticOrb from "@/components/AnimeCharacter";
import { FaCode } from "react-icons/fa";

export default function HeroMinimal() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 space-y-8">
            <FadeInText
              text="Portfolio"
              delay={200}
              className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-slate-400/90 backdrop-blur-md"
            />

            <div className="space-y-5">
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl group/name">
                <span className="relative inline-block text-slate-100 cursor-pointer transition-all duration-300 group-hover/name:text-transparent group-hover/name:bg-gradient-to-r group-hover/name:from-cyan-400 group-hover/name:via-blue-400 group-hover/name:to-cyan-400 group-hover/name:bg-clip-text">
                  {siteConfig.name}
                  <span className="absolute -inset-2 bg-cyan-500/20 blur-2xl opacity-0 group-hover/name:opacity-100 transition-opacity duration-500 -z-10" />
                </span>
              </h1>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaCode className="text-cyan-400 text-sm" />
                  <SlideInText
                    text="Full‑Stack Software Engineer"
                    delay={400}
                    direction="right"
                    className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300"
                  />
                </div>

                <div className="flex flex-wrap gap-2 my-8">
                  <FadeInText
                    text="🌍 Worldwide"
                    delay={600}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-300/85 backdrop-blur-md shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] transition-shadow"
                  />
                  <FadeInText
                    text="🇧🇷 Brazil"
                    delay={700}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-800/70 bg-slate-900/70 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-300/85 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-shadow"
                  />
                </div>

                <div className="flex flex-col flex-wrap items-start gap-2 text-[0.65rem] sm:text-[0.7rem] mt-6">
                  <FadeInText
                    text="◎ Computer Science Bachelor"
                    delay={800}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-950/60 px-3 py-2 font-medium uppercase tracking-[0.2em] text-slate-400 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  />
                  <FadeInText
                    text="◎ Cybersecurity Enthusiast"
                    delay={900}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-950/60 px-3 py-2 font-medium uppercase tracking-[0.2em] text-slate-400 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  />
                  <FadeInText
                    text="◎ Web3 Developer"
                    delay={1000}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-950/60 px-3 py-2 font-medium uppercase tracking-[0.2em] text-slate-400 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  />
                </div>
              </div>
            </div>

            <SlideInText
              text="Building scalable systems, secure applications, and innovative solutions across web, mobile, and blockchain."
              delay={1100}
              direction="up"
              className="block max-w-xl text-sm text-slate-400 sm:text-base"
            />

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-[0.7rem] text-slate-400">
                <FadeInText
                  text="Also on"
                  delay={1200}
                  className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500"
                />
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 font-medium text-slate-100/90 backdrop-blur-md transition hover:border-slate-700/80 hover:bg-slate-900/60"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900">
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.08.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 font-medium text-slate-100/90 backdrop-blur-md transition hover:border-slate-700/80 hover:bg-slate-900/60"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-slate-600/80 bg-slate-900">
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="h-3 w-3 fill-current"
                    >
                      <path d="M3.22 2A1.22 1.22 0 1 1 2 3.22 1.22 1.22 0 0 1 3.22 2ZM2.16 5h2.12v8H2.16Zm4.07 0h2.03v1.09h.03C8.71 5.6 9.6 4.9 10.9 4.9c2.22 0 2.63 1.46 2.63 3.36V13h-2.12V8.82c0-1-.02-2.28-1.39-2.28-1.4 0-1.62 1.09-1.62 2.2V13H6.23Z" />
                    </svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative group/orb cursor-pointer">
              <div className="mx-auto h-96 w-96 rounded-full border border-slate-700/30 bg-gradient-to-br from-slate-950/80 via-slate-900/40 to-slate-950/80 shadow-[0_0_80px_rgba(96,165,250,0.3)] backdrop-blur-sm p-8 transition-all duration-500 group-hover/orb:shadow-[0_0_120px_rgba(34,211,238,0.6)] group-hover/orb:scale-105 group-hover/orb:border-cyan-500/50">
                <div className="relative flex h-full items-center justify-center">
                  <HypnoticOrb />
                </div>
              </div>

              {/* Expanding rings on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/0 group-hover/orb:border-cyan-500/30 transition-all duration-700 group-hover/orb:scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/0 group-hover/orb:border-cyan-500/20 transition-all duration-1000 group-hover/orb:scale-125" />
              <div className="absolute inset-0 rounded-full border border-cyan-500/0 group-hover/orb:border-cyan-500/10 transition-all duration-1200 group-hover/orb:scale-140" />

              {/* Floating particles around orb */}
              <div
                className="absolute top-10 right-10 w-2 h-2 rounded-full bg-cyan-400 animate-ping group-hover/orb:bg-cyan-300 group-hover/orb:scale-150 transition-all"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-cyan-400 animate-ping group-hover/orb:bg-cyan-300 group-hover/orb:scale-150 transition-all"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-blue-400 animate-ping group-hover/orb:bg-cyan-300 group-hover/orb:scale-150 transition-all"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
