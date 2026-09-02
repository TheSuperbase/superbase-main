import type { Metadata } from "next";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "소개",
  description: `${site.name}는 ${site.tagline}입니다. 왜 만들고 어떻게 운영하는지 소개합니다.`,
  path: "/about",
});

const WHAT = [
  "슈퍼베이스(Superbase)는 혼자 만들고 직접 운영하는 1인 메이커입니다. 기획, 디자인, 개발, 운영을 한 사람이 처음부터 끝까지 맡습니다.",
  "개인사업자로 등록되어 있고, 특정 분야에 스스로를 묶지 않습니다. 지금은 배드민턴 동호인을 위한 오늘 시리즈를 만들고 있지만, 다음 제품은 전혀 다른 곳에서 나올 수 있습니다.",
];

const WHY = [
  "일상에서 마주친 불편이 출발점입니다. 단톡방 세 개로 돌아가던 모임 운영, 흩어져 있는 대회 정보처럼 누군가는 매주 겪지만 아무도 제대로 풀지 않은 문제를 찾습니다.",
  "크게 시작하지 않습니다. 하나의 불편을 하나의 제품으로 풀고, 실제로 쓰는 사람이 생기면 그 사람들의 이야기를 따라 다음 것을 만듭니다.",
];

const HOW = [
  "작게 출시하고 피드백으로 고칩니다. 완성도보다 실제 사용자의 첫 반응을 먼저 봅니다.",
  "무료로 시작합니다. 부담 없이 써 보고 의견을 줄 수 있어야 제품이 제대로 자랍니다.",
  "직접 운영합니다. 만든 사람이 문의에 답하고 장애를 고칩니다.",
];

export default function AboutPage() {
  return (
    <div className="pb-8">
      <Reveal index={0}>
        <section className="pt-12 pb-6 md:pt-16">
          <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
            슈퍼베이스 소개
          </h1>
          <p className="mt-3 text-lg text-fg-2">{site.tagline}</p>
        </section>
      </Reveal>
      <Reveal index={1}>
        <Section label="무엇을 하는 곳인가">
          <Prose paragraphs={WHAT} />
        </Section>
      </Reveal>
      <Reveal index={2}>
        <Section label="왜 만드는가">
          <Prose paragraphs={WHY} />
        </Section>
      </Reveal>
      <Reveal index={3}>
        <Section label="어떻게 운영하는가">
          <ol className="list-decimal space-y-3 pl-5 text-fg-2 marker:font-semibold marker:text-fg-3">
            {HOW.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ol>
        </Section>
      </Reveal>
      <Reveal index={4}>
        <Section label="더 보기">
          <div className="flex gap-6 text-sm font-semibold">
            <TextLink href="/#work">만든 것들</TextLink>
            <TextLink href="/contact">문의하기</TextLink>
          </div>
        </Section>
      </Reveal>
    </div>
  );
}
