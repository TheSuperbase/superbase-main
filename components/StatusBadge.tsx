import type { Status } from "@/content/work";
import { STATUS_LABEL } from "@/lib/work";

const STYLE: Record<Status, string> = {
  live: "bg-accent-soft text-accent",
  soon: "bg-surface text-fg-2",
  ended: "border border-line text-fg-3",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold leading-5 ${STYLE[status]}`}
    >
      {status === "live" && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />}
      {STATUS_LABEL[status]}
    </span>
  );
}
