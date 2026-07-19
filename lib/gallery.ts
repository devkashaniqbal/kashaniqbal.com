import fs from "fs";
import path from "path";

export type GalleryImage = {
  src: string;
  alt: string;
};

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/** Turns "shopify-store-build-01.jpg" into "Shopify store build". */
function titleFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  const words = base
    .replace(/[-_]+/g, " ")
    .replace(/\b\d+\b/g, "")
    .trim();
  if (!words) return "Kashan Iqbal — behind the build";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * Reads every image dropped into /public/gallery. Optional captions —
 * for stronger, hand-written alt text — go in
 * /public/gallery/captions.json as { "filename.jpg": "Alt text" }.
 */
export function getGalleryImages(): GalleryImage[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(GALLERY_DIR);
  } catch {
    return [];
  }

  let captions: Record<string, string> = {};
  try {
    const raw = fs.readFileSync(
      path.join(GALLERY_DIR, "captions.json"),
      "utf-8"
    );
    captions = JSON.parse(raw);
  } catch {
    // no captions file — fall back to filename-derived alt text
  }

  return files
    .filter((f) => EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((filename) => ({
      src: `/gallery/${filename}`,
      alt:
        captions[filename] ??
        `${titleFromFilename(filename)} — Kashan Iqbal, AI engineer and full-stack developer`,
    }));
}
