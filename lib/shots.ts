import type { Project, ProjectImage } from "@/lib/types";

/**
 * Pick a project's images by file stem, in the order given, for a feature card.
 * Falls back to the first N images so a renamed screenshot never leaves a card empty.
 */
export function pickShots(project: Project, stems: string[]): ProjectImage[] {
  const images = project.images ?? [];
  const picked = stems
    .map((stem) => images.find((img) => img.src.split("/").pop()?.replace(/\.\w+$/, "") === stem))
    .filter((img): img is ProjectImage => Boolean(img));
  return picked.length === stems.length ? picked : images.slice(0, stems.length);
}
