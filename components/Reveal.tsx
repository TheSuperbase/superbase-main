export default function Reveal({
  index = 0,
  children,
  className = "",
}: {
  index?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={{ animationDelay: `${index * 60}ms` }}>
      {children}
    </div>
  );
}
