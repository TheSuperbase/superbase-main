import Link from "next/link";
import Container from "./Container";
import { site } from "@/content/site";
import { products } from "@/content/work";
import { workPath } from "@/lib/work";

const link = "transition-colors duration-150 hover:text-fg";

export default function Footer() {
  const year = new Date().getFullYear();
  const listed = products.filter((p) => p.status !== "ended");
  return (
    <footer className="border-t border-line">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-extrabold tracking-tight">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-fg-3">
              상호 {site.name} ({site.nameEn})
              <br />
              {site.business.type} · 대표 {site.business.owner}
              <br />
              <a href={`mailto:${site.email}`} className={link}>
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-fg-3">서비스</p>
            <ul role="list" className="mt-3 flex flex-col gap-2 text-[15px] text-fg-2">
              {listed.map((p) => (
                <li key={p.slug}>
                  <Link href={workPath(p.slug)} className={link}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-fg-3">회사</p>
            <ul role="list" className="mt-3 flex flex-col gap-2 text-[15px] text-fg-2">
              <li>
                <Link href="/about" className={link}>
                  소개
                </Link>
              </li>
              <li>
                <Link href="/contact" className={link}>
                  문의
                </Link>
              </li>
              {site.social.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className={link}>
                    {s.label}
                    <span className="sr-only"> (새 창에서 열림)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-fg-3">법적 고지</p>
            <ul role="list" className="mt-3 flex flex-col gap-2 text-[15px] text-fg-2">
              <li>
                <Link href="/privacy" className={link}>
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-line pt-6 text-sm text-fg-3">
          © {year} {site.name} ({site.nameEn}). All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
