import Link from "next/link";
import { site } from "@/content/site";

const item = "pb-1.5 font-sans text-[0.9375rem] leading-none no-underline transition-colors";

/**
 * Name and role side by side in mono caps, a sentence-case nav with the red
 * underline on Work, and an ink rule under the band. Not sticky. Server component.
 */
export function TopBar() {
  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex w-full max-w-site flex-col gap-4 px-6 pt-5 pb-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Link href="/" className="label flex items-baseline gap-3 no-underline">
          <span className="text-ink">{site.name}</span>
          <span className="hidden sm:inline">· {site.role}</span>
        </Link>
        <nav aria-label="Primary" className="flex items-end gap-6 sm:gap-8">
          <Link href="/#work" className={`${item} border-b-2 border-accent text-ink`}>
            Work
          </Link>
          <a href={site.resume} target="_blank" rel="noreferrer" className={`${item} border-b-2 border-transparent text-muted hover:text-ink`}>
            Resume
          </a>
          <a
            href="https://github.com/allen-padilla"
            target="_blank"
            rel="noreferrer"
            className={`${item} hidden border-b-2 border-transparent text-muted hover:text-ink md:inline-block`}
          >
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className={`${item} border-b-2 border-transparent text-muted hover:text-ink`}>
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
