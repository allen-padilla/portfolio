import type { SocialLink } from "@/lib/types";

const RESUME_PATH = "/resume/Allen-Padilla-Resume.pdf";

/**
 * Site origin for canonical links, the sitemap, and OG image URLs.
 * NEXT_PUBLIC_SITE_URL wins when set, otherwise the production domain. A missing
 * scheme gets https:// and trailing slashes are dropped.
 */
function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || "https://apadilla.ca").trim();
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
    "Hey, I'm Allen, a full-stack developer in Winnipeg. I build the apps an organization runs on and see them through to production. Open to remote roles or relocating.",
  email: "allenjpadilla@gmail.com",
  hero: {
    lead: "Hey, I'm Allen, a full-stack developer. I build the apps an organization",
    italic: "runs on",
    tail: " and see them through to production.",
    sub: "Right now that's the Manitoba Métis Federation, where I'm the only developer. I'm in Winnipeg and open to remote roles or relocating for the right one.",
  },
  resume: RESUME_PATH,
  repo: "https://github.com/allen-padilla/portfolio",
  socials: [
    { label: "GitHub", href: "https://github.com/allen-padilla" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/allen-padilla/" },
    { label: "Email", href: "mailto:allenjpadilla@gmail.com" },
    { label: "Resume", href: RESUME_PATH },
  ] satisfies SocialLink[],
  aboutMe: [
    "I've been coding since I was 7, making games in an old program called BYOND. I took web development at Red River College, and my first developer job was at Computers For Schools Manitoba, where I built their database app from scratch. It started as my own little PHP framework and grew into a Laravel app the whole organization ran on, and I kept supporting it on contract for 2 years after I left.",
    "Right now I'm the only developer in the Manitoba Métis Federation's IT department, building apps for the other departments. I sit down with the directors and the frontline staff to figure out what they actually need, then I do the architecture, the build, the tests, the deploy, and the support after. I run the infrastructure too. Coolify on a VPS, Docker Compose, nginx, and firewall rules so the internal apps stay internal.",
    "A lot of my day is spent with coding agents now. They dig through the codebase, plan and make changes, run the checks, and write the docs. My job is the context and the guardrails, and I review every change before it goes anywhere, so the architecture and what reaches production is still on me. This site's repo is a fair example. It has an agents file with the conventions and the things that already bit me, commits are conventional and linted, and any logic that could break has a test next to it.",
    "Outside of work I travel whenever I can, and I'm always looking for a good bowl of ramen.",
  ],
};
