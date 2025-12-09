"use client";

import { useEffect, useState } from "react";

export default function GradientBlinds() {
  const [blinds, setBlinds] = useState<number[]>([]);

  useEffect(() => {
    const count = 15;
    setBlinds(Array.from({ length: count }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 flex">
      {blinds.map((i) => (
        <div
          key={i}
          className="flex-1 animate-gradient-blind"
          style={{
            background: `linear-gradient(180deg, 
              rgba(6, 182, 212, 0.1) 0%, 
              rgba(59, 130, 246, 0.05) 50%, 
              rgba(147, 51, 234, 0.1) 100%)`,
            animationDelay: `${i * 0.1}s`,
            opacity: 0.3,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes gradient-blind {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.5;
          }
        }
        .animate-gradient-blind {
          animation: gradient-blind 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
