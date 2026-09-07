import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main>
      <Container className="py-32">
        <p className="label mb-4">404</p>
        <h1 className="text-h2 mb-6">There is nothing at this address.</h1>
        <Link href="/" className="label text-accent hover:text-ink">
          ← Back to work
        </Link>
      </Container>
    </main>
  );
}
