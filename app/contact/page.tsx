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
