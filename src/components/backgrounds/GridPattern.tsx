"use client";

interface GridPatternProps {
  className?: string;
  gridSize?: number;
  opacity?: number;
  color?: string;
}

export default function GridPattern({
  className = "",
  gridSize = 50,
  opacity = 0.1,
  color = "rgb(148, 163, 184)",
}: GridPatternProps) {
  return (
    <div
      className={`fixed inset-0 -z-10 ${className}`}
      style={{
        pointerEvents: "none",
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(90deg, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        opacity: opacity,
      }}
    />
  );
}
