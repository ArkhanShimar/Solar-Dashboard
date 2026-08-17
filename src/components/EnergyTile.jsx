import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tinted }) {
  const tileClasses = tinted
    ? "bg-moss-500/10"
    : "bg-parchment-50";

  return (
    <article className={`px-5 py-6 ${tileClasses}`}>
      <p className="text-xs font-bold tracking-[0.16em] text-ink-400">{label}</p>
      <p className="mt-3 font-display text-3xl font-medium leading-none text-ink-900">
        {formatValue(value)}
      </p>
      <p className="mt-2 text-sm font-bold text-ink-500">{unit}</p>
    </article>
  );
}

export default EnergyTile;
