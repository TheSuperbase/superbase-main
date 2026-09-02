export default function Section({
  id,
  label,
  aside,
  size = "sm",
  children,
}: {
  id?: string;
  label: string;
  aside?: string;
  size?: "sm" | "lg";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-8">
      <div className="mb-4 flex items-baseline justify-between">
        <h2
          className={
            size === "lg" ? "text-base font-bold text-fg" : "text-xs font-bold tracking-wide text-fg-3"
          }
        >
          {label}
        </h2>
        {aside && <span className="text-xs text-fg-3">{aside}</span>}
      </div>
      {children}
    </section>
  );
}
