export default function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  const width = narrow ? "max-w-[760px]" : "max-w-[1200px]";
  return <div className={`mx-auto w-full ${width} px-6 ${className}`}>{children}</div>;
}
