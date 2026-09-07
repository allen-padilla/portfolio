import type { Experience, Project } from "@/lib/types";

export function metaLine(project: Project): string {
  return [project.org, project.year, project.status].join(" · ");
}

export function eyebrow(project: Project): string {
  return `${project.org} • ${project.status} ${project.year}`;
}

/** Full range. The current role gets an open dash, and a role inside one year shows that year once. */
export function experienceYears(e: Experience): string {
  if (e.end === "now") return `${e.start} –`;
  return e.start === e.end ? e.start : `${e.start} – ${e.end}`;
}

export function padIndex(i: number): string {
  return String(i + 1).padStart(2, "0");
}
