import type { Status } from "@/content/work";
import { STATUS_LABEL } from "@/lib/work";

const STYLE: Record<Status, string> = {
  live: "bg-fg text-bg",
  soon: "border border-line text-fg-2",
  ended: "border border-line text-fg-3",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold leading-5 ${STYLE[status]}`}
    >
      {status === "live" && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-live" />}
      {STATUS_LABEL[status]}
    </span>
  );
}
