import { describe, expect, it } from "vitest";
import { experienceYears, eyebrow, metaLine, padIndex } from "@/lib/format";
import type { Experience, Project } from "@/lib/types";

const project: Project = {
  slug: "demo",
  title: "Demo",
  org: "Acme",
  year: "2024",
  status: "Shipped",
  stack: [],
  summary: "",
};

describe("metaLine", () => {
  it("joins org, year, and status with middle dots", () => {
    expect(metaLine(project)).toBe("Acme · 2024 · Shipped");
  });
});

describe("eyebrow", () => {
  it("puts status before year", () => {
    expect(eyebrow(project)).toBe("Acme • Shipped 2024");
  });
});

describe("experienceYears", () => {
  const base: Experience = { start: "2021", end: "2023", company: "Acme", role: "Dev" };

  it("shows the full range for a finished role", () => {
    expect(experienceYears(base)).toBe("2021 – 2023");
  });

  it("shows a single year when a role starts and ends in the same year", () => {
    expect(experienceYears({ ...base, end: "2021" })).toBe("2021");
  });

  it("adds an open dash for the current role", () => {
    expect(experienceYears({ ...base, end: "now" })).toBe("2021 –");
  });
});

describe("padIndex", () => {
  it("is one-based and zero-padded to two digits", () => {
    expect(padIndex(0)).toBe("01");
    expect(padIndex(9)).toBe("10");
  });

  it("does not truncate three-digit indexes", () => {
    expect(padIndex(99)).toBe("100");
  });
});
