"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ElectricBorderProps {
  children: ReactNode;
  className?: string;
}

export default function ElectricBorder({ children, className = "" }: ElectricBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; speed: number; hue: number }[] = [];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();

    // Create particles along the border
    const createParticles = () => {
      particles = [];
      const perimeter = (canvas.width + canvas.height) * 2;
      const particleCount = Math.floor(perimeter / 50);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (perimeter / particleCount) * i,
          y: 0,
          speed: 0.5 + Math.random() * 0.5,
          hue: 180 + Math.random() * 60,
        });
      }
    };

    createParticles();

    const drawParticle = (progress: number, hue: number) => {
      const perimeter = (canvas.width + canvas.height) * 2;
      let distance = (progress * perimeter) % perimeter;

      let x = 0;
      let y = 0;

      if (distance < canvas.width) {
        // Top edge
        x = distance;
        y = 0;
      } else if (distance < canvas.width + canvas.height) {
        // Right edge
        x = canvas.width;
        y = distance - canvas.width;
      } else if (distance < canvas.width * 2 + canvas.height) {
        // Bottom edge
        x = canvas.width - (distance - canvas.width - canvas.height);
        y = canvas.height;
      } else {
        // Left edge
        x = 0;
        y = canvas.height - (distance - canvas.width * 2 - canvas.height);
      }

      // Draw particle with glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
      ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        const progress = ((particle.x + time * particle.speed) % ((canvas.width + canvas.height) * 2)) / ((canvas.width + canvas.height) * 2);
        drawParticle(progress, particle.hue);
      });

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
