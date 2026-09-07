import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  arrow?: boolean;
};

export function ExternalLink({ children, arrow = false, className = "", ...rest }: Props) {
  return (
    <a target="_blank" rel="noreferrer" className={className} {...rest}>
      {children}
      {arrow ? <span aria-hidden="true"> ↗</span> : null}
    </a>
  );
}
