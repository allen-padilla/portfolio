import { site } from "@/content/site";
import { getCaseStudySlugs, getProject } from "@/lib/content";
import { eyebrow } from "@/lib/format";
import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "Case study";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOg({
    eyebrow: project ? eyebrow(project) : site.name,
    title: project?.title ?? site.name,
    footer: site.name,
  });
}
