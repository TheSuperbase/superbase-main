import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-extrabold tracking-tight">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-fg-2">주소가 바뀌었거나 없는 페이지입니다.</p>
      <Link href="/" className="mt-6 inline-block font-semibold underline underline-offset-4">
        홈으로
      </Link>
    </div>
  );
}
