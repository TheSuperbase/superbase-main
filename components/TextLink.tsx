import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

const base =
  "inline-block py-3 -my-3 underline underline-offset-4 transition-colors duration-150 hover:text-fg-2";

export default function TextLink({ href, children, external = false, className = "" }: Props) {
  const cls = className ? `${base} ${className}` : base;
  if (external || href.startsWith("mailto:")) {
    const newTab = external && !href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {newTab && <span className="sr-only"> (새 창에서 열림)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
