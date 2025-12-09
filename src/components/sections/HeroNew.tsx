"use client";

import { siteConfig } from "@/config/site";
import AnimatedGradientText from "@/components/effects/AnimatedGradientText";
import SlideInText from "@/components/text/SlideInText";
import FadeInText from "@/components/text/FadeInText";

function DevOrb() {
  return (
    <div className="dev-orb">
      <div className="dev-orb-ring dev-orb-ring--outer" />
      <div className="dev-orb-ring dev-orb-ring--inner" />
      <div className="dev-orb-core">
        <span className="dev-orb-bracket">&lt;/&gt;</span>
        <span className="dev-orb-cursor" />
      </div>
    </div>
  );
}

export default function HeroNew() {
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
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="relative inline-block">
                  <AnimatedGradientText>
                    <span className="leading-tight">
                      {siteConfig.name}
                    </span>
                  </AnimatedGradientText>
                  <span className="pointer-events-none absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
                </span>
              </h1>

              <div className="space-y-2">
                <SlideInText
                  text="Full‑Stack Software Engineer"
                  delay={400}
                  direction="right"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-50 shadow-[0_0_24px_rgba(15,23,42,0.9)] backdrop-blur-md"
                />

                <div className="flex flex-wrap gap-2">
                  <FadeInText
                    text="🌍 Worldwide"
                    delay={600}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-300/85 backdrop-blur-md"
                  />
                  <FadeInText
                    text="🇧🇷 Brazil"
                    delay={700}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-emerald-100/80 backdrop-blur-md"
                  />
                </div>

                <div className="flex flex-col flex-wrap items-start gap-2 text-[0.65rem] sm:text-[0.7rem] my-5">
                  <FadeInText
                    text="◎ Computer Science Bachelor"
                    delay={800}
                    className="inline-flex items-center gap-1.5 rounded-full border-slate-800/70 bg-slate-800/40 px-3 py-1 font-small uppercase tracking-[0.22em] text-slate-400/80 backdrop-blur-md"
                  />
                  <FadeInText
                    text="◎ Cybersecurity Enthusiast"
                    delay={900}
                    className="inline-flex items-center gap-1.5 rounded-full border-slate-800/70 bg-slate-800/40 px-3 py-1 font-small uppercase tracking-[0.22em] text-slate-400/80 backdrop-blur-md"
                  />
                  <FadeInText
                    text="◎ Web3 Developer"
                    delay={1000}
                    className="inline-flex items-center gap-1.5 rounded-full border-slate-800/70 bg-slate-800/40 px-3 py-1 font-small uppercase tracking-[0.22em] text-slate-400/80 backdrop-blur-md"
                  />
                </div>
              </div>
            </div>

            <SlideInText
              text="I'm a developer focused on crafting fast, delightful digital products with React, Next.js, and modern design."
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 font-medium text-slate-100/90 backdrop-blur-md transition hover:border-cyan-500/80 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900">
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3 fill-current">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.08.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 font-medium text-slate-100/90 backdrop-blur-md transition hover:border-cyan-500/80 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-slate-600/80 bg-slate-900">
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3 fill-current">
                      <path d="M3.22 2A1.22 1.22 0 1 1 2 3.22 1.22 1.22 0 0 1 3.22 2ZM2.16 5h2.12v8H2.16Zm4.07 0h2.03v1.09h.03C8.71 5.6 9.6 4.9 10.9 4.9c2.22 0 2.63 1.46 2.63 3.36V13h-2.12V8.82c0-1-.02-2.28-1.39-2.28-1.4 0-1.62 1.09-1.62 2.2V13H6.23Z" />
                    </svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="mx-auto h-64 w-64 rounded-[3rem] border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-900 shadow-[0_0_80px_rgba(6,182,212,0.3)]">
                <div className="relative flex h-full items-center justify-center">
                  <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-cyan-500/60 bg-slate-900/80 shadow-[0_0_40px_rgba(6,182,212,0.5)]">
                    <DevOrb />
                  </div>
                  <div className="absolute inset-4 rounded-[2.5rem] border border-slate-700/60" />
                  <div className="absolute inset-8 rounded-[2rem] border border-cyan-500/20 animate-pulse" />
                </div>
              </div>
              
              {/* Floating particles around the orb */}
              <div className="absolute -top-4 -right-4 h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 h-2 w-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-1/2 -right-6 h-2 w-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
