/**
 * The resume is a small Markdown subset so one source can become both the PDF
 * and the docx: "#" is the name, "##" a section, "###" an entry written as
 * "Title | Org", the line right after an entry is its meta line, "- " is a
 * bullet, anything else is a paragraph, and **bold** works inline.
 */
export type ResumeBlockType = "name" | "section" | "entry" | "meta" | "bullet" | "text";

export type ResumeBlock = { type: ResumeBlockType; text: string };

export type InlineSegment = { text: string; bold: boolean };

export function parseResume(markdown: string): ResumeBlock[] {
  const blocks: ResumeBlock[] = [];
  let expectMeta = false;
  for (const raw of markdown.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("### ")) {
      blocks.push({ type: "entry", text: line.slice(4) });
      expectMeta = true;
      continue;
    }
    if (line.startsWith("## ")) blocks.push({ type: "section", text: line.slice(3) });
    else if (line.startsWith("# ")) blocks.push({ type: "name", text: line.slice(2) });
    else if (line.startsWith("- ")) blocks.push({ type: "bullet", text: line.slice(2) });
    else if (expectMeta) blocks.push({ type: "meta", text: line });
    else blocks.push({ type: "text", text: line });
    expectMeta = false;
  }
  return blocks;
}

/** Splits "**bold**" spans out of a line. */
export function inlineSegments(text: string): InlineSegment[] {
  return text
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("**") ? { text: part.slice(2, -2), bold: true } : { text: part, bold: false },
    );
}

/** "Title | Org | Dates" becomes a bold title with the rest kept as written. */
export function splitEntry(text: string): { title: string; detail: string } {
  const [title, ...rest] = text.split(" | ");
  return { title, detail: rest.length ? " | " + rest.join(" | ") : "" };
}
