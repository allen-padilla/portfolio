import { describe, expect, it } from "vitest";
import { inlineSegments, parseResume, splitEntry } from "./resume.mjs";

describe("parseResume", () => {
  it("maps each line to its block and skips blank lines", () => {
    const blocks = parseResume(["# Name", "", "Tagline", "## Skills", "- one", "- two"].join("\n"));
    expect(blocks).toEqual([
      { type: "name", text: "Name" },
      { type: "text", text: "Tagline" },
      { type: "section", text: "Skills" },
      { type: "bullet", text: "one" },
      { type: "bullet", text: "two" },
    ]);
  });

  it("treats only the line right after an entry as its meta line", () => {
    const blocks = parseResume(["### Role | Org", "City | 2020 – 2022", "Blurb", "- did a thing"].join("\n"));
    expect(blocks.map((b) => b.type)).toEqual(["entry", "meta", "text", "bullet"]);
  });

  it("does not turn a bullet or heading after an entry into a meta line", () => {
    const blocks = parseResume(["### Role | Org", "- did a thing", "### Other | Org", "## Next"].join("\n"));
    expect(blocks.map((b) => b.type)).toEqual(["entry", "bullet", "entry", "section"]);
  });

  it("trims surrounding whitespace", () => {
    expect(parseResume("   ## Skills   \n")).toEqual([{ type: "section", text: "Skills" }]);
  });
});

describe("inlineSegments", () => {
  it("splits bold spans out of a line", () => {
    expect(inlineSegments("**Languages:** TypeScript, **SQL**")).toEqual([
      { text: "Languages:", bold: true },
      { text: " TypeScript, ", bold: false },
      { text: "SQL", bold: true },
    ]);
  });

  it("returns one plain segment when there is no bold", () => {
    expect(inlineSegments("plain")).toEqual([{ text: "plain", bold: false }]);
  });
});

describe("splitEntry", () => {
  it("bolds the title and keeps the rest as written", () => {
    expect(splitEntry("Web Developer | Org | 2022 – Present")).toEqual({
      title: "Web Developer",
      detail: " | Org | 2022 – Present",
    });
  });

  it("has no detail when there is no separator", () => {
    expect(splitEntry("Canopy")).toEqual({ title: "Canopy", detail: "" });
  });
});
