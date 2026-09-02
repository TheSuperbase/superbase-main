import Link from "next/link";
import NavLink from "./NavLink";
import { site } from "@/content/site";

export default function Header() {
  return (
    <header className="mx-auto flex h-14 w-full max-w-[640px] items-center justify-between px-5 md:px-6">
      <Link href="/" className="font-extrabold tracking-tight text-fg">
        {site.name}
      </Link>
      <nav aria-label="주요 메뉴" className="flex items-center gap-5">
        <NavLink href="/about">소개</NavLink>
        <NavLink href="/#work">만든 것들</NavLink>
        <NavLink href="/contact">문의</NavLink>
      </nav>
    </header>
  );
}
