"use client";

interface WaveTextProps {
  text: string;
  className?: string;
}

export default function WaveText({ text, className = "" }: WaveTextProps) {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-wave"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </span>
  );
}
