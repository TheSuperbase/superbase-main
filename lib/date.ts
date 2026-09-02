export function formatMonth(ym: string): string {
  const [y, m] = ym.split("-");
  if (!m) return `${y}년`;
  return `${y}년 ${Number(m)}월`;
}

export function formatPeriod(period: { from: string; to?: string }): string {
  const from = formatMonth(period.from);
  return period.to ? `${from} ~ ${formatMonth(period.to)}` : `${from} ~`;
}
