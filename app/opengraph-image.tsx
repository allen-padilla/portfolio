import { site } from "@/content/site";
import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = `${site.name} — ${site.role}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOg({
    eyebrow: `${site.name} · ${site.location}`,
    title: `${site.hero.lead} ${site.hero.italic}${site.hero.tail}`,
    footer: site.role,
  });
}
