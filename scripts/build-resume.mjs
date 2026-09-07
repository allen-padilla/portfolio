// Builds the resume from content/resume.md into public/resume/ as a PDF and a
// docx. The docx is for application forms and comes from the docx package. The
// PDF is what the site links, and headless Chrome prints it from an HTML copy
// laid out with the same font, sizes, and margins so the two match. Keep it to
// one page.
//
//   node scripts/build-resume.mjs
//   node scripts/build-resume.mjs <source.md> <out dir> <file name>   (a tailored copy, kept out of the repo)
//
// Chrome is looked for at the usual macOS path, or set CHROME_BIN.

import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { AlignmentType, BorderStyle, Document, HeadingLevel, LevelFormat, Packer, Paragraph, TextRun } from "docx";
import { inlineSegments, parseResume, splitEntry } from "../lib/resume.mts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const [sourceArg, outDirArg, basenameArg] = process.argv.slice(2);
const source = sourceArg ? resolve(sourceArg) : join(root, "content/resume.md");
const outDir = outDirArg ? resolve(outDirArg) : join(root, "public/resume");
const basename = basenameArg ?? "Allen-Padilla-Resume";
const chrome = process.env.CHROME_BIN ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/** docx sizes are half-points, so 20 is 10pt, and lengths are twips (1440 per inch). */
const BODY = 20;

function runs(text, base = {}) {
  return inlineSegments(text).map((s) => new TextRun({ ...base, text: s.text, bold: s.bold || undefined }));
}

function entryRuns(text) {
  const { title, detail } = splitEntry(text);
  const children = [new TextRun({ text: title, bold: true })];
  if (detail) children.push(new TextRun({ text: detail }));
  return children;
}

const sectionRule = { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } };

function toParagraph(block) {
  switch (block.type) {
    case "name":
      return new Paragraph({ heading: HeadingLevel.HEADING_1, children: runs(block.text) });
    case "section":
      return new Paragraph({ heading: HeadingLevel.HEADING_2, border: sectionRule, children: runs(block.text) });
    case "entry":
      return new Paragraph({ heading: HeadingLevel.HEADING_3, children: entryRuns(block.text) });
    case "meta":
      return new Paragraph({ spacing: { after: 20 }, children: runs(block.text, { italics: true }) });
    case "bullet":
      return new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 20 },
        children: runs(block.text),
      });
    default:
      return new Paragraph({ spacing: { after: 40 }, children: runs(block.text) });
  }
}

const headingRun = { font: "Arial", color: "000000" };

function buildDocx(blocks) {
  const doc = new Document({
    creator: "Allen Padilla",
    title: "Allen Padilla Resume",
    styles: {
      default: {
        document: { run: { font: "Arial", size: BODY }, paragraph: { spacing: { before: 0, after: 0 } } },
      },
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { ...headingRun, size: 32, bold: true },
          paragraph: { spacing: { before: 0, after: 20 } },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { ...headingRun, size: 22, bold: true, allCaps: true },
          paragraph: { spacing: { before: 120, after: 40 }, keepNext: true },
        },
        {
          id: "Heading3",
          name: "Heading 3",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { ...headingRun, size: BODY },
          paragraph: { spacing: { before: 80, after: 0 }, keepNext: true },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "•",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 360, hanging: 200 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: { size: { width: 12240, height: 15840 }, margin: { top: 720, right: 720, bottom: 720, left: 720 } },
        },
        children: blocks.map(toParagraph),
      },
    ],
  });
  return Packer.toBuffer(doc);
}

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Emails and the few bare domains in the resume become links in the PDF. */
function linkify(html) {
  return html.replace(
    /([\w.+-]+@[\w-]+\.[a-z]+)|(\b(?:[a-z0-9-]+\.)+(?:ca|app|com)\b(?:\/[\w./-]*[\w-])?)/g,
    (m, email) => (email ? `<a href="mailto:${m}">${m}</a>` : `<a href="https://${m}">${m}</a>`),
  );
}

function inlineHtml(text) {
  const html = inlineSegments(text)
    .map((s) => (s.bold ? `<b>${escapeHtml(s.text)}</b>` : escapeHtml(s.text)))
    .join("");
  return linkify(html);
}

function toHtml(blocks) {
  let body = "";
  let inList = false;
  for (const block of blocks) {
    if (block.type === "bullet") {
      if (!inList) body += "<ul>";
      inList = true;
      body += `<li>${inlineHtml(block.text)}</li>`;
      continue;
    }
    if (inList) body += "</ul>";
    inList = false;
    if (block.type === "name") body += `<h1>${inlineHtml(block.text)}</h1>`;
    else if (block.type === "section") body += `<h2>${inlineHtml(block.text)}</h2>`;
    else if (block.type === "entry") {
      const { title, detail } = splitEntry(block.text);
      body += `<h3><b>${inlineHtml(title)}</b>${inlineHtml(detail)}</h3>`;
    } else if (block.type === "meta") body += `<p class="meta"><i>${inlineHtml(block.text)}</i></p>`;
    else body += `<p>${inlineHtml(block.text)}</p>`;
  }
  if (inList) body += "</ul>";

  // Mirrors the docx: Arial 10pt, half-inch margins, and the same spacing in points.
  const css = `
    @page { size: Letter; margin: 0.5in; }
    body { margin: 0; font: 10pt Arial, sans-serif; line-height: 1.15; color: #000; }
    a { color: inherit; text-decoration: none; }
    h1 { font-size: 16pt; margin: 0 0 1pt; }
    h2 { font-size: 11pt; text-transform: uppercase; border-bottom: 0.75pt solid #000; margin: 6pt 0 2pt; padding-bottom: 1pt; }
    h3 { font-size: 10pt; font-weight: normal; margin: 4pt 0 0; }
    p { margin: 0 0 2pt; }
    p.meta { margin-bottom: 1pt; }
    ul { margin: 0; padding-left: 0.25in; }
    li { margin: 0 0 1pt; }
  `;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Allen Padilla Resume</title><style>${css}</style></head><body>${body}</body></html>`;
}

async function printPdf(html, pdfPath) {
  if (!existsSync(chrome)) throw new Error(`Chrome not found at ${chrome}. Set CHROME_BIN.`);
  const dir = await mkdtemp(join(tmpdir(), "resume-"));
  try {
    const htmlPath = join(dir, "resume.html");
    await writeFile(htmlPath, html);
    execFileSync(
      chrome,
      [
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        `--print-to-pdf=${pdfPath}`,
        pathToFileURL(htmlPath).href,
      ],
      { stdio: "ignore", timeout: 60_000 },
    );
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

const blocks = parseResume(await readFile(source, "utf8"));
await mkdir(outDir, { recursive: true });
const docxPath = join(outDir, `${basename}.docx`);
const pdfPath = join(outDir, `${basename}.pdf`);
await writeFile(docxPath, await buildDocx(blocks));
await printPdf(toHtml(blocks), pdfPath);
for (const file of [docxPath, pdfPath]) console.log(`wrote ${relative(root, file)}`);
