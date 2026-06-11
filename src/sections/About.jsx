import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const About = () => {
  const techStack = [
    "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "C/C++", "Java", "REST APIs", "JWT", "Git & GitHub"
  ];

  return (
    <section id="about" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <GlassCard 
          className="p-8 md:p-12 border-white/60 relative overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)]" 
          hover={true}
        >
          {/* Decorative glowing background blob inside the card */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-mint/15 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center relative z-10">
            {/* Left Column: Visual/Heading hook & stats */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary leading-snug mb-6 text-balance">
                Passionate about solving complex problems & building scalable web applications.
              </h3>
              <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
              <p className="text-sm text-secondary leading-relaxed">
                Based in Indore, India. Specializing in creating clean, performance-driven web experiences using modern frameworks and standard practices.
              </p>
            </motion.div>

            {/* Right Column: Narrative paragraphs & tech badges */}
            <motion.div 
              className="md:col-span-3 space-y-6 text-base text-secondary leading-relaxed border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Hello! I'm <strong className="text-primary font-semibold">Umang Jain</strong>, a B.Tech Information Technology student at <span className="text-accent font-medium">SGSITS, Indore</span>. I have a strong interest in building scalable web applications and continuously improving my problem-solving skills.
              </p>
              <p>
                I specialize in the <strong className="text-primary font-semibold">MERN stack</strong> and have experience with JavaScript, C/C++, Java, REST APIs, JWT authentication, Git, GitHub, and Postman. I have developed projects like an E-Commerce platform, a Barber Shop Booking system, and contributed to <span className="text-accent font-medium">PRASHIKSHAN AI</span>, an AI-based interview practice platform.
              </p>
              <p>
                I actively practice competitive programming and participate in CodeChef contests. Beyond coding, I serve as a Coordinator at Club Hash Include, helping organize <span className="text-accent font-medium">Hack Indore 3.0</span>, and I am also a member of the BIS Club.
              </p>
              
              {/* Tech Stack Mini-Badges */}
              <div className="pt-6 border-t border-white/20">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white/40 hover:bg-accent/10 border border-white/60 hover:border-accent/20 rounded-full text-xs font-semibold text-secondary hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default About;
