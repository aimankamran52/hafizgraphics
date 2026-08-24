export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
}) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="text-brand-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-gray-500 max-w-xl text-sm leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
