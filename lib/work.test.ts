import { describe, it, expect } from "vitest";
import { brands, products, type Brand, type Product } from "../content/work";
import {
  STATUS_LABEL,
  sortProducts,
  groupWork,
  findWork,
  findBrand,
  findProduct,
  productsOf,
  allWorkSlugs,
  workPath,
} from "./work";

const b = (o: Partial<Brand> & { slug: string }): Brand => ({
  kind: "brand",
  name: o.slug,
  summary: "",
  description: [],
  since: "2025",
  ...o,
});
const p = (o: Partial<Product> & { slug: string }): Product => ({
  kind: "product",
  name: o.slug,
  summary: "",
  description: [],
  status: "live",
  period: { from: "2025" },
  ...o,
});

describe("STATUS_LABEL", () => {
  it("maps every status to Korean", () => {
    expect(STATUS_LABEL).toEqual({ live: "운영 중", soon: "준비 중", ended: "종료" });
  });
});

describe("sortProducts", () => {
  it("orders live, soon, ended then newer first", () => {
    const list = [
      p({ slug: "old-live", status: "live", period: { from: "2024" } }),
      p({ slug: "ended", status: "ended", period: { from: "2026" } }),
      p({ slug: "soon", status: "soon", period: { from: "2026" } }),
      p({ slug: "new-live", status: "live", period: { from: "2026" } }),
    ];
    expect(sortProducts(list).map((x) => x.slug)).toEqual([
      "new-live",
      "old-live",
      "soon",
      "ended",
    ]);
  });

  it("does not mutate input", () => {
    const list = [p({ slug: "a", status: "ended" }), p({ slug: "b" })];
    sortProducts(list);
    expect(list[0].slug).toBe("a");
  });
});

describe("groupWork", () => {
  it("groups products under brands, newest brand first, standalone last", () => {
    const brands = [b({ slug: "old", since: "2023" }), b({ slug: "new", since: "2025" })];
    const products = [
      p({ slug: "x", brand: "new" }),
      p({ slug: "solo" }),
      p({ slug: "y", brand: "old" }),
    ];
    const groups = groupWork(brands, products);
    expect(groups.map((g) => g.brand?.slug ?? null)).toEqual(["new", "old", null]);
    expect(groups[0].products.map((x) => x.slug)).toEqual(["x"]);
    expect(groups[2].products.map((x) => x.slug)).toEqual(["solo"]);
  });

  it("omits the standalone group when there are no standalone products", () => {
    const groups = groupWork([b({ slug: "a" })], [p({ slug: "x", brand: "a" })]);
    expect(groups).toHaveLength(1);
  });

  it("puts products whose brand is unknown into the standalone group", () => {
    const groups = groupWork([b({ slug: "a" })], [p({ slug: "orphan", brand: "missing" })]);
    expect(groups.map((g) => g.brand?.slug ?? null)).toEqual(["a", null]);
    expect(groups[1].products.map((x) => x.slug)).toEqual(["orphan"]);
  });
});

describe("findWork / productsOf / allWorkSlugs / workPath", () => {
  const brands = [b({ slug: "a" })];
  const products = [p({ slug: "x", brand: "a" }), p({ slug: "solo" })];

  it("finds a brand or product by slug", () => {
    expect(findWork("a", brands, products)?.kind).toBe("brand");
    expect(findWork("x", brands, products)?.kind).toBe("product");
    expect(findWork("nope", brands, products)).toBeUndefined();
  });

  it("lists sorted products of a brand", () => {
    expect(productsOf("a", products).map((x) => x.slug)).toEqual(["x"]);
  });

  it("lists every slug", () => {
    expect(allWorkSlugs(brands, products)).toEqual(["a", "x", "solo"]);
  });

  it("builds the detail path", () => {
    expect(workPath("x")).toBe("/work/x");
  });

  it("finds a brand by slug with findBrand", () => {
    expect(findBrand("a", brands)?.kind).toBe("brand");
  });

  it("does not find a product slug with findBrand", () => {
    expect(findBrand("x", brands)).toBeUndefined();
  });

  it("finds a product by slug with findProduct", () => {
    expect(findProduct("x", products)?.kind).toBe("product");
  });

  it("does not find a brand slug with findProduct", () => {
    expect(findProduct("a", products)).toBeUndefined();
  });
});

describe("content/work.ts data integrity", () => {
  const brandSlugs = new Set(brands.map((b) => b.slug));
  const productSlugs = new Set(products.map((p) => p.slug));

  it("has unique slugs across brands and products", () => {
    const all = allWorkSlugs(brands, products);
    expect(new Set(all).size).toBe(all.length);
  });

  it("every product.brand points to an existing brand", () => {
    for (const p of products) {
      if (p.brand) expect(brandSlugs.has(p.brand), `${p.slug} → brand ${p.brand}`).toBe(true);
    }
  });

  it("every product.successor points to an existing product", () => {
    for (const p of products) {
      if (p.successor) expect(productSlugs.has(p.successor), `${p.slug} → successor ${p.successor}`).toBe(true);
    }
  });

  it("ended products have an end date; others do not", () => {
    for (const p of products) {
      expect(Boolean(p.period.to), `${p.slug} period.to`).toBe(p.status === "ended");
    }
  });
});
