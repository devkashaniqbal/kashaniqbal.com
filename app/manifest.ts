import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kashan Iqbal — AI Engineer · Full-Stack Developer · Educator",
    short_name: "Kashan Iqbal",
    description:
      "Courses, digital products, and systems for building AI products, automating businesses, and creating income online.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
