export default function PortalSection() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/50 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.35),_transparent_60%)] shadow-[0_0_120px_rgba(56,189,248,0.45)]" />
        <div className="animate-spin-slow absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-900/60" />
        <div className="animate-spin-slower absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          Portal
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
          Step through into the actual work
        </h2>
        <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
          Scroll through the portal to see selected projects, skills, and how to
          reach me. The rest of this page is minimal on purpose — the visual
          noise stays here, the content lives beyond it.
        </p>
        <a
          href="#hero"
          className="mt-8 inline-flex items-center rounded-full border border-sky-500/60 bg-slate-950/80 px-5 py-2 text-xs font-semibold text-sky-200 shadow-[0_0_40px_rgba(8,47,73,0.7)] transition hover:border-sky-400 hover:text-sky-100"
        >
          Enter portfolio
        </a>
      </div>
    </section>
  );
}


