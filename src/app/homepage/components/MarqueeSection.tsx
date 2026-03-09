"use client";

const words = [
  "Télécommunications",
  "Génie Civil",
  "Réseaux IT",
  "VSAT",
  "Électricité Industrielle",
  "Consulting",
  "Formation",
  "Plomberie",
  "Importation",
  "Maintenance",
];

export default function MarqueeSection() {
  const doubled = [...words, ...words];
  return (
    <div className="relative overflow-hidden py-5 border-y border-offwhite-faint bg-navy-surface">
      <div className="marquee-track">
        {doubled?.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center gap-6 px-8 text-offwhite-dim text-sm font-body font-medium tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}