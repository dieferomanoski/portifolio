"use client";

import { useEffect, useState, useRef } from "react";

interface PortalEntranceProps {
  onComplete: () => void;
}

export default function PortalEntrance({ onComplete }: PortalEntranceProps) {
  const [phase, setPhase] = useState<"idle" | "opening" | "entering" | "complete">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | undefined>(undefined);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;

    const animate = () => {
      if (!isMountedRef.current || !canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Portal ring animations
      if (phase === "opening" || phase === "entering") {
        const maxRadius = Math.max(canvas.width, canvas.height);
        const numRings = 8;
        
        for (let i = 0; i < numRings; i++) {
          const progress = phase === "opening" ? Math.min(time / 2000, 1) : 1;
          const radius = (maxRadius / numRings) * (i + 1) * progress;
          const opacity = phase === "entering" ? Math.max(1 - (time - 2000) / 1000, 0) : Math.max(0.3 - i * 0.03, 0);
          
          if (opacity <= 0 || radius <= 0) continue;
          
          // Outer glow with safe gradient
          const innerRadius = Math.max(radius - 20, 0);
          const outerRadius = radius + 20;
          
          if (innerRadius !== outerRadius) {
            try {
              const gradient = ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, outerRadius);
              gradient.addColorStop(0, `rgba(6, 182, 212, 0)`);
              gradient.addColorStop(0.5, `rgba(6, 182, 212, ${Math.min(opacity * 0.8, 1)})`);
              gradient.addColorStop(1, `rgba(147, 51, 234, 0)`);
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
              ctx.stroke();
            } catch (e) {
              // Skip this ring if gradient creation fails
            }
          }
          
          // Inner ring
          ctx.strokeStyle = `rgba(96, 165, 250, ${Math.min(opacity, 1)})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        // Center vortex
        if (phase === "entering") {
          const vortexProgress = Math.min((time - 2000) / 1000, 1);
          const vortexOpacity = Math.max(1 - vortexProgress, 0);
          const vortexRadius = 200 * (1 - vortexProgress);
          
          if (vortexOpacity > 0 && vortexRadius > 0) {
            try {
              const vortexGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, vortexRadius);
              vortexGradient.addColorStop(0, `rgba(6, 182, 212, ${Math.min(0.8 * vortexOpacity, 1)})`);
              vortexGradient.addColorStop(0.5, `rgba(59, 130, 246, ${Math.min(0.5 * vortexOpacity, 1)})`);
              vortexGradient.addColorStop(1, `rgba(147, 51, 234, 0)`);
              
              ctx.fillStyle = vortexGradient;
              ctx.beginPath();
              ctx.arc(centerX, centerY, vortexRadius, 0, Math.PI * 2);
              ctx.fill();
            } catch (e) {
              // Skip vortex if gradient creation fails
            }
          }
        }
      }
      
      time += 16;
      
      if (phase === "opening" && time >= 2000 && isMountedRef.current) {
        setPhase("entering");
        time = 2000;
      }
      
      if (phase === "entering" && time >= 3000 && isMountedRef.current) {
        setPhase("complete");
        setTimeout(() => {
          if (isMountedRef.current) {
            onComplete();
          }
        }, 200);
        return;
      }
      
      if (isMountedRef.current) {
        animationIdRef.current = requestAnimationFrame(animate);
      }
    };

    if (phase !== "idle" && phase !== "complete") {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationIdRef.current !== undefined) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = undefined;
      }
    };
  }, [phase, onComplete]);

  useEffect(() => {
    // Start portal animation after a brief moment
    const timer = setTimeout(() => setPhase("opening"), 500);
    return () => clearTimeout(timer);
  }, []);

  if (phase === "complete") return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#020617]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Portal glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transition-all duration-1000 ${
          phase === "entering" ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}>
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
            <div className="absolute inset-0 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>

      {/* Welcome text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-center transition-all duration-1000 ${
          phase === "entering" ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome
          </h1>
          <p className="mt-2 text-slate-400 text-sm">Entering the dimension...</p>
        </div>
      </div>
    </div>
  );
}
