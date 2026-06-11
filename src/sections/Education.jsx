import GlassCard from "../components/GlassCard";
import { education, extraCurricular } from "../data/experience";
import { FaGraduationCap, FaUsers } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Education & Activities</h2>
        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

export default Education;
