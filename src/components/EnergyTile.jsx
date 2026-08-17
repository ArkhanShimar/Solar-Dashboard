import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const toneClasses = {
    clay: "bg-clay-500/[0.08]",
    moss: "bg-moss-500/10",
  };
  const tileClasses = toneClasses[tone] || "bg-parchment-50";

  return (
    <article
      className={`px-5 py-6 transition duration-200 last:sm:col-span-2 last:lg:col-span-1 hover:brightness-[0.98] md:px-6 md:py-7 ${tileClasses}`}
    >
      <p className="text-xs font-bold tracking-[0.16em] text-ink-400">{label}</p>
      <p className="mt-4 font-numbers text-4xl font-extrabold tabular-nums leading-none tracking-tight text-ink-900 md:text-5xl">
        {formatValue(value)}
      </p>
      <p className="mt-2 text-sm font-bold text-ink-500">{unit}</p>
    </article>
  );
}

export default EnergyTile;
