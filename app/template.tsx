import { ViewTransition } from "react";

/**
 * template.tsx remounts on every navigation, so wrapping it in a ViewTransition
 * gives each route change an exit/enter crossfade. Named titles inside morph
 * between the project rows and the case-study heading. Direct loads and crawlers
 * are unaffected: transitions only run on in-app navigation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
