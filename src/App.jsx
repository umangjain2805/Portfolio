import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-gradient-soft min-h-screen selection:bg-accent/30 selection:text-primary">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <Hero />
        
        {/* Simple Spacer/Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent my-10"></div>
        
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;