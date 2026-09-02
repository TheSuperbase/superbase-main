# 슈퍼베이스 웹사이트 리디자인 설계

- 날짜: 2026-09-03
- 대상: superbaseapp.com (이 저장소)
- 상태: 사용자 승인 대기

## 1. 배경과 목표

현재 사이트는 Google AdSense 심사 대응용으로 텍스트를 늘린 회사 소개 페이지이며, 디자인이 낡았고 이미 종료한 "배드민턴 대회 캘린더"를 유일한 서비스로 소개하고 있다.

이번 작업은 사이트를 처음부터 다시 만든다. 목표는 다음과 같다.

1. 슈퍼베이스를 "혼자 만들고 직접 운영하는 1인 메이커"로 소개한다. 특정 분야(배드민턴, 운동)에 묶지 않는다.
2. 만든 것들을 브랜드 > 제품 계층으로 보여주고, 브랜드와 제품이 늘어나도 데이터 추가만으로 반영되게 한다.
3. 현대적인 디자인으로 교체한다. 방향은 에디토리얼 미니멀(흰 배경, 큰 한글 타이포, 단색).
4. 검색에서 "슈퍼베이스 회사", "슈퍼베이스 (Superbase)" 등으로 안정적으로 노출되도록 SEO 기반을 갖춘다.
5. AdSense 검증 요소(메타 태그, ads.txt, 개인정보처리방침)는 유지한다.

## 2. 정체성과 목소리

- 화자는 슈퍼베이스다. 3인칭 브랜드 화법을 쓴다. 예: "슈퍼베이스는 혼자 만들고 직접 운영합니다."
- 개인 이름은 본문에 쓰지 않는다. 푸터와 개인정보처리방침의 사업자 정보에만 표기한다.
- 사업자 형태는 개인사업자다.
- 히어로 문장 초안: "슈퍼베이스는 혼자 만들고 직접 운영합니다. 일상에서 마주친 불편을 작은 제품으로 풀어냅니다."
- "오늘" 브랜드는 "지금 만들고 있는 것"으로 소개한다. 슈퍼베이스 자체를 배드민턴 회사로 규정하는 문장은 쓰지 않는다.

## 3. 사이트 구조

| 경로 | 내용 |
|---|---|
| `/` | 히어로, Now, 만든 것들, 연락 |
| `/about` | 슈퍼베이스 소개. 왜 만드는지, 어떻게 만드는지, 운영 원칙 |
| `/work/[slug]` | 브랜드와 제품별 상세 페이지. 데이터에서 자동 생성 |
| `/contact` | 이메일과 소셜 링크 안내 |
| `/privacy` | 개인정보처리방침 |

제외하는 것:

- `/terms` 이용약관. 루트 사이트에는 회원 기능이 없다.
- `/services/badminton-calendar`. 종료된 제품이며 `/work/badminton-calendar`로 대체된다.

### 3.1 홈 `/`

위에서 아래로 네 섹션이다. 단일 컬럼, 최대 폭 640px.

1. **히어로**: 큰 문장 두 줄과 보조 문단 하나. 링크 두 개("소개 보기", "이메일 보내기").
2. **Now**: "지금 하는 일" 한두 문장과 갱신 날짜(예: "2026년 9월"). 데이터 파일에서 읽는다.
3. **만든 것들**: 브랜드가 제목 줄, 소속 제품이 그 아래 들여쓴 줄. 브랜드에 속하지 않는 제품은 "단독 제품" 그룹 아래. 각 제품 줄은 이름, 한 줄 설명, 상태 배지. 종료 상태는 흐리게 표시한다. 브랜드와 제품 이름은 `/work/[slug]`로 링크한다.
4. **연락**: 짧은 초대 문장, 이메일, 소셜 링크 목록.

### 3.2 소개 `/about`

세 부분으로 쓴다. 각 부분은 소제목 하나와 문단 한두 개.

- 슈퍼베이스가 무엇인지(1인 메이커, 개인사업자, 만들고 운영하는 방식)
- 왜 만드는지(일상의 불편을 작은 제품으로 푸는 이유)
- 어떻게 운영하는지(작게 출시하고 피드백으로 고친다, 무료로 시작한다 등 원칙 3개 이내)

과장된 기업 서사(비전, 미션, 프로세스 4단계 같은 것)는 쓰지 않는다.

### 3.3 상세 `/work/[slug]`

브랜드와 제품 모두 같은 템플릿을 쓴다.

- 상단: 이름, 상태 배지, 한 줄 설명, 기간, 외부 링크 버튼(URL이 있을 때만)
- 본문: 데이터의 설명 문단(마크다운 아닌 문자열 배열)
- 브랜드 페이지: 소속 제품 목록을 홈과 같은 형식으로 아래에 붙인다
- 제품 페이지: 소속 브랜드로 가는 링크를 위에 붙인다
- 종료 상태: 상단에 "이 제품은 운영을 종료했습니다" 안내와, 후속 제품이 있으면 그 링크

`generateStaticParams`로 정적 생성한다. 오늘 허브 도메인이 생기면 브랜드 데이터의 URL만 채우면 외부 링크 버튼이 그쪽을 가리킨다.

### 3.4 문의 `/contact`

이메일 한 줄과 소셜 링크 목록. 폼은 두지 않는다. 응답 기준 같은 부가 문장은 한 줄 이내.

### 3.5 개인정보처리방침 `/privacy`

현재 문서를 폐기하고 다시 쓴다. 기준은 다음과 같다.

- 루트 사이트는 회원 가입, 로그인, 입력 폼이 없다. 수집 항목은 자동 수집(접속 로그, 쿠키)과 이메일 문의 시 사용자가 보낸 정보뿐이다.
- Google AdSense 광고 쿠키 사용과 사용자가 광고 개인화를 끄는 방법을 명시한다.
- Vercel 호스팅과 로그 보관을 처리 위탁 항목으로 적는다.
- 시행일은 배포일로 갱신한다.
- 각 제품(오늘의모임 등)은 자체 방침을 따른다고 명시하고 링크한다.

## 4. 데이터 구조

`content/` 폴더에 TypeScript 파일을 둔다. 모든 페이지는 이 데이터만 읽는다.

```ts
// content/site.ts
export const site = {
  name: "슈퍼베이스",
  nameEn: "Superbase",
  url: "https://superbaseapp.com",
  email: "tube@thesuperbase.com",
  tagline: "혼자 만들고 직접 운영하는 1인 메이커",
  business: { type: "개인사업자", owner: "전정훈" },
  social: [] as { label: string; url: string }[], // 자리만. 계정은 추후 추가
  adsense: "ca-pub-4113419530280094",
};

// content/now.ts
export const now = {
  updatedAt: "2026-09",
  text: "오늘의대회를 만들고 있어요. 오늘의모임은 클럽 운영진 피드백을 받아 다듬는 중입니다.",
};

// content/work.ts
export type Status = "live" | "soon" | "ended";

export type Brand = {
  kind: "brand";
  slug: string;        // "oneul"
  name: string;        // "오늘"
  summary: string;     // 한 줄
  description: string[];
  since: string;       // "2025"
  url?: string;        // 허브 도메인. 아직 없음
};

export type Product = {
  kind: "product";
  slug: string;        // "oneul-moim"
  name: string;        // "오늘의모임"
  summary: string;
  description: string[];
  status: Status;
  brand?: string;      // 소속 브랜드 slug. 없으면 단독 제품
  url?: string;        // "https://pc.oneul.day"
  period: { from: string; to?: string };
  successor?: string;  // 종료 시 후속 제품 slug
};
```

초기 데이터:

| 종류 | slug | 이름 | 상태 | 비고 |
|---|---|---|---|---|
| 브랜드 | `oneul` | 오늘 | | 배드민턴 동호인의 하루. URL 없음 |
| 제품 | `oneul-moim` | 오늘의모임 | live | 브랜드 oneul. https://pc.oneul.day |
| 제품 | `oneul-daehoe` | 오늘의대회 | soon | 브랜드 oneul. 설명은 "전국 배드민턴 대회 정보와 참가 관리" 임시 |
| 제품 | `badminton-calendar` | 배드민턴 대회 캘린더 | ended | 단독 제품. successor는 oneul-daehoe |

상태 라벨: live → "운영 중", soon → "준비 중", ended → "종료".

홈 목록 정렬: 브랜드는 since 내림차순, 브랜드 안 제품은 status 순(live, soon, ended) 다음 period.from 내림차순. 단독 제품 그룹은 맨 아래.

## 5. 디자인 시스템

### 5.1 톤

- 흰 배경(#ffffff), 거의 검정 텍스트(#0a0a0a), 보조 텍스트 회색 두 단계.
- 액센트는 상태 표시용 초록(운영 중) 하나. 그 외 색은 쓰지 않는다.
- 다크 모드는 `prefers-color-scheme`으로 지원한다. 배경 #0a0a0a, 텍스트 #ededed.
- 그림자, 그라디언트, 유리 효과는 쓰지 않는다. 구분은 1px 선과 여백으로만 한다.

### 5.2 타이포그래피

- 폰트: Pretendard Variable. `public/fonts/`에 woff2를 두고 `next/font/local`로 로드한다. CDN 링크는 제거한다.
- 히어로 제목: `clamp(2rem, 6vw, 3.25rem)`, weight 800, letter-spacing -0.035em, line-height 1.15.
- 본문: 16px 이상, line-height 1.7.
- 섹션 라벨: 11~12px, weight 700, 대문자 또는 한글, 회색.

### 5.3 레이아웃

- 콘텐츠 최대 폭 640px, 좌우 여백 20px(모바일) / 24px(데스크톱).
- 헤더: 로고 텍스트 "슈퍼베이스"와 링크 3개(소개, 만든 것들, 문의). 모바일에서도 한 줄에 들어가므로 햄버거 메뉴는 두지 않는다.
- 섹션 구분: 상단 1px 선과 섹션 라벨.
- 푸터: 저작권, 사업자 표기, 개인정보처리방침 링크, 이메일.

### 5.4 모션

- 페이지 진입 시 섹션이 순서대로 살짝 떠오른다(opacity 0→1, translateY 8px→0, 200~300ms, stagger 60ms).
- 링크 hover는 밑줄 색 변화 150ms.
- `prefers-reduced-motion: reduce`에서는 모든 모션을 끈다.
- 구현 시 `frontend-design`, `emil-design-eng`, `ui-ux-pro-max` 스킬의 지침을 따른다.

### 5.5 접근성

- 텍스트 대비 4.5:1 이상. 흐리게 표시하는 종료 항목도 3:1 이상 유지.
- 모든 링크와 버튼에 보이는 포커스 링.
- 상태 배지는 색만이 아니라 텍스트로 상태를 전달한다.
- `<html lang="ko">`, 시맨틱 헤딩 순서 유지.

## 6. SEO

- `app/sitemap.ts`: 홈, about, contact, privacy, 모든 `/work/[slug]`.
- `app/robots.ts`: 전체 허용, sitemap 경로 명시.
- `metadataBase`를 `https://superbaseapp.com`으로 설정하고 각 페이지에 `alternates.canonical`을 준다.
- 루트 `title.default`: "슈퍼베이스 (Superbase) | 혼자 만들고 직접 운영하는 1인 메이커". 템플릿: "%s | 슈퍼베이스".
- `app/opengraph-image.tsx`로 텍스트 기반 OG 이미지를 생성한다. 상세 페이지는 이름과 한 줄 설명을 넣는다.
- JSON-LD: 루트에 `Organization`(name, alternateName "Superbase", url, email, sameAs에 소셜)과 `WebSite`. 상세 페이지에 `SoftwareApplication` 또는 `Brand`.
- `www.superbaseapp.com`과 `superbaseapp.com` 중 하나로 통일한다. 현재 검색에는 www가 노출되므로 Vercel 도메인 설정에서 www 없는 쪽으로 리다이렉트를 확인한다. 코드에서는 `superbaseapp.com`을 canonical로 쓴다.
- 배포 후 할 일(코드 밖): Google Search Console에 sitemap 제출, 오늘의모임 푸터에서 superbaseapp.com으로 링크 요청.

## 7. 유지하는 것

- `public/ads.txt`
- `<meta name="google-adsense-account">`
- Next.js 16, React 19, Tailwind CSS 4, pnpm
- 기존 favicon (교체는 이번 범위 밖)

## 8. 제거하는 것

- `app/services/`, `app/terms/`
- `components/Header.tsx`, `Footer.tsx`, `ServiceCard.tsx` (새로 작성)
- 기존 `app/page.tsx`, `about`, `contact`, `privacy` 본문 전부
- `public/*.svg` 기본 자산(file, globe, next, vercel, window)
- 레이아웃의 CDN 폰트 링크
- `planning.md` (README에 흡수)

## 9. 산출물과 검증

- 새 컴포넌트: `Header`, `Footer`, `Section`(라벨과 상단 선), `StatusBadge`, `WorkList`(브랜드 > 제품 계층 렌더), `Reveal`(진입 모션 래퍼)
- 새 파일: `content/site.ts`, `content/now.ts`, `content/work.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/work/[slug]/page.tsx`, `lib/jsonld.ts`
- README 재작성, `Claude.md`에 프로젝트 요약과 데이터 추가 방법 기록
- 검증: `pnpm lint`, `pnpm build` 통과. 375, 768, 1440 폭에서 가로 스크롤 없음. 라이트와 다크 모드 확인. reduced-motion 확인. sitemap과 robots 응답 확인. JSON-LD를 Rich Results Test로 검증.

## 10. 범위 밖

- 오늘 브랜드 허브 사이트
- 블로그 및 글 기능
- 문의 폼과 백엔드
- 소셜 계정 실제 주소(자리만 둔다)
- 오늘의대회 정식 설명과 URL(임시 문구 사용)
- favicon 및 로고 제작
