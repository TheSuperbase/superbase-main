import Container from "./Container";

export default function Section({
  id,
  title,
  lead,
  action,
  surface = false,
  children,
}: {
  id?: string;
  title: string;
  lead?: string;
  action?: React.ReactNode;
  surface?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-24 ${surface ? "bg-surface" : ""}`}>
      <Container>
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
              {title}
            </h2>
            {lead && <p className="mt-3 max-w-[40rem] text-lg text-fg-2">{lead}</p>}
          </div>
          {action}
        </div>
        {children}
      </Container>
    </section>
  );
}
