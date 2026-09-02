import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allWorkSlugs, workPath } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/about", "/contact", "/privacy"];
  const work = allWorkSlugs().map(workPath);
  return [...fixed, ...work].map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
