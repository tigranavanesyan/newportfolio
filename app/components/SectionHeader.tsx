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
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p className="font-mono mb-3 text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`max-w-2xl text-lg leading-relaxed text-muted-foreground ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={`mt-6 h-px w-10 bg-accent ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden
      />
    </div>
  );
}
