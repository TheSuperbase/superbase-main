import { describe, it, expect } from "vitest";
import { formatMonth, formatPeriod } from "./date";

describe("formatMonth", () => {
  it("renders YYYY-MM in Korean", () => {
    expect(formatMonth("2026-09")).toBe("2026년 9월");
    expect(formatMonth("2026-12")).toBe("2026년 12월");
  });
  it("renders YYYY as year only", () => {
    expect(formatMonth("2025")).toBe("2025년");
  });
});

describe("formatPeriod", () => {
  it("renders open period with a tilde", () => {
    expect(formatPeriod({ from: "2025" })).toBe("2025년 ~");
  });
  it("renders closed period", () => {
    expect(formatPeriod({ from: "2024", to: "2025" })).toBe("2024년 ~ 2025년");
  });
});
