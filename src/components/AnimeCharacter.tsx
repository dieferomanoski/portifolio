"use client";

import { useEffect, useRef } from "react";

export default function HypnoticOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    let time = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      hue: number;
      opacity: number;
    }> = [];

    // Create flowing particles like liquid ether background
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: centerX + (Math.random() - 0.5) * 300,
        y: centerY + (Math.random() - 0.5) * 300,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        hue: Math.random() * 40 + 180, // Blue to cyan range
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    const animate = () => {
      // Dark fade trail
      ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Update and draw flowing particles (like liquid ether)
      particles.forEach((p, index) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off boundaries
        const boundRadius = 150;
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > boundRadius) {
          p.vx *= -1;
          p.vy *= -1;
        }

        // Draw particle with subtle glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${p.hue}, 70%, 60%, ${p.opacity})`;
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with lines (like liquid ether)
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.strokeStyle = `hsla(${(p.hue + p2.hue) / 2}, 70%, 60%, ${
              (1 - distance / 80) * 0.3
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Subtle central glow (much less prominent)
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60);
      const corePulse = Math.sin(time * 2) * 0.2 + 0.3;
      coreGradient.addColorStop(0, `hsla(200, 70%, 60%, ${0.2 * corePulse})`);
      coreGradient.addColorStop(0.5, `hsla(220, 70%, 50%, ${0.1 * corePulse})`);
      coreGradient.addColorStop(1, `hsla(220, 70%, 40%, 0)`);

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
      ctx.fill();

      // Floating code symbols (fewer and more subtle)
      const symbols = ["</>", "{ }"];
      symbols.forEach((symbol, i) => {
        const angle = time * 0.3 + (Math.PI * i);
        const radius = 40 + Math.sin(time + i) * 10;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.font = "12px monospace";
        ctx.fillStyle = `hsla(200, 70%, 70%, ${0.4 + Math.sin(time + i) * 0.2})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(symbol, x, y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      particles.length = 0;
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: "drop-shadow(0 0 30px rgba(96, 165, 250, 0.4))",
        }}
      />
      <style jsx>{`
        canvas {
          animation: float 6s ease-in-out infinite, rotate 20s linear infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
