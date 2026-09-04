import { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${portfolioData.name} — ${portfolioData.professionalTitle}`,
    short_name: portfolioData.name,
    description: `${portfolioData.name} is a Frontend Developer & UI Engineer building clean, responsive web experiences.`,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
