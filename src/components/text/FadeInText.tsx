"use client";

import { useEffect, useState } from "react";

interface FadeInTextProps {
  text: string;
  delay?: number;
  className?: string;
  stagger?: boolean;
}

export default function FadeInText({
  text,
  delay = 0,
  className = "",
  stagger = false,
}: FadeInTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (stagger) {
    return (
      <span className={`inline-flex ${className}`}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.3s ease-out ${index * 0.05}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease-out",
      }}
    >
      {text}
    </span>
  );
}
