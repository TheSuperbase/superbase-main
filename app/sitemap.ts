import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allWorkSlugs, workPath } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["/", "/about", "/contact", "/privacy"];
  const work = allWorkSlugs().map(workPath);
  return [...fixed, ...work].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
