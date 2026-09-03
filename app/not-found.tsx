import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <section className="py-28">
      <Container narrow>
        <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.035em]">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-4 text-lg text-fg-2">주소가 바뀌었거나 없는 페이지입니다.</p>
        <div className="mt-8">
          <Button href="/">홈으로</Button>
        </div>
      </Container>
    </section>
  );
}
