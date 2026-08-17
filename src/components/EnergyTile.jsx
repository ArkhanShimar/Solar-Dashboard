import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const tileClasses = {
    clay: "bg-clay-500/[0.07]",
    moss: "bg-moss-500/10",
  };
  const numberClasses = {
    clay: "text-clay-600",
    moss: "text-moss-600",
  };

  return (
    <article
      className={`px-4 py-4 last:sm:col-span-2 last:lg:col-span-1 ${
        tileClasses[tone] || "bg-parchment-50"
      }`}
    >
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
