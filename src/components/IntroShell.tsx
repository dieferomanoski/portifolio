"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let particles: Particle[] = [];

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const count = Math.min(900, Math.floor((rect.width * rect.height) / 2000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.3 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
      }));
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, rect.width, rect.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 6
        );
        gradient.addColorStop(
          0,
          `rgba(34, 211, 238, ${p.alpha.toFixed(2)})`
        );
        gradient.addColorStop(
          1,
          `rgba(232, 121, 249, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    init();
    render();

    const onResize = () => init();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}

export default function IntroShell({ children }: { children: ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100 fade-in-up"
        }`}
      >
        {children}
      </div>

      {showIntro && (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-[#020617]">
          <div className="pointer-events-auto absolute inset-0">
            <ParticlesCanvas />
          </div>
          <div className="pointer-events-none relative z-10 flex flex-col items-center px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-cyan/80">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
              Your Name
            </h1>
            <p className="mt-3 max-w-md text-sm text-slate-400 sm:text-base">
              Entering a world of neon light, motion, and creative code.
            </p>
            <div className="mt-6 h-[1px] w-32 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          </div>
        </div>
      )}
    </>
  );
}


