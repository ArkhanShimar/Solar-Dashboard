import { formatValue } from "../utils/format";
import PercentRing from "./PercentRing";

function StatCard({
  area,
  label,
  value,
  unit,
  icon,
  featured,
  meterPercent,
}) {
  const cardClasses = featured ? "featured-card glass" : "glass";

  return (
    <article
      className={`min-w-0 rounded-2xl p-3 transition duration-200 hover:-translate-y-0.5 sm:p-4 ${cardClasses} ${areaClass(area)}`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="copy-muted truncate text-[10px] font-bold tracking-[0.14em] sm:text-[11px]">
          {label}
        </p>
        <span className="shrink-0 rounded-lg bg-brass-500/10 p-1.5 text-brass-600 dark:text-brass-400">
          {icon}
        </span>
      </div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <p
          className={`copy min-w-0 font-numbers font-extrabold tabular-nums leading-none tracking-tight ${
            featured
              ? "text-2xl sm:text-4xl md:text-5xl"
              : "text-xl sm:text-3xl md:text-4xl"
          }`}
        >
          {formatValue(value)}
          <span className="copy-muted ml-1 align-top font-sans text-xs font-bold sm:ml-1.5 sm:text-sm">
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

function areaClass(area) {
  return {
    current: "[grid-area:current]",
    peak: "[grid-area:peak]",
    efficiency: "[grid-area:efficiency]",
    battery: "[grid-area:battery]",
    export: "[grid-area:export]",
    self: "[grid-area:self]",
  }[area];
}

export default StatCard;
