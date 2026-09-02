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
    <div className={className ? `reveal ${className}` : "reveal"} style={{ animationDelay: `${index * 60}ms` }}>
      {children}
    </div>
  );
}
