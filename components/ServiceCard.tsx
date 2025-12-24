import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean;
}

export default function ServiceCard({
  title,
  description,
  href,
  comingSoon = false,
}: ServiceCardProps) {
  const CardContent = () => (
    <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg">
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
          준비 중
        </span>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      {!comingSoon && (
        <div className="mt-4 text-sm font-medium text-primary">
          바로가기 &rarr;
        </div>
      )}
    </div>
  );

  if (comingSoon) {
    return <CardContent />;
  }

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <CardContent />
    </Link>
  );
}
