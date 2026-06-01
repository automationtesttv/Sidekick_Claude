interface SectionEyebrowProps {
  number?: string;
  label: string;
}

export function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-accent uppercase">
      <span aria-hidden="true" className="w-6 h-px bg-accent" />
      {number ? `${number} — ${label}` : label}
    </p>
  );
}
