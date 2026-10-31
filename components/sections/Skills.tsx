import {
  Code2,
  PanelsTopLeft,
  Server,
  Database,
  Wrench,
  Network,
} from "lucide-react";
import { content as c } from "@/data/content";
import Eyebrow from "../ui/Eyebrow";
import RevealText from "../ui/RevealText";
const icons = [Code2, PanelsTopLeft, Server, Database, Wrench, Network];
export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <Eyebrow index="V">{c.skills.eyebrow}</Eyebrow>
        <RevealText
          id="skills-heading"
          before={c.skills.title}
          accent={c.skills.accent}
          after={c.skills.after}
        />
        <div className="skills-grid">
          {c.skills.groups.map(([name, items], i) => {
            const Icon = icons[i];
            return (
              <article className="skill-cell card" key={name}>
                <div className="skill-top">
                  <span className="skill-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="mono muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{name}</h3>
                <div className="chips">
                  {items.map((t) => (
                    <span className="chip" key={t}>
                      <span aria-hidden="true">+ </span>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
