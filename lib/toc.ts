import { readFile } from "node:fs/promises";
import { join } from "node:path";
import GithubSlugger from "github-slugger";
import type { TocItem } from "@/lib/types";

/**
 * Derives the table of contents from the raw MDX source. Only `##` headings
 * count. Uses github-slugger, the same slugger rehype-slug uses, so the ids
 * here match the rendered <h2 id> attributes exactly.
 */
export async function extractToc(slug: string): Promise<TocItem[]> {
  const file = join(process.cwd(), "content/projects", `${slug}.mdx`);
  const src = await readFile(file, "utf8");
  const withoutFences = src.replace(/```[\s\S]*?```/g, "");
  const slugger = new GithubSlugger();
  return [...withoutFences.matchAll(/^## +(.+?)\s*$/gm)].map((m) => {
    const text = m[1].replace(/[`*_]/g, "");
    return { id: slugger.slug(text), text };
  });
}
