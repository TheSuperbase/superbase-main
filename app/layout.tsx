import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "슈퍼베이스 (Superbase) - 혁신적인 디지털 서비스",
    template: "%s | 슈퍼베이스",
  },
  description:
    "슈퍼베이스는 다양한 디지털 서비스를 제공하는 개인사업자입니다. 혁신적이고 사용자 친화적인 웹 서비스를 경험해보세요.",
  keywords: ["슈퍼베이스", "Superbase", "디지털 서비스", "웹 서비스"],
  authors: [{ name: "슈퍼베이스" }],
  creator: "슈퍼베이스",
  publisher: "슈퍼베이스",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "슈퍼베이스",
    title: "슈퍼베이스 (Superbase) - 혁신적인 디지털 서비스",
    description:
      "슈퍼베이스는 다양한 디지털 서비스를 제공하는 개인사업자입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4113419530280094" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
