interface SectionEyebrowProps {
  number?: string;
  label: string;
}

export function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <p className="font-mono text-[11px] tracking-[0.2em] text-text-subtle uppercase">
      {number ? `[ ${number} — ${label} ]` : `[ ${label} ]`}
    </p>
  );
}
