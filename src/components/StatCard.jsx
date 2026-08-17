import { formatValue } from "../utils/format";

function StatCard({
  label,
  value,
  unit,
  icon,
  featured,
  meterPercent,
  className = "",
}) {
  const cardClasses = featured
    ? "card-sun bg-clay-600 text-parchment-50 shadow-lift"
    : "border border-parchment-300 bg-parchment-50 text-ink-900 shadow-card";

  const labelClasses = featured ? "text-parchment-200" : "text-ink-400";
  const unitClasses = featured ? "text-parchment-200" : "text-ink-400";
  const iconWrap = featured
    ? "bg-clay-700/80 text-parchment-50"
    : "bg-parchment-100 text-clay-600";
  const numberSize = featured
    ? "text-6xl md:text-7xl"
    : "text-5xl";

  return (
    <article
      className={`rounded-3xl p-5 transition duration-200 hover:-translate-y-1 md:p-6 ${cardClasses} ${className}`}
    >
      <div
        className={
          featured
            ? "relative flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-end"
            : "relative"
        }
      >
        <div>
          <div className="flex items-start justify-between gap-3">
            <p className={`text-xs font-bold tracking-[0.16em] ${labelClasses}`}>
              {label}
            </p>
            {featured ? null : (
              <span className={`rounded-lg p-2 ${iconWrap}`}>{icon}</span>
            )}
          </div>
          <p
            className={`mt-5 font-numbers font-extrabold tabular-nums leading-none tracking-tight ${numberSize}`}
          >
            {formatValue(value)}
            <span
              className={`ml-2 align-top font-sans text-base font-bold ${unitClasses}`}
            >
              {unit}
            </span>
          </p>
          {typeof meterPercent === "number" ? (
            <TickMeter percent={meterPercent} featured={featured} />
          ) : null}
        </div>
        {featured ? (
          <span className={`self-start rounded-2xl p-3 sm:self-end ${iconWrap}`}>
            {icon}
          </span>
        ) : null}
      </div>
    </article>
  );
}

function TickMeter({ percent, featured }) {
  const filled = Math.round(percent / 10);
  const on = featured ? "bg-parchment-50" : "bg-clay-500";
  const off = featured ? "bg-clay-700" : "bg-parchment-200";

  return (
    <div className="mt-5 flex max-w-xs gap-1" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className={`h-1.5 flex-1 rounded-sm ${index < filled ? on : off}`}
        />
      ))}
    </div>
  );
}

export default StatCard;
