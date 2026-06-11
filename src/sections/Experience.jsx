import GlassCard from "../components/GlassCard";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Work Experience</h2>
        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-0.5 before:bg-accent/20">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-white border-4 border-accent z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
    </div>
    <div className="mb-1">
      <span className="text-xs font-bold text-accent uppercase tracking-tighter">{experience.period}</span>
      <h4 className="text-xl font-bold text-primary">{experience.role}</h4>
      <p className="text-secondary font-medium mb-4">{experience.company}</p>
    </div>
    <GlassCard className="p-5 border-white/40">
      <p className="text-sm font-bold text-primary mb-3 underline decoration-accent/30 underline-offset-4">{experience.project}</p>
      <ul className="flex flex-col gap-2">
        {experience.responsibilities.map((res, i) => (
          <li key={i} className="text-sm text-secondary flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            {res}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.tech.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/40 border border-white/60 text-secondary">{t}</span>
        ))}
      </div>
    </GlassCard>
  </div>
);

export default Experience;
