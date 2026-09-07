import type { SocialLink } from "@/lib/types";

const RESUME_PATH = "/resume/Allen-Padilla-Resume.pdf";

/**
 * Site origin for canonical links, the sitemap, and OG image URLs.
 * Order: NEXT_PUBLIC_SITE_URL, then COOLIFY_URL (Coolify injects it from the
 * app's domain at build time), then the default. Empty strings count as unset
 * (Docker ARG/ENV pass "" when no value is given), a missing scheme gets
 * https://, and trailing slashes are dropped.
 */
function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || process.env.COOLIFY_URL || "https://apadilla.ca").trim();
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withScheme.replace(/\/+$/, "");
}

export const site = {
  name: "Allen Padilla",
  role: "Full-stack developer",
  city: "Winnipeg",
  location: "Winnipeg, MB",
  url: resolveSiteUrl(),
  description:
    "Hey, I'm Allen, a full-stack developer in Winnipeg who builds things people enjoy using. I build software for the people who run on it and see it through to production.",
  email: "allenjpadilla@gmail.com",
  hero: {
    lead: "Hey, I'm Allen, a full-stack developer who builds things people",
    italic: "enjoy",
    tail: " using.",
  },
  resume: RESUME_PATH,
  socials: [
    { label: "GitHub", href: "https://github.com/allen-padilla" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/allen-padilla/" },
    { label: "Email", href: "mailto:allenjpadilla@gmail.com" },
    { label: "Resume", href: RESUME_PATH },
  ] satisfies SocialLink[],
  aboutMe: [
    "I've been coding since I was 7, making games in an old program called BYOND. I took web development at Red River College, and my first real job was at Computers For Schools Manitoba, where I built their database app from scratch. It started as my own little PHP framework and grew into a Laravel app the whole organization ran on.",
    "Right now I'm the only developer in the Manitoba Métis Federation's IT department, building apps for the other departments. I sit down with the directors and the frontline staff to figure out what they actually need, then I do the architecture, the build, the tests, the deploy, and the support after. I run the infrastructure too. Coolify on a VPS, Docker Compose, nginx, and firewall rules so the internal apps stay internal.",
    "A lot of my day is spent with coding agents now. They dig through the codebase, plan and make changes, refactor, run the checks, and write the docs. I set the context and the guardrails and I review every change, so the architecture and what goes to production is still on me.",
    "Outside of work I travel whenever I can, and I'm always looking for a good bowl of ramen.",
  ],
};
