export default function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-fg-2">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
