"use client";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-center">
      <div className="flex-1 space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300/80">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-slate-100">Your Name</span>
          <span className="mt-2 block bg-gradient-to-r from-white via-zinc-500 to-white bg-clip-text text-transparent">
            Building immersive web experiences.
          </span>
        </h1>
        <p className="max-w-xl text-sm text-slate-400 sm:text-base">
          I&apos;m a developer focused on crafting fast, delightful digital
          products with React, Next.js, and modern design.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-white/95 px-6 py-2 text-sm font-semibold text-slate-950 shadow-neon-cyan transition hover:bg-white"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-2 text-sm font-medium text-slate-100 backdrop-blur-md transition hover:border-white/80 hover:text-white"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="flex-1">
        <div className="mx-auto h-52 w-52 rounded-[2.5rem] border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-900 shadow-[0_0_60px_rgba(250,250,250,0.4)]">
          <div className="relative flex h-full items-center justify-center">
            <div className="h-28 w-28 rounded-full border border-white/60 bg-slate-900/80 shadow-neon-cyan" />
            <div className="absolute inset-4 rounded-[2rem] border border-slate-700/60" />
          </div>
        </div>
      </div>
    </div>
  );
}


