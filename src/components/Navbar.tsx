"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const handler = () => {
      const sections = siteConfig.nav.map((item) =>
        document.querySelector<HTMLElement>(item.href)
      );
      let current = "#hero";
      sections.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
          current = siteConfig.nav[index].href;
        }
      });
      setActiveHref(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-20">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass-card flex items-center justify-between rounded-2xl px-4 py-3 shadow-lg shadow-slate-950/60">
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </span>
          <div className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            {siteConfig.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors ${
                  activeHref === link.href ? "text-white" : "hover:text-white"
                }`}
              >
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1px] origin-center transform bg-white transition scale-x-0 ${
                    activeHref === link.href ? "scale-x-100" : ""
                  }`}
                />
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-neon-cyan sm:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}


