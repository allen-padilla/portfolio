import Link from "next/link";
import { ViewTransition } from "react";
import type { Project } from "@/lib/types";
import { metaLine, padIndex } from "@/lib/format";

type Props = { project: Project; index: number };

export function ProjectRow({ project, index }: Props) {
  const inner = (
    <>
      <span className="label-sm pt-1.5 transition-colors group-hover:text-accent">{padIndex(index)}</span>
      <span className="min-w-0">
        <ViewTransition name={`project-title-${project.slug}`} share="morph" default="none">
          <span className="block font-serif text-title text-ink transition-colors group-hover:text-accent">
            {project.title}
            {project.external ? <span aria-hidden="true"> ↗</span> : null}
          </span>
        </ViewTransition>
        <span className="mt-1.5 block max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted">
          {project.summary}
        </span>
        <span className="label-sm mt-3 flex flex-wrap gap-x-3 gap-y-1 md:hidden">
          <span>{metaLine(project)}</span>
        </span>
      </span>
      <span className="label-sm hidden flex-col items-end gap-1.5 text-right md:flex">
        <span className="text-ink">{project.org}</span>
        <span>
          {project.status} · {project.year}
        </span>
        <span className="mt-1 flex max-w-[22rem] flex-wrap justify-end gap-x-2 gap-y-1 normal-case tracking-normal">
          {project.stack.map((s) => (
            <span key={s} className="border border-rule px-1.5 py-0.5 text-[0.6875rem]">
              {s}
            </span>
          ))}
        </span>
      </span>
    </>
  );

  const className =
    "group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-6 no-underline md:grid-cols-[2.5rem_1fr_auto] md:gap-x-8";

  if (project.external) {
    return (
      <a href={project.external} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={`/projects/${project.slug}`} className={className}>
      {inner}
    </Link>
  );
}
