import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "site" | "measure";
  className?: string;
};

export function Container({ children, size = "site", className = "" }: Props) {
  const width = size === "site" ? "max-w-site" : "max-w-measure";
  return <div className={`mx-auto w-full ${width} px-6 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}
