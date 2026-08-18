import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const numberClasses = {
    brass: "text-brass-600 dark:text-brass-400",
    signal: "text-signal-500",
  };

  return (
    <article className="min-w-0 px-3 py-3 last:sm:col-span-2 last:md:col-span-1 sm:px-4 sm:py-4">
      <p className="copy-muted truncate text-[10px] font-bold tracking-[0.12em] sm:text-[11px] sm:tracking-[0.14em]">
        {label}
      </p>
      <p
        className={`mt-2 font-numbers text-2xl font-extrabold tabular-nums leading-none tracking-tight sm:text-3xl ${
          numberClasses[tone] || "copy"
        }`}
      >
        {formatValue(value)}
      </p>
      <p className="copy-muted mt-1.5 text-xs font-bold sm:text-sm">{unit}</p>
    </article>
  );
}

export default EnergyTile;
