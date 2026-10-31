"use client";
import { useEffect, useRef } from "react";
export default function Scramble({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      timer = setInterval(() => {
        const p = Math.min((performance.now() - start) / 600, 1);
        el.textContent = children
          .split("")
          .map((ch, i) =>
            ch === " " || i / children.length < p
              ? ch
              : "+/01"[Math.floor(Math.random() * 4)],
          )
          .join("");
        if (p === 1) clearInterval(timer);
      }, 40);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [children]);
  return (
    <span role="img" aria-label={children}>
      <span ref={ref} aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
