"use client";

import { useEffect, useRef } from "react";

interface SpotlightProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Spotlight({
  className = "",
  size = 500,
  color = "rgba(96, 165, 250, 0.15)",
}: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      spotlightRef.current.style.background = `radial-gradient(circle ${size}px at ${x}px ${y}px, ${color}, transparent)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size, color]);

  return (
    <div
      ref={spotlightRef}
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
    />
  );
}
