import type { Metadata } from "next";
import TextLink from "@/components/TextLink";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-extrabold tracking-tight">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-fg-2">주소가 바뀌었거나 없는 페이지입니다.</p>
      <div className="mt-6 flex">
        <TextLink href="/" className="font-semibold">
          홈으로
        </TextLink>
      </div>
    </div>
  );
}
