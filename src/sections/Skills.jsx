import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Core Skills</h2>
        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col gap-16">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-secondary mb-8 pl-4 border-l-4 border-accent"
            >
              {category.title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <GlassCard className="h-full group hover:border-accent/40">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
          <skill.icon size={28} />
        </div>
        <h4 className="font-bold text-primary">{skill.name}</h4>
      </div>
      <p className="text-sm text-secondary leading-relaxed">
        {skill.description}
      </p>
    </GlassCard>
  </motion.div>
);

export default Skills;
