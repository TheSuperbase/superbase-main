import {
  brands as allBrands,
  products as allProducts,
  type Brand,
  type Product,
  type Status,
  type Work,
} from "../content/work";

export const STATUS_LABEL: Record<Status, string> = {
  live: "운영 중",
  soon: "준비 중",
  ended: "종료",
};

const STATUS_ORDER: Record<Status, number> = { live: 0, soon: 1, ended: 2 };

export type WorkGroup = { brand: Brand | null; products: Product[] };

export function sortProducts(list: Product[]): Product[] {
  return [...list].sort((a, b) => {
    const s = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    if (s !== 0) return s;
    return b.period.from.localeCompare(a.period.from);
  });
}

export function productsOf(brandSlug: string, products: Product[] = allProducts): Product[] {
  return sortProducts(products.filter((p) => p.brand === brandSlug));
}

export function groupWork(
  brands: Brand[] = allBrands,
  products: Product[] = allProducts,
): WorkGroup[] {
  const sortedBrands = [...brands].sort((a, b) => b.since.localeCompare(a.since));
  const groups: WorkGroup[] = sortedBrands.map((brand) => ({
    brand,
    products: productsOf(brand.slug, products),
  }));
  const known = new Set(sortedBrands.map((b) => b.slug));
  const standalone = sortProducts(products.filter((p) => !p.brand || !known.has(p.brand)));
  if (standalone.length > 0) groups.push({ brand: null, products: standalone });
  return groups;
}

export function findWork(
  slug: string,
  brands: Brand[] = allBrands,
  products: Product[] = allProducts,
): Work | undefined {
  return brands.find((b) => b.slug === slug) ?? products.find((p) => p.slug === slug);
}

export function findBrand(slug: string, brands: Brand[] = allBrands): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function findProduct(slug: string, products: Product[] = allProducts): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function allWorkSlugs(
  brands: Brand[] = allBrands,
  products: Product[] = allProducts,
): string[] {
  return [...brands.map((b) => b.slug), ...products.map((p) => p.slug)];
}

export function workPath(slug: string): string {
  return `/work/${slug}`;
}
