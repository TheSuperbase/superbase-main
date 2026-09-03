import type { Metadata } from "next";
import Container from "@/components/Container";
import TextLink from "@/components/TextLink";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "개인정보처리방침",
  description: `${site.name} 웹사이트(superbaseapp.com)의 개인정보처리방침입니다.`,
  path: "/privacy",
});

function Clause({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="mb-4 text-lg font-extrabold tracking-[-0.02em]">{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-fg-2">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-fg-2">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

// 법적 문서: 진입 애니메이션(Reveal) 없이 즉시 표시한다.
export default function PrivacyPage() {
  return (
    <Container narrow className="pb-16">
      <section className="pt-20 pb-8 md:pt-28">
        <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.035em]">
          개인정보처리방침
        </h1>
        <p className="mt-3 text-sm text-fg-3">시행일 {site.privacyEffectiveDate}</p>
        <div className="mt-4">
          <P>
            {site.name}(이하 &quot;슈퍼베이스&quot;)는 superbaseapp.com 웹사이트(이하 &quot;사이트&quot;)를 운영하면서 개인정보 보호법 등 관련 법령을 준수합니다. 이 방침은 사이트에 적용되며, 슈퍼베이스가 운영하는 각 서비스(오늘의모임 등)는 해당 서비스의 개인정보처리방침을 따릅니다.
          </P>
        </div>
      </section>

      <Clause title="1. 수집하는 개인정보와 수집 방법">
        <div className="space-y-3">
          <P>사이트에는 회원 가입, 로그인, 입력 폼이 없습니다. 수집되는 정보는 다음 두 가지뿐입니다.</P>
          <List
            items={[
              "자동 수집: 접속 IP 주소, 브라우저 종류와 버전, 접속 일시, 방문한 페이지, 쿠키. 서비스 이용 과정에서 자동으로 생성됩니다.",
              "이메일 문의: 이용자가 이메일을 보낼 때 포함한 이메일 주소와 문의 내용. 이용자가 직접 제공합니다.",
            ]}
          />
        </div>
      </Clause>

      <Clause title="2. 개인정보의 이용 목적">
        <List
          items={[
            "사이트 운영, 보안, 장애 대응과 이용 통계 분석",
            "이메일 문의에 대한 답변",
            "Google AdSense를 통한 광고 게재",
          ]}
        />
      </Clause>

      <Clause title="3. 보유 및 이용 기간">
        <List
          items={[
            "자동 수집 정보: 호스팅 사업자의 로그 보관 기간 이후 자동 삭제됩니다.",
            "이메일 문의: 답변 완료 후 1년간 보관 후 삭제합니다. 이용자가 삭제를 요청하면 지체 없이 삭제합니다.",
          ]}
        />
      </Clause>

      <Clause title="4. 쿠키와 광고">
        <div className="space-y-3">
          <P>
            사이트는 Google AdSense 광고를 게재할 수 있습니다. Google을 비롯한 제3자 광고 사업자는 쿠키를 사용하여 이용자의 이 사이트 및 다른 웹사이트 방문 기록을 바탕으로 광고를 게재합니다.
          </P>
          <P>
            이용자는{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Google 광고 설정
              <span className="sr-only"> (새 창에서 열림)</span>
            </a>
            에서 개인 맞춤 광고를 끌 수 있고, 브라우저 설정에서 쿠키 저장을 거부할 수 있습니다. 쿠키를 거부해도 사이트 열람에는 지장이 없습니다.
          </P>
        </div>
      </Clause>

      <Clause title="5. 개인정보의 처리 위탁과 제3자 제공">
        <div className="space-y-3">
          <P>슈퍼베이스는 개인정보를 제3자에게 판매하거나 제공하지 않습니다. 다음 사업자에게 처리를 위탁합니다.</P>
          <List
            items={[
              "Vercel Inc.: 사이트 호스팅과 접속 로그 보관 (미국)",
              "Google LLC: 광고 게재 (미국)",
            ]}
          />
        </div>
      </Clause>

      <Clause title="6. 이용자의 권리">
        <P>
          이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 요청은 아래 연락처로 보내 주시면 지체 없이 처리합니다.
        </P>
      </Clause>

      <Clause title="7. 개인정보 보호책임자">
        <List
          items={[
            `책임자: ${site.business.owner} (${site.business.type} ${site.name})`,
            `이메일: ${site.email}`,
          ]}
        />
      </Clause>

      <Clause title="8. 방침의 변경">
        <P>
          이 방침은 시행일부터 적용됩니다. 내용이 바뀌면 사이트에 변경 사항과 새 시행일을 게시합니다.
        </P>
        <p className="mt-4 flex text-sm">
          <TextLink href="/">홈으로</TextLink>
        </p>
      </Clause>
    </Container>
  );
}
