import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Prose from "@/components/Prose";
import Section from "@/components/Section";
import { principles, what, why } from "@/content/company";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "소개",
  description: `${site.name}는 ${site.tagline}입니다. 무엇을 왜 만들고 어떻게 운영하는지 소개합니다.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28">
        <Container narrow>
          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.035em]">
            슈퍼베이스 소개
          </h1>
          <p className="mt-5 text-xl text-fg-2">{site.tagline}.</p>
        </Container>
      </section>

      <section className="pb-20">
        <Container narrow>
          <h2 className="text-2xl font-extrabold tracking-[-0.02em]">무엇을 하는 곳인가</h2>
          <div className="mt-4">
            <Prose paragraphs={what} />
          </div>
          <h2 className="mt-14 text-2xl font-extrabold tracking-[-0.02em]">왜 만드는가</h2>
          <div className="mt-4">
            <Prose paragraphs={why} />
          </div>
        </Container>
      </section>

      <Section surface title="이렇게 일합니다">
        <ul role="list" className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="rounded-[20px] bg-bg p-7">
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-2">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="py-20">
        <Container narrow>
          <div className="flex flex-wrap gap-3">
            <Button href="/#products">서비스 둘러보기</Button>
            <Button href="/contact" variant="ghost">
              문의하기
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
