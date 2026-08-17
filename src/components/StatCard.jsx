import { formatValue } from "../utils/format";
import PercentRing from "./PercentRing";

function StatCard({
  label,
  value,
  unit,
  icon,
  featured,
  meterPercent,
}) {
  const cardClasses = featured
    ? "glass border-l-[3px] border-l-brass-500"
    : "glass card-mark";

  return (
    <article
      className={`rounded-xl p-4 transition duration-200 hover:-translate-y-0.5 ${cardClasses}`}
    >
      <div className="relative flex items-start justify-between gap-3">
        <p className="text-[11px] font-bold tracking-[0.14em] text-ink-400">
          {label}
        </p>
        <span className="rounded-md bg-brass-500/10 p-1.5 text-brass-600">
          {icon}
        </span>
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight text-pitch-900 md:text-4xl">
          {formatValue(value)}
          <span className="ml-1.5 align-top font-sans text-sm font-bold text-ink-400">
            {unit}
          </span>
        </p>
        {typeof meterPercent === "number" ? (
          <PercentRing percent={meterPercent} />
        ) : null}
      </div>
    </article>
  );
}

export default StatCard;
