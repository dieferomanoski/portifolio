"use client";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass-card flex items-center justify-between rounded-2xl px-4 py-3 shadow-lg shadow-slate-950/60">
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              Your Name
            </span>
          </span>
          <div className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
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


