import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-full max-w-[640px] px-5 py-10 text-sm text-fg-3 md:px-6">
      <div className="flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {site.name} ({site.nameEn}) · {site.business.type} {site.business.owner}
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${site.email}`} className="transition-colors duration-150 hover:text-fg">
            {site.email}
          </a>
          <Link href="/privacy" className="transition-colors duration-150 hover:text-fg">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
