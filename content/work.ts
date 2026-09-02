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
