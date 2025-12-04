"use client";

import { useEffect, useRef } from "react";

type Particle = {
  angle: number;
  radius: number;
  offset: number;
};

export default function BlackHolePortal({
  onFinished,
}: {
  onFinished: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const triggeredRef = useRef(false);
  const finishedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const total = 1400;
    for (let i = 0; i < total; i++) {
      const angle = (i / total) * Math.PI * 2;
      const radius = 90 + Math.random() * 40;
      const offset = Math.random() * Math.PI * 2;
      particles.push({ angle, radius, offset });
    }

    const trigger = () => {
      if (!triggeredRef.current) {
        triggeredRef.current = true;
        startTimeRef.current = performance.now();
      }
    };

    const autoTimer = window.setTimeout(trigger, 1500);
    const handleClick = () => trigger();
    const handleScroll = () => trigger();
    const handleMove = () => trigger();

    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("pointermove", handleMove);

    let frame: number;

    const render = (time: number) => {
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

      const elapsed =
        triggeredRef.current && startTimeRef.current != null
          ? (time - startTimeRef.current) / 1800
          : 0;
      const progress = Math.min(Math.max(elapsed, 0), 1);

      particles.forEach((p, i) => {
        const baseR = p.radius;
        const swirl = Math.sin(time * 0.002 + p.offset) * 4;

        let r = baseR + swirl;
        if (triggeredRef.current) {
          const collapse = baseR * (1 - progress * 1.1);
          const dust = (i % 5 === 0 ? 1 : 0.6) * progress * 22;
          r = Math.max(8, collapse) + dust;
        }

        const angle =
          p.angle +
          Math.sin(time * 0.0007 + p.offset) * 0.08 +
          (triggeredRef.current ? progress * 1.8 : 0);

        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r * 0.9;

        const size = 0.7 + Math.sin(time * 0.003 + p.offset * 4) * 0.4;
        const alphaBase = 0.2 + Math.cos(time * 0.002 + p.offset * 5) * 0.15;
        const alpha = triggeredRef.current
          ? alphaBase * (1 - progress * 0.4)
          : alphaBase;

        ctx.fillStyle = `rgba(250,250,250,${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(x, y, size * (triggeredRef.current ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fill();
      });

      // central singularity glow
      const maxRadius = 120;
      const inner = triggeredRef.current ? progress : 0;
      const radius =
        (1 - inner) * maxRadius * 0.4 + inner * maxRadius * 1.1;

      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        radius
      );
      gradient.addColorStop(0, "rgba(250,250,250,0.9)");
      gradient.addColorStop(0.4, "rgba(250,250,250,0.15)");
      gradient.addColorStop(1, "rgba(15,23,42,0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      if (triggeredRef.current && !finishedRef.current && progress >= 1) {
        finishedRef.current = true;
        window.setTimeout(onFinished, 400);
      } else {
        frame = requestAnimationFrame(render);
      }
    };

    frame = requestAnimationFrame(render);

    return () => {
      window.clearTimeout(autoTimer);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-40 bg-black">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}


