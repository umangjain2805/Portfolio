import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaRocket } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <GlassCard className="h-full border-white/50 hover:shadow-2xl hover:shadow-indigo-100 transition-shadow duration-500 overflow-hidden relative">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{project.subtitle}</span>
          <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
        </div>
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${project.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
          {project.status}
        </div>
      </div>

      <p className="text-secondary mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6">
        <h4 className="text-xs font-bold text-primary mb-3 flex items-center gap-2">
          <FaRocket className="text-accent" /> Key Features
        </h4>
        <ul className="grid grid-cols-1 gap-2">
          {project.features.map((feature, i) => (
            <li key={i} className="text-sm text-secondary flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-lg bg-accent/5 text-accent text-xs font-medium border border-accent/10">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-white/40 flex justify-between items-center">
        <a 
          href={project.link} 
          className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all"
        >
          View Case Study <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </GlassCard>
  </motion.div>
);

export default Projects;
