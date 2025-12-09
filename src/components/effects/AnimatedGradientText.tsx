"use client";

import { type ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({
  children,
  className = "",
}: AnimatedGradientTextProps) {
  return (
    <span
      className={`animate-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
    >
      {children}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
        :global(.animate-gradient) {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </span>
  );
}
