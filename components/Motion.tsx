"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    const cleanup: (() => void)[] = [];
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const bar = document.getElementById("scroll-progress-fill");
      if (bar) bar.style.transform = `scaleX(${max ? scrollY / max : 0})`;
    };
    addEventListener("scroll", updateProgress, { passive: true });
    cleanup.push(() => removeEventListener("scroll", updateProgress));
    updateProgress();
    const sections = document.querySelectorAll("main > section");
    const active = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          document.querySelectorAll("[data-nav]").forEach((a) => {
            if ((a as HTMLElement).dataset.nav === e.target.id)
              a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
          });
          document.documentElement.classList.toggle(
            "in-paper",
            e.target.classList.contains("paper"),
          );
        }
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    sections.forEach((s) => active.observe(s));
    cleanup.push(() => active.disconnect());
    const ctx = gsap.context(() => {
      if (reduced.matches) return;
      lenis = new Lenis({
        anchors: { offset: -80 },
        duration: 1.05,
        prevent: (node) =>
          node.tagName === "DIALOG" || node.hasAttribute("data-native-scroll"),
      });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => lenis?.raf(t * 1000);
      gsap.ticker.add(tick);
      cleanup.push(() => {
        gsap.ticker.remove(tick);
        lenis?.destroy();
      });
      gsap.to(".hero-callouts", {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });
      gsap.utils
        .toArray<HTMLElement>(".reveal-text:not(.hero-title)")
        .forEach((el) => {
          gsap.from(el.querySelectorAll(".reveal-word"), {
            opacity: 0,
            filter: "blur(12px)",
            y: 24,
            duration: 0.7,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });
      gsap.utils.toArray<HTMLElement>(".word-fade").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll("span"),
          { opacity: 0.3 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 87%",
              end: "bottom 55%",
              scrub: true,
            },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>(".paper-wipe").forEach((el) => {
        gsap.fromTo(
          el,
          { display: "block", clipPath: "inset(0 0 0% 0)" },
          {
            clipPath: "inset(100% 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top 96%",
              end: "top 55%",
              scrub: 0.5,
            },
          },
        );
      });
      gsap.from(".viewport-frame, .column-lines i", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(".ring-cluster", {
        x: (i) => Math.sin(i * 2.4) * 160,
        y: (i) => Math.cos(i * 2.4) * 160,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 95%",
          end: "top 35%",
          scrub: true,
        },
      });
      gsap.utils.toArray<HTMLElement>(".draw-line").forEach((el) => {
        gsap.from(el, {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.8,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-stat]").forEach((el) => {
        const end = Number(el.dataset.stat);
        const val = { n: 0 };
        gsap.to(val, {
          n: end,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(val.n).toLocaleString("en-US");
          },
        });
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1280px) and (pointer: fine)", () => {
        document
          .querySelectorAll<HTMLElement>("[data-magnetic]")
          .forEach((el) => {
            const move = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              gsap.to(el, {
                x: gsap.utils.clamp(
                  -8,
                  8,
                  (e.clientX - r.left - r.width / 2) * 0.12,
                ),
                y: gsap.utils.clamp(
                  -8,
                  8,
                  (e.clientY - r.top - r.height / 2) * 0.12,
                ),
                duration: 0.2,
              });
            };
            const leave = () => {
              gsap.to(el, { x: 0, y: 0, duration: 0.3 });
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", leave);
            cleanup.push(() => {
              el.removeEventListener("pointermove", move);
              el.removeEventListener("pointerleave", leave);
            });
          });
      });
      cleanup.push(() => mm.revert());
    });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    const timer = setTimeout(refresh, 1000);
    const change = () => location.reload();
    reduced.addEventListener("change", change);
    return () => {
      clearTimeout(timer);
      reduced.removeEventListener("change", change);
      ctx.revert();
      cleanup.forEach((fn) => fn());
    };
  }, []);
  return null;
}
