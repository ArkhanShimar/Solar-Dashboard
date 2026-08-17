import EnergyTile from "./EnergyTile";

function EnergySummary({ energySummary }) {
  const tiles = [
    {
      label: "TODAY",
      value: energySummary.todayKWh,
      unit: "kWh",
      tone: "clay",
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
      label: "LIFETIME",
      value: energySummary.totalLifetimeKWh,
      unit: "kWh",
    },
    {
      label: "CO2 SAVED TODAY",
      value: energySummary.co2SavedKgToday,
      unit: "kg",
      tone: "moss",
    },
  ];

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-bold tracking-[0.22em] text-clay-600">
          PRODUCTION
        </p>
        <h2 className="mt-1 font-display text-2xl text-ink-900 md:text-3xl">
          Energy summary
        </h2>
      </div>
      <div className="overflow-hidden rounded-3xl border border-parchment-300 shadow-card">
        <div className="h-1.5 bg-clay-500" />
        <div className="grid grid-cols-1 gap-px bg-parchment-200 sm:grid-cols-2 lg:grid-cols-5">
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
