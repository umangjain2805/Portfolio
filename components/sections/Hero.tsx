import { content as c } from "@/data/content";
import ParticleSphere from "@/components/three/ParticleSphere";
import RevealText from "@/components/ui/RevealText";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-visual" aria-hidden="true">
        <ParticleSphere />
        <div className="hero-callouts" aria-hidden="true">
          <svg viewBox="0 0 1000 650" preserveAspectRatio="none">
            <path d="M360 220 L280 100 H180 M680 285 L810 220 H950 M600 460 L740 540 H920" />
            <circle cx="360" cy="220" r="3" />
            <circle cx="680" cy="285" r="3" />
            <circle cx="600" cy="460" r="3" />
          </svg>
          {c.hero.callouts.map((s, i) => (
            <span key={s} className={`callout callout-${i}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-copy container">
        <Eyebrow index="I">{c.hero.eyebrow}</Eyebrow>
        <RevealText
          hero
          id="hero-heading"
          before={c.hero.before}
          accent={c.hero.accent}
          after={c.hero.after}
        />
        <div className="hero-bottom">
          <p>{c.description}</p>
          <div className="hero-actions">
            <Button primary href="#work">
              {c.hero.work}
            </Button>
            <Button href="#contact">{c.hero.contact}</Button>
            {c.resume.enabled && (
              <a className="text-link" href={c.resume.url}>
                {c.resume.label} ↗
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="hero-meta container">
        <span>{c.location}</span>
        <a href="#about">
          {c.ui.scroll} <span aria-hidden="true">↓</span>
        </a>
        <span>© {c.year}</span>
      </div>
    </section>
  );
}
