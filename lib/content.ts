import { existsSync } from "node:fs";
import { join } from "node:path";
import { projects } from "@/content/projects";
import type { Project } from "@/lib/types";

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Projects that render a case study page (everything without an external link). */
export function getCaseStudyProjects(): Project[] {
  return projects.filter((p) => !p.external);
}

export function getCaseStudySlugs(): string[] {
  return getCaseStudyProjects().map((p) => p.slug);
}

export function projectHref(project: Project): string {
  return project.external ?? `/projects/${project.slug}`;
}

/**
 * Build-time guard: every case-study project must have a body at
 * content/projects/<slug>.mdx, and slugs must be unique.
 */
export function assertContentIntegrity(): void {
  const seen = new Set<string>();
  for (const p of projects) {
    if (seen.has(p.slug)) throw new Error(`Duplicate project slug: ${p.slug}`);
    seen.add(p.slug);
    if (p.external) continue;
    const file = join(process.cwd(), "content/projects", `${p.slug}.mdx`);
    if (!existsSync(file)) {
      throw new Error(`Missing case study body for "${p.slug}": expected ${file}`);
    }
  }
}
