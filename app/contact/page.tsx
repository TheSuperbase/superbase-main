import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "슈퍼베이스에 문의사항이나 제안이 있으시면 언제든지 연락해 주세요.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          문의하기
        </h1>

        <div className="space-y-8 text-foreground">
          <section className="text-center">
            <p className="text-lg text-muted leading-relaxed mb-6">
              서비스에 대한 문의사항, 제안, 피드백 등이 있으시면
              <br className="hidden md:block" />
              언제든지 아래 연락처로 문의해 주세요.
            </p>
          </section>

          <section className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              연락처 정보
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-1/3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                        d="M3 8l7.89 4.69a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-foreground">이메일</span>
                </div>
                <div className="md:flex-1">
                  <a
                    href="mailto:tube@thesuperbase.com"
                    className="text-primary hover:underline text-lg"
                  >
                    tube@thesuperbase.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-1/3">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-foreground">사업자</span>
                </div>
                <div className="md:flex-1">
                  <p className="text-muted text-lg">
                    슈퍼베이스 (Superbase) - 개인사업자
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="mailto:tube@thesuperbase.com"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
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
          </section>

          <section className="bg-primary/5 rounded-lg border border-primary/20 p-6">
            <h2 className="text-xl font-semibold mb-4">문의 시 참고사항</h2>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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
                <span>
                  문의하시는 서비스명을 명시해 주시면 더 빠른 답변이 가능합니다.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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
                <span>
                  버그 리포트의 경우, 발생 상황과 재현 방법을 자세히 설명해
                  주세요.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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
                <span>
                  새로운 기능 제안은 언제나 환영합니다. 구체적인 사용 시나리오와
                  함께 제안해 주시면 감사하겠습니다.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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
                <span>
                  영업일 기준 1-2일 이내에 답변 드리도록 노력하겠습니다.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">자주 묻는 질문</h2>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Q. 서비스 사용 중 오류가 발생했어요.
                </h3>
                <p className="text-muted leading-relaxed">
                  A. 불편을 드려 죄송합니다. 발생한 오류의 스크린샷과 함께
                  오류가 발생한 상황을 이메일로 보내주시면 빠르게 확인하여
                  조치하겠습니다.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Q. 새로운 기능을 제안하고 싶어요.
                </h3>
                <p className="text-muted leading-relaxed">
                  A. 사용자 여러분의 제안은 언제나 환영합니다. 제안하시는 기능과
                  해당 기능이 필요한 이유를 이메일로 보내주시면 적극 검토하여
                  답변 드리겠습니다.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Q. 제휴 및 협업 문의는 어떻게 하나요?
                </h3>
                <p className="text-muted leading-relaxed">
                  A. 제휴 및 협업 관련 문의도 동일한 이메일 주소로 연락 주시면
                  됩니다. 제안 내용과 함께 연락처를 남겨주시면 검토 후 회신
                  드리겠습니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
