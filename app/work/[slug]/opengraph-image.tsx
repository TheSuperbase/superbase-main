import { site } from "@/content/site";
import { OG_SIZE, renderOg } from "@/lib/og";
import { allWorkSlugs, findWork } from "@/lib/work";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "슈퍼베이스가 만드는 서비스";

export function generateStaticParams() {
  return allWorkSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = findWork(slug);
  const title = work?.name ?? site.name;
  const subtitle = work?.summary ?? site.tagline;
  return renderOg(title, subtitle);
}
