const SectionHeading = ({
  subtitle,
  title,
  description,
  className = "",
  children,
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {subtitle && (
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
          {subtitle}
        </p>
      )}

      {title && <h2 className="text-5xl font-bold text-white">{title}</h2>}

      {description && (
        <p className="text-lg leading-8 text-slate-400">{description}</p>
      )}

      {children}
    </div>
  );
};

export default SectionHeading;
