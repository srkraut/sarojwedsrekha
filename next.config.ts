import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static HTML export — host anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
