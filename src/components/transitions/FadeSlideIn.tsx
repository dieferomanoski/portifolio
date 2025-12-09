"use client";

import { useEffect, useState, type ReactNode } from "react";

interface FadeSlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function FadeSlideIn({
  children,
  delay = 0,
  duration = 1000,
}: FadeSlideInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
}
