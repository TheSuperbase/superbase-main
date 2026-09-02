# 슈퍼베이스 웹사이트 리디자인 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** superbaseapp.com을 "혼자 만들고 직접 운영하는 1인 메이커" 슈퍼베이스의 사이트로 처음부터 다시 만든다. 에디토리얼 미니멀 디자인, 브랜드 > 제품 계층 데이터, SEO 기반을 갖춘다.

**Architecture:** 모든 콘텐츠는 `content/`의 TypeScript 데이터 파일에서 읽는다. `lib/`은 순수 함수(정렬, 그룹핑, JSON-LD 생성)만 담고 vitest로 테스트한다. 페이지는 전부 서버 컴포넌트이며, 클라이언트 컴포넌트는 헤더의 현재 위치 표시 하나뿐이다. 스타일은 Tailwind CSS 4 토큰과 CSS 변수로만 정의하고, 색은 배경, 텍스트 3단계, 선, 상태용 초록 하나로 제한한다.

**Tech Stack:** Next.js 16.1.1 (App Router), React 19, TypeScript 5, Tailwind CSS 4, pnpm, vitest (lib 테스트), Pretendard Variable (로컬 호스팅), `next/og` (OG 이미지)

**Spec:** `docs/superpowers/specs/2026-09-03-superbase-redesign-design.md`

**디자인 스킬 사용 규칙:** Task 5, 6, 7, 8, 9 (스타일, 컴포넌트, 페이지)를 시작하기 전에 `frontend-design:frontend-design`, `emil-design-eng`, `ui-ux-pro-max:ui-ux-pro-max` 스킬을 Skill 도구로 로드하고 그 지침을 따른다. 단, 이 계획에 적힌 토큰, 폭, 색 제한, 모션 값은 스펙에서 확정된 것이므로 스킬 지침보다 우선한다.

**커밋 규칙:** 모든 커밋 메시지 끝에 다음 두 줄을 붙인다.

```
Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01LBz1tc9xA2EBdTaFsMHMs8
```

---

## 파일 구조

| 파일 | 책임 |
|---|---|
| `content/site.ts` | 사이트 이름, URL, 이메일, 사업자 정보, 소셜 링크(빈 배열), AdSense ID |
| `content/now.ts` | 지금 하는 일 문장과 갱신 월 |
| `content/work.ts` | Brand, Product 타입과 초기 데이터 |
| `lib/work.ts` | 상태 라벨, 정렬, 브랜드별 그룹핑, slug 조회, 경로 생성 |
| `lib/date.ts` | `"2026-09"` → `"2026년 9월"` |
| `lib/jsonld.ts` | Organization, WebSite, 상세 페이지 JSON-LD 객체 생성 |
| `lib/og.tsx` | OG 이미지 공용 렌더러 |
| `lib/*.test.ts` | 위 순수 함수 테스트 |
| `app/fonts/PretendardVariable.woff2` | 본문 폰트 |
| `app/fonts/Pretendard-Bold.otf` | OG 이미지 전용 폰트 (satori는 woff2를 못 읽음) |
| `app/globals.css` | 토큰, 다크 모드, 진입 모션 keyframes |
| `app/layout.tsx` | 폰트, 메타데이터 기본값, JSON-LD, Header/Footer |
| `app/page.tsx` | 홈 |
| `app/about/page.tsx` | 소개 |
| `app/contact/page.tsx` | 문의 |
| `app/privacy/page.tsx` | 개인정보처리방침 |
| `app/work/[slug]/page.tsx` | 브랜드/제품 상세 |
| `app/work/[slug]/opengraph-image.tsx` | 상세 OG 이미지 |
| `app/opengraph-image.tsx` | 기본 OG 이미지 |
| `app/not-found.tsx` | 404 |
| `app/sitemap.ts`, `app/robots.ts` | SEO |
| `components/Header.tsx` | 로고와 내비게이션 |
| `components/NavLink.tsx` | 현재 경로 표시용 클라이언트 링크 |
| `components/Footer.tsx` | 저작권, 사업자, 이메일, 개인정보처리방침 |
| `components/Section.tsx` | 상단 선 + 라벨 + 내용 |
| `components/StatusBadge.tsx` | 운영 중 / 준비 중 / 종료 배지 |
| `components/WorkList.tsx` | 브랜드 > 제품 계층 목록 |
| `components/Reveal.tsx` | 진입 모션 래퍼 |
| `components/JsonLd.tsx` | `<script type="application/ld+json">` |
| `components/Prose.tsx` | 문단 배열을 `<p>`로 렌더 |

삭제: `app/services/`, `app/terms/`, `components/ServiceCard.tsx`, `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`, `planning.md`

---

### Task 1: 환경 준비와 테스트 러너

**Files:**
- Modify: `package.json`
- Delete: `planning.md`, `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

- [ ] **Step 1: 의존성 설치와 현재 빌드 확인**

Run:
```bash
cd /Users/jeonjeonghoon/Documents/Personal/Projects/superbase-main
pnpm install
pnpm build 2>&1 | tail -15
```
Expected: `✓ Compiled successfully` 와 라우트 목록. 실패하면 원인을 먼저 고친다.

- [ ] **Step 2: vitest 추가**

Run:
```bash
pnpm add -D vitest@^3
```

`package.json`의 `scripts`를 다음으로 교체:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "test": "vitest run"
}
```

- [ ] **Step 3: 스모크 테스트로 러너 확인**

Create `lib/smoke.test.ts`:
```ts
import { describe, it, expect } from "vitest";

describe("vitest", () => {
  it("runs", () => {
    expect(1 + 1).toBe(2);
  });
});
```

Run: `pnpm test`
Expected: `1 passed`

삭제: `rm lib/smoke.test.ts`

- [ ] **Step 4: 쓰지 않는 파일 제거**

Run:
```bash
git rm -q planning.md public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

- [ ] **Step 5: 커밋**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: vitest 추가, 기본 자산과 planning.md 제거"
```

---

### Task 2: 콘텐츠 데이터

**Files:**
- Create: `content/site.ts`, `content/now.ts`, `content/work.ts`

- [ ] **Step 1: site.ts 작성**

```ts
// content/site.ts
export const site = {
  name: "슈퍼베이스",
  nameEn: "Superbase",
  url: "https://superbaseapp.com",
  email: "tube@thesuperbase.com",
  tagline: "혼자 만들고 직접 운영하는 1인 메이커",
  description:
    "슈퍼베이스(Superbase)는 혼자 만들고 직접 운영하는 1인 메이커입니다. 일상에서 마주친 불편을 작은 제품으로 풀어냅니다.",
  business: { type: "개인사업자", owner: "전정훈" },
  // 소셜 계정은 추후 추가. 예: { label: "GitHub", url: "https://github.com/..." }
  social: [] as { label: string; url: string }[],
  adsense: "ca-pub-4113419530280094",
};

export type Site = typeof site;
```

- [ ] **Step 2: now.ts 작성**

```ts
// content/now.ts
export const now = {
  updatedAt: "2026-09", // YYYY-MM
  text: "오늘의대회를 만들고 있어요. 오늘의모임은 클럽 운영진 피드백을 받아 다듬는 중입니다.",
};
```

- [ ] **Step 3: work.ts 작성**

```ts
// content/work.ts
export type Status = "live" | "soon" | "ended";

export type Brand = {
  kind: "brand";
  slug: string;
  name: string;
  summary: string;
  description: string[];
  since: string; // YYYY
  url?: string; // 브랜드 허브. 아직 없으면 생략
};

export type Product = {
  kind: "product";
  slug: string;
  name: string;
  summary: string;
  description: string[];
  status: Status;
  brand?: string; // 소속 브랜드 slug. 없으면 단독 제품
  url?: string;
  period: { from: string; to?: string }; // YYYY 또는 YYYY-MM
  successor?: string; // 종료 시 후속 제품 slug
};

export type Work = Brand | Product;

export const brands: Brand[] = [
  {
    kind: "brand",
    slug: "oneul",
    name: "오늘",
    summary: "배드민턴 동호인의 하루를 위한 제품 시리즈",
    description: [
      "오늘은 동네 배드민턴 클럽과 동호인이 매일 겪는 일을 다루는 제품 시리즈입니다. 모임을 만들고, 대회를 찾고, 코트에서 만나는 하루를 조금 더 단순하게 만듭니다.",
      "각 제품은 하나의 불편에서 출발합니다. 단톡방 세 개로 돌아가던 모임 운영, 흩어져 있는 대회 정보 같은 것들입니다.",
    ],
    since: "2025",
  },
];

export const products: Product[] = [
  {
    kind: "product",
    slug: "oneul-moim",
    name: "오늘의모임",
    summary: "동네 배드민턴 클럽 운영 플랫폼. 일정, 참석, 코트 배정, 출석을 한곳에.",
    description: [
      "클럽 검색부터 정기 모임 개설, 참석 확인, 참석 인원에 따른 코트 배정, 현장 출석 체크, 공지와 게시판까지 클럽 운영의 전 과정을 한 앱에서 처리합니다.",
      "클럽 운영진이 혼자 짊어지던 일을 덜어내는 것이 목표입니다. 동호인은 근처 클럽을 찾고 오늘 저녁 모임에 바로 참석할 수 있습니다.",
    ],
    status: "live",
    brand: "oneul",
    url: "https://pc.oneul.day",
    period: { from: "2025" },
  },
  {
    kind: "product",
    slug: "oneul-daehoe",
    name: "오늘의대회",
    summary: "전국 배드민턴 대회 정보와 참가 관리.",
    description: [
      "전국에서 열리는 배드민턴 대회 정보를 한곳에 모으고, 참가 신청과 일정 관리를 돕는 제품입니다. 준비 중이며 공개 시점에 자세한 내용을 안내합니다.",
    ],
    status: "soon",
    brand: "oneul",
    period: { from: "2026" },
  },
  {
    kind: "product",
    slug: "badminton-calendar",
    name: "배드민턴 대회 캘린더",
    summary: "전국 배드민턴 대회 일정을 모아 보여주던 서비스. 오늘의대회의 전신.",
    description: [
      "전국 각지의 배드민턴 대회 일정, 장소, 참가 방법을 한 화면에 모아 보여주던 서비스였습니다. 슈퍼베이스가 처음 만든 제품입니다.",
      "운영을 종료했고, 여기서 배운 것은 오늘 브랜드의 오늘의대회로 이어집니다.",
    ],
    status: "ended",
    period: { from: "2024", to: "2025" },
    successor: "oneul-daehoe",
  },
];
```

- [ ] **Step 4: 타입 검사**

Run: `pnpm exec tsc --noEmit`
Expected: 오류 없음

- [ ] **Step 5: 커밋**

```bash
git add content
git commit -m "feat: 사이트, Now, 브랜드/제품 콘텐츠 데이터 추가"
```

---

### Task 3: lib/work.ts와 lib/date.ts

**Files:**
- Create: `lib/work.ts`, `lib/work.test.ts`, `lib/date.ts`, `lib/date.test.ts`

- [ ] **Step 1: 실패하는 테스트 작성**

Create `lib/work.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import type { Brand, Product } from "../content/work";
import {
  STATUS_LABEL,
  sortProducts,
  groupWork,
  findWork,
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
});
```

Create `lib/date.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { formatMonth, formatPeriod } from "./date";

describe("formatMonth", () => {
  it("renders YYYY-MM in Korean", () => {
    expect(formatMonth("2026-09")).toBe("2026년 9월");
    expect(formatMonth("2026-12")).toBe("2026년 12월");
  });
  it("renders YYYY as year only", () => {
    expect(formatMonth("2025")).toBe("2025년");
  });
});

describe("formatPeriod", () => {
  it("renders open period with a tilde", () => {
    expect(formatPeriod({ from: "2025" })).toBe("2025년 ~");
  });
  it("renders closed period", () => {
    expect(formatPeriod({ from: "2024", to: "2025" })).toBe("2024년 ~ 2025년");
  });
});
```

- [ ] **Step 2: 테스트 실패 확인**

Run: `pnpm test`
Expected: FAIL, `Cannot find module './work'` 또는 `'./date'`

- [ ] **Step 3: 구현**

Create `lib/date.ts`:
```ts
export function formatMonth(ym: string): string {
  const [y, m] = ym.split("-");
  if (!m) return `${y}년`;
  return `${y}년 ${Number(m)}월`;
}

export function formatPeriod(period: { from: string; to?: string }): string {
  const from = formatMonth(period.from);
  return period.to ? `${from} ~ ${formatMonth(period.to)}` : `${from} ~`;
}
```

Create `lib/work.ts`:
```ts
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
  const standalone = sortProducts(products.filter((p) => !p.brand));
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

export function allWorkSlugs(
  brands: Brand[] = allBrands,
  products: Product[] = allProducts,
): string[] {
  return [...brands.map((b) => b.slug), ...products.map((p) => p.slug)];
}

export function workPath(slug: string): string {
  return `/work/${slug}`;
}
```

- [ ] **Step 4: 테스트 통과 확인**

Run: `pnpm test`
Expected: 모든 테스트 PASS (work 8개, date 4개)

- [ ] **Step 5: 커밋**

```bash
git add lib
git commit -m "feat: 브랜드/제품 정렬·그룹핑과 날짜 포맷 유틸 추가"
```

---

### Task 4: lib/jsonld.ts

**Files:**
- Create: `lib/jsonld.ts`, `lib/jsonld.test.ts`

- [ ] **Step 1: 실패하는 테스트 작성**

Create `lib/jsonld.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { organizationJsonLd, webSiteJsonLd, workJsonLd } from "./jsonld";
import type { Brand, Product } from "../content/work";

const site = {
  name: "슈퍼베이스",
  nameEn: "Superbase",
  url: "https://superbaseapp.com",
  email: "tube@thesuperbase.com",
  social: [{ label: "GitHub", url: "https://github.com/x" }],
};

describe("organizationJsonLd", () => {
  it("includes name, alternateName, url, email, sameAs", () => {
    expect(organizationJsonLd(site)).toEqual({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "슈퍼베이스",
      alternateName: "Superbase",
      url: "https://superbaseapp.com",
      email: "tube@thesuperbase.com",
      sameAs: ["https://github.com/x"],
    });
  });
  it("omits sameAs when there are no social links", () => {
    expect(organizationJsonLd({ ...site, social: [] })).not.toHaveProperty("sameAs");
  });
});

describe("webSiteJsonLd", () => {
  it("describes the site in Korean", () => {
    expect(webSiteJsonLd(site)).toMatchObject({
      "@type": "WebSite",
      name: "슈퍼베이스",
      alternateName: "Superbase",
      url: "https://superbaseapp.com",
      inLanguage: "ko",
    });
  });
});

describe("workJsonLd", () => {
  const brand: Brand = {
    kind: "brand",
    slug: "oneul",
    name: "오늘",
    summary: "시리즈",
    description: [],
    since: "2025",
  };
  const product: Product = {
    kind: "product",
    slug: "oneul-moim",
    name: "오늘의모임",
    summary: "클럽 운영",
    description: [],
    status: "live",
    brand: "oneul",
    url: "https://pc.oneul.day",
    period: { from: "2025" },
  };

  it("renders a product as SoftwareApplication with its external url", () => {
    expect(workJsonLd(product, site)).toEqual({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "오늘의모임",
      description: "클럽 운영",
      url: "https://pc.oneul.day",
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      author: { "@type": "Organization", name: "슈퍼베이스", url: "https://superbaseapp.com" },
    });
  });

  it("falls back to the detail page url when a product has no url", () => {
    const { url } = workJsonLd({ ...product, url: undefined }, site);
    expect(url).toBe("https://superbaseapp.com/work/oneul-moim");
  });

  it("renders a brand as Brand", () => {
    expect(workJsonLd(brand, site)).toEqual({
      "@context": "https://schema.org",
      "@type": "Brand",
      name: "오늘",
      description: "시리즈",
      url: "https://superbaseapp.com/work/oneul",
    });
  });
});
```

- [ ] **Step 2: 테스트 실패 확인**

Run: `pnpm test`
Expected: FAIL, `Cannot find module './jsonld'`

- [ ] **Step 3: 구현**

Create `lib/jsonld.ts`:
```ts
import type { Work } from "../content/work";
import { workPath } from "./work";

type SiteInfo = {
  name: string;
  nameEn: string;
  url: string;
  email: string;
  social: ReadonlyArray<{ label: string; url: string }>;
};

export function organizationJsonLd(site: SiteInfo) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    email: site.email,
  };
  return site.social.length > 0 ? { ...base, sameAs: site.social.map((s) => s.url) } : base;
}

export function webSiteJsonLd(site: SiteInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    inLanguage: "ko",
  };
}

export function workJsonLd(work: Work, site: SiteInfo) {
  const pageUrl = `${site.url}${workPath(work.slug)}`;
  if (work.kind === "brand") {
    return {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: work.name,
      description: work.summary,
      url: work.url ?? pageUrl,
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: work.name,
    description: work.summary,
    url: work.url ?? pageUrl,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    author: { "@type": "Organization", name: site.name, url: site.url },
  };
}
```

- [ ] **Step 4: 테스트 통과 확인**

Run: `pnpm test`
Expected: 모두 PASS

- [ ] **Step 5: 커밋**

```bash
git add lib/jsonld.ts lib/jsonld.test.ts
git commit -m "feat: Organization, WebSite, 상세 페이지 JSON-LD 생성기 추가"
```

---

### Task 5: 폰트, 전역 스타일, 레이아웃, 헤더, 푸터

**Files:**
- Create: `app/fonts/PretendardVariable.woff2`, `app/fonts/Pretendard-Bold.otf`, `components/Header.tsx`, `components/NavLink.tsx`, `components/Footer.tsx`, `components/JsonLd.tsx`
- Modify: `app/globals.css`, `app/layout.tsx`
- Delete: `app/services/`, `app/terms/`, `components/ServiceCard.tsx`, 기존 `components/Header.tsx`, `components/Footer.tsx` 내용

시작 전에 `frontend-design:frontend-design`, `emil-design-eng`, `ui-ux-pro-max:ui-ux-pro-max` 스킬을 로드한다.

- [ ] **Step 1: 폰트 다운로드**

Run:
```bash
mkdir -p app/fonts
curl -sL -o app/fonts/PretendardVariable.woff2 \
  https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/woff2/PretendardVariable.woff2
curl -sL -o app/fonts/Pretendard-Bold.otf \
  https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/public/static/Pretendard-Bold.otf
ls -la app/fonts && file app/fonts/*
```
Expected: woff2는 약 2MB이고 `Web Open Font Format (Version 2)`, otf는 약 1MB 이상이고 `OpenType font data`. 둘 중 하나라도 HTML(404 페이지)이면 https://github.com/orioncactus/pretendard/releases 에서 v1.3.9 zip을 받아 같은 경로에 푼다.

- [ ] **Step 2: 기존 파일 제거**

Run:
```bash
git rm -rq app/services app/terms components/ServiceCard.tsx
```

- [ ] **Step 3: globals.css 교체**

`app/globals.css` 전체를 다음으로 교체:
```css
@import "tailwindcss";

:root {
  --bg: #ffffff;
  --fg: #0a0a0a;
  --fg-2: #525252;
  --fg-3: #8a8a8a;
  --line: #e8e8e8;
  --live: #16a34a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0a0a0a;
    --fg: #ededed;
    --fg-2: #a3a3a3;
    --fg-3: #737373;
    --line: #262626;
    --live: #22c55e;
  }
}

@theme inline {
  --color-bg: var(--bg);
  --color-fg: var(--fg);
  --color-fg-2: var(--fg-2);
  --color-fg-3: var(--fg-3);
  --color-line: var(--line);
  --color-live: var(--live);
  --font-sans: var(--font-pretendard), -apple-system, BlinkMacSystemFont,
    "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
}

html {
  color-scheme: light dark;
}

body {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
  overflow-wrap: anywhere;
}

:focus-visible {
  outline: 2px solid var(--fg);
  outline-offset: 3px;
  border-radius: 2px;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.reveal {
  animation: rise 280ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
  }
}
```

- [ ] **Step 4: NavLink, Header, Footer, JsonLd 작성**

Create `components/NavLink.tsx`:
```tsx
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
```

Replace `components/Header.tsx`:
```tsx
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
```

Replace `components/Footer.tsx`:
```tsx
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
```

Create `components/JsonLd.tsx`:
```tsx
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 5: layout.tsx 교체**

`app/layout.tsx` 전체를 다음으로 교체:
```tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/jsonld";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} (${site.nameEn}) | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [site.name, site.nameEn, "1인 메이커", "오늘의모임", "오늘의대회"],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    url: site.url,
    title: `${site.name} (${site.nameEn})`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  other: { "google-adsense-account": site.adsense },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={[organizationJsonLd(site), webSiteJsonLd(site)]} />
        <Header />
        <main className="mx-auto w-full max-w-[640px] flex-1 px-5 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 6: 임시 홈으로 빌드 확인**

`app/page.tsx` 전체를 임시로 교체 (Task 7에서 다시 쓴다):
```tsx
export default function Home() {
  return <h1 className="py-16 text-3xl font-extrabold tracking-tight">슈퍼베이스</h1>;
}
```

Run: `pnpm lint && pnpm build 2>&1 | tail -20`
Expected: lint 오류 없음, 빌드 성공. 라우트에 `/`, `/about`, `/contact`, `/privacy`만 있고 `/services`, `/terms`는 없음.

Run: `grep -c "cdn.jsdelivr" app/layout.tsx`
Expected: `0`

- [ ] **Step 7: 커밋**

```bash
git add -A app components
git commit -m "feat: Pretendard 로컬 폰트, 디자인 토큰, 새 레이아웃·헤더·푸터"
```

---

### Task 6: 공용 컴포넌트

**Files:**
- Create: `components/Section.tsx`, `components/StatusBadge.tsx`, `components/WorkList.tsx`, `components/Reveal.tsx`, `components/Prose.tsx`

시작 전에 `frontend-design:frontend-design`, `emil-design-eng`, `ui-ux-pro-max:ui-ux-pro-max` 스킬을 로드한다.

- [ ] **Step 1: Reveal, Section, Prose 작성**

Create `components/Reveal.tsx`:
```tsx
export default function Reveal({
  index = 0,
  children,
  className = "",
}: {
  index?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={{ animationDelay: `${index * 60}ms` }}>
      {children}
    </div>
  );
}
```

Create `components/Section.tsx`:
```tsx
export default function Section({
  id,
  label,
  aside,
  children,
}: {
  id?: string;
  label: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-8">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-xs font-bold tracking-wide text-fg-3">{label}</h2>
        {aside && <span className="text-xs text-fg-3">{aside}</span>}
      </div>
      {children}
    </section>
  );
}
```

Create `components/Prose.tsx`:
```tsx
export default function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-fg-2">
      {paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: StatusBadge 작성**

Create `components/StatusBadge.tsx`:
```tsx
import type { Status } from "@/content/work";
import { STATUS_LABEL } from "@/lib/work";

const STYLE: Record<Status, string> = {
  live: "bg-fg text-bg",
  soon: "border border-line text-fg-2",
  ended: "border border-line text-fg-3",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold leading-5 ${STYLE[status]}`}
    >
      {status === "live" && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-live" />}
      {STATUS_LABEL[status]}
    </span>
  );
}
```

- [ ] **Step 3: WorkList 작성**

Create `components/WorkList.tsx`:
```tsx
import Link from "next/link";
import type { Product } from "@/content/work";
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
        <span className={`font-semibold ${ended ? "text-fg-3" : "text-fg"} group-hover:underline`}>
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

function Group({ group }: { group: WorkGroup }) {
  const { brand, products } = group;
  return (
    <div className="py-3">
      <div className="mb-1 flex items-baseline justify-between">
        {brand ? (
          <Link href={workPath(brand.slug)} className="text-lg font-extrabold tracking-tight hover:underline">
            {brand.name}
          </Link>
        ) : (
          <span className="text-lg font-extrabold tracking-tight text-fg-3">단독 제품</span>
        )}
        {brand && (
          <span className="text-xs text-fg-3">
            {brand.summary} · {brand.since}~
          </span>
        )}
      </div>
      <ul className="md:pl-4">
        {products.map((p) => (
          <ProductRow key={p.slug} product={p} />
        ))}
      </ul>
    </div>
  );
}

export default function WorkList({ groups = groupWork() }: { groups?: WorkGroup[] }) {
  return (
    <div className="divide-y divide-line">
      {groups.map((g) => (
        <Group key={g.brand?.slug ?? "standalone"} group={g} />
      ))}
    </div>
  );
}
```

- [ ] **Step 4: 타입 검사와 lint**

Run: `pnpm exec tsc --noEmit && pnpm lint`
Expected: 오류 없음

- [ ] **Step 5: 커밋**

```bash
git add components
git commit -m "feat: Section, StatusBadge, WorkList, Reveal, Prose 컴포넌트"
```

---

### Task 7: 홈 페이지

**Files:**
- Modify: `app/page.tsx`

시작 전에 `frontend-design:frontend-design`, `emil-design-eng`, `ui-ux-pro-max:ui-ux-pro-max` 스킬을 로드한다.

- [ ] **Step 1: page.tsx 작성**

`app/page.tsx` 전체를 교체:
```tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import WorkList from "@/components/WorkList";
import { site } from "@/content/site";
import { now } from "@/content/now";
import { brands, products } from "@/content/work";
import { formatMonth } from "@/lib/date";

export default function Home() {
  return (
    <div className="pb-8">
      <Reveal index={0}>
        <section className="pt-14 pb-10 md:pt-20">
          <h1 className="text-[clamp(2rem,6vw,3.25rem)] font-extrabold leading-[1.15] tracking-[-0.035em]">
            슈퍼베이스는 혼자 만들고
            <br />
            직접 운영합니다.
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-fg-2">
            일상에서 마주친 불편을 작은 제품으로 풀어냅니다. 지금은{" "}
            <Link href="/work/oneul" className="font-semibold text-fg underline underline-offset-4">
              오늘
            </Link>{" "}
            시리즈를 만들고 있고, 다음은 전혀 다른 영역일 수도 있습니다.
          </p>
          <div className="mt-8 flex gap-6 text-sm font-semibold">
            <Link href="/about" className="underline underline-offset-4 hover:text-fg-2">
              소개 보기
            </Link>
            <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-fg-2">
              이메일 보내기
            </a>
          </div>
        </section>
      </Reveal>

      <Reveal index={1}>
        <Section label="NOW" aside={formatMonth(now.updatedAt)}>
          <p className="flex items-start gap-3">
            <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-live" />
            <span>{now.text}</span>
          </p>
        </Section>
      </Reveal>

      <Reveal index={2}>
        <Section
          id="work"
          label="만든 것들"
          aside={`브랜드 ${brands.length} · 제품 ${products.length}`}
        >
          <WorkList />
        </Section>
      </Reveal>

      <Reveal index={3}>
        <Section label="연락">
          <p className="text-fg-2">제안, 협업, 그냥 인사도 환영합니다.</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block font-semibold underline underline-offset-4 hover:text-fg-2"
          >
            {site.email}
          </a>
          {site.social.length > 0 && (
            <ul className="mt-3 flex gap-4 text-sm font-semibold">
              {site.social.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-fg-2"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </Reveal>
    </div>
  );
}
```

- [ ] **Step 2: 개발 서버로 확인**

Run (백그라운드): `pnpm dev`
브라우저 또는 `curl -s http://localhost:3000 | grep -o "혼자 만들고" | head -1`
Expected: 문자열 출력. 화면에서 히어로, NOW, 만든 것들(오늘 아래 오늘의모임·오늘의대회, 단독 제품 아래 배드민턴 대회 캘린더 흐리게), 연락 순서 확인. 375px 폭에서 가로 스크롤 없음. 시스템 다크 모드에서 배경 #0a0a0a.

- [ ] **Step 3: lint와 빌드**

Run: `pnpm lint && pnpm build 2>&1 | tail -5`
Expected: 성공

- [ ] **Step 4: 커밋**

```bash
git add app/page.tsx
git commit -m "feat: 홈 페이지 (히어로, Now, 만든 것들, 연락)"
```

---

### Task 8: 브랜드/제품 상세 페이지와 404

**Files:**
- Create: `app/work/[slug]/page.tsx`, `app/not-found.tsx`

시작 전에 `frontend-design:frontend-design`, `emil-design-eng` 스킬을 로드한다.

- [ ] **Step 1: 상세 페이지 작성**

Create `app/work/[slug]/page.tsx`:
```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StatusBadge from "@/components/StatusBadge";
import WorkList from "@/components/WorkList";
import { site } from "@/content/site";
import { formatPeriod } from "@/lib/date";
import { workJsonLd } from "@/lib/jsonld";
import { allWorkSlugs, findWork, productsOf, workPath } from "@/lib/work";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return allWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) return {};
  return {
    title: work.name,
    description: work.summary,
    alternates: { canonical: workPath(slug) },
    openGraph: { title: work.name, description: work.summary, url: workPath(slug) },
  };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) notFound();

  const brand = work.kind === "product" && work.brand ? findWork(work.brand) : undefined;
  const successor = work.kind === "product" && work.successor ? findWork(work.successor) : undefined;
  const meta =
    work.kind === "brand" ? `${work.since}년 ~` : formatPeriod(work.period);

  return (
    <div className="pb-8">
      <JsonLd data={workJsonLd(work, site)} />
      <Reveal index={0}>
        <section className="pt-12 pb-8 md:pt-16">
          {brand && (
            <Link href={workPath(brand.slug)} className="text-sm text-fg-3 hover:text-fg">
              {brand.name} ↖
            </Link>
          )}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
              {work.name}
            </h1>
            {work.kind === "product" && <StatusBadge status={work.status} />}
          </div>
          <p className="mt-3 text-lg text-fg-2">{work.summary}</p>
          <p className="mt-2 text-sm text-fg-3">{meta}</p>
          {work.kind === "product" && work.status === "ended" && (
            <p className="mt-4 rounded-md border border-line px-4 py-3 text-sm text-fg-2">
              이 제품은 운영을 종료했습니다.
              {successor && (
                <>
                  {" "}
                  후속 제품은{" "}
                  <Link href={workPath(successor.slug)} className="font-semibold text-fg underline underline-offset-4">
                    {successor.name}
                  </Link>
                  입니다.
                </>
              )}
            </p>
          )}
          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 items-center rounded-md bg-fg px-4 text-sm font-semibold text-bg transition-opacity duration-150 hover:opacity-80"
            >
              {work.name} 바로가기 ↗
            </a>
          )}
        </section>
      </Reveal>

      <Reveal index={1}>
        <Section label="소개">
          <Prose paragraphs={work.description} />
        </Section>
      </Reveal>

      {work.kind === "brand" && (
        <Reveal index={2}>
          <Section label="제품" aside={`${productsOf(work.slug).length}개`}>
            <WorkList groups={[{ brand: work, products: productsOf(work.slug) }]} />
          </Section>
        </Reveal>
      )}
    </div>
  );
}
```

- [ ] **Step 2: 404 페이지 작성**

Create `app/not-found.tsx`:
```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-extrabold tracking-tight">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-fg-2">주소가 바뀌었거나 없는 페이지입니다.</p>
      <Link href="/" className="mt-6 inline-block font-semibold underline underline-offset-4">
        홈으로
      </Link>
    </div>
  );
}
```

- [ ] **Step 3: 빌드와 정적 생성 확인**

Run: `pnpm lint && pnpm build 2>&1 | grep -E "work/|not-found|✓"`
Expected: `/work/oneul`, `/work/oneul-moim`, `/work/oneul-daehoe`, `/work/badminton-calendar` 네 개가 정적(SSG)으로 생성됨.

Run (dev 서버 실행 중): `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/work/nope`
Expected: `404`

브라우저에서 `/work/oneul`에 제품 목록 두 개, `/work/badminton-calendar`에 종료 안내와 오늘의대회 링크, `/work/oneul-moim`에 바로가기 버튼 확인.

- [ ] **Step 4: 커밋**

```bash
git add app/work app/not-found.tsx
git commit -m "feat: 브랜드/제품 상세 페이지와 404"
```

---

### Task 9: 소개, 문의, 개인정보처리방침

**Files:**
- Modify: `app/about/page.tsx`, `app/contact/page.tsx`, `app/privacy/page.tsx` (전체 교체)

시작 전에 `frontend-design:frontend-design`, `emil-design-eng` 스킬을 로드한다.

- [ ] **Step 1: about 교체**

`app/about/page.tsx` 전체:
```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "소개",
  description: `${site.name}는 ${site.tagline}입니다. 왜 만들고 어떻게 운영하는지 소개합니다.`,
  alternates: { canonical: "/about" },
};

const WHAT = [
  "슈퍼베이스(Superbase)는 혼자 만들고 직접 운영하는 1인 메이커입니다. 기획, 디자인, 개발, 운영을 한 사람이 처음부터 끝까지 맡습니다.",
  "개인사업자로 등록되어 있고, 특정 분야에 스스로를 묶지 않습니다. 지금은 배드민턴 동호인을 위한 오늘 시리즈를 만들고 있지만, 다음 제품은 전혀 다른 곳에서 나올 수 있습니다.",
];

const WHY = [
  "일상에서 마주친 불편이 출발점입니다. 단톡방 세 개로 돌아가던 모임 운영, 흩어져 있는 대회 정보처럼 누군가는 매주 겪지만 아무도 제대로 풀지 않은 문제를 찾습니다.",
  "크게 시작하지 않습니다. 하나의 불편을 하나의 제품으로 풀고, 실제로 쓰는 사람이 생기면 그 사람들의 이야기를 따라 다음 것을 만듭니다.",
];

const HOW = [
  "작게 출시하고 피드백으로 고칩니다. 완성도보다 실제 사용자의 첫 반응을 먼저 봅니다.",
  "무료로 시작합니다. 부담 없이 써 보고 의견을 줄 수 있어야 제품이 제대로 자랍니다.",
  "직접 운영합니다. 만든 사람이 문의에 답하고 장애를 고칩니다.",
];

export default function AboutPage() {
  return (
    <div className="pb-8">
      <Reveal index={0}>
        <section className="pt-12 pb-6 md:pt-16">
          <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
            슈퍼베이스 소개
          </h1>
          <p className="mt-3 text-lg text-fg-2">{site.tagline}</p>
        </section>
      </Reveal>
      <Reveal index={1}>
        <Section label="무엇을 하는 곳인가">
          <Prose paragraphs={WHAT} />
        </Section>
      </Reveal>
      <Reveal index={2}>
        <Section label="왜 만드는가">
          <Prose paragraphs={WHY} />
        </Section>
      </Reveal>
      <Reveal index={3}>
        <Section label="어떻게 운영하는가">
          <ol className="list-decimal space-y-3 pl-5 text-fg-2 marker:font-semibold marker:text-fg-3">
            {HOW.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ol>
        </Section>
      </Reveal>
      <Reveal index={4}>
        <Section label="더 보기">
          <div className="flex gap-6 text-sm font-semibold">
            <Link href="/#work" className="underline underline-offset-4 hover:text-fg-2">
              만든 것들
            </Link>
            <Link href="/contact" className="underline underline-offset-4 hover:text-fg-2">
              문의하기
            </Link>
          </div>
        </Section>
      </Reveal>
    </div>
  );
}
```

- [ ] **Step 2: contact 교체**

`app/contact/page.tsx` 전체:
```tsx
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "문의",
  description: `${site.name}에 제안, 협업, 피드백을 보내는 방법입니다.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pb-8">
      <Reveal index={0}>
        <section className="pt-12 pb-6 md:pt-16">
          <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
            문의
          </h1>
          <p className="mt-3 text-lg text-fg-2">제안, 협업, 피드백, 그냥 인사도 환영합니다.</p>
        </section>
      </Reveal>
      <Reveal index={1}>
        <Section label="이메일">
          <a
            href={`mailto:${site.email}`}
            className="text-xl font-semibold underline underline-offset-4 hover:text-fg-2"
          >
            {site.email}
          </a>
          <p className="mt-2 text-sm text-fg-3">보통 며칠 안에 답장합니다.</p>
        </Section>
      </Reveal>
      {site.social.length > 0 && (
        <Reveal index={2}>
          <Section label="소셜">
            <ul className="flex gap-4 font-semibold">
              {site.social.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-fg-2"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>
      )}
      <Reveal index={3}>
        <Section label="제품 관련 문의">
          <p className="text-fg-2">
            오늘의모임 등 각 제품의 사용 문의는 해당 제품 안의 문의 채널을 이용하면 더 빠릅니다. 이 주소로 보내도 전달됩니다.
          </p>
        </Section>
      </Reveal>
    </div>
  );
}
```

- [ ] **Step 3: privacy 교체**

`app/privacy/page.tsx` 전체:
```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${site.name} 웹사이트(superbaseapp.com)의 개인정보처리방침입니다.`,
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE = "2026년 9월 3일"; // 배포일에 맞춰 갱신

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-fg-2">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-fg-2">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div className="pb-8">
      <section className="pt-12 pb-6 md:pt-16">
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-sm text-fg-3">시행일 {EFFECTIVE}</p>
        <P>
          {site.name}(이하 &quot;슈퍼베이스&quot;)는 superbaseapp.com 웹사이트(이하 &quot;사이트&quot;)를 운영하면서 개인정보 보호법 등 관련 법령을 준수합니다. 이 방침은 사이트에 적용되며, 슈퍼베이스가 운영하는 각 제품(오늘의모임 등)은 해당 제품의 개인정보처리방침을 따릅니다.
        </P>
      </section>

      <Section label="1. 수집하는 개인정보와 수집 방법">
        <div className="space-y-3">
          <P>사이트에는 회원 가입, 로그인, 입력 폼이 없습니다. 수집되는 정보는 다음 두 가지뿐입니다.</P>
          <List
            items={[
              "자동 수집: 접속 IP 주소, 브라우저 종류와 버전, 접속 일시, 방문한 페이지, 쿠키. 서비스 이용 과정에서 자동으로 생성됩니다.",
              "이메일 문의: 이용자가 이메일을 보낼 때 포함한 이메일 주소와 문의 내용. 이용자가 직접 제공합니다.",
            ]}
          />
        </div>
      </Section>

      <Section label="2. 개인정보의 이용 목적">
        <List
          items={[
            "사이트 운영, 보안, 장애 대응과 이용 통계 분석",
            "이메일 문의에 대한 답변",
            "Google AdSense를 통한 광고 게재",
          ]}
        />
      </Section>

      <Section label="3. 보유 및 이용 기간">
        <List
          items={[
            "자동 수집 정보: 호스팅 사업자의 로그 보관 기간 이후 자동 삭제됩니다.",
            "이메일 문의: 답변 완료 후 1년간 보관 후 삭제합니다. 이용자가 삭제를 요청하면 지체 없이 삭제합니다.",
          ]}
        />
      </Section>

      <Section label="4. 쿠키와 광고">
        <div className="space-y-3">
          <P>
            사이트는 Google AdSense 광고를 게재할 수 있습니다. Google을 비롯한 제3자 광고 사업자는 쿠키를 사용하여 이용자의 이 사이트 및 다른 웹사이트 방문 기록을 바탕으로 광고를 게재합니다.
          </P>
          <P>
            이용자는{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Google 광고 설정
            </a>
            에서 개인 맞춤 광고를 끌 수 있고, 브라우저 설정에서 쿠키 저장을 거부할 수 있습니다. 쿠키를 거부해도 사이트 열람에는 지장이 없습니다.
          </P>
        </div>
      </Section>

      <Section label="5. 개인정보의 처리 위탁과 제3자 제공">
        <div className="space-y-3">
          <P>슈퍼베이스는 개인정보를 제3자에게 판매하거나 제공하지 않습니다. 다음 사업자에게 처리를 위탁합니다.</P>
          <List
            items={[
              "Vercel Inc.: 사이트 호스팅과 접속 로그 보관 (미국)",
              "Google LLC: 광고 게재 (미국)",
            ]}
          />
        </div>
      </Section>

      <Section label="6. 이용자의 권리">
        <P>
          이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 요청은 아래 연락처로 보내 주시면 지체 없이 처리합니다.
        </P>
      </Section>

      <Section label="7. 개인정보 보호책임자">
        <List
          items={[
            `책임자: ${site.business.owner} (${site.business.type} ${site.name})`,
            `이메일: ${site.email}`,
          ]}
        />
      </Section>

      <Section label="8. 방침의 변경">
        <P>
          이 방침은 시행일부터 적용됩니다. 내용이 바뀌면 사이트에 변경 사항과 새 시행일을 게시합니다.
        </P>
        <p className="mt-4 text-sm">
          <Link href="/" className="underline underline-offset-4">
            홈으로
          </Link>
        </p>
      </Section>
    </div>
  );
}
```

- [ ] **Step 4: lint와 빌드**

Run: `pnpm lint && pnpm build 2>&1 | tail -5`
Expected: 성공. 브라우저에서 세 페이지 확인. `/privacy`에 "회원", "이용약관" 단어가 없는지 확인:

Run: `grep -nE "회원|이용약관" app/privacy/page.tsx`
Expected: 출력 없음

- [ ] **Step 5: 커밋**

```bash
git add app/about app/contact app/privacy
git commit -m "feat: 소개, 문의, 개인정보처리방침 페이지 재작성"
```

---

### Task 10: sitemap, robots, OG 이미지

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`, `lib/og.tsx`, `app/opengraph-image.tsx`, `app/work/[slug]/opengraph-image.tsx`

- [ ] **Step 1: sitemap과 robots**

Create `app/sitemap.ts`:
```ts
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allWorkSlugs, workPath } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["/", "/about", "/contact", "/privacy"];
  const work = allWorkSlugs().map(workPath);
  return [...fixed, ...work].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
```

Create `app/robots.ts`:
```ts
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: OG 렌더러**

Create `lib/og.tsx`:
```tsx
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

async function loadFont() {
  return readFile(path.join(process.cwd(), "app/fonts/Pretendard-Bold.otf"));
}

export async function renderOg(title: string, subtitle: string) {
  const font = await loadFont();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#0a0a0a",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ fontSize: 28, color: "#8a8a8a" }}>superbaseapp.com</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.15, letterSpacing: "-0.03em" }}>{title}</div>
          <div style={{ fontSize: 34, color: "#525252", lineHeight: 1.4 }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 28 }}>슈퍼베이스 · Superbase</div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Pretendard", data: font, weight: 700, style: "normal" }],
    },
  );
}
```

Create `app/opengraph-image.tsx`:
```tsx
import { site } from "@/content/site";
import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = `${site.name} (${site.nameEn})`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg(`${site.name} (${site.nameEn})`, site.tagline);
}
```

Create `app/work/[slug]/opengraph-image.tsx`:
```tsx
import { site } from "@/content/site";
import { OG_SIZE, renderOg } from "@/lib/og";
import { allWorkSlugs, findWork } from "@/lib/work";

export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return allWorkSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = findWork(slug);
  const title = work?.name ?? site.name;
  const subtitle = work?.summary ?? site.tagline;
  return renderOg(title, subtitle);
}
```

- [ ] **Step 3: 확인**

Run: `pnpm lint && pnpm build 2>&1 | grep -E "sitemap|robots|opengraph|✓|Error"`
Expected: `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/work/[slug]/opengraph-image` 라우트가 생성되고 오류 없음.

Run (dev 서버):
```bash
curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"
curl -s http://localhost:3000/robots.txt
curl -s -o /tmp/og.png -w "%{content_type} %{size_download}\n" http://localhost:3000/opengraph-image
curl -s -o /tmp/og-work.png -w "%{content_type} %{size_download}\n" http://localhost:3000/work/oneul-moim/opengraph-image
```
Expected: loc 8개(고정 4 + work 4). robots에 `Sitemap: https://superbaseapp.com/sitemap.xml`. 두 이미지 모두 `image/png`이고 크기 0이 아님. Read 도구로 `/tmp/og.png`를 열어 한글이 네모가 아닌 글자로 보이는지 확인.

Run: `curl -s http://localhost:3000 | grep -o 'application/ld+json' | wc -l`
Expected: `1` 이상 (레이아웃 JSON-LD)

- [ ] **Step 4: 커밋**

```bash
git add app/sitemap.ts app/robots.ts lib/og.tsx app/opengraph-image.tsx "app/work/[slug]/opengraph-image.tsx"
git commit -m "feat: sitemap, robots, OG 이미지 생성"
```

---

### Task 11: 문서와 최종 검증

**Files:**
- Modify: `README.md`, `Claude.md`

- [ ] **Step 1: README 교체**

`README.md` 전체:
````markdown
# superbaseapp.com

슈퍼베이스(Superbase)의 웹사이트. 혼자 만들고 직접 운영하는 1인 메이커 슈퍼베이스를 소개하고, 만든 브랜드와 제품을 보여준다.

## 스택

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · pnpm · vitest · Pretendard (로컬 호스팅) · Vercel

## 시작

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm test     # lib 단위 테스트
pnpm lint
pnpm build
```

## 구조

```
content/   사이트 정보, Now, 브랜드/제품 데이터 (모든 콘텐츠의 원본)
lib/       정렬·그룹핑, 날짜, JSON-LD, OG 렌더러 (순수 함수, 테스트 있음)
components/ Header, Footer, Section, StatusBadge, WorkList, Reveal, Prose, JsonLd
app/       /, /about, /contact, /privacy, /work/[slug], sitemap, robots, OG 이미지
```

## 콘텐츠 갱신

- **지금 하는 일**: `content/now.ts`의 `text`와 `updatedAt`(YYYY-MM)을 고친다.
- **브랜드 추가**: `content/work.ts`의 `brands`에 항목을 넣는다. 허브 도메인이 생기면 `url`을 채운다.
- **제품 추가**: `products`에 항목을 넣고 `brand`에 소속 브랜드 slug를 적는다. 단독 제품이면 생략. `status`는 `live | soon | ended`.
- **제품 종료**: `status: "ended"`, `period.to`, 후속이 있으면 `successor`를 적는다.
- **소셜 링크**: `content/site.ts`의 `social`에 `{ label, url }`을 넣는다.

항목을 추가하면 홈 목록, `/work/[slug]` 페이지, sitemap, OG 이미지, JSON-LD가 함께 생성된다.

## 배포 후 확인

- Vercel 도메인 설정에서 `www.superbaseapp.com` → `superbaseapp.com` 리다이렉트
- Google Search Console에 `https://superbaseapp.com/sitemap.xml` 제출
- 각 제품 푸터에서 superbaseapp.com으로 링크

## 연락

tube@thesuperbase.com
````

- [ ] **Step 2: Claude.md 작성**

`Claude.md` 전체:
```markdown
# superbaseapp.com

슈퍼베이스(1인 메이커, 개인사업자)의 소개 사이트. 정적 페이지만 있고 서버 로직, DB, 폼이 없다.

## 원칙

- 모든 콘텐츠는 `content/`에서 읽는다. 페이지에 문구를 하드코딩하지 않는다 (법적 문서 제외).
- 화자는 슈퍼베이스. 3인칭 브랜드 화법. 개인 이름은 푸터와 개인정보처리방침에만.
- 색은 `globals.css`의 토큰(bg, fg, fg-2, fg-3, line, live)만 쓴다. 새 색을 추가하지 않는다.
- 최대 폭 640px 단일 컬럼. 그림자, 그라디언트, 유리 효과 금지. 구분은 1px 선과 여백으로.
- 모션은 `.reveal` 진입 효과와 150ms 색 전환만. `prefers-reduced-motion` 존중.
- 클라이언트 컴포넌트는 `NavLink` 하나. 새로 추가할 때는 이유가 필요하다.

## 명령

`pnpm dev`, `pnpm test`, `pnpm lint`, `pnpm build`. 변경 후 lint와 build를 통과해야 한다.

## 데이터 추가

README의 "콘텐츠 갱신" 참고. 브랜드/제품은 `content/work.ts`, Now는 `content/now.ts`, 소셜은 `content/site.ts`.
```

- [ ] **Step 3: 최종 검증**

Run:
```bash
pnpm test && pnpm lint && pnpm build 2>&1 | tail -25
```
Expected: 테스트 전부 PASS, lint 오류 없음, 빌드 성공. 라우트 목록에 `/services`, `/terms` 없음.

Run (dev 서버 실행 후):
```bash
for p in / /about /contact /privacy /work/oneul /work/oneul-moim /work/oneul-daehoe /work/badminton-calendar /sitemap.xml /robots.txt /opengraph-image; do
  printf "%-32s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000$p)"
done
```
Expected: 전부 `200`

브라우저 수동 확인 목록:
- 375px, 768px, 1440px 폭에서 가로 스크롤 없음
- 시스템 다크 모드에서 배경과 텍스트 대비 정상, 상태 배지 가독
- 키보드 Tab으로 헤더 링크부터 푸터까지 이동하며 포커스 링 보임
- OS의 "동작 줄이기" 켜면 진입 모션 없음
- 헤더 "만든 것들" 클릭 시 홈의 해당 섹션으로 스크롤

- [ ] **Step 4: 커밋**

```bash
git add README.md Claude.md
git commit -m "docs: README와 Claude.md를 새 구조로 갱신"
```

- [ ] **Step 5: 배포 전 체크리스트 (코드 밖, 사용자에게 보고)**

- Vercel에서 www → non-www 리다이렉트 설정 여부
- Search Console sitemap 제출
- 오늘의모임 푸터 링크 요청
- JSON-LD를 https://search.google.com/test/rich-results 로 검증
- 소셜 계정 주소와 오늘의대회 정식 설명이 정해지면 `content/`만 갱신
