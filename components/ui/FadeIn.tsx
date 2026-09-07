import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  index?: number;
  as?: ElementType;
  className?: string;
};

/** Server-safe: emits only a class and a CSS variable for stagger order. */
export function FadeIn({ children, index = 0, as: Tag = "div", className = "" }: Props) {
  const style = { "--i": index } as CSSProperties;
  return (
    <Tag className={`fade-in ${className}`} style={style}>
      {children}
    </Tag>
  );
}
