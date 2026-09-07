import type { Experience, Project } from "@/lib/types";

export function metaLine(project: Project): string {
  return [project.org, project.year, project.status].join(" · ");
}

export function eyebrow(project: Project): string {
  return `${project.org} • ${project.status} ${project.year}`;
}

/** Start year only; the next row's start year implies the end. The current role gets an open dash. */
export function experienceYears(e: Experience): string {
  return e.end === "now" ? `${e.start} –` : e.start;
}

export function padIndex(i: number): string {
  return String(i + 1).padStart(2, "0");
}
