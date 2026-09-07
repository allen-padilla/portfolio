import { describe, expect, it } from "vitest";
import {
  assertContentIntegrity,
  getCaseStudySlugs,
  getProjects,
  projectHref,
} from "@/lib/content";
import type { Project } from "@/lib/types";

const base: Project = {
  slug: "demo",
  title: "Demo",
  org: "Acme",
  year: "2024",
  status: "Shipped",
  stack: [],
  summary: "",
};

describe("projectHref", () => {
  it("links to the case study page by slug", () => {
    expect(projectHref(base)).toBe("/projects/demo");
  });

  it("prefers the external link when one is set", () => {
    expect(projectHref({ ...base, external: "https://example.com" })).toBe("https://example.com");
  });
});

describe("getCaseStudySlugs", () => {
  it("excludes projects that link out", () => {
    const external = getProjects()
      .filter((p) => p.external)
      .map((p) => p.slug);
    const slugs = getCaseStudySlugs();
    for (const slug of external) expect(slugs).not.toContain(slug);
  });
});

describe("assertContentIntegrity", () => {
  it("passes for the real content: unique slugs and an mdx body per case study", () => {
    expect(() => assertContentIntegrity()).not.toThrow();
  });
});
