import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saroj & Rekha — Wedding",
    short_name: "S & R",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#9e2a3a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
