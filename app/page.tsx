import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/home/Hero";
import { AboutMe } from "@/components/home/AboutMe";
import { WorkGrid } from "@/components/home/WorkGrid";
import { getCaseStudyProjects } from "@/lib/content";

export default function HomePage() {
  const projects = getCaseStudyProjects();
  return (
    <main>
      <Container>
        <Hero />
        <WorkGrid projects={projects} />
        <FadeIn index={2}>
          <AboutMe />
        </FadeIn>
      </Container>
    </main>
  );
}
