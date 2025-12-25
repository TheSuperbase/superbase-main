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
            <p className="text-muted">
              슈퍼베이스가 운영하는 실용적인 웹 서비스입니다.
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
                실행을 통해 변화하는 시장에 민첩하게 대응합니다.
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
                사용자와 함께 성장하는 서비스를 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
