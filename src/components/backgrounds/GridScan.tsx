"use client";

import { useEffect, useRef } from "react";

export default function GridScan() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let scanY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 40;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = "rgba(96, 165, 250, 0.1)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw scanning line
      const gradient = ctx.createLinearGradient(0, scanY - 100, 0, scanY + 100);
      gradient.addColorStop(0, "rgba(6, 182, 212, 0)");
      gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.6)");
      gradient.addColorStop(1, "rgba(6, 182, 212, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(6, 182, 212, 0.5)";
      ctx.strokeStyle = "rgba(6, 182, 212, 0.8)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      scanY += 2;
      if (scanY > canvas.height + 100) {
        scanY = -100;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
