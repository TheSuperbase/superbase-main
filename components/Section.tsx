export default function Section({
  id,
  label,
  aside,
  children,
}: {
  id?: string;
  label: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-8">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-xs font-bold tracking-wide text-fg-3">{label}</h2>
        {aside && <span className="text-xs text-fg-3">{aside}</span>}
      </div>
      {children}
    </section>
  );
}
