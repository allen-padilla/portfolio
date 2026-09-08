"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

type Props = { items: Stat[] };

const DURATION_MS = 1200;

/** Grid of stat tiles whose numbers count up from zero the first time the grid scrolls into view. */
export function Stats({ items }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-8 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-3">
      {items.map((item) => (
        <StatTile key={item.label} {...item} start={started} />
      ))}
    </div>
  );
}

function StatTile({ label, value, prefix, suffix, start }: Stat & { start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    const startTime = performance.now();
    // Ease-out cubic so the count settles into the final value instead of stopping abruptly.
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / DURATION_MS);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <div className="bg-paper px-4 py-5">
      <p className="font-mono text-[1.75rem] tabular-nums text-ink">
        {prefix}
        {display.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="label-sm mt-1">{label}</p>
    </div>
  );
}
