// Generates the looping keyframes for the home page feature cards and writes them
// into app/globals.css between the @generated markers. Each card is one long cycle:
// the story plays in the first few seconds, holds, fades out in the last 0.6s, then
// replays. Times below are seconds into the cycle; the script turns them into
// percent offsets so nothing has to be hand-edited.
//
//   node scripts/feature-keyframes.mjs
//
// Canopy (.cf-*) and Operations Platform (.of-*) predate this script and keep
// their hand-generated blocks above the markers.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cssPath = join(root, "app/globals.css");

const FADE = 0.6;

/** step helper: [time, declarations] */
const pop = (t, dur = 0.55) => [
  [t, "transform: scale(0.4); opacity: 0;"],
  [t + dur * 0.6, "transform: scale(1.12); opacity: 1;"],
  [t + dur, "transform: scale(1); opacity: 1;"],
];
const rise = (t, dur, extra = "") => [
  [t, `transform: translateY(10px) ${extra}; opacity: 0;`],
  [t + dur, `transform: translateY(0) ${extra}; opacity: 1;`],
];
const slideX = (t, dur, from, extra = "") => [
  [t, `transform: translateX(${from}) ${extra}; opacity: 0;`],
  [t + dur, `transform: translateX(0) ${extra}; opacity: 1;`],
];
const lift = (t, dur, extra = "") => [
  [t, `transform: translateY(70px) ${extra}; opacity: 0;`],
  [t + dur, `transform: translateY(0) ${extra}; opacity: 1;`],
];

const cards = [
  {
    prefix: "mf",
    cycle: 15,
    floatDelay: 2.6,
    elements: [
      { sel: ".mf-icon", steps: pop(0.3) },
      { sel: ".mf-check", steps: [[0.6, "stroke-dashoffset: 24;"], [1.1, "stroke-dashoffset: 0;"]] },
      { sel: ".mf-word", steps: slideX(0.7, 0.5, "-10px") },
      { sel: ".mf-pill-1", steps: pop(1.2, 0.35) },
      { sel: ".mf-pill-2", steps: pop(1.35, 0.35) },
      { sel: ".mf-pill-3", steps: pop(1.5, 0.35) },
      { sel: ".mf-tag", steps: slideX(1.6, 0.5, "-10px") },
      { sel: ".mf-window-3", steps: slideX(1.0, 0.9, "90px", "rotate(3deg)") },
      { sel: ".mf-window-2", steps: slideX(1.2, 0.9, "90px", "rotate(0deg)") },
      { sel: ".mf-window-1", steps: slideX(1.4, 0.9, "90px", "rotate(-3deg)") },
    ],
  },
  {
    prefix: "gf",
    cycle: 14,
    floatDelay: 3.2,
    elements: [
      { sel: ".gf-title", steps: rise(0.2, 0.6) },
      { sel: ".gf-sub", steps: rise(0.6, 0.5) },
      ...Array.from({ length: 10 }, (_, i) => ({
        sel: `.gf-bar-${i + 1}`,
        steps: [[0.8 + i * 0.05, "transform: scaleY(0);"], [1.1 + i * 0.05, "transform: scaleY(1);"]],
      })),
      {
        sel: ".gf-scan",
        steps: [
          [1.6, "transform: translateX(0); opacity: 0;"],
          [1.7, "transform: translateX(0); opacity: 1;"],
          [2.4, "transform: translateX(var(--gf-scan)); opacity: 1;"],
          [2.55, "transform: translateX(var(--gf-scan)); opacity: 0;"],
        ],
      },
      { sel: ".gf-screen-1", steps: lift(1.9, 0.9, "rotate(0deg)") },
      { sel: ".gf-screen-2", steps: lift(2.2, 0.9, "rotate(-4deg)") },
      { sel: ".gf-screen-3", steps: lift(2.4, 0.9, "rotate(3deg)") },
    ],
  },
  {
    prefix: "vf",
    cycle: 17,
    floatDelay: 2.9,
    elements: [
      { sel: ".vf-pill", steps: rise(0.3, 0.6) },
      { sel: ".vf-line-1", steps: rise(0.7, 0.6) },
      { sel: ".vf-line-2", steps: rise(0.85, 0.6) },
      { sel: ".vf-tag", steps: rise(1.3, 0.5) },
      { sel: ".vf-window-3", steps: lift(1.1, 0.9, "scale(0.92)") },
      { sel: ".vf-window-2", steps: lift(1.35, 0.9, "scale(0.96)") },
      { sel: ".vf-window-1", steps: lift(1.6, 0.9, "scale(1)") },
    ],
  },
  {
    prefix: "hf",
    cycle: 18,
    floatDelay: 0,
    elements: [
      { sel: ".hf-word", steps: rise(0.3, 0.6) },
      { sel: ".hf-tag", steps: rise(0.7, 0.5) },
      { sel: ".hf-pill-1", steps: pop(1.4, 0.45) },
      { sel: ".hf-route", steps: [[1.7, "transform: scaleX(0);"], [2.4, "transform: scaleX(1);"]] },
      { sel: ".hf-pill-2", steps: pop(2.4, 0.45) },
    ],
  },
];

const pct = (t, cycle) => `${((t / cycle) * 100).toFixed(3)}%`;
const nameFor = (prefix, sel) => `${prefix}-${sel.replace(/^\./, "").replace(/[^a-z0-9-]/gi, "-")}-cycle`;

let out = "";
for (const card of cards) {
  const { prefix, cycle, floatDelay, elements } = card;
  const ease = `var(--${prefix}-ease)`;
  out += `  /* ${prefix}: ${cycle}s cycle */\n`;
  for (const el of elements) {
    out += `  ${el.sel} { animation: ${nameFor(prefix, el.sel)} ${cycle}s ${ease} infinite both; }\n`;
  }
  out += `  .${prefix}-stage { animation: ${prefix}-stage-cycle ${cycle}s linear infinite; }\n`;
  out += `  .${prefix}-art { animation: ff-float 7s ease-in-out ${floatDelay}s infinite; }\n`;
  out += `  .group:hover .${prefix}-art { animation-play-state: paused; }\n`;
  for (const el of elements) {
    const steps = el.steps;
    out += `@keyframes ${nameFor(prefix, el.sel)} {\n`;
    steps.forEach(([t, css], i) => {
      const p = pct(t, cycle);
      if (i === 0) out += `  0%, ${p} { ${css} }\n`;
      else if (i === steps.length - 1) out += `  ${p}, 100% { ${css} }\n`;
      else out += `  ${p} { ${css} }\n`;
    });
    out += `}\n`;
  }
  out += `@keyframes ${prefix}-stage-cycle {\n  0%, ${pct(cycle - FADE, cycle)} { opacity: 1; }\n  100% { opacity: 0; }\n}\n`;
}

const START = "/* @generated feature-keyframes start */";
const END = "/* @generated feature-keyframes end */";
const css = readFileSync(cssPath, "utf8");
const a = css.indexOf(START);
const b = css.indexOf(END);
if (a === -1 || b === -1) throw new Error(`markers not found in ${cssPath}`);
writeFileSync(cssPath, css.slice(0, a + START.length) + "\n" + out + css.slice(b));
console.log(`wrote ${out.split("\n").length} lines into app/globals.css`);
