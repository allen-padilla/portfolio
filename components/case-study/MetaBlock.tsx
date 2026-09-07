import type { Project } from "@/lib/types";

export function MetaBlock({ project }: { project: Project }) {
  const rows: Array<[string, string | undefined]> = [
    ["Role", project.role],
    ["Timeline", project.timeline],
    ["Team", project.team],
    ["Stack", project.stack.join(", ")],
  ];
  const present = rows.filter((r): r is [string, string] => Boolean(r[1]));
  if (present.length === 0) return null;

  return (
    <dl className="mt-10 grid gap-y-6 border-t border-rule pt-6">
      {present.map(([label, value]) => (
        <div key={label}>
          <dt className="label-sm mb-1.5">{label}</dt>
          <dd className="text-[0.9375rem] leading-relaxed text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
