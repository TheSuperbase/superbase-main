import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사 소개",
  description:
    "슈퍼베이스는 사용자의 일상을 더 편리하게 만드는 실용적인 디지털 서비스를 제공하는 개인사업자입니다.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          회사 소개
        </h1>

        <div className="space-y-12 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">슈퍼베이스 소개</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                슈퍼베이스(Superbase)는 사용자의 일상을 더 편리하게 만드는
                실용적인 디지털 서비스를 개발하고 운영하는 개인사업자입니다.
              </p>
              <p>
                우리는 실제 사용자들이 겪는 불편함을 해결하고, 더 나은 사용자
                경험을 제공하는 것을 목표로 합니다. 단순히 기술을 위한 기술이
                아닌, 실생활에 도움이 되는 서비스를 만들기 위해 노력합니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">우리의 철학</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  사용자 중심 설계
                </h3>
                <p className="text-muted leading-relaxed">
                  모든 서비스는 실제 사용자의 니즈에서 출발합니다. 사용자 피드백을
                  적극적으로 수용하고 반영하여 지속적으로 서비스를 개선해
                  나갑니다.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  실용성 우선
                </h3>
                <p className="text-muted leading-relaxed">
                  화려함보다는 실용성을, 복잡함보다는 간결함을 추구합니다. 사용자가
                  쉽고 빠르게 원하는 기능을 이용할 수 있도록 설계합니다.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  빠른 실행
                </h3>
                <p className="text-muted leading-relaxed">
                  좋은 아이디어는 빠르게 실행에 옮깁니다. 완벽함을 추구하기보다는
                  빠르게 출시하고 사용자 반응을 통해 개선해 나가는 애자일 방식을
                  따릅니다.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  지속적인 개선
                </h3>
                <p className="text-muted leading-relaxed">
                  출시가 끝이 아닙니다. 사용자 데이터와 피드백을 분석하여 끊임없이
                  서비스를 개선하고, 새로운 기능을 추가합니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">운영 서비스</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  배드민턴 대회 캘린더
                </h3>
                <p className="mb-3">
                  전국 각지에서 개최되는 배드민턴 대회 정보를 한곳에 모아
                  제공하는 서비스입니다. 배드민턴 동호인들이 대회 정보를 쉽게
                  찾고 참가할 수 있도록 돕습니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    스포츠
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    커뮤니티
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    정보 통합
                  </span>
                </div>
                <a
                  href="https://bd-calendar.superbaseapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:underline font-medium"
                >
                  서비스 방문하기 →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                슈퍼베이스는 최신 웹 기술을 활용하여 빠르고 안정적인 서비스를
                제공합니다.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-card rounded-lg border border-border text-center">
                  <p className="font-semibold text-foreground">Next.js</p>
                  <p className="text-sm">프레임워크</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border text-center">
                  <p className="font-semibold text-foreground">React</p>
                  <p className="text-sm">UI 라이브러리</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border text-center">
                  <p className="font-semibold text-foreground">TypeScript</p>
                  <p className="text-sm">개발 언어</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border text-center">
                  <p className="font-semibold text-foreground">Vercel</p>
                  <p className="text-sm">호스팅</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">비전</h2>
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-muted leading-relaxed">
                슈퍼베이스는 사람들의 일상에 작지만 의미 있는 변화를 만드는
                서비스를 지속적으로 개발하고자 합니다. 한 분야씩 차근차근
                해결해가며, 사용자들의 삶을 조금 더 편리하게 만드는 것이 우리의
                목표입니다.
              </p>
            </div>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold mb-4">문의하기</h2>
            <p className="text-muted leading-relaxed mb-4">
              서비스에 대한 문의사항이나 제안이 있으시면 언제든지 연락해 주세요.
            </p>
            <div className="space-y-2">
              <p className="text-muted">
                <strong className="text-foreground">사업자명:</strong> 슈퍼베이스
                (Superbase)
              </p>
              <p className="text-muted">
                <strong className="text-foreground">형태:</strong> 개인사업자
              </p>
              <p className="text-muted">
                <strong className="text-foreground">이메일:</strong>{" "}
                <a
                  href="mailto:tube@thesuperbase.com"
                  className="text-primary hover:underline"
                >
                  tube@thesuperbase.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
