import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/jsonld";

const suite = localFont({
  src: "./fonts/SUIT-Variable.woff2",
  variable: "--font-suite",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} (${site.nameEn}) | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [site.name, site.nameEn, "슈퍼베이스 회사", "오늘의모임", "오늘의대회"],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    url: site.url,
    title: `${site.name} (${site.nameEn})`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  other: { "google-adsense-account": site.adsense },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={suite.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          본문 바로가기
        </a>
        <JsonLd data={[organizationJsonLd(site), webSiteJsonLd(site)]} />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
