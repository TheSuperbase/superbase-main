// content/site.ts
export const site = {
  name: "슈퍼베이스",
  nameEn: "Superbase",
  url: "https://www.superbaseapp.com",
  email: "tube@thesuperbase.com",
  tagline: "생활 속 불편을 더 나은 서비스로 만드는 회사",
  description:
    "슈퍼베이스(Superbase)는 생활 속 불편을 발견하고, 더 나은 방법을 서비스로 만듭니다. 지금은 동호인 스포츠를 위한 오늘 시리즈를 만들고 있습니다.",
  business: { type: "개인사업자", owner: "전정훈" },
  // 소셜 계정은 추후 추가. 예: { label: "GitHub", url: "https://github.com/..." }
  social: [] as { label: string; url: string }[],
  adsense: "ca-pub-4113419530280094",
  privacyEffectiveDate: "2026년 9월 3일",
};

export type Site = typeof site;
