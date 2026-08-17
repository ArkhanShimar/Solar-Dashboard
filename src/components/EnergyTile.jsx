import { formatValue } from "../utils/format";

function EnergyTile({ label, value, unit, tone }) {
  const numberClasses = {
    brass: "text-brass-400",
    signal: "text-signal-400",
  };

  return (
    <article className="bg-pitch-800 px-4 py-4 last:sm:col-span-2 last:lg:col-span-1">
      <p className="text-[11px] font-bold tracking-[0.14em] text-bone-300">{label}</p>
      <p
        className={`mt-2 font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight ${
          numberClasses[tone] || "text-white"
        }`}
      >
        {formatValue(value)}
      </p>
      <p className="mt-1.5 text-sm font-bold text-bone-300">{unit}</p>
    </article>
  );
}

export default EnergyTile;
