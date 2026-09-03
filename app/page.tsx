import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { mission, principles } from "@/content/company";
import { now } from "@/content/now";
import { site } from "@/content/site";
import { formatMonth } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";
import { groupWork } from "@/lib/work";

export const metadata: Metadata = pageMetadata({ description: site.description, path: "/" });

export default function Home() {
  const [leadBefore, leadLink, leadAfter] = mission.lead;
  return (
    <>
      <Reveal>
        <section className="pt-20 pb-20 text-center md:pt-28 md:pb-28">
          <Container>
            <h1 className="mx-auto max-w-[920px] text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">
              {mission.headline[0]}{" "}
              <br className="hidden md:inline" />
              {mission.headline[1]}
            </h1>
            <p className="mx-auto mt-7 max-w-[640px] text-lg leading-relaxed text-fg-2 md:text-xl">
              {leadBefore}
              <Link href="/work/oneul" className="font-semibold text-fg underline underline-offset-4">
                {leadLink}
              </Link>
              {leadAfter}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/#products">서비스 둘러보기</Button>
              <Button href="/about" variant="ghost">
                슈퍼베이스 소개
              </Button>
            </div>
            <p className="mx-auto mt-12 flex max-w-[640px] items-start gap-3 rounded-[20px] bg-surface px-5 py-3 text-left text-sm text-fg-2 md:inline-flex md:items-center md:rounded-full md:py-2.5">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-live md:mt-0" />
              <span>{now.text}</span>
              <span className="hidden shrink-0 text-fg-3 md:inline">{formatMonth(now.updatedAt)}</span>
            </p>
          </Container>
        </section>
      </Reveal>

      <Section
        id="products"
        surface
        title="슈퍼베이스가 만드는 서비스"
        lead="하나의 불편에서 하나의 서비스가 시작됩니다. 시리즈로 묶어 함께 키워갑니다."
      >
        <ProductGrid groups={groupWork()} withNext />
      </Section>

      <Section title="이렇게 일합니다" lead="작게 만들고, 직접 쓰고, 사용자의 이야기를 듣고 고칩니다.">
        <ul role="list" className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="rounded-[20px] border border-line p-7">
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-2">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="pb-24">
        <Container>
          <div className="flex flex-col gap-8 rounded-[28px] bg-fg px-8 py-12 text-bg md:flex-row md:items-center md:justify-between md:px-16 md:py-16">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">
                제안, 협업, 그냥 인사도 환영합니다.
              </h2>
              <p className="mt-3 text-lg text-bg/70">{site.email}로 보내 주시면 며칠 안에 답장합니다.</p>
            </div>
            <Button href={`mailto:${site.email}`} variant="inverse">
              이메일 보내기
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
