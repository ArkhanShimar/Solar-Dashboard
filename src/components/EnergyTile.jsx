import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const toneClasses = {
    clay: "bg-clay-500/[0.08]",
    moss: "bg-moss-500/10",
  };
  const tileClasses = toneClasses[tone] || "bg-parchment-50";

  return (
    <article
      className={`px-4 py-4 transition duration-200 last:sm:col-span-2 last:lg:col-span-1 hover:brightness-[0.98] ${tileClasses}`}
    >
      <p className="text-[11px] font-bold tracking-[0.14em] text-ink-400">{label}</p>
      <p className="mt-2 font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight text-ink-900">
        {formatValue(value)}
      </p>
      <p className="mt-1.5 text-sm font-bold text-ink-500">{unit}</p>
    </article>
  );
}

export default EnergyTile;
