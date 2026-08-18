import EnergyTile from "./EnergyTile";
import SectionBar from "./SectionBar";

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
      <SectionBar kicker="PRODUCTION" title="Energy summary" />
      <div className="glass overflow-hidden rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-5">
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
