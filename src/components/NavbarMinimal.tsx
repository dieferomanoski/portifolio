"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export default function NavbarMinimal() {
  const [activeHref, setActiveHref] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-2" : "py-4"
    }`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-slate-800/80 bg-slate-950/95 shadow-lg shadow-slate-950/50 px-4 py-2"
            : "border-slate-800/50 bg-slate-950/70 px-6 py-3"
        }`}>
          <a href="#hero" className="text-base font-bold tracking-tight text-slate-100 hover:text-slate-50 transition-colors">
            {siteConfig.name}
          </a>

          <div className="hidden gap-1 sm:flex">
            {siteConfig.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-medium transition-all duration-300 rounded-lg ${
                  activeHref === link.href
                    ? "text-slate-100 bg-slate-800/50"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/30"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-slate-800/80 border border-slate-700/60 px-5 py-2 text-xs font-semibold text-slate-100 transition-all hover:bg-slate-700/80 hover:border-slate-600/70"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
