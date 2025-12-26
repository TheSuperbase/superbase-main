import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "배드민턴 대회 캘린더",
  description:
    "전국 각지에서 개최되는 배드민턴 대회 정보를 한눈에 확인하세요. 대회 일정, 장소, 참가 방법 등 상세 정보를 제공합니다.",
};

export default function BadmintonCalendarPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            슈퍼베이스 서비스
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            배드민턴 대회 캘린더
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed mb-8">
            전국 각지에서 개최되는 배드민턴 대회 정보를 한눈에 확인할 수
            있습니다. 대회 일정, 장소, 참가 방법 등 상세 정보를 제공하여
            배드민턴 동호인들의 대회 참가를 돕습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://bd-calendar.superbaseapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
            >
              서비스 이용하기 →
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>

        <div className="space-y-16 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-6">서비스 소개</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                배드민턴 대회 캘린더는 배드민턴 동호인들이 대회 정보를 쉽게
                찾고 참가할 수 있도록 돕는 서비스입니다. 전국 각지에서 개최되는
                배드민턴 대회 정보가 흩어져 있어 동호인들이 대회를 찾기
                어려웠던 문제를 해결하기 위해 만들어졌습니다.
              </p>
              <p>
                모든 대회 정보를 한곳에 모아 제공하여 동호인들이 자신에게 맞는
                대회를 쉽게 찾고 참가할 수 있도록 합니다. 대회 일정, 장소, 참가
                방법, 참가비 등 상세한 정보를 제공하여 대회 준비에 도움을
                드립니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      대회 일정 확인
                    </h3>
                    <p className="text-muted leading-relaxed">
                      캘린더 형식으로 대회 일정을 한눈에 확인할 수 있습니다.
                      월별, 주별로 개최되는 대회를 쉽게 찾아볼 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      지역별 검색
                    </h3>
                    <p className="text-muted leading-relaxed">
                      서울, 경기, 부산 등 지역별로 대회를 필터링하여 자신이
                      원하는 지역의 대회만 확인할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      상세 정보 제공
                    </h3>
                    <p className="text-muted leading-relaxed">
                      대회명, 일시, 장소, 참가비, 신청 방법, 주최 기관 등
                      대회에 필요한 모든 정보를 상세하게 제공합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      모바일 최적화
                    </h3>
                    <p className="text-muted leading-relaxed">
                      모바일에서도 편리하게 이용할 수 있도록 최적화되어
                      있습니다. 언제 어디서나 대회 정보를 확인할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              이런 분들께 추천합니다
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  배드민턴 동호인
                </h3>
                <p className="text-muted leading-relaxed">
                  주말마다 배드민턴 대회에 참가하고 싶지만 대회 정보를 찾기
                  어려웠던 동호인들에게 최적의 서비스입니다.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  대회 주최자
                </h3>
                <p className="text-muted leading-relaxed">
                  대회를 개최하는 분들은 더 많은 참가자를 모집할 수 있습니다.
                  대회 정보를 등록하면 많은 동호인들에게 노출됩니다.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  배드민턴 클럽
                </h3>
                <p className="text-muted leading-relaxed">
                  클럽 회원들과 함께 참가할 대회를 찾는 클럽 운영자들에게
                  유용합니다. 클럽 활동을 더 활성화할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">서비스 특징</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
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
                    완전 무료 서비스
                  </h3>
                  <p className="text-muted leading-relaxed">
                    모든 기능을 무료로 이용할 수 있습니다. 회원가입 없이도
                    대회 정보를 확인할 수 있으며, 별도의 비용이 발생하지
                    않습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
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
                    실시간 정보 업데이트
                  </h3>
                  <p className="text-muted leading-relaxed">
                    새로운 대회 정보가 추가되면 실시간으로 업데이트됩니다.
                    최신 대회 정보를 놓치지 않고 확인할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
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
                    사용자 친화적 인터페이스
                  </h3>
                  <p className="text-muted leading-relaxed">
                    직관적인 디자인으로 누구나 쉽게 이용할 수 있습니다. 복잡한
                    기능 없이 필요한 정보만 빠르게 찾을 수 있도록 설계되었습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
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
                    지속적인 개선
                  </h3>
                  <p className="text-muted leading-relaxed">
                    사용자 피드백을 바탕으로 서비스를 지속적으로 개선하고
                    있습니다. 더 나은 서비스를 제공하기 위해 노력하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">이용 방법</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    서비스 접속
                  </h3>
                  <p className="text-muted leading-relaxed">
                    배드민턴 대회 캘린더 웹사이트에 접속합니다. 별도의 회원가입
                    없이 바로 이용할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    대회 검색
                  </h3>
                  <p className="text-muted leading-relaxed">
                    캘린더에서 원하는 날짜나 지역을 선택하여 대회를 검색합니다.
                    필터 기능을 사용하여 조건에 맞는 대회를 찾을 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    상세 정보 확인
                  </h3>
                  <p className="text-muted leading-relaxed">
                    관심 있는 대회를 클릭하여 상세 정보를 확인합니다. 대회
                    일정, 장소, 참가비, 신청 방법 등을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    대회 참가
                  </h3>
                  <p className="text-muted leading-relaxed">
                    대회 정보에 포함된 신청 방법에 따라 대회에 참가합니다.
                    주최 기관의 연락처나 신청 링크를 통해 참가 신청을 할 수
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">자주 묻는 질문</h2>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Q. 서비스 이용에 비용이 발생하나요?
                </h3>
                <p className="text-muted leading-relaxed">
                  A. 아니요, 배드민턴 대회 캘린더는 완전 무료 서비스입니다.
                  모든 기능을 무료로 이용할 수 있으며, 별도의 비용이 발생하지
                  않습니다.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Q. 대회 정보는 어떻게 등록하나요?
                </h3>
                <p className="text-muted leading-relaxed">
                  A. 대회 주최자는 문의 페이지를 통해 대회 정보를 제출할 수
                  있습니다. 제출된 정보는 검토 후 캘린더에 등록됩니다.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Q. 대회 신청은 어떻게 하나요?
                </h3>
                <p className="text-muted leading-relaxed">
                  A. 각 대회 정보에 포함된 신청 방법을 확인하여 주최 기관에
                  직접 신청하시면 됩니다. 본 서비스는 대회 정보 제공만 하며,
                  신청 접수는 각 주최 기관에서 직접 진행합니다.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Q. 대회 정보가 잘못되었거나 변경된 경우 어떻게 하나요?
                </h3>
                <p className="text-muted leading-relaxed">
                  A. 문의 페이지를 통해 잘못된 정보나 변경 사항을 알려주시면
                  빠르게 수정하겠습니다. 사용자 여러분의 제보는 서비스 품질
                  향상에 큰 도움이 됩니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 rounded-lg border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              지금 바로 이용해보세요
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              배드민턴 대회 캘린더를 통해 전국의 배드민턴 대회 정보를 한눈에
              확인하고, 원하는 대회에 참가해보세요. 회원가입 없이 바로 이용할
              수 있습니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://bd-calendar.superbaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                서비스 이용하기 →
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
              >
                문의하기
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
