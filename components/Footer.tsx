import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              슈퍼베이스
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              혁신적인 디지털 서비스를 제공하는 개인사업자입니다.
              <br />
              다양한 웹 서비스를 통해 더 나은 사용자 경험을 만들어갑니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  이용약관
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <span className="font-medium">이메일:</span>{" "}
                <a
                  href="mailto:tube@thesuperbase.com"
                  className="hover:text-foreground transition-colors"
                >
                  tube@thesuperbase.com
                </a>
              </li>
              <li>
                <span className="font-medium">사업자:</span> 개인사업자
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          <p>
            &copy; {currentYear} 슈퍼베이스 (Superbase). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
