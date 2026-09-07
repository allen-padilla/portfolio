import { experience } from "@/content/experience";
import { experienceYears } from "@/lib/format";

export function ExperienceLedger() {
  return (
    <div>
      <h2 className="label mb-3 font-sans">Experience</h2>
      <ol className="border-t border-rule">
        {experience.map((e, i) => (
          <li
            key={`${e.company}-${e.start}-${i}`}
            className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-0.5 border-b border-rule py-3 text-[0.9375rem] sm:grid-cols-[6.5rem_1fr_1fr]"
          >
            <span className="label-sm pt-0.5">{experienceYears(e)}</span>
            <span className="text-ink">
              {e.url ? (
                <a href={e.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                  {e.company}
                </a>
              ) : (
                e.company
              )}
            </span>
            <span className="col-start-2 text-muted sm:col-start-3">{e.role}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
