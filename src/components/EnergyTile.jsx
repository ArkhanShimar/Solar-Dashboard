import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const numberClasses = {
    brass: "text-brass-600",
    signal: "text-signal-500",
  };

  return (
    <article className="bg-white px-4 py-4 last:sm:col-span-2 last:lg:col-span-1">
      <p className="text-[11px] font-bold tracking-[0.14em] text-ink-400">{label}</p>
      <p
        className={`mt-2 font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight ${
          numberClasses[tone] || "text-ink-900"
        }`}
      >
        {formatValue(value)}
      </p>
      <p className="mt-1.5 text-sm font-bold text-ink-500">{unit}</p>
    </article>
  );
}

export default EnergyTile;
