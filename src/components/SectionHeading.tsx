type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-sm font-medium mb-3 text-white/70">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
