export function Stack({ items }: { items: string[] }) {
  return (
    <ul className="my-6 flex list-none flex-wrap gap-2 pl-0">
      {items.map((s) => (
        <li key={s} className="border border-rule px-2 py-0.5 font-mono text-[0.75rem] text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}
