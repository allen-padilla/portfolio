import { ViewTransition } from "react";
import { MetaBlock } from "@/components/case-study/MetaBlock";
import type { Project } from "@/lib/types";
import { eyebrow } from "@/lib/format";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="mb-14">
      <p className="label mb-5">{eyebrow(project)}</p>
      <ViewTransition name={`project-title-${project.slug}`} share="morph" default="none">
        <h1 className="text-display max-w-[18ch]">{project.title}</h1>
      </ViewTransition>
      <p className="mt-6 max-w-measure text-[1.125rem] leading-relaxed text-muted">{project.summary}</p>
      <MetaBlock project={project} />
    </header>
  );
}
