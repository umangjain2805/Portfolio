"use client";
import { useEffect, useRef } from "react";
import { content as c } from "@/data/content";
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    try {
      if (
        sessionStorage.getItem("uj-intro") ||
        matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        el.classList.remove("show");
        return;
      }
      sessionStorage.setItem("uj-intro", "1");
      el.classList.add("show");
    } catch {
      return;
    }
    const timer = setTimeout(() => el.classList.remove("show"), 1000);
    return () => {
      clearTimeout(timer);
      el.classList.remove("show");
    };
  }, []);
  return (
    <div ref={ref} className="preloader">
      <div className="loader-mark">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="46" />
        </svg>
        <span>{c.monogram}</span>
      </div>
      <button
        className="text-link"
        onClick={() => ref.current?.classList.remove("show")}
      >
        {c.ui.skipIntro} ↗
      </button>
    </div>
  );
}
