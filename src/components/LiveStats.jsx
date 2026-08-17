import StatCard from "./StatCard";

function LiveStats({ liveStats }) {
  const cards = [
    {
      label: "CURRENT OUTPUT",
      value: liveStats.currentOutputKW,
      unit: "kW",
      featured: true,
      icon: <BoltIcon />,
    },
    {
      label: "TODAY'S PEAK",
      value: liveStats.peakOutputTodayKW,
      unit: "kW",
      icon: <PeakIcon />,
    },
    {
      label: "EFFICIENCY",
      value: liveStats.efficiencyPercent,
      unit: "%",
      meterPercent: liveStats.efficiencyPercent,
      icon: <GaugeIcon />,
    },
    {
      label: "BATTERY LEVEL",
      value: liveStats.batteryLevelPercent,
      unit: "%",
      meterPercent: liveStats.batteryLevelPercent,
      icon: <BatteryIcon />,
    },
    {
      label: "GRID EXPORT",
      value: liveStats.gridExportKW,
      unit: "kW",
      icon: <GridIcon />,
    },
    {
      label: "SELF CONSUMPTION",
      value: liveStats.selfConsumptionKW,
      unit: "kW",
      icon: <HomeIcon />,
    },
  ];

  return (
    <section>
      <div className="mb-3">
        <p className="text-[11px] font-bold tracking-[0.2em] text-clay-600">
          RIGHT NOW
        </p>
        <h2 className="mt-0.5 font-display text-xl text-ink-900 md:text-2xl">Live stats</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <StatCard
            key={card.label}
            label={card.label}
            value={card.value}
            unit={card.unit}
            icon={card.icon}
            featured={card.featured}
            meterPercent={card.meterPercent}
          />
        ))}
      </div>
    </section>
  );
}

function BoltIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeakIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 17 9 9l4 5 4-7 4 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 16a8 8 0 1 1 15 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 16 16 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="6" y="10" width="7" height="4" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v18M5 8h14M5 16h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 8v8M16 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11 12 4l8 7v9H4v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default LiveStats;
