import { site } from "@/content/site";

export function AboutMe() {
  return (
    <section className="mt-24 space-y-6 border-t border-rule pt-3">
      <h2 className="label font-sans">About me</h2>
      <div className="max-w-measure space-y-5">
        {site.aboutMe.map((p, i) => (
          <p key={i} className="text-[1.125rem] leading-relaxed text-ink">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
