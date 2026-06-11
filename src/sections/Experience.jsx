import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { experiences, education, codingHighlights, extraCurricular } from "../data/experience";
import { FaGraduationCap, FaBriefcase, FaCode, FaUsers } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Experience & Journey</h2>
        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <SectionTitle icon={<FaBriefcase />} title="Work Experience" />
          <div className="flex flex-col gap-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-0.5 before:bg-accent/20">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} />
            ))}
          </div>
        </div>

        {/* Education & Highlights */}
        <div className="flex flex-col gap-12">
          {/* Education */}
          <div>
            <SectionTitle icon={<FaGraduationCap />} title="Education" />
            <GlassCard className="border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-1">{education.degree}</h3>
              <p className="text-accent font-medium mb-3">{education.institute}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-secondary">{education.duration}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-bold">CGPA: {education.cgpa}</span>
              </div>
              <p className="mt-4 text-sm text-secondary italic">{education.status}</p>
            </GlassCard>
          </div>

          {/* Coding Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="md:col-span-2">
                 <SectionTitle icon={<FaCode />} title="Coding Highlights" />
            </div>
            {codingHighlights.map((hl, i) => (
              <GlassCard key={i} className="p-4 bg-white/20">
                <h4 className="font-bold text-primary mb-2">{hl.title}</h4>
                <p className="text-xs text-secondary leading-relaxed">{hl.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Extra Curricular */}
          <div>
            <SectionTitle icon={<FaUsers />} title="Extra Curricular" />
            <div className="grid grid-cols-1 gap-4">
              {extraCurricular.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/30 border border-white/50 backdrop-blur-sm">
                   <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <FaUsers />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                      <p className="text-xs text-secondary">{item.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="text-accent text-xl bg-accent/10 p-3 rounded-2xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-primary">{title}</h3>
  </div>
);

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
