"use client";

import { useEffect, useRef } from "react";

export default function NeonCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    const canvas = canvasRef.current;
    if (!outer || !inner || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outerX = mouseX;
    let outerY = mouseY;
    let innerX = mouseX;
    let innerY = mouseY;

    const trail: { x: number; y: number; opacity: number }[] = [];
    const maxTrail = 20;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      // Smooth easing
      outerX += (mouseX - outerX) * 0.15;
      outerY += (mouseY - outerY) * 0.15;
      innerX += (mouseX - innerX) * 0.35;
      innerY += (mouseY - innerY) * 0.35;

      outer.style.transform = `translate(${outerX}px, ${outerY}px)`;
      inner.style.transform = `translate(${innerX}px, ${innerY}px)`;

      // Add trail point
      trail.push({ x: innerX, y: innerY, opacity: 1 });
      if (trail.length > maxTrail) trail.shift();

      // Clear and draw trail
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((point, index) => {
        const opacity = (index / maxTrail) * point.opacity;
        const size = (index / maxTrail) * 8;
        
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
        gradient.addColorStop(0, `rgba(34, 211, 238, ${opacity * 0.6})`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(14, 165, 233, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Outer reference for tracking (invisible) */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999] opacity-0"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Inner dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[10000]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full h-full rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8),0_0_5px_rgba(34,211,238,1)]" />
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
          canvas, .fixed.pointer-events-none {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
