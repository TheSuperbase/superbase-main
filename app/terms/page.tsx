import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description: "슈퍼베이스의 서비스 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          이용약관
        </h1>

        <div className="space-y-8 text-foreground">
          <p className="text-muted">시행일: 2024년 1월 1일</p>

          <section>
            <h2 className="text-xl font-semibold mb-4">제1조 (목적)</h2>
            <p className="text-muted leading-relaxed">
              이 약관은 슈퍼베이스(이하 &quot;회사&quot;)가 제공하는 서비스의
              이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타
              필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제2조 (정의)</h2>
            <ul className="list-decimal list-inside text-muted space-y-2">
              <li>
                &quot;서비스&quot;란 회사가 제공하는 모든 웹 서비스를 말합니다.
              </li>
              <li>
                &quot;이용자&quot;란 회사의 서비스에 접속하여 이 약관에 따라
                서비스를 이용하는 자를 말합니다.
              </li>
              <li>
                &quot;회원&quot;이란 회사와 서비스 이용계약을 체결하고 회원
                아이디를 부여받은 이용자를 말합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              제3조 (약관의 효력 및 변경)
            </h2>
            <ul className="list-decimal list-inside text-muted space-y-2">
              <li>
                이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.
              </li>
              <li>
                회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스
                내 공지사항을 통해 공지합니다.
              </li>
              <li>
                변경된 약관은 공지 후 7일이 경과한 시점부터 효력이 발생합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              제4조 (서비스의 제공)
            </h2>
            <ul className="list-decimal list-inside text-muted space-y-2">
              <li>회사는 이용자에게 다양한 웹 서비스를 제공합니다.</li>
              <li>
                서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
              </li>
              <li>
                회사는 서비스 개선, 시스템 점검 등의 사유로 서비스 제공을
                일시적으로 중단할 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              제5조 (이용자의 의무)
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              이용자는 다음 행위를 하여서는 안 됩니다.
            </p>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>타인의 정보를 도용하는 행위</li>
              <li>회사의 서비스 운영을 고의로 방해하는 행위</li>
              <li>회사의 지적재산권을 침해하는 행위</li>
              <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
              <li>법령 또는 공서양속에 위반되는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제6조 (광고 게재)</h2>
            <p className="text-muted leading-relaxed">
              회사는 서비스 운영과 관련하여 서비스 화면, 이메일 등에 광고를
              게재할 수 있습니다. 광고가 게재된 이메일을 수신한 회원은 수신 거부
              의사를 회사에 표시할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제7조 (지적재산권)</h2>
            <ul className="list-decimal list-inside text-muted space-y-2">
              <li>
                회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에
                귀속됩니다.
              </li>
              <li>
                이용자는 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이
                복제, 배포, 방송 등의 방법으로 사용하거나 제3자에게 이용하게 할
                수 없습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제8조 (책임의 한계)</h2>
            <ul className="list-decimal list-inside text-muted space-y-2">
              <li>
                회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등
                불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 책임이
                면제됩니다.
              </li>
              <li>
                회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을
                지지 않습니다.
              </li>
              <li>
                회사는 이용자가 게재한 정보, 자료, 사실의 신뢰도 및 정확성 등에
                대하여 책임을 지지 않습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제9조 (분쟁 해결)</h2>
            <ul className="list-decimal list-inside text-muted space-y-2">
              <li>
                회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법률을
                적용합니다.
              </li>
              <li>
                회사와 이용자 간에 발생한 분쟁에 관한 소송은 회사의 주소지 관할
                법원을 전속관할로 합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">제10조 (연락처)</h2>
            <p className="text-muted leading-relaxed mb-4">
              서비스에 관한 문의는 아래 연락처로 하여 주시기 바랍니다.
            </p>
            <ul className="list-none text-muted space-y-2">
              <li>
                <strong>사업자:</strong> 슈퍼베이스 (개인사업자)
              </li>
              <li>
                <strong>이메일:</strong> tube@thesuperbase.com
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">부칙</h2>
            <p className="text-muted leading-relaxed">
              이 약관은 2024년 1월 1일부터 시행합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
