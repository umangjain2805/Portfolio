import { nav, content } from "@/data/content";
import Scramble from "./ui/Scramble";
export default function SectionIndex() {
  return (
    <nav className="section-index" aria-label={content.sectionsLabel}>
      {nav.map(([id, label, roman]) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`${roman} — ${label}`}
          data-nav={id}
        >
          <span />
          <Scramble>{roman}</Scramble>
        </a>
      ))}
    </nav>
  );
}
