import { formatValue } from "../utils/format";

function StatCard({
  label,
  value,
  unit,
  icon,
  featured,
  meterPercent,
}) {
  const cardClasses = featured
    ? "card-sun bg-clay-600 text-parchment-50 shadow-lift"
    : "border border-parchment-300 bg-parchment-50 text-ink-900 shadow-card";

  const labelClasses = featured ? "text-parchment-200" : "text-ink-400";
  const unitClasses = featured ? "text-parchment-200" : "text-ink-400";
  const iconWrap = featured
    ? "bg-clay-700/80 text-parchment-50"
    : "bg-parchment-100 text-clay-600";

  return (
    <article
      className={`rounded-2xl p-4 transition duration-200 hover:-translate-y-0.5 ${cardClasses}`}
    >
      <div className="relative flex items-start justify-between gap-3">
        <p className={`text-[11px] font-bold tracking-[0.14em] ${labelClasses}`}>
          {label}
        </p>
        <span className={`rounded-md p-1.5 ${iconWrap}`}>{icon}</span>
      </div>
      <p className="mt-3 font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight md:text-4xl">
        {formatValue(value)}
        <span className={`ml-1.5 align-top font-sans text-sm font-bold ${unitClasses}`}>
          {unit}
        </span>
      </p>
      {typeof meterPercent === "number" ? (
        <TickMeter percent={meterPercent} featured={featured} />
      ) : null}
    </article>
  );
}

function TickMeter({ percent, featured }) {
  const filled = Math.round(percent / 10);
  const on = featured ? "bg-parchment-50" : "bg-clay-500";
  const off = featured ? "bg-clay-700" : "bg-parchment-200";

  return (
    <div className="mt-3 flex gap-1" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className={`h-1 flex-1 rounded-sm ${index < filled ? on : off}`}
        />
      ))}
    </div>
  );
}

export default StatCard;
