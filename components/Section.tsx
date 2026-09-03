import Container from "./Container";

export default function Section({
  id,
  title,
  lead,
  surface = false,
  children,
}: {
  id?: string;
  title: string;
  lead?: string;
  surface?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-24 ${surface ? "bg-surface" : ""}`}>
      <Container>
        <div className="mb-10">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
            {title}
          </h2>
          {lead && <p className="mt-3 max-w-[40rem] text-lg text-fg-2">{lead}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
