import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StatusBadge from "@/components/StatusBadge";
import WorkList from "@/components/WorkList";
import { site } from "@/content/site";
import { formatPeriod } from "@/lib/date";
import { workJsonLd } from "@/lib/jsonld";
import { allWorkSlugs, findWork, productsOf, workPath } from "@/lib/work";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return allWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) return {};
  return {
    title: work.name,
    description: work.summary,
    alternates: { canonical: workPath(slug) },
    openGraph: { title: work.name, description: work.summary, url: workPath(slug) },
  };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) notFound();

  const brand = work.kind === "product" && work.brand ? findWork(work.brand) : undefined;
  const successor = work.kind === "product" && work.successor ? findWork(work.successor) : undefined;
  const meta =
    work.kind === "brand" ? `${work.since}년 ~` : formatPeriod(work.period);

  return (
    <div className="pb-8">
      <JsonLd data={workJsonLd(work, site)} />
      <Reveal index={0}>
        <section className="pt-12 pb-8 md:pt-16">
          {brand && (
            <Link
              href={workPath(brand.slug)}
              className="-my-1 inline-flex items-center gap-1 py-1 text-sm text-fg-3 transition-colors duration-150 hover:text-fg"
            >
              {brand.name}
              <span aria-hidden>↖</span>
            </Link>
          )}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
              {work.name}
            </h1>
            {work.kind === "product" && <StatusBadge status={work.status} />}
          </div>
          <p className="mt-3 text-lg text-fg-2">{work.summary}</p>
          <p className="mt-2 text-sm text-fg-3">{meta}</p>
          {work.kind === "product" && work.status === "ended" && (
            <p className="mt-4 rounded-md border border-line px-4 py-3 text-sm text-fg-2">
              이 제품은 운영을 종료했습니다.
              {successor && (
                <>
                  {" "}
                  후속 제품은{" "}
                  <Link href={workPath(successor.slug)} className="font-semibold text-fg underline underline-offset-4">
                    {successor.name}
                  </Link>
                  입니다.
                </>
              )}
            </p>
          )}
          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 items-center gap-1 rounded-md bg-fg px-4 text-sm font-semibold text-bg transition-opacity duration-150 hover:opacity-80"
            >
              {work.name} 바로가기
              <span aria-hidden>↗</span>
            </a>
          )}
        </section>
      </Reveal>

      <Reveal index={1}>
        <Section label="소개">
          <Prose paragraphs={work.description} />
        </Section>
      </Reveal>

      {work.kind === "brand" && (
        <Reveal index={2}>
          <Section label="제품" aside={`${productsOf(work.slug).length}개`}>
            <WorkList groups={[{ brand: work, products: productsOf(work.slug) }]} />
          </Section>
        </Reveal>
      )}
    </div>
  );
}
