"use client";

import { type ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  span?: "1" | "2" | "full";
}

export function BentoItem({ children, className = "", span = "1" }: BentoItemProps) {
  const spanClass = {
    "1": "col-span-1",
    "2": "md:col-span-2",
    "full": "col-span-full",
  }[span];

  return (
    <div className={`group relative ${spanClass} ${className}`}>
      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-950/40 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50">
        {children}
      </div>
    </div>
  );
}

interface MagicBentoProps {
  children: ReactNode;
  className?: string;
}

export default function MagicBento({ children, className = "" }: MagicBentoProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
}
