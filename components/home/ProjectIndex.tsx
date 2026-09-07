import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectRow } from "@/components/home/ProjectRow";
import type { Project } from "@/lib/types";

type Props = { projects: Project[] };

export function ProjectIndex({ projects }: Props) {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex items-baseline justify-between border-t border-rule pt-3">
        <h2 className="label font-sans">Selected work</h2>
        <span className="label-sm">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <ol className="mt-4">
        {projects.map((p, i) => (
          <FadeIn key={p.slug} as="li" index={i + 1}>
            <ProjectRow project={p} index={i} />
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
