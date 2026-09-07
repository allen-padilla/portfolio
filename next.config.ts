import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Standalone is for the Dockerfile (Coolify). Vercel manages its own output and
  // fails on the standalone tracing step, so skip it there. VERCEL=1 is set by Vercel at build.
  output: process.env.VERCEL ? undefined : "standalone",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  typedRoutes: true,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
};

const withMDX = createMDX({
  options: {
    // Turbopack requires plugin names as strings (functions can't cross into Rust).
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
