import Link from "next/link";
import Button from "./Button";
import Container from "./Container";
import NavLink from "./NavLink";
import { site } from "@/content/site";

export default function Header() {
  return (
    <header>
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-fg">
          {site.name}
        </Link>
        <nav aria-label="주요 메뉴" className="flex items-center gap-5 md:gap-8">
          <NavLink href="/#products">서비스</NavLink>
          <NavLink href="/about">소개</NavLink>
          <NavLink href="/contact">문의</NavLink>
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            문의하기
          </Button>
        </div>
      </Container>
    </header>
  );
}
