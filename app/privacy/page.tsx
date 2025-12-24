import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "슈퍼베이스의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          개인정보처리방침
        </h1>

        <div className="space-y-8 text-foreground">
          <p className="text-muted">시행일: 2024년 1월 1일</p>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              1. 개인정보의 처리 목적
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              슈퍼베이스(이하 &quot;회사&quot;)는 다음의 목적을 위하여
              개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
              용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의
              동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>서비스 제공 및 운영</li>
              <li>회원 가입 및 관리</li>
              <li>고객 문의 응대</li>
              <li>서비스 개선 및 신규 서비스 개발</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              2. 수집하는 개인정보 항목
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수
              있습니다.
            </p>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>필수항목: 이메일 주소</li>
              <li>
                자동 수집 항목: IP 주소, 쿠키, 방문 기록, 서비스 이용 기록
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
              개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서
              개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>회원 정보: 회원 탈퇴 시까지</li>
              <li>
                관련 법령에 따라 보존이 필요한 경우: 해당 법령에서 정한 기간
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              4. 개인정보의 제3자 제공
            </h2>
            <p className="text-muted leading-relaxed">
              회사는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법
              제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게
              제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. 쿠키(Cookie) 사용</h2>
            <p className="text-muted leading-relaxed mb-4">
              회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 쿠키를
              사용합니다.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">
              5-1. 쿠키의 사용 목적
            </h3>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>이용자의 접속 빈도나 방문 시간 등을 분석</li>
              <li>이용자의 취향과 관심분야를 파악</li>
              <li>타겟 마케팅 및 개인 맞춤 서비스 제공</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2">
              5-2. 제3자 광고 (Google AdSense)
            </h3>
            <p className="text-muted leading-relaxed">
              회사는 Google AdSense를 통해 광고를 게재할 수 있습니다. Google은
              이용자의 관심사에 기반한 광고를 게재하기 위해 쿠키를 사용합니다.
              이용자는 Google 광고 설정에서 맞춤 광고를 비활성화하거나,
              aboutads.info에서 맞춤 광고에 사용되는 제3자 업체 쿠키를 비활성화할
              수 있습니다.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">
              5-3. 쿠키 설정 거부 방법
            </h3>
            <p className="text-muted leading-relaxed">
              이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저의
              옵션을 설정하여 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
              거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              6. 정보주체의 권리·의무 및 행사방법
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              7. 개인정보 보호책임자
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
              처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
              같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="list-none text-muted space-y-2">
              <li>
                <strong>담당자:</strong> 대표
              </li>
              <li>
                <strong>이메일:</strong> tube@thesuperbase.com
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              8. 개인정보처리방침 변경
            </h2>
            <p className="text-muted leading-relaxed">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
              전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
