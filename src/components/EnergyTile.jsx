import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const numberClasses = {
    brass: "text-brass-600 dark:text-brass-400",
    signal: "text-signal-500",
  };

  return (
    <article className="px-4 py-4 sm:border-r sm:border-white/50 sm:last:border-r-0 last:sm:col-span-2 last:lg:col-span-1">
      <p className="copy-muted text-[11px] font-bold tracking-[0.14em]">{label}</p>
      <p
        className={`mt-2 font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight ${
          numberClasses[tone] || "copy"
        }`}
      >
        {formatValue(value)}
      </p>
      <p className="copy-muted mt-1.5 text-sm font-bold">{unit}</p>
    </article>
  );
}

export default EnergyTile;
