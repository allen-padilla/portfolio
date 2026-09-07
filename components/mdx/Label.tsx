import type { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return <p className="label-sm mt-8 mb-2">{children}</p>;
}
