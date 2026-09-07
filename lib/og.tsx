import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

async function loadFonts() {
  const newsreader = await readFile(join(process.cwd(), "assets/og/Newsreader-Regular.woff"));
  const mono = await readFile(join(process.cwd(), "assets/og/JetBrainsMono-Regular.woff"));
  return [
    { name: "Newsreader", data: newsreader, style: "normal" as const, weight: 400 as const },
    { name: "JetBrains Mono", data: mono, style: "normal" as const, weight: 400 as const },
  ];
}

export async function renderOg({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#EDF2F4",
          color: "#2B2D42",
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#61687D",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontFamily: "Newsreader",
            fontSize: title.length > 40 ? 72 : 88,
            lineHeight: 1.05,
            letterSpacing: -1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #C7CED8",
            paddingTop: 28,
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#61687D",
          }}
        >
          <span>{footer}</span>
          <span style={{ color: "#D90429" }}>●</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
