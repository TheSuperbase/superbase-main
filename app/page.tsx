import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

const services = [
  {
    title: "배드민턴 대회 캘린더",
    description:
      "전국 각지에서 개최되는 배드민턴 대회 정보를 한눈에 확인할 수 있습니다. 대회 일정, 장소, 참가 방법 등 상세 정보를 제공하여 배드민턴 동호인들의 대회 참가를 돕습니다.",
    href: "https://bd-calendar.superbaseapp.com",
    comingSoon: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              슈퍼베이스
              <span className="block text-2xl md:text-3xl font-normal text-muted mt-2">
                Superbase
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8">
              사용자의 일상을 더 편리하게 만드는 디지털 서비스를 제공합니다.
              <br className="hidden md:block" />
              실용적이고 효율적인 웹 애플리케이션을 통해
              <br className="hidden md:block" />
              더 나은 사용자 경험을 제공하기 위해 노력합니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/about"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                회사 소개
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              제공 서비스
            </h2>
            <p className="text-muted max-w-3xl mx-auto mb-8">
              슈퍼베이스는 사용자의 실제 니즈를 해결하는 다양한 웹 서비스를
              개발하고 운영하고 있습니다. 각 서비스는 특정 분야의 문제를
              해결하고자 하는 목표를 가지고 있으며, 사용자 피드백을 바탕으로
              지속적으로 개선되고 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                href={service.href}
                comingSoon={service.comingSoon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              우리의 가치
            </h2>
            <p className="text-muted max-w-3xl mx-auto">
              슈퍼베이스는 단순히 서비스를 만드는 것을 넘어, 사용자의 삶에
              실질적인 가치를 제공하는 것을 목표로 합니다. 다음은 우리가
              서비스를 개발하고 운영하면서 가장 중요하게 생각하는 가치들입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                사용자 중심
              </h3>
              <p className="text-muted leading-relaxed">
                실제 사용자의 니즈를 파악하고 그에 맞는 솔루션을 제공합니다.
                사용자 피드백을 적극 반영하여 서비스를 지속적으로 개선합니다.
                모든 기능과 디자인 결정은 사용자 경험을 최우선으로 고려합니다.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                빠른 실행력
              </h3>
              <p className="text-muted leading-relaxed">
                아이디어를 빠르게 구현하고 시장에 출시합니다. 신속한 의사결정과
                실행을 통해 변화하는 시장에 민첩하게 대응합니다. 완벽함보다는
                빠른 검증과 개선을 통해 더 나은 서비스를 만들어갑니다.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                지속적인 성장
              </h3>
              <p className="text-muted leading-relaxed">
                데이터 기반 의사결정을 통해 서비스를 개선하고 성장시킵니다.
                사용자와 함께 성장하는 서비스를 만들어갑니다. 출시 후에도
                지속적인 모니터링과 업데이트를 통해 서비스 품질을 향상시킵니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              서비스 개발 프로세스
            </h2>
            <p className="text-muted max-w-3xl mx-auto">
              슈퍼베이스는 체계적인 개발 프로세스를 통해 안정적이고 사용자
              친화적인 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    문제 발견 및 분석
                  </h3>
                  <p className="text-muted leading-relaxed">
                    사용자들이 실제로 겪는 불편함과 문제점을 파악합니다. 커뮤니티
                    리서치, 사용자 인터뷰, 시장 분석을 통해 해결할 가치가 있는
                    문제를 찾아냅니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    솔루션 기획
                  </h3>
                  <p className="text-muted leading-relaxed">
                    발견한 문제를 해결할 수 있는 최적의 방법을 고민합니다. 사용자
                    경험을 최우선으로 고려하여 직관적이고 효율적인 서비스를
                    설계합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    빠른 개발 및 출시
                  </h3>
                  <p className="text-muted leading-relaxed">
                    최신 웹 기술을 활용하여 안정적이고 확장 가능한 서비스를
                    개발합니다. MVP(최소 기능 제품)를 빠르게 출시하여 실제
                    사용자의 반응을 확인합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    피드백 수집 및 개선
                  </h3>
                  <p className="text-muted leading-relaxed">
                    사용자 피드백과 데이터 분석을 통해 서비스를 지속적으로
                    개선합니다. 정기적인 업데이트를 통해 새로운 기능을 추가하고
                    사용자 경험을 향상시킵니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              사용 사례
            </h2>
            <p className="text-muted max-w-3xl mx-auto">
              슈퍼베이스의 서비스가 실제로 사용자들에게 어떤 도움을 주고
              있는지 확인해보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  배드민턴 대회 캘린더
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                배드민턴 동호인 커뮤니티 활성화
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                전국 각지의 배드민턴 대회 정보가 흩어져 있어 동호인들이 대회를
                찾기 어려웠습니다. 슈퍼베이스의 배드민턴 대회 캘린더를 통해
                모든 대회 정보를 한곳에서 확인할 수 있게 되어, 더 많은
                동호인들이 대회에 참가하고 있습니다.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>대회 정보 통합 관리</span>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  배드민턴 대회 캘린더
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                대회 주최자와 참가자 연결
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                대회 주최자들은 참가자 모집에 어려움을 겪었고, 참가자들은 대회
                정보를 찾기 어려웠습니다. 슈퍼베이스의 서비스를 통해 주최자는
                더 많은 참가자를 모집할 수 있고, 참가자는 원하는 대회를 쉽게
                찾을 수 있게 되었습니다.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>효율적인 정보 전달</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              자주 묻는 질문
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Q. 슈퍼베이스는 어떤 회사인가요?
              </h3>
              <p className="text-muted leading-relaxed">
                A. 슈퍼베이스는 사용자의 일상을 더 편리하게 만드는 실용적인
                디지털 서비스를 개발하고 운영하는 개인사업자입니다. 사용자의
                실제 니즈를 파악하고 그에 맞는 솔루션을 제공하는 것을 목표로
                하고 있습니다.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Q. 어떤 기술을 사용하여 서비스를 개발하나요?
              </h3>
              <p className="text-muted leading-relaxed">
                A. Next.js, React, TypeScript 등 최신 웹 기술을 활용하여 빠르고
                안정적인 서비스를 제공합니다. Vercel을 통해 서비스를 호스팅하며,
                지속적인 배포와 업데이트를 진행하고 있습니다.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Q. 서비스 이용은 무료인가요?
              </h3>
              <p className="text-muted leading-relaxed">
                A. 현재 제공하는 모든 서비스는 무료로 이용하실 수 있습니다.
                사용자들이 부담 없이 서비스를 이용하고 피드백을 제공할 수 있도록
                하는 것이 우선입니다.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Q. 앞으로 어떤 서비스를 계획하고 있나요?
              </h3>
              <p className="text-muted leading-relaxed">
                A. 현재 배드민턴 대회 캘린더 외에도 다양한 분야의 서비스를
                준비하고 있습니다. 사용자들이 일상에서 겪는 불편함을 해결할 수
                있는 실용적인 서비스를 지속적으로 개발할 예정입니다. 구체적인
                서비스 계획은 개발이 진행되면 공지하겠습니다.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Q. 서비스에 대한 피드백은 어떻게 전달하나요?
              </h3>
              <p className="text-muted leading-relaxed">
                A. 서비스에 대한 의견, 제안, 버그 리포트 등은 문의 페이지를 통해
                전달해 주시면 됩니다. 모든 피드백은 서비스 개선에 적극 반영하고
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-primary/5 rounded-lg border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              함께 성장하는 서비스를 만들어가세요
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              슈퍼베이스는 사용자 여러분의 의견을 소중히 여깁니다. 서비스에
              대한 피드백, 새로운 아이디어, 개선 제안 등 어떤 의견이든
              환영합니다. 함께 더 나은 서비스를 만들어가요.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                피드백 보내기
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
              >
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
