import { describe, expect, it } from "vitest";
import { pickShots } from "@/lib/shots";
import type { Project, ProjectImage } from "@/lib/types";

function image(src: string): ProjectImage {
  return { src, alt: src, width: 100, height: 100 };
}

const images = [image("/shots/a.png"), image("/shots/b.jpg"), image("/shots/c.webp")];

const project: Project = {
  slug: "demo",
  title: "Demo",
  org: "Acme",
  year: "2024",
  status: "Shipped",
  stack: [],
  summary: "",
  images,
};

describe("pickShots", () => {
  it("picks images by file stem in the order asked, ignoring extension", () => {
    expect(pickShots(project, ["c", "a"])).toEqual([images[2], images[0]]);
  });

  it("falls back to the first N images when any stem is missing", () => {
    expect(pickShots(project, ["a", "missing"])).toEqual([images[0], images[1]]);
  });

  it("returns nothing for a project without images", () => {
    expect(pickShots({ ...project, images: undefined }, ["a"])).toEqual([]);
  });
});
