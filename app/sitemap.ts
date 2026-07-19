import type { MetadataRoute } from "next";
import { getGalleryImages } from "@/lib/gallery";
import { getSortedPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const galleryImages = getGalleryImages().map(
    (img) => `https://kashaniqbal.com${img.src}`
  );

  const posts = getSortedPosts().map((post) => ({
    url: `https://kashaniqbal.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: "https://kashaniqbal.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://kashaniqbal.com/portrait.png",
        ...galleryImages,
      ],
    },
    {
      url: "https://kashaniqbal.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}
