import Link from "next/link";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import WorkList from "@/components/WorkList";
import { site } from "@/content/site";
import { now } from "@/content/now";
import { brands, products } from "@/content/work";
import { formatMonth } from "@/lib/date";

export default function Home() {
  return (
    <div className="pb-8">
      <Reveal index={0}>
        <section className="pt-14 pb-10 md:pt-20">
          <h1 className="text-[clamp(2rem,6vw,3.25rem)] font-extrabold leading-[1.15] tracking-[-0.035em]">
            슈퍼베이스는 혼자 만들고
            <br />
            직접 운영합니다.
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-fg-2">
            일상에서 마주친 불편을 작은 제품으로 풀어냅니다. 지금은{" "}
            <Link href="/work/oneul" className="font-semibold text-fg underline underline-offset-4">
              오늘
            </Link>{" "}
            시리즈를 만들고 있고, 다음은 전혀 다른 영역일 수도 있습니다.
          </p>
          <div className="mt-8 flex gap-6 text-sm font-semibold">
            <Link href="/about" className="underline underline-offset-4 hover:text-fg-2">
              소개 보기
            </Link>
            <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-fg-2">
              이메일 보내기
            </a>
          </div>
        </section>
      </Reveal>

      <Reveal index={1}>
        <Section label="NOW" aside={formatMonth(now.updatedAt)}>
          <p className="flex items-start gap-3">
            <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-live" />
            <span>{now.text}</span>
          </p>
        </Section>
      </Reveal>

      <Reveal index={2}>
        <Section
          id="work"
          label="만든 것들"
          aside={`브랜드 ${brands.length} · 제품 ${products.length}`}
        >
          <WorkList />
        </Section>
      </Reveal>

      <Reveal index={3}>
        <Section label="연락">
          <p className="text-fg-2">제안, 협업, 그냥 인사도 환영합니다.</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block font-semibold underline underline-offset-4 hover:text-fg-2"
          >
            {site.email}
          </a>
          {site.social.length > 0 && (
            <ul className="mt-3 flex gap-4 text-sm font-semibold">
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
          )}
        </Section>
      </Reveal>
    </div>
  );
}
