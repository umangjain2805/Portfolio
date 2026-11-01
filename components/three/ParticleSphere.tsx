"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Scene = dynamic(() => import("./Scene"), { ssr: false });
export function DottedSphere() {
  return (
    <svg className="fallback-sphere" viewBox="0 0 600 600" aria-hidden="true">
      {Array.from({ length: 750 }, (_, i) => {
        const y = 1 - (i / 749) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = i * 2.399963;
        const z = Math.sin(theta) * radius;
        // Normalize floating-point differences between server and browser math.
        return (
          <circle
            key={i}
            cx={(300 + Math.cos(theta) * radius * 245).toFixed(6)}
            cy={(300 + y * 245).toFixed(6)}
            r={z > 0 ? 1.45 : 0.8}
            opacity={(0.18 + (z + 1) * 0.3).toFixed(6)}
          />
        );
      })}
    </svg>
  );
}
export default function ParticleSphere() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(() => {
      if (cancelled || matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;
      try {
        const canvas = document.createElement("canvas");
        if (canvas.getContext("webgl2") || canvas.getContext("webgl"))
          setLoad(true);
      } catch {
        /* Static SVG is the supported fallback. */
      }
    }, 200);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="particle-stage" aria-hidden="true">
      <DottedSphere />
      {load && <Scene />}
    </div>
  );
}
