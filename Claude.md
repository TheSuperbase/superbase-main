# superbaseapp.com

슈퍼베이스(개인사업자)의 회사 소개 사이트. 톤은 회사 랜딩페이지, 화법은 "~합니다". 정적 페이지만 있고 서버 로직, DB, 폼이 없다.

## 원칙

- 모든 콘텐츠는 `content/`에서 읽는다. 페이지에 문구를 하드코딩하지 않는다 (법적 문서 제외).
- 화자는 슈퍼베이스. 3인칭 브랜드 화법 "~합니다". 개인 이름은 푸터와 개인정보처리방침에만. 회사 문구는 `content/company.ts`.
- 색은 `globals.css`의 토큰(bg, surface, fg, fg-2, fg-3, line, accent, accent-soft, live)만 쓴다. 새 색을 추가하지 않는다. 버튼은 검정(fg), 액센트 블루는 배지·포커스·강조에만.
- 회사 랜딩 톤. 컨테이너 1200px(`Container`), 긴 글은 760px(`Container narrow`). 섹션은 `Section`(제목+리드, surface 배경 옵션). 그림자, 그라디언트 금지. 카드는 1px 선 + 20px 라운드.
- 모션은 홈 히어로의 `.reveal` 한 번과 150ms 전환, 버튼 press scale(0.97, motion-safe)만. `prefers-reduced-motion` 존중.
- 클라이언트 컴포넌트는 `NavLink` 하나. 새로 추가할 때는 이유가 필요하다.
- CTA는 `components/Button.tsx`(필 버튼, primary/ghost/inverse). 독립 텍스트 링크는 `TextLink`. 문장 안의 인라인 링크만 Link/a를 직접 쓴다.
- 브랜드/제품 조회는 lib/work.ts의 findBrand/findProduct를 쓴다. findWork는 slug만 알 때만.

## 명령

`pnpm dev`, `pnpm test`, `pnpm lint`, `pnpm build`. 변경 후 lint와 build를 통과해야 한다.

## 데이터 추가

README의 "콘텐츠 갱신" 참고. 브랜드/제품은 `content/work.ts`, Now는 `content/now.ts`, 소셜은 `content/site.ts`.
