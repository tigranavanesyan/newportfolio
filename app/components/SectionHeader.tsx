type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const barClass =
    align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={`h-1 w-12 rounded-full bg-accent ${barClass}`}
        aria-hidden
      />
    </div>
  );
}
