import { content as c } from "@/data/content";
import Eyebrow from "../ui/Eyebrow";
import RevealText from "../ui/RevealText";
import Starfield from "../three/Starfield";
export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <Starfield />
      <div className="container">
        <Eyebrow index="II">{c.about.eyebrow}</Eyebrow>
        <RevealText
          id="about-heading"
          before={c.about.title}
          accent={c.about.accent}
        />
        <div className="about-grid">
          <div className="about-body">
            {c.about.paragraphs.map((p) => (
              <p className="word-fade" key={p}>
                {p.split(" ").map((w, i) => (
                  <span key={i}>{w} </span>
                ))}
              </p>
            ))}
          </div>
          <aside className="facts card">
            <div className="portrait-slot">
              {c.about.portrait && (
                <div
                  role="img"
                  aria-label={c.name}
                  style={{
                    backgroundImage: `url(${c.about.portrait})`,
                    aspectRatio: "1",
                    backgroundSize: "cover",
                  }}
                />
              )}
            </div>
            <dl>
              {c.about.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
