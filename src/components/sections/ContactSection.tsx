"use client";

import { siteConfig } from "@/config/site";
import AnimatedBorderCard from "@/components/effects/AnimatedBorderCard";
import ShimmerButton from "@/components/effects/ShimmerButton";

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

      <AnimatedBorderCard className="mt-6">
        <div className="p-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Email
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-flex items-center text-sm font-semibold text-neon-cyan transition hover:text-neon-magenta"
          >
            {siteConfig.email}
          </a>
        </div>
      </AnimatedBorderCard>

      <div className="mt-6">
        <ShimmerButton href={`mailto:${siteConfig.email}`}>
          Send me an email →
        </ShimmerButton>
      </div>
    </div>
  );
}
