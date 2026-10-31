"use client";
import { useRef } from "react";
export default function ParticleRing() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="particle-ring"
      aria-hidden="true"
      onPointerMove={(e) => {
        if (
          !matchMedia(
            "(pointer:fine) and (prefers-reduced-motion: no-preference)",
          ).matches
        )
          return;
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.015}px,${(e.clientY - r.top - r.height / 2) * 0.015}px) rotate(3deg)`;
      }}
    >
      <svg viewBox="0 0 800 800">
        {Array.from({ length: 16 }, (_, cluster) => (
          <g className="ring-cluster" key={cluster}>
            {Array.from({ length: 63 }, (_, point) => {
              const i = cluster * 63 + point;
              const t = i * 2.399963;
              const r = 250 + Math.sin(i * 17.3) * 27;
              return (
                <circle
                  key={i}
                  cx={400 + Math.cos(t) * r}
                  cy={400 + Math.sin(t) * r * 0.8}
                  r={i % 4 === 0 ? 1.8 : 1}
                />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}
