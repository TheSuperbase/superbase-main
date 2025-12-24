# Superbase Web

슈퍼베이스(Superbase)의 공식 웹사이트입니다. 다양한 디지털 서비스를 소개하고 제공합니다.

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Font**: SUIT Variable

## Getting Started

### Prerequisites

- Node.js 18.17 이상
- pnpm (권장) 또는 npm

### Installation

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | 개발 서버 실행 |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm start` | 프로덕션 서버 실행 |
| `pnpm lint` | ESLint 코드 검사 |

## Project Structure

```
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   ├── globals.css     # 글로벌 스타일
│   ├── privacy/        # 개인정보처리방침
│   └── terms/          # 이용약관
├── components/
│   ├── Header.tsx      # 헤더 컴포넌트
│   ├── Footer.tsx      # 푸터 컴포넌트
│   └── ServiceCard.tsx # 서비스 카드 컴포넌트
└── public/             # 정적 파일
```

## Services

- **배드민턴 대회 캘린더** - 배드민턴 대회 정보를 모아서 보여주는 서비스 ([bd-calendar.superbaseapp.com](https://bd-calendar.superbaseapp.com))

## Contact

- Email: tube@thesuperbase.com

## License

Private - All rights reserved.
