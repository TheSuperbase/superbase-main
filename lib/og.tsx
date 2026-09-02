import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

let fontPromise: Promise<Buffer> | undefined;
function loadFont() {
  fontPromise ??= readFile(path.join(process.cwd(), "app/fonts/Pretendard-Bold.otf"));
  return fontPromise;
}

export async function renderOg(title: string, subtitle: string) {
  const font = await loadFont();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#0a0a0a",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ fontSize: 28, color: "#8a8a8a" }}>superbaseapp.com</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.15, letterSpacing: "-0.03em" }}>{title}</div>
          <div style={{ fontSize: 34, color: "#525252", lineHeight: 1.4 }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 28 }}>슈퍼베이스 · Superbase</div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Pretendard", data: font, weight: 700, style: "normal" }],
    },
  );
}
