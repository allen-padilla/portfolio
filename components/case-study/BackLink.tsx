import Link from "next/link";

export function BackLink() {
  return (
    <Link href="/#work" className="label inline-flex items-center gap-2 no-underline transition-colors hover:text-ink">
      <span aria-hidden="true">←</span> Back
    </Link>
  );
}
