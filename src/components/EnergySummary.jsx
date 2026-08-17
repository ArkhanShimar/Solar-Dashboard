import EnergyTile from "./EnergyTile";

function EnergySummary({ energySummary }) {
  const tiles = [
    {
      label: "TODAY",
      value: energySummary.todayKWh,
      unit: "kWh",
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
      tinted: true,
    },
  ];

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-bold tracking-[0.22em] text-clay-600">
          PRODUCTION
        </p>
        <h2 className="mt-1 font-display text-2xl text-ink-900">
          Energy summary
        </h2>
      </div>
      <div className="overflow-hidden rounded-2xl border border-parchment-300 shadow-card">
        <div className="bg-ink-900 px-5 py-3">
          <p className="text-sm text-parchment-200">
            How much the farm has put out, plus the CO2 we didnt burn today.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-parchment-200 md:grid-cols-3 xl:grid-cols-5">
          {tiles.map((tile) => (
            <EnergyTile
              key={tile.label}
              label={tile.label}
              value={tile.value}
              unit={tile.unit}
              tinted={tile.tinted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnergySummary;
