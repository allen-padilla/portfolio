import type { ReactNode } from "react";

export function Callout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <aside className="my-8 border-l-2 border-accent bg-paper-2 px-5 py-4 text-[0.9375rem] leading-relaxed">
      {title ? <p className="label-sm mb-2 text-[#4f5669]">{title}</p> : null}
      <div className="[&>p:last-child]:mb-0">{children}</div>
    </aside>
  );
}
