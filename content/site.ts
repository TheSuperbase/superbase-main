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
  privacyEffectiveDate: "2026년 9월 3일",
};

export type Site = typeof site;
