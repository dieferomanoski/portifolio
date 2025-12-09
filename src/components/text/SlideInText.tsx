"use client";

import { useEffect, useState, type ReactNode } from "react";

interface SlideInTextProps {
  text: string;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  children?: ReactNode;
}

export default function SlideInText({
  text,
  delay = 0,
  className = "",
  direction = "left",
  children,
}: SlideInTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const transforms = {
    left: isVisible ? "translateX(0)" : "translateX(-50px)",
    right: isVisible ? "translateX(0)" : "translateX(50px)",
    up: isVisible ? "translateY(0)" : "translateY(-50px)",
    down: isVisible ? "translateY(0)" : "translateY(50px)",
  };

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        opacity: isVisible ? 1 : 0,
        transform: transforms[direction],
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children || text}
    </span>
  );
}
