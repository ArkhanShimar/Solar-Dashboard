import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tinted }) {
  const tileClasses = tinted
    ? "bg-moss-500/10"
    : "bg-parchment-50";

  return (
    <article className={`px-5 py-6 last:sm:col-span-2 last:lg:col-span-1 ${tileClasses}`}>
      <p className="text-xs font-bold tracking-[0.16em] text-ink-400">{label}</p>
      <p className="mt-3 font-numbers text-4xl font-extrabold tabular-nums leading-none tracking-tight text-ink-900">
        {formatValue(value)}
      </p>
      <p className="mt-2 text-sm font-bold text-ink-500">{unit}</p>
    </article>
  );
}

export default EnergyTile;
