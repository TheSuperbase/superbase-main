## 서비스 목적

- `superbaseapp.com`(루트)에 **최소 랜딩 페이지**를 배포하여 Google AdSense의 “사이트 검토/소유권 확인”을 통과할 수 있는 기반을 만든다.
- 실제 광고/서비스 운영은 **서브도메인**에서 수행한다.
- 루트는 광고를 붙이지 않아도 되며, “검증/브랜드 허브” 역할을 수행한다.

## 회사/운영 정보

- 회사 이름: **슈퍼베이스 (Superbase)**
- 형태: **개인사업자**
- 루트 도메인: `superbaseapp.com` (검증/허브/브랜딩용 최소 랜딩)
- 서비스 도메인: `A.superbaseapp.com` 형태로 분기하여 운영
  - 예: `bd-calendar.superbaseapp.com`

## 인프라

- Route 53
- Vercel
- Next.js(app router)

## Next.js 최소 랜딩 구현 (App Router)

### 권장 페이지 구성 (애드센스 승인/검토에 유리)

- `/` : Superbase 소개 + 서브도메인 서비스 링크 모음
- `/privacy` : 개인정보처리방침
- `/contact` : 문의하기
