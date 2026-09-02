import type { Work } from "../content/work";
import { workPath } from "./work";

type SiteInfo = {
  name: string;
  nameEn: string;
  url: string;
  email: string;
  social: ReadonlyArray<{ label: string; url: string }>;
};

export function organizationJsonLd(site: SiteInfo) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    email: site.email,
  };
  return site.social.length > 0 ? { ...base, sameAs: site.social.map((s) => s.url) } : base;
}

export function webSiteJsonLd(site: SiteInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    inLanguage: "ko",
  };
}

export function workJsonLd(work: Work, site: SiteInfo) {
  const pageUrl = `${site.url}${workPath(work.slug)}`;
  if (work.kind === "brand") {
    return {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: work.name,
      description: work.summary,
      url: work.url ?? pageUrl,
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: work.name,
    description: work.summary,
    url: work.url ?? pageUrl,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    author: { "@type": "Organization", name: site.name, url: site.url },
  };
}
