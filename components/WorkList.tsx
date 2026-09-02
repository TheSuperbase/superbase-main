import Link from "next/link";
import type { Product } from "@/content/work";
import { formatMonth } from "@/lib/date";
import { groupWork, workPath, type WorkGroup } from "@/lib/work";
import StatusBadge from "./StatusBadge";

function ProductRow({ product }: { product: Product }) {
  const ended = product.status === "ended";
  return (
    <li className="border-t border-line first:border-t-0">
      <Link
        href={workPath(product.slug)}
        className="group grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-3 md:grid-cols-[9rem_1fr_auto] md:items-center"
      >
        <span className={`min-w-0 break-words font-semibold ${ended ? "text-fg-3" : "text-fg"} group-hover:underline`}>
          {product.name}
        </span>
        <span className="row-start-2 col-span-2 text-sm text-fg-2 md:row-start-auto md:col-span-1">
          <span className={ended ? "text-fg-3" : undefined}>{product.summary}</span>
        </span>
        <StatusBadge status={product.status} />
      </Link>
    </li>
  );
}

function Group({ group, showHeader = true }: { group: WorkGroup; showHeader?: boolean }) {
  const { brand, products } = group;
  return (
    <div className="py-3">
      {showHeader && (
        <div className="mb-1 flex items-baseline justify-between">
          <h3 className="text-lg font-extrabold tracking-tight">
            {brand ? (
              <Link href={workPath(brand.slug)} className="hover:underline">
                {brand.name}
              </Link>
            ) : (
              <span className="text-fg-3">단독 제품</span>
            )}
          </h3>
          {brand && (
            <span className="text-xs text-fg-3">
              {brand.summary} · {formatMonth(brand.since)} ~
            </span>
          )}
        </div>
      )}
      <ul className="md:pl-4" role="list">
        {products.map((p) => (
          <ProductRow key={p.slug} product={p} />
        ))}
      </ul>
    </div>
  );
}

export default function WorkList({
  groups = groupWork(),
  showGroupHeader = true,
}: {
  groups?: WorkGroup[];
  showGroupHeader?: boolean;
}) {
  return (
    <div className="divide-y divide-line">
      {groups.map((g) => (
        <Group key={g.brand?.slug ?? "standalone"} group={g} showHeader={showGroupHeader} />
      ))}
    </div>
  );
}
