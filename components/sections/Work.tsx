"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content as c, type Project } from "@/data/content";
import Eyebrow from "../ui/Eyebrow";
import RevealText from "../ui/RevealText";
import Chip from "../ui/Chip";
import Modal from "../ui/Modal";
import ProjectMedia from "../ui/ProjectMedia";
import ExternalLink from "../ui/ExternalLink";
export default function Work() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [current, setCurrent] = useState(1);
  const currentIndex = useRef(1);
  const progress = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (min-height: 740px) and (prefers-reduced-motion: no-preference)",
      () => {
        const el = track.current,
          view = viewport.current;
        if (!el || !view) return;
        tween.current = gsap.to(el, {
          x: () => -(el.scrollWidth - view.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top 80px",
            end: () => `+=${el.scrollWidth - view.clientWidth}`,
            pin: true,
            pinSpacing: true,
            refreshPriority: 1,
            // Lenis already smooths vertical scroll; follow that position directly.
            scrub: true,
            invalidateOnRefresh: true,
            onToggle: (self) => {
              el.style.willChange = self.isActive ? "transform" : "auto";
            },
            onUpdate: (self) => {
              const index = Math.min(3, Math.floor(self.progress * 3) + 1);
              if (index !== currentIndex.current) {
                currentIndex.current = index;
                setCurrent(index);
              }
              if (progress.current)
                progress.current.style.transform = `scaleX(${(1 + self.progress * 2) / 3})`;
            },
          },
        });
        return () => {
          el.style.willChange = "auto";
          tween.current = null;
        };
      },
    );
    return () => mm.revert();
  }, []);
  function go(direction: number) {
    const index = Math.max(1, Math.min(3, current + direction));
    const st = tween.current?.scrollTrigger;
    if (st) {
      const top = st.start + ((st.end - st.start) * (index - 1)) / 2;
      window.scrollTo({
        top,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    } else if (viewport.current) {
      const card = track.current?.children[index - 1] as HTMLElement;
      viewport.current.scrollTo({
        left: card?.offsetLeft || 0,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  }
  return (
    <section
      ref={section}
      id="work"
      className="section paper work"
      aria-labelledby="work-heading"
    >
      <div className="paper-wipe" aria-hidden="true" />
      <div className="container">
        <Eyebrow index="IV">{c.work.eyebrow}</Eyebrow>
        <div className="work-heading">
          <RevealText id="work-heading" before={c.work.title} />
          <span className="mono project-total">{c.ui.count}</span>
        </div>
        <div
          ref={viewport}
          className="work-viewport"
          data-lenis-prevent-horizontal
          onScroll={(e) => {
            if (tween.current) return;
            const el = e.currentTarget;
            const p =
              el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth);
            const index = Math.min(3, Math.round(p * 2) + 1);
            if (index !== currentIndex.current) {
              currentIndex.current = index;
              setCurrent(index);
            }
            if (progress.current)
              progress.current.style.transform = `scaleX(${(1 + p * 2) / 3})`;
          }}
        >
          <div ref={track} className="work-track">
            {c.work.projects.map((p, i) => (
              <article
                className="project-card"
                key={p.name}
                onFocusCapture={() => {
                  const st = tween.current?.scrollTrigger;
                  if (!st || !viewport.current) return;
                  viewport.current.scrollLeft = 0;
                  const target = st.start + ((st.end - st.start) * i) / 2;
                  if (Math.abs(scrollY - target) > 8) st.scroll(target);
                }}
              >
                <button
                  className="project-visual-button"
                  onClick={() => setSelected(p)}
                  aria-label={`${c.ui.open}: ${p.name}`}
                  data-project
                >
                  <ProjectMedia project={p} index={i} />
                  <ArrowUpRight className="project-arrow" aria-hidden="true" />
                </button>
                <div className="project-content">
                  <div className="project-meta mono">
                    <span>{String(i + 1).padStart(4, "0")}</span>
                    <div className="chips">
                      {p.status.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="project-subtitle mono">{p.subtitle}</p>
                  <p className="project-description">{p.description}</p>
                  <div className="chips project-tech">
                    {p.tech.slice(0, 6).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <button className="text-link" onClick={() => setSelected(p)}>
                    {c.ui.open} <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="work-controls">
          <span className="mono">
            {String(current).padStart(4, "0")}{" "}
            <span className="muted">/ {c.ui.total}</span>
          </span>
          <div className="work-progress" aria-hidden="true">
            <div ref={progress} />
          </div>
          <div>
            <button
              className="icon-button"
              aria-label={navLabel(-1)}
              onClick={() => go(-1)}
              disabled={current === 1}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="icon-button"
              aria-label={navLabel(1)}
              onClick={() => go(1)}
              disabled={current === 3}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      {selected && (
        <Modal onClose={() => setSelected(null)} labelId="project-title">
          <div className="chips">
            {selected.status.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          <h2 id="project-title">{selected.name}</h2>
          <p className="mono">{selected.subtitle}</p>
          <p>{selected.detail}</p>
          <h3>
            {selected.group === "current"
              ? c.ui.current
              : selected.group === "implemented"
                ? c.ui.implemented
                : c.ui.features}
          </h3>
          <ul className="feature-list">
            {selected.features.map((f) => (
              <li key={f}>
                <span aria-hidden="true">
                  {selected.group === "implemented" ? "✓" : "+"}
                </span>
                {f}
              </li>
            ))}
          </ul>
          <h3>
            {selected.group === "current" ? c.ui.expansion : c.ui.planned}
          </h3>
          <p className="planned">
            <span aria-hidden="true">○ </span>
            {selected.planned}
          </p>
          {selected.infrastructure && (
            <>
              <h3>{c.ui.infrastructure}</h3>
              <p className="planned">{selected.infrastructure}</p>
            </>
          )}
          <h3>{c.ui.tech}</h3>
          <div className="chips">
            {selected.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          {selected.links.map((l) => (
            <ExternalLink key={l.url} href={l.url}>
              {l.label}
            </ExternalLink>
          ))}
        </Modal>
      )}
    </section>
  );
}
function navLabel(direction: number) {
  return direction < 0 ? c.work.previous : c.work.next;
}
