"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 50,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) return;

    const timeout = setTimeout(
      () => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      },
      currentIndex === 0 ? delay : speed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
