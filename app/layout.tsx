import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/jsonld";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} (${site.nameEn}) | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [site.name, site.nameEn, "1인 메이커", "오늘의모임", "오늘의대회"],
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
    <html lang="ko" className={pretendard.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          본문 바로가기
        </a>
        <JsonLd data={[organizationJsonLd(site), webSiteJsonLd(site)]} />
        <Header />
        <main id="main" className="mx-auto w-full max-w-[640px] flex-1 px-5 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
