import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "배드민턴 대회 캘린더",
    description: "여기저기 흩어져 있는 배드민턴 대회 정보들을 하나로 모아서 보여주는 서비스입니다.",
    href: "https://bd-calendar.superbaseapp.com",
    comingSoon: false,
  },
  {
    title: "서비스 2",
    description: "두 번째 서비스에 대한 간단한 설명입니다. 곧 출시됩니다.",
    href: "https://service2.superbaseapp.com",
    comingSoon: true,
  },
  {
    title: "서비스 3",
    description: "세 번째 서비스에 대한 간단한 설명입니다. 곧 출시됩니다.",
    href: "https://service3.superbaseapp.com",
    comingSoon: true,
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
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              혁신적인 디지털 서비스를 제공합니다.
              <br className="hidden md:block" />
              더 나은 사용자 경험을 위해 끊임없이 노력합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              서비스
            </h2>
            <p className="text-muted">
              슈퍼베이스가 제공하는 다양한 서비스를 만나보세요.
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
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              문의하기
            </h2>
            <p className="text-muted mb-6">
              궁금한 점이 있으시면 언제든지 연락해 주세요.
            </p>
            <a
              href="mailto:tube@thesuperbase.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.69a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              이메일 보내기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
