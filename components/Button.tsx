import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "inverse";
  size?: "md" | "sm";
  external?: boolean;
};

const BASE =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out motion-safe:active:scale-[0.97]";

const SIZE = {
  md: "h-12 px-6 text-[15px]",
  sm: "h-10 px-4 text-sm",
};

const VARIANT = {
  primary: "bg-fg text-bg hover:opacity-90",
  ghost: "border border-line bg-bg text-fg hover:bg-surface",
  inverse: "bg-bg text-fg hover:opacity-90",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
}: Props) {
  const cls = [BASE, SIZE[size], VARIANT[variant]].join(" ");
  const isMail = href.startsWith("mailto:");
  if (external || isMail) {
    const newTab = external && !isMail;
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
