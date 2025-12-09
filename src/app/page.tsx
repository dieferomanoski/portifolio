import HeroMinimal from "@/components/sections/HeroMinimal";
import ProjectsCollapsible from "@/components/sections/ProjectsCollapsible";
import SkillsCollapsible from "@/components/sections/SkillsCollapsible";
import ContactSectionMinimal from "@/components/sections/ContactSectionMinimal";

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroMinimal />
      </section>

      <section id="projects">
        <ProjectsCollapsible />
      </section>

      <section id="skills">
        <SkillsCollapsible />
      </section>

      <section id="contact">
        <ContactSectionMinimal />
      </section>
    </>
  );
}
