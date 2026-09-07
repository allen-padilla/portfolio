import type { ReactNode } from "react";
import { BackLink } from "@/components/case-study/BackLink";
import { Toc } from "@/components/case-study/Toc";
import type { TocItem } from "@/lib/types";

type Props = { toc: TocItem[]; header: ReactNode; children: ReactNode };

export function CaseStudyLayout({ toc, header, children }: Props) {
  return (
    <div className="mx-auto w-full max-w-site px-6 pt-10 pb-8 sm:px-8 lg:px-12 lg:grid lg:grid-cols-[15rem_1fr] lg:gap-16 lg:pt-14">
      <aside className="mb-10 lg:mb-0">
        <div className="lg:sticky lg:top-24">
          <BackLink />
          {toc.length > 0 ? (
            <>
              {/* Desktop: always visible. */}
              <div className="mt-8 hidden lg:block">
                <Toc items={toc} />
              </div>
              {/* Mobile: collapsible. */}
              <details className="mt-6 border-y border-rule py-3 lg:hidden">
                <summary className="label cursor-pointer list-none">Contents</summary>
                <div className="pt-4">
                  <Toc items={toc} />
                </div>
              </details>
            </>
          ) : null}
        </div>
      </aside>
      <article className="min-w-0">
        {header}
        <div className="prose">{children}</div>
      </article>
    </div>
  );
}
