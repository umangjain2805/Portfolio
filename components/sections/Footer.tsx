import { content as c, nav } from "@/data/content";
import ExternalLink from "../ui/ExternalLink";
export default function Footer() {
  return (
    <footer className="footer paper">
      <div className="container footer-grid">
        <div>
          <a
            href="#home"
            className="footer-logo"
            aria-label={`${c.monogram} — ${c.name}`}
          >
            {c.monogram}
            <span aria-hidden="true">↗</span>
          </a>
          <p>{c.footer}</p>
        </div>
        <nav aria-label={c.ui.navigate}>
          <h2>{c.ui.navigate}</h2>
          {nav.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <div>
          <h2>{c.ui.elsewhere}</h2>
          {c.socials.map((s) => (
            <ExternalLink key={s.name} href={s.url}>
              {s.name}
            </ExternalLink>
          ))}
        </div>
        <div>
          <h2>{c.ui.contact}</h2>
          <a className="footer-email" href={`mailto:${c.email}`}>
            {c.email}
          </a>
          <p className="footer-copyright">
            © {c.year} {c.name}
          </p>
          <a className="text-link" href="#home">
            {c.ui.back} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
