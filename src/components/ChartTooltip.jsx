function ChartTooltip({ active, payload, label, unit }) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="glass rounded-lg px-3 py-2">
      <p className="text-xs font-bold text-ink-400">{label}</p>
      <p className="font-numbers text-xl font-extrabold text-ink-900">
        {payload[0].value}
        <span className="ml-1 font-sans text-xs font-bold text-ink-400">{unit}</span>
      </p>
    </div>
  );
}

export default ChartTooltip;
