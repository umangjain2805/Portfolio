import Header from "@/components/Header";
import SectionIndex from "@/components/SectionIndex";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Motion from "@/components/Motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Proof from "@/components/sections/Proof";
import Contact from "@/components/sections/Contact";
export default function Page() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Header />
      <SectionIndex />
      <Cursor />
      <div className="viewport-frame" aria-hidden="true" />
      <div className="column-lines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <Motion />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Proof />
        <Contact />
      </main>
    </>
  );
}
