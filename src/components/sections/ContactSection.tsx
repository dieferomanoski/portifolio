"use client";

export default function ContactSection() {
  return (
    <div className="max-w-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan/80">
        Contact
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-100">
        Let&apos;s build something
      </h2>
      <p className="mt-3 text-sm text-slate-400">
        The fastest way to reach me is by email. I&apos;m always open to new
        projects, collaborations, or just saying hi.
      </p>

      <div className="glass-card mt-6 rounded-2xl p-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Email
        </p>
        <a
          href="mailto:your-email@example.com"
          className="mt-2 inline-flex items-center text-sm font-semibold text-neon-cyan transition hover:text-neon-magenta"
        >
          your-email@example.com
        </a>
      </div>
    </div>
  );
}


