import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
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
