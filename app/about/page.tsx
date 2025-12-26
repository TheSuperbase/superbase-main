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

          <section>
            <h2 className="text-2xl font-semibold mb-4">개발 방법론</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                슈퍼베이스는 애자일(Agile) 개발 방법론을 기반으로 서비스를
                개발합니다. 빠른 프로토타이핑과 반복적인 개선을 통해 사용자에게
                최적화된 서비스를 제공합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    사용자 중심 설계 (UX First)
                  </h3>
                  <p>
                    모든 기능은 사용자의 관점에서 설계됩니다. 복잡한 기능보다는
                    직관적이고 쉬운 인터페이스를 우선시하며, 사용자 테스트를
                    통해 지속적으로 개선합니다.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    반복적 개선 (Iterative Development)
                  </h3>
                  <p>
                    완벽한 제품을 처음부터 만들기보다는 핵심 기능을 빠르게
                    출시하고 사용자 피드백을 바탕으로 지속적으로 개선합니다.
                    작은 업데이트를 자주 제공합니다.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    데이터 기반 의사결정
                  </h3>
                  <p>
                    사용자 행동 데이터와 피드백을 분석하여 어떤 기능이 실제로
                    가치 있는지 파악합니다. 주관적인 판단보다는 객관적인
                    데이터를 기반으로 의사결정을 내립니다.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    품질과 성능 최적화
                  </h3>
                  <p>
                    빠른 로딩 속도, 안정적인 서비스 운영, 모바일 최적화 등
                    기술적 품질을 중요하게 생각합니다. 사용자가 불편함 없이
                    서비스를 이용할 수 있도록 합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">서비스 운영 원칙</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                슈퍼베이스는 다음과 같은 원칙을 바탕으로 서비스를 운영하고
                있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      투명한 운영
                    </h3>
                    <p>
                      서비스 운영 방침, 개인정보 처리 방침, 업데이트 내역 등을
                      투명하게 공개합니다. 사용자들이 서비스를 신뢰하고 이용할
                      수 있도록 합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      신속한 고객 지원
                    </h3>
                    <p>
                      사용자의 문의사항과 문제에 빠르게 대응합니다. 버그 리포트는
                      우선순위를 높게 두고 신속하게 수정하며, 기능 제안은
                      적극적으로 검토합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      보안과 개인정보 보호
                    </h3>
                    <p>
                      사용자의 개인정보를 안전하게 보호하고, 관련 법규를
                      준수합니다. 필요한 최소한의 정보만 수집하며, 제3자에게
                      제공하지 않습니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      지속 가능한 서비스
                    </h3>
                    <p>
                      단기적인 이익보다는 장기적으로 지속 가능한 서비스를
                      만듭니다. 사용자와 함께 성장하며, 꾸준히 가치를 제공하는
                      서비스를 지향합니다.
                    </p>
                  </div>
                </div>
              </div>
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
