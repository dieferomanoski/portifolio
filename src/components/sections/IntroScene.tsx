"use client";

import { useEffect, useRef, useState } from "react";

type RingParticle = {
  angle: number;
};

const PARTICLE_COUNT = 900;

function TechCircleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: RingParticle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      angle: (i / PARTICLE_COUNT) * Math.PI * 2,
    }));

    const handleBoost = () => {
      setEnergy((prev) => Math.min(1.8, prev + 0.35));
    };

    const handlePointerMove = () => handleBoost();
    window.addEventListener("click", handleBoost);
    window.addEventListener("scroll", handleBoost);
    window.addEventListener("pointermove", handlePointerMove);

    let frame: number;
    let t = 0;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, rect.width, rect.height);

      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const baseRadius = Math.min(rect.width, rect.height) * 0.26;

      const currentEnergy = energy;

      particles.forEach((p, index) => {
        const noise =
          Math.sin(p.angle * 8 + t * 1.3) * 6 +
          Math.cos(p.angle * 3 - t * 0.9) * 4;

        const wave =
          Math.sin(t * 2 + index * 0.025) *
          (8 + currentEnergy * 22);

        const radius = baseRadius + noise + wave;
        const x = cx + Math.cos(p.angle) * radius;
        const y = cy + Math.sin(p.angle) * radius;

        const size = 1 + Math.sin(t * 3 + p.angle * 10) * 0.6;
        const alpha = 0.18 + Math.sin(t * 2 + p.angle * 4) * 0.12;

        const grd = ctx.createRadialGradient(x, y, 0, x, y, size * 5);
        grd.addColorStop(0, `rgba(56,189,248,${alpha.toFixed(2)})`);
        grd.addColorStop(1, "rgba(8,47,73,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // central core
      const coreRadius = baseRadius * 0.3 + Math.sin(t * 2) * 4;
      const coreGradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        coreRadius * 3
      );
      coreGradient.addColorStop(0, "rgba(125, 211, 252, 0.6)");
      coreGradient.addColorStop(0.4, "rgba(56,189,248,0.2)");
      coreGradient.addColorStop(1, "rgba(15,23,42,0)");
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius * 3, 0, Math.PI * 2);
      ctx.fill();

      // slight trailing lines
      ctx.strokeStyle = "rgba(56,189,248,0.18)";
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      particles.forEach((p, index) => {
        if (index % 18 !== 0) return;
        const r1 = baseRadius + Math.sin(t * 2 + index) * 10;
        const r2 = baseRadius + Math.cos(t * 2 + index) * 18;
        const x1 = cx + Math.cos(p.angle) * r1;
        const y1 = cy + Math.sin(p.angle) * r1;
        const x2 = cx + Math.cos(p.angle) * r2;
        const y2 = cy + Math.sin(p.angle) * r2;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      });
      ctx.stroke();

      t += 0.015;
      setEnergy((prev) => Math.max(0, prev - 0.015));
      frame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("click", handleBoost);
      window.removeEventListener("scroll", handleBoost);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [energy]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}

export default function IntroScene() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden rounded-3xl border border-sky-900/50 bg-slate-950/60 px-6 py-16 shadow-[0_0_80px_rgba(15,23,42,0.9)]">
      <div className="pointer-events-none absolute inset-0">
        <TechCircleCanvas />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-300/80">
          Systems · Interfaces · Portals
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-sky-50 sm:text-4xl md:text-5xl">
          A different way to enter my work
        </h1>
        <p className="mt-3 max-w-xl text-sm text-sky-200/80 sm:text-base">
          An interactive field of particles as a gateway into who I am, what I
          build, and how I think about digital experiences.
        </p>
        <div className="mt-8 flex items-center gap-3 text-xs text-sky-300/80">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          <span>Move, scroll or click to disturb the field.</span>
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}


