import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { CanopyFeature } from "@/components/home/CanopyFeature";
import { GradFeature } from "@/components/home/GradFeature";
import { HomelandFeature } from "@/components/home/HomelandFeature";
import { MemberFeature } from "@/components/home/MemberFeature";
import { MvlpFeature } from "@/components/home/MvlpFeature";
import { OpsFeature } from "@/components/home/OpsFeature";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Project } from "@/lib/types";
import { eyebrow } from "@/lib/format";

type Props = { projects: Project[] };

/** One animated card per project, picked by slug; anything else gets its first image. */
function Card({ project }: { project: Project }) {
  switch (project.slug) {
    case "canopy":
      return <CanopyFeature project={project} />;
    case "cfsm-ops":
      return <OpsFeature project={project} />;
    case "member-platform":
      return <MemberFeature project={project} />;
    case "graduation-portal":
      return <GradFeature project={project} />;
    case "mvlp-website":
      return <MvlpFeature project={project} />;
    case "homeland-map":
      return <HomelandFeature />;
  }
  const img = project.images?.[0];
  if (!img) return <div className="aspect-video border border-rule bg-paper-2" />;
  return (
    <div className="overflow-hidden border border-rule bg-paper-2">
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
      />
    </div>
  );
}

export function WorkGrid({ projects }: Props) {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex items-baseline justify-between border-t border-rule pt-3">
        <h2 className="label font-sans">Work</h2>
        <span className="label-sm">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <ul className="mt-6 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {projects.map((p, i) => {
          const inner = (
            <>
              <Card project={p} />
              <span className="mt-3 flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <ViewTransition name={`project-title-${p.slug}`} share="morph" default="none">
                  <span className="font-serif text-title text-ink transition-colors group-hover:text-accent">
                    {p.title}
                    {p.external ? <span aria-hidden="true"> ↗</span> : null}
                  </span>
                </ViewTransition>
                <span className="label-sm sm:shrink-0 sm:text-right">{eyebrow(p)}</span>
              </span>
              <span className="mt-2 block max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted">{p.summary}</span>
              <span className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                {p.stack.map((s) => (
                  <span key={s} className="border border-rule px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted">
                    {s}
                  </span>
                ))}
              </span>
            </>
          );
          return (
            <FadeIn key={p.slug} as="li" index={i + 1}>
              {p.external ? (
                <a href={p.external} target="_blank" rel="noreferrer" className="group block no-underline">
                  {inner}
                </a>
              ) : (
                <Link href={`/projects/${p.slug}`} className="group block no-underline">
                  {inner}
                </Link>
              )}
            </FadeIn>
          );
        })}
      </ul>
    </section>
  );
}
