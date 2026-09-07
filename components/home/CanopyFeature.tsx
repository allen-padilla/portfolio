import Image from "next/image";
import type { Project } from "@/lib/types";

/**
 * Animated feature card for Canopy. The mark is Canopy's own "Thought + Sprout"
 * logo (geometry from the joincanopy-web repo) and it tells the same story the
 * Canopy site tells on load: the seed drops in, sprouts, then the thought forms
 * above it. The three phone screens rise in behind it once the canopy blooms.
 * Everything is CSS keyframes; see .cf-* in globals.css. No client JS.
 */
export function CanopyFeature({ project }: { project: Project }) {
  const shots = project.images ?? [];
  return (
    <div className="cf relative aspect-video overflow-hidden border border-rule">
      <div className="cf-wash absolute inset-0" aria-hidden="true" />
      <div className="cf-stage absolute inset-0">

      <div className="cf-brand absolute top-[7%] left-[6%] z-10 flex flex-col gap-3">
        <svg
          className="cf-mark h-12 w-12 sm:h-[72px] sm:w-[72px]"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          width="72"
          height="72"
        >
          <mask id="cf-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <circle cx="16.8" cy="9.8" r="7.4" fill="#fff" />
            <circle cx="10.2" cy="14" r="6.2" fill="#fff" />
            <circle cx="23.6" cy="14" r="6.2" fill="#fff" />
            <ellipse cx="16.9" cy="29" rx="7.6" ry="13" fill="#000" />
          </mask>
          <rect className="cf-canopy" width="32" height="32" mask="url(#cf-mask)" />
          <circle className="cf-dot cf-dot-2" cx="8.6" cy="24.6" r="1.9" />
          <circle className="cf-dot cf-dot-1" cx="5.4" cy="28.6" r="1.2" />
          <path className="cf-stem" d="M17 24.4V21.2" strokeWidth="1.5" strokeLinecap="round" />
          <path className="cf-leaf cf-leaf-l" d="M17 21.4C16.8 19.7 15.6 18.9 14.1 19.1C14.2 20.7 15.4 21.6 17 21.4Z" />
          <path className="cf-leaf cf-leaf-r" d="M17.1 22.4C17.3 20.9 18.3 20.2 19.6 20.4C19.5 21.9 18.4 22.6 17.1 22.4Z" />
          <ellipse className="cf-seed" cx="17" cy="26.6" rx="2.3" ry="2.8" />
        </svg>
        <div className="cf-word">
          <span className="block font-serif text-[1.375rem] leading-none text-[#17140f] sm:text-[1.75rem]">Canopy</span>
          <span className="cf-tag mt-2 hidden font-mono sm:block text-[0.6875rem] tracking-[0.08em] uppercase text-[#3f7352]">
            Grow your ideas
          </span>
        </div>
      </div>

      <div className="cf-phones absolute inset-0" aria-hidden="true">
        {shots.slice(0, 3).map((img, i) => (
          <div key={img.src} className={`cf-phone cf-phone-${i + 1}`}>
            <Image
              src={img.src}
              alt=""
              width={img.width}
              height={img.height}
              sizes="(min-width: 768px) 180px, 40vw"
              loading="eager"
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
