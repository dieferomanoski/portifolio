"use client";

import { useEffect, useRef } from "react";

type Particle = {
  angle: number;
  radius: number;
  layer: number;
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
    const total = 50000;
    for (let i = 0; i < total; i++) {
      const angle = (i / total) * Math.PI * 2;
      const baseLayer = i % 10; // multiple depth layers
      const radius =
        300 +
        baseLayer * 20 +
        Math.random() * 28 +
        (baseLayer === 0 ? 0 : Math.random() * 20);
      const offset = Math.random() * Math.PI * 2;
      particles.push({ angle, radius, layer: baseLayer, offset });
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

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // deep space background with subtle blue/purple nebula
      const bgGradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.max(rect.width, rect.height) * 0.8
      );
      bgGradient.addColorStop(0, "rgba(15,23,42,1)");
      bgGradient.addColorStop(0.5, "rgba(15,23,42,0.96)");
      bgGradient.addColorStop(1, "rgba(2,6,23,1)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      const elapsed =
        triggeredRef.current && startTimeRef.current != null
          ? (time - startTimeRef.current) / 2000 // Slow down the animation
          : 0;
      const progress = Math.min(Math.max(elapsed, 0), 1);
      const easedProgress = progress * progress; // Ease-in for acceleration

      const zoom =
        1 +
        Math.sin(time * 0.0005) * 0.1 + // Slower, subtler zoom
        (triggeredRef.current ? easedProgress * 0.8 : 0);

      particles.forEach((p, i) => {
        const layerFactor = 1 + p.layer * 0.2;
        const swirl =
          Math.sin(time * 0.0015 * (1 / layerFactor) + p.offset) *
            (3 + p.layer * 1.5) +
          Math.cos(time * 0.001 * (1 / layerFactor) + p.offset * 2) *
            (2 + p.layer * 1.2);

        let r = (p.radius + swirl) * zoom;
        if (triggeredRef.current) {
          const collapse = p.radius * (1 - easedProgress * 1.5);
          const dust = (i % 5 === 0 ? 1.8 : 0.9) * easedProgress * 30;
          r = Math.max(4, collapse) * zoom + dust;
        }

        const angle =
          p.angle +
          Math.sin(time * 0.0005 + p.offset) * (0.05 + p.layer * 0.01) +
          (triggeredRef.current
            ? easedProgress * (1.5 + p.layer * 0.6)
            : 0);

        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r * (0.85 + p.layer * 0.03);

        const size =
          (0.6 +
            Math.sin(time * 0.002 + p.offset * 4) * 0.3 +
            p.layer * 0.1) /
          layerFactor; // Smaller for distant layers
        const alphaBase =
          (0.2 +
            Math.cos(time * 0.0015 + p.offset * 5) * 0.15 +
            p.layer * 0.03) /
          layerFactor; // Dimmer for distant layers
        const alpha = triggeredRef.current
          ? alphaBase * (1 - progress * 0.5)
          : alphaBase;

        // Spaghettification effect
        let stretchX = 1;
        let stretchY = 1;
        if (triggeredRef.current && r < 200) {
          const proximity = 1 - r / 200;
          stretchX = 1 + proximity * 10 * easedProgress;
          stretchY = 1 - proximity * 0.9;
        }

        // Color based on layer and proximity to center
        let color: string;
        const dynamicAlpha = (alpha * Math.max(0, 1 - r / 800)).toFixed(2);
        if (p.layer < 2) {
          color = `rgba(230, 230, 255, ${dynamicAlpha})`; // Bright white/lavender core
        } else if (p.layer < 5) {
          color = `rgba(192, 132, 252, ${dynamicAlpha})`; // Purple
        } else {
          color = `rgba(56, 189, 248, ${dynamicAlpha})`; // Cyan/Blue
        }

        ctx.fillStyle = color;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.scale(stretchY * size, stretchX * size);
        ctx.beginPath();
        ctx.arc(0, 0, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // central singularity glow - more dynamic
      const singularityPulse = 0.5 + Math.sin(time * 0.005) * 0.5;
      const maxRadius = 160;
      const inner = triggeredRef.current ? progress : 0;
      const radius =
        (1 - inner) * maxRadius * 0.3 +
        inner * (maxRadius + singularityPulse * 20);

      const gradientCore = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        radius
      );
      gradientCore.addColorStop(0, `rgba(255, 255, 255, ${0.98 * (1 - progress) + 0.1})`);
      gradientCore.addColorStop(0.1, "rgba(248,250,252,0.9)");
      gradientCore.addColorStop(0.3, "rgba(192, 132, 252, 0.6)");
      gradientCore.addColorStop(0.6, "rgba(56, 189, 248, 0.2)");
      gradientCore.addColorStop(1, "rgba(15,23,42,0)");

      ctx.fillStyle = gradientCore;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // subtle inner ring hints, more chaotic
      ctx.strokeStyle = "rgba(56,189,248,0.2)";
      ctx.lineWidth = 1.5;
      const ringCount = 4;
      for (let i = 0; i < ringCount; i++) {
        const ringR =
          (radius * 0.3 + i * 12) *
          (triggeredRef.current ? 1 - progress * 0.4 : 1);
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          ringR,
          ringR * 0.6,
          time * (0.0003 + i * 0.00005) + i * 0.9,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      const overlayFade =
        triggeredRef.current && startTimeRef.current != null
          ? Math.min((time - startTimeRef.current) / 2200, 1) // Slower fade out
          : 0;
      if (overlayFade > 0) {
        ctx.fillStyle = `rgba(2,6,23,${overlayFade * 0.95})`;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }

      if (triggeredRef.current && !finishedRef.current && progress >= 1) {
        finishedRef.current = true;
        window.setTimeout(onFinished, 500); // Longer timeout for fade
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


