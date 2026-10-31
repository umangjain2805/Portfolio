"use client";
import { useEffect, useRef } from "react";
import { content as c } from "@/data/content";
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !matchMedia(
        "(min-width:1280px) and (pointer:fine) and (prefers-reduced-motion:no-preference)",
      ).matches
    )
      return;
    const el = ref.current;
    if (!el) return;
    const move = (e: PointerEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      const target = e.target as HTMLElement;
      const interactive = target.closest("a,button");
      el.classList.toggle("hover", !!interactive);
      el.classList.toggle("hidden", !!target.closest("input,textarea,dialog"));
      el.textContent = target.closest("[data-project]") ? c.ui.openCursor : "";
      el.style.opacity = "1";
    };
    const hide = () => {
      el.style.opacity = "0";
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", hide);
    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
    };
  }, []);
  return <div ref={ref} className="custom-cursor" aria-hidden="true" />;
}
