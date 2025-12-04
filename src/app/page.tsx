import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">
      <section id="hero" className="section-padding">
        <Hero />
      </section>

      <section id="projects" className="section-padding">
        <ProjectsSection />
      </section>

      <section id="skills" className="section-padding">
        <SkillsSection />
      </section>

      <section id="contact" className="section-padding pb-24 md:pb-32">
        <ContactSection />
      </section>
    </div>
  );
}
