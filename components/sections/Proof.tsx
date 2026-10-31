import { content as c } from "@/data/content";
import Eyebrow from "../ui/Eyebrow";
import RevealText from "../ui/RevealText";
import Card from "../ui/Card";
import ExternalLink from "../ui/ExternalLink";
export default function Proof() {
  return (
    <section
      id="proof"
      className="section proof"
      aria-labelledby="proof-heading"
    >
      <div className="container">
        <Eyebrow index="VI">{c.proof.eyebrow}</Eyebrow>
        <RevealText
          id="proof-heading"
          before={c.proof.title}
          accent={c.proof.accent}
        />
        <p className="proof-intro">{c.proof.intro}</p>
        <div className="stats-grid">
          {c.proof.stats.map((s) => (
            <Card key={s.caption} className="stat-card">
              <div
                className="stat-value"
                role="img"
                aria-label={`${s.value.toLocaleString("en-US")}${s.suffix}`}
              >
                <span data-stat={s.value} aria-hidden="true">
                  {s.value.toLocaleString("en-US")}
                </span>
                <span aria-hidden="true">{s.suffix}</span>
              </div>
              <p className="mono">{s.caption}</p>
            </Card>
          ))}
        </div>
        <div className="proof-note">
          <p className="mono muted">{c.proof.note}</p>
          <div className="chips">
            {c.socials.slice(2).map((s) => (
              <ExternalLink
                key={s.name}
                href={s.url}
                className="button secondary"
              >
                {s.name}
              </ExternalLink>
            ))}
          </div>
        </div>
        <div className="proof-bottom">
          <Card className="education">
            <p className="mono small-heading">{c.ui.education}</p>
            <h3>{c.proof.education.name}</h3>
            <p className="degree">{c.proof.education.degree}</p>
            <p className="mono muted">
              {c.proof.education.place}
              <br />
              {c.proof.education.dates}
            </p>
            <p>{c.proof.education.description}</p>
          </Card>
          <div className="activities">
            <p className="mono small-heading">{c.ui.leadership}</p>
            {c.proof.activities.map((a) => (
              <Card key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
