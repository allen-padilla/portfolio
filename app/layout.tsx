import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { site } from "@/content/site";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata = defaultMetadata;

// Static weight-400 instances only: the serif is never used at another weight,
// and the variable files with the optical-size axis were ~140 KB each.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Winnipeg", addressRegion: "MB", addressCountry: "CA" },
  sameAs: site.socials.filter((s) => s.href.startsWith("https://")).map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <TopBar />
        <div className="flex-1">{children}</div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
