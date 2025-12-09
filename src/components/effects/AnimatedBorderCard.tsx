"use client";

import { useRef, type ReactNode } from "react";

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedBorderCard({
  children,
  className = "",
}: AnimatedBorderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`group relative ${className}`} ref={cardRef}>
      {/* Animated border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
      
      {/* Card content */}
      <div className="relative rounded-2xl border border-slate-800/50 bg-slate-950/80 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
