"use client";

import { type ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function ShimmerButton({
  children,
  href,
  className = "",
  onClick,
}: ShimmerButtonProps) {
  const baseClasses =
    "relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-700/60 bg-slate-900/60 px-6 py-2.5 text-sm font-medium text-slate-100 transition-all hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]";

  const shimmerClasses =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-cyan-500/20 before:to-transparent";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${shimmerClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${shimmerClasses} ${className}`}
    >
      {content}
    </button>
  );
}
