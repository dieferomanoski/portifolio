"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      
      setScrollProgress(scrolled);
      setIsVisible(window.scrollY < windowHeight * 0.5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-900/50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-150 shadow-lg shadow-cyan-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll down indicator */}
      {isVisible && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
