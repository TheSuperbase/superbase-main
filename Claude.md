# superbaseapp.com

슈퍼베이스(1인 메이커, 개인사업자)의 소개 사이트. 정적 페이지만 있고 서버 로직, DB, 폼이 없다.

## 원칙

- 모든 콘텐츠는 `content/`에서 읽는다. 페이지에 문구를 하드코딩하지 않는다 (법적 문서 제외).
- 화자는 슈퍼베이스. 3인칭 브랜드 화법. 개인 이름은 푸터와 개인정보처리방침에만.
- 색은 `globals.css`의 토큰(bg, fg, fg-2, fg-3, line, live)만 쓴다. 새 색을 추가하지 않는다.
- 최대 폭 640px 단일 컬럼. 그림자, 그라디언트, 유리 효과 금지. 구분은 1px 선과 여백으로.
- 모션은 `.reveal` 진입 효과와 150ms 색 전환만. `prefers-reduced-motion` 존중.
- 클라이언트 컴포넌트는 `NavLink` 하나. 새로 추가할 때는 이유가 필요하다.
- 독립 텍스트 링크는 components/TextLink.tsx를 쓴다 (44px 터치 영역, 새 창 안내 포함). 문장 안의 인라인 링크만 Link/a를 직접 쓴다.
- 브랜드/제품 조회는 lib/work.ts의 findBrand/findProduct를 쓴다. findWork는 slug만 알 때만.

## 명령

`pnpm dev`, `pnpm test`, `pnpm lint`, `pnpm build`. 변경 후 lint와 build를 통과해야 한다.

## 데이터 추가

README의 "콘텐츠 갱신" 참고. 브랜드/제품은 `content/work.ts`, Now는 `content/now.ts`, 소셜은 `content/site.ts`.
