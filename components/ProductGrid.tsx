import Link from "next/link";
import type { Product } from "@/content/work";
import { formatMonth } from "@/lib/date";
import { workPath, type WorkGroup } from "@/lib/work";
import StatusBadge from "./StatusBadge";

function Mark({ name, muted = false }: { name: string; muted?: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-extrabold ${
        muted ? "bg-surface text-fg-3" : "bg-fg text-bg"
      }`}
    >
      {name.slice(0, 1)}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  const ended = product.status === "ended";
  const host = product.url ? new URL(product.url).host : null;
  return (
    <li className="h-full">
      <Link
        href={workPath(product.slug)}
        className={`group flex h-full flex-col rounded-[20px] border border-line bg-bg p-6 transition-[border-color,background-color] duration-150 hover:border-fg-3 ${
          ended ? "opacity-75" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <Mark name={product.name} muted={product.status !== "live"} />
          <StatusBadge status={product.status} />
        </div>
        <h3 className="mt-5 text-xl font-extrabold tracking-[-0.02em] group-hover:underline">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-fg-2">{product.summary}</p>
        <p className="mt-5 text-sm font-semibold text-fg-3">
          {host ?? (ended ? "운영 종료" : "준비 중")}
        </p>
      </Link>
    </li>
  );
}

function NextCard() {
  return (
    <li className="h-full">
      <Link
        href="/contact"
        className="flex h-full flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-line p-6 text-center transition-[border-color] duration-150 hover:border-fg-3"
      >
        <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-line text-xl text-fg-3">
          +
        </span>
        <span className="mt-4 font-bold">다음 서비스를 준비하고 있습니다</span>
        <span className="mt-1 text-sm text-fg-2">불편한 것이 있다면 알려주세요.</span>
      </Link>
    </li>
  );
}

function GroupHeader({ group }: { group: WorkGroup }) {
  const { brand } = group;
  if (!brand) {
    return (
      <div className="mb-5">
        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-fg-3">그 밖의 서비스</h3>
      </div>
    );
  }
  return (
    <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1">
      <h3 className="text-xl font-extrabold tracking-[-0.02em]">
        <Link href={workPath(brand.slug)} className="hover:underline">
          {brand.name} 시리즈
        </Link>
      </h3>
      <p className="text-[15px] text-fg-2">
        {brand.summary} <span className="text-fg-3">{formatMonth(brand.since)}부터</span>
      </p>
    </div>
  );
}

export default function ProductGrid({
  groups,
  showGroupHeader = true,
  withNext = false,
}: {
  groups: WorkGroup[];
  showGroupHeader?: boolean;
  withNext?: boolean;
}) {
  return (
    <div className="flex flex-col gap-12">
      {groups.map((g, i) => (
        <div key={g.brand?.slug ?? "standalone"}>
          {showGroupHeader && <GroupHeader group={g} />}
          <ul role="list" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {g.products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
            {withNext && i === 0 && <NextCard />}
          </ul>
        </div>
      ))}
    </div>
  );
}
