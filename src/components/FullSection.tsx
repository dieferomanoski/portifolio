"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function FullSection({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActive(true);
          }
        });
      },
      { threshold: [0.2, 0.4, 0.6] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-frame ${
        active ? "section-frame--active" : "section-frame--inactive"
      }`}
    >
      <div className="section-frame-inner">{children}</div>
    </section>
  );
}




