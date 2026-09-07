import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectIndex } from "@/components/home/ProjectIndex";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <Container className="pt-12 lg:pt-20">
        <ProjectIndex projects={getProjects()} />
      </Container>
    </main>
  );
}
