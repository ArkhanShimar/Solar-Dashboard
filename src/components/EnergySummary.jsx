import EnergyTile from "./EnergyTile";

function EnergySummary({ energySummary }) {
  const tiles = [
    {
      label: "TODAY'S ENERGY",
      value: energySummary.todayKWh,
      unit: "kWh",
      tone: "brass",
    },
    {
      label: "THIS WEEK",
      value: energySummary.thisWeekKWh,
      unit: "kWh",
    },
    {
      label: "THIS MONTH",
      value: energySummary.thisMonthKWh,
      unit: "kWh",
    },
    {
      label: "LIFETIME TOTAL",
      value: energySummary.totalLifetimeKWh,
      unit: "kWh",
    },
    {
      label: "CO2 SAVED TODAY",
      value: energySummary.co2SavedKgToday,
      unit: "kg",
      tone: "signal",
    },
  ];

  return (
    <section>
      <div className="mb-3">
        <p className="text-[11px] font-bold tracking-[0.2em] text-brass-600">
          PRODUCTION
        </p>
        <h2 className="mt-0.5 font-display text-xl text-ink-900 md:text-2xl">
          Energy summary
        </h2>
      </div>
      <div className="overflow-hidden rounded-xl bg-pitch-600 shadow-lift">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-5">
          {tiles.map((tile) => (
            <EnergyTile
              key={tile.label}
              label={tile.label}
              value={tile.value}
              unit={tile.unit}
              tone={tile.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnergySummary;
