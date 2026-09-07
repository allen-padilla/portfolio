import { site } from "@/content/site";

/**
 * Wordmark footer: the name set very large in the serif with a red full stop,
 * then one row of links under an ink rule. External links carry an arrow.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto w-full max-w-site px-6 pt-9 pb-7 sm:px-8 lg:px-12">
        <p className="font-serif text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] tracking-[-0.02em] text-ink">
          {site.name}
          <span className="text-accent">.</span>
        </p>
        <div className="mt-6 flex flex-col gap-3 border-t border-ink pt-4 sm:flex-row sm:items-baseline sm:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => {
              const external = s.href.startsWith("http") || s.href.endsWith(".pdf");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={external ? "_blank" : undefined}
                  rel="noreferrer"
                  className="font-sans text-[0.9375rem] text-ink no-underline transition-colors hover:text-accent"
                >
                  {s.label}
                  {external ? (
                    <span aria-hidden="true" className="ml-1 text-[0.8em] text-gray">
                      ↗
                    </span>
                  ) : null}
                </a>
              );
            })}
          </nav>
          <p className="label-sm">
            Designed + built in {site.city} · {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
