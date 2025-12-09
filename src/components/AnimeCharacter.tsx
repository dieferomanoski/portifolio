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
      angle: number;
      radius: number;
      speed: number;
      size: number;
      hue: number;
    }> = [];

    // Create orbital particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        angle: (Math.PI * 2 * i) / 80,
        radius: 60 + Math.random() * 80,
        speed: 0.002 + Math.random() * 0.003,
        size: Math.random() * 3 + 1,
        hue: Math.random() * 60 + 180,
      });
    }

    const animate = () => {
      // Dark fade trail
      ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Draw concentric rings with pulsing effect
      for (let i = 0; i < 8; i++) {
        const radius = 40 + i * 15;
        const pulse = Math.sin(time * 2 - i * 0.3) * 5;
        const alpha = 0.1 + Math.sin(time * 2 - i * 0.3) * 0.05;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          centerX, centerY, radius + pulse - 10,
          centerX, centerY, radius + pulse + 10
        );
        gradient.addColorStop(0, `hsla(200, 80%, 60%, 0)`);
        gradient.addColorStop(0.5, `hsla(200, 80%, 60%, ${alpha})`);
        gradient.addColorStop(1, `hsla(280, 80%, 60%, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Inner neon ring
        ctx.strokeStyle = `hsla(${200 + i * 10}, 80%, 60%, ${alpha * 2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + pulse, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Update and draw orbital particles
      particles.forEach((p, index) => {
        p.angle += p.speed;
        const x = centerX + Math.cos(p.angle) * p.radius;
        const y = centerY + Math.sin(p.angle) * p.radius;

        // Particle glow
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 3);
        particleGradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, 0.8)`);
        particleGradient.addColorStop(0.5, `hsla(${p.hue}, 100%, 60%, 0.4)`);
        particleGradient.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);

        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Particle core
        ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, 1)`;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const x2 = centerX + Math.cos(p2.angle) * p2.radius;
          const y2 = centerY + Math.sin(p2.angle) * p2.radius;
          const dist = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2);

          if (dist < 50) {
            const alpha = (1 - dist / 50) * 0.3;
            ctx.strokeStyle = `hsla(${(p.hue + p2.hue) / 2}, 100%, 60%, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      });

      // Central glowing core
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      const corePulse = Math.sin(time * 3) * 0.3 + 0.7;
      coreGradient.addColorStop(0, `hsla(200, 100%, 70%, ${0.8 * corePulse})`);
      coreGradient.addColorStop(0.4, `hsla(220, 100%, 60%, ${0.4 * corePulse})`);
      coreGradient.addColorStop(0.7, `hsla(260, 100%, 50%, ${0.2 * corePulse})`);
      coreGradient.addColorStop(1, `hsla(280, 100%, 40%, 0)`);

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Rotating code symbols around core
      const symbols = ["</>", "{}", "[]", "=>"];
      symbols.forEach((symbol, i) => {
        const angle = time + (Math.PI * 2 * i) / symbols.length;
        const x = centerX + Math.cos(angle) * 25;
        const y = centerY + Math.sin(angle) * 25;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.font = "bold 14px monospace";
        ctx.fillStyle = `hsla(200, 100%, 80%, ${corePulse})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(200, 100%, 70%, 0.8)`;
        ctx.fillText(symbol, 0, 0);
        ctx.restore();
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
