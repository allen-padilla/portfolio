import { ExperienceLedger } from "@/components/home/ExperienceLedger";
import { site } from "@/content/site";

/** Hyphenated compounds like "full-stack" should never split across lines in the headline. */
function keepTogether(text: string) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    /\S+-\S+/.test(part) ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function Hero() {
  return (
    <section className="grid gap-12 pt-14 pb-16 md:grid-cols-2 md:gap-10 lg:items-center lg:pt-20 lg:pb-20">
      <div>
        <h1 className="text-display max-w-[22ch]">
          {keepTogether(site.hero.lead)} <em className="text-accent">{site.hero.italic}</em>
          {site.hero.tail}
        </h1>
        <p className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-muted">{site.hero.sub}</p>
      </div>
      <ExperienceLedger />
    </section>
  );
}
