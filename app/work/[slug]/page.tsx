import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import ProductGrid from "@/components/ProductGrid";
import Prose from "@/components/Prose";
import Section from "@/components/Section";
import StatusBadge from "@/components/StatusBadge";
import { site } from "@/content/site";
import { formatMonth, formatPeriod } from "@/lib/date";
import { workJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { allWorkSlugs, findBrand, findProduct, findWork, productsOf, workPath } from "@/lib/work";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return allWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) notFound();
  return pageMetadata({ title: work.name, description: work.summary, path: workPath(slug) });
}

export default async function WorkPage({ params }: { params: Params }) {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) notFound();

  const brand = work.kind === "product" && work.brand ? findBrand(work.brand) : undefined;
  const successor =
    work.kind === "product" && work.successor ? findProduct(work.successor) : undefined;
  const meta =
    work.kind === "brand" ? `${formatMonth(work.since)}부터` : formatPeriod(work.period);
  const title = work.kind === "brand" ? `${work.name} 시리즈` : work.name;

  return (
    <>
      <JsonLd data={workJsonLd(work, site)} />
      <section className="pt-20 pb-16 md:pt-28">
        <Container narrow>
          {brand && (
            <Link
              href={workPath(brand.slug)}
              className="-my-1 inline-block py-1 text-sm font-semibold text-fg-3 transition-colors duration-150 hover:text-fg"
            >
              {brand.name} 시리즈
            </Link>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-[-0.035em]">
              {title}
            </h1>
            {work.kind === "product" && <StatusBadge status={work.status} />}
          </div>
          <p className="mt-5 text-xl text-fg-2">{work.summary}</p>
          <p className="mt-2 text-sm text-fg-3">{meta}</p>
          {work.kind === "product" && work.status === "ended" && (
            <p className="mt-6 rounded-[16px] bg-surface px-5 py-4 text-[15px] text-fg-2">
              이 서비스는 운영을 종료했습니다.
              {successor && (
                <>
                  {" "}
                  후속 서비스는{" "}
                  <Link href={workPath(successor.slug)} className="font-semibold text-fg underline underline-offset-4">
                    {successor.name}
                  </Link>
                  입니다.
                </>
              )}
            </p>
          )}
          {work.url && (
            <div className="mt-8">
              <Button href={work.url} external>
                {work.name} 바로가기
              </Button>
            </div>
          )}
        </Container>
      </section>

      <section className="pb-20">
        <Container narrow>
          <h2 className="text-2xl font-extrabold tracking-[-0.02em]">소개</h2>
          <div className="mt-4">
            <Prose paragraphs={work.description} />
          </div>
        </Container>
      </section>

      {work.kind === "brand" && (
        <Section surface title="시리즈의 서비스">
          <ProductGrid
            groups={[{ brand: work, products: productsOf(work.slug) }]}
            showGroupHeader={false}
          />
        </Section>
      )}
    </>
  );
}
