import Image from "next/image";
import type { Project } from "@/lib/types";

/**
 * Animated feature card for the CFSM Operations Platform. There's no logo, so
 * the wordmark is the app's own name ("DatabaseWEB", as it appears in the
 * sidebar) with its square icon, in the app's AdminLTE colours. The three tile
 * colours from the dashboard pop in as accents, then the desktop windows
 * cascade up behind. Pure CSS keyframes; see .of-* in globals.css.
 */
export function OpsFeature({ project }: { project: Project }) {
  const shots = (project.images ?? []).slice(0, 4);
  return (
    <div className="of relative aspect-video overflow-hidden border border-rule">
      <div className="of-wash absolute inset-0" aria-hidden="true" />
      <div className="of-stage absolute inset-0">

      <div className="of-brand absolute top-[9%] left-[6%] z-10">
        <div className="flex items-center gap-3">
          <span className="of-icon grid h-8 w-8 place-items-center bg-white/10 sm:h-10 sm:w-10">
            <span className="block h-3 w-3 border-2 border-white sm:h-4 sm:w-4" />
          </span>
          <span className="of-word font-sans text-[1.125rem] leading-none text-white sm:text-[1.5rem]">
            Database<span className="font-light">WEB</span>
          </span>
        </div>
        <div className="mt-3 flex gap-1.5 sm:mt-4 sm:gap-2" aria-hidden="true">
          <span className="of-tile of-tile-1 block h-2 w-6 sm:h-2.5 sm:w-8" />
          <span className="of-tile of-tile-2 block h-2 w-6 sm:h-2.5 sm:w-8" />
          <span className="of-tile of-tile-3 block h-2 w-6 sm:h-2.5 sm:w-8" />
        </div>
        <span className="of-tag mt-4 hidden font-mono sm:block text-[0.6875rem] tracking-[0.08em] text-white/60 uppercase">
          Operations platform
        </span>
      </div>

      <div className="of-windows absolute inset-0" aria-hidden="true">
        {shots.map((img, i) => (
          <div key={img.src} className={`of-window of-window-${i + 1}`}>
            <Image
              src={img.src}
              alt=""
              width={img.width}
              height={img.height}
              sizes="(min-width: 768px) 360px, 70vw"
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
