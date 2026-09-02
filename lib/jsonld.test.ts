import { describe, it, expect } from "vitest";
import { organizationJsonLd, webSiteJsonLd, workJsonLd } from "./jsonld";
import type { Brand, Product } from "../content/work";

const site = {
  name: "슈퍼베이스",
  nameEn: "Superbase",
  url: "https://superbaseapp.com",
  email: "tube@thesuperbase.com",
  social: [{ label: "GitHub", url: "https://github.com/x" }],
};

describe("organizationJsonLd", () => {
  it("includes name, alternateName, url, email, sameAs", () => {
    expect(organizationJsonLd(site)).toEqual({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "슈퍼베이스",
      alternateName: "Superbase",
      url: "https://superbaseapp.com",
      email: "tube@thesuperbase.com",
      sameAs: ["https://github.com/x"],
    });
  });
  it("omits sameAs when there are no social links", () => {
    expect(organizationJsonLd({ ...site, social: [] })).not.toHaveProperty("sameAs");
  });
});

describe("webSiteJsonLd", () => {
  it("describes the site in Korean", () => {
    expect(webSiteJsonLd(site)).toMatchObject({
      "@type": "WebSite",
      name: "슈퍼베이스",
      alternateName: "Superbase",
      url: "https://superbaseapp.com",
      inLanguage: "ko",
    });
  });
});

describe("workJsonLd", () => {
  const brand: Brand = {
    kind: "brand",
    slug: "oneul",
    name: "오늘",
    summary: "시리즈",
    description: [],
    since: "2025",
  };
  const product: Product = {
    kind: "product",
    slug: "oneul-moim",
    name: "오늘의모임",
    summary: "클럽 운영",
    description: [],
    status: "live",
    brand: "oneul",
    url: "https://pc.oneul.day",
    period: { from: "2025" },
  };

  it("renders a product as SoftwareApplication with its external url", () => {
    expect(workJsonLd(product, site)).toEqual({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "오늘의모임",
      description: "클럽 운영",
      url: "https://pc.oneul.day",
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      author: { "@type": "Organization", name: "슈퍼베이스", url: "https://superbaseapp.com" },
    });
  });

  it("falls back to the detail page url when a product has no url", () => {
    const { url } = workJsonLd({ ...product, url: undefined }, site);
    expect(url).toBe("https://superbaseapp.com/work/oneul-moim");
  });

  it("renders a brand as Brand", () => {
    expect(workJsonLd(brand, site)).toEqual({
      "@context": "https://schema.org",
      "@type": "Brand",
      name: "오늘",
      description: "시리즈",
      url: "https://superbaseapp.com/work/oneul",
    });
  });
});
