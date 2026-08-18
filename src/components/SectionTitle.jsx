export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div
        className={`w-12 h-1 bg-brand-gold rounded mb-4 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-gray-500 max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
