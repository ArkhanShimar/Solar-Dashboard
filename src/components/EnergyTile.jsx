import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const numberClasses = {
    brass: "text-brass-600 dark:text-brass-400",
    signal: "text-signal-500",
  };

  return (
    <article className="min-w-0 border-white/10 px-3 py-3 even:border-l last:col-span-2 last:md:col-span-1 md:border-l md:px-4 md:first:border-l-0">
      <p className="copy-muted truncate text-[10px] font-bold tracking-[0.12em] md:text-[11px] md:tracking-[0.14em]">
        {label}
      </p>
      <p
        className={`mt-1.5 font-numbers text-2xl font-extrabold tabular-nums leading-none tracking-tight md:text-3xl ${
          numberClasses[tone] || "copy"
        }`}
      >
        {formatValue(value)}
      </p>
      <p className="copy-muted mt-1 text-xs font-bold">{unit}</p>
    </article>
  );
}

export default EnergyTile;
