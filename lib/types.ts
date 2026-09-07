export type ProjectStatus = "Shipped" | "In progress" | "Archived";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  org: string;
  year: string;
  status: ProjectStatus;
  stack: string[];
  /** One line. Used in the ledger row and as the page's meta description. */
  summary: string;
  /** Short meta description for search results, under 155 characters. Falls back to summary. */
  description?: string;
  /** Eligible for the featured image band, but only if images[0] exists. */
  featured?: boolean;
  /** Link out instead of rendering a case study at /projects/[slug]. */
  external?: string;
  images?: ProjectImage[];
  role?: string;
  timeline?: string;
  team?: string;
  /** Internal system: renders a standard "details generalized" note. */
  confidential?: boolean;
}

export interface Experience {
  start: string;
  end: string | "now";
  company: string;
  role: string;
  url?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface TocItem {
  id: string;
  text: string;
}
