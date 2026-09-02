"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active =
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`text-sm transition-colors duration-150 hover:text-fg ${
        active ? "text-fg" : "text-fg-2"
      }`}
    >
      {children}
    </Link>
  );
}
