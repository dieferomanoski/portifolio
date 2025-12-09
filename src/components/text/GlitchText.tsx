"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let interval: NodeJS.Timeout;

    const glitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iterations >= text.length) {
          clearInterval(interval);
        }

        iterations += 1 / 3;
      }, 30);
    };

    // Trigger glitch on mount and occasionally
    glitch();
    const randomGlitch = setInterval(() => {
      if (Math.random() > 0.95) glitch();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(randomGlitch);
    };
  }, [text]);

  return <span className={className}>{glitchText}</span>;
}
