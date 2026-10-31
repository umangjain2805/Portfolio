import { content as c } from "@/data/content";
import Eyebrow from "../ui/Eyebrow";
import RevealText from "../ui/RevealText";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import ExternalLink from "../ui/ExternalLink";
import Starfield from "../three/Starfield";
export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <Starfield />
      <div className="container">
        <Eyebrow index="III">{c.experience.eyebrow}</Eyebrow>
        <RevealText
          id="experience-heading"
          before={c.experience.title}
          accent={c.experience.accent}
        />
        <div className="timeline">
          <div className="timeline-line draw-line" aria-hidden="true" />
          {c.experience.roles.map((r, i) => (
            <Card className="experience-card" key={r.name}>
              <span className="timeline-node" aria-hidden="true" />
              <div className="role-meta mono">
                <span>{String(i + 1).padStart(2, "0")}</span>
                {r.dates && <span>{r.dates}</span>}
              </div>
              <div className="role-grid">
                <div>
                  <h3>{r.role}</h3>
                  <p className="role-name">{r.name}</p>
                  <p className="mono org">{r.org}</p>
                  {r.url && (
                    <ExternalLink href={r.url}>{c.ui.visit}</ExternalLink>
                  )}
                </div>
                <div>
                  <p>{r.summary}</p>
                  <ul>
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="chips">
                    {r.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  {r.badge && <p className="recognition mono">{r.badge}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
