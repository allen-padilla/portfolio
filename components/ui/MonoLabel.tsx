import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  size?: "md" | "sm";
  className?: string;
};

export function MonoLabel({ children, as: Tag = "span", size = "md", className = "" }: Props) {
  const base = size === "sm" ? "label-sm" : "label";
  return <Tag className={`${base} ${className}`}>{children}</Tag>;
}
