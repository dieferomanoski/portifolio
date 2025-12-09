"use client";

import { useEffect, useRef } from "react";

interface DotPatternProps {
  className?: string;
  dotSize?: number;
  dotSpacing?: number;
  opacity?: number;
}

export default function DotPattern({
  className = "",
  dotSize = 1,
  dotSpacing = 20,
  opacity = 0.3,
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots();
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(148, 163, 184, ${opacity})`;

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [dotSize, dotSpacing, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
