import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const ogTitle = title ? `${title} | ${site.name}` : `${site.name} (${site.nameEn})`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: site.name,
      title: ogTitle,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title: ogTitle, description },
  };
}
