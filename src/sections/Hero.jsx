import { motion } from "framer-motion";
import Button from "../components/Button";
import GlassCard from "../components/GlassCard";
import { FaCode, FaRocket, FaReact } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">🚀 Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight leading-tight">
            Hi, I'm <span className="text-accent">Umang Jain</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
            I build modern web applications with React, Node.js, and clean user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="primary">View Projects</Button>
            <Button variant="secondary">Contact Me</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <AchievementCard icon={<FaCode />} text="250+ Problems Solved" />
            <AchievementCard icon={<FaRocket />} text="MERN Stack Developer" />
            <AchievementCard icon={<FaReact />} text="React Developer" />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Glowing Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 blur-[100px] rounded-full"></div>
          
          <GlassCard className="relative w-full max-w-[400px] h-[450px] overflow-hidden flex items-center justify-center border-white/60" hover={false}>
             <div className="text-8xl text-accent/20 font-bold select-none italic">
                UJ
             </div>
             {/* Placeholder for Profile - You can set an <img> tag here */}
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/10">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-accent to-mint mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-accent/20 border-4 border-white/50">
                  UJ
                </div>
                <h3 className="text-xl font-bold text-primary">Umang Jain</h3>
                <p className="text-sm text-secondary italic">SGSITS IT Student</p>
             </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

const AchievementCard = ({ icon, text }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/40 border border-white/50 shadow-sm"
  >
    <span className="text-accent text-lg">{icon}</span>
    <span className="text-xs font-bold text-primary">{text}</span>
  </motion.div>
);

export default Hero;
