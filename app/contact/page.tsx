import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import TextLink from "@/components/TextLink";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "문의",
  description: `${site.name}에 제안, 협업, 피드백을 보내는 방법입니다.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28">
        <Container narrow>
          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.035em]">
            문의
          </h1>
          <p className="mt-5 text-xl text-fg-2">제안, 협업, 피드백, 그냥 인사도 환영합니다.</p>
          <div className="mt-10 rounded-[20px] bg-surface p-8">
            <p className="text-sm font-bold text-fg-3">이메일</p>
            <p className="mt-2 text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">{site.email}</p>
            <p className="mt-2 text-fg-2">보통 며칠 안에 답장합니다.</p>
            <div className="mt-6">
              <Button href={`mailto:${site.email}`}>이메일 보내기</Button>
            </div>
          </div>
          {site.social.length > 0 && (
            <ul role="list" className="mt-6 flex flex-wrap gap-5 font-semibold">
              {site.social.map((s) => (
                <li key={s.url}>
                  <TextLink href={s.url} external>
                    {s.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <section className="pb-24">
        <Container narrow>
          <h2 className="text-2xl font-extrabold tracking-[-0.02em]">서비스 관련 문의</h2>
          <p className="mt-3 text-fg-2">
            오늘의모임 등 각 서비스의 사용 문의는 해당 서비스 안의 문의 채널을 이용하면 더 빠릅니다.
            이 주소로 보내도 전달됩니다.
          </p>
        </Container>
      </section>
    </>
  );
}
