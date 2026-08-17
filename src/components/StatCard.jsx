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
    ? "bg-pitch-800 text-bone-50 shadow-lift"
    : "card-mark border border-pitch-900/10 bg-bone-50 text-ink-900 shadow-card";

  const labelClasses = featured ? "text-bone-300" : "text-ink-400";
  const numberClasses = featured ? "text-brass-400" : "text-ink-900";
  const unitClasses = featured ? "text-bone-300" : "text-ink-400";
  const iconWrap = featured
    ? "bg-pitch-700 text-brass-400"
    : "bg-brass-500/10 text-brass-600";

  return (
    <article
      className={`rounded-xl p-4 transition duration-200 hover:-translate-y-0.5 ${cardClasses}`}
    >
      <div className="relative flex items-start justify-between gap-3">
        <p className={`text-[11px] font-bold tracking-[0.14em] ${labelClasses}`}>
          {label}
        </p>
        <span className={`rounded-md p-1.5 ${iconWrap}`}>{icon}</span>
      </div>
      <p
        className={`mt-3 font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight md:text-4xl ${numberClasses}`}
      >
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
  const on = featured ? "bg-brass-400" : "bg-brass-500";
  const off = featured ? "bg-pitch-600" : "bg-bone-200";

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
