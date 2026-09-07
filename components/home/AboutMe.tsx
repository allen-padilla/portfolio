import { site } from "@/content/site";

export function AboutMe() {
  return (
    <section id="about" className="mt-24 scroll-mt-24 space-y-6 border-t border-rule pt-3">
      <h2 className="label font-sans">About me</h2>
      <div className="max-w-measure space-y-5">
        {site.aboutMe.map((p, i) => (
          <p key={i} className="text-[1.125rem] leading-relaxed text-ink">
            {p}
          </p>
        ))}
        <p className="text-[1.125rem] leading-relaxed text-ink">
          <a href={site.repo} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            The source for this site is on GitHub
            <span aria-hidden="true" className="ml-1 text-[0.8em] text-gray">
              ↗
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
