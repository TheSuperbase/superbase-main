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
components/ Header, NavLink, Footer, Section, StatusBadge, WorkList, Reveal, Prose, TextLink, JsonLd
app/       /, /about, /contact, /privacy, /work/[slug], sitemap, robots, OG 이미지
           app/work/page.tsx → /#work 리다이렉트
```

## 콘텐츠 갱신

- **지금 하는 일**: `content/now.ts`의 `text`와 `updatedAt`(YYYY-MM)을 고친다.
- **브랜드 추가**: `content/work.ts`의 `brands`에 항목을 넣는다. 허브 도메인이 생기면 `url`을 채운다.
- **제품 추가**: `products`에 항목을 넣고 `brand`에 소속 브랜드 slug를 적는다. 단독 제품이면 생략. `status`는 `live | soon | ended`.
- **제품 종료**: `status: "ended"`, `period.to`, 후속이 있으면 `successor`를 적는다.
- **소셜 링크**: `content/site.ts`의 `social`에 `{ label, url }`을 넣는다.
- **개인정보처리방침 시행일**: content/site.ts의 privacyEffectiveDate

항목을 추가하면 홈 목록, `/work/[slug]` 페이지, sitemap, OG 이미지, JSON-LD가 함께 생성된다.

## 배포 후 확인

- Vercel 도메인 설정에서 `www.superbaseapp.com` → `superbaseapp.com` 리다이렉트
- Google Search Console에 `https://superbaseapp.com/sitemap.xml` 제출
- 각 제품 푸터에서 superbaseapp.com으로 링크

## 연락

tube@thesuperbase.com
