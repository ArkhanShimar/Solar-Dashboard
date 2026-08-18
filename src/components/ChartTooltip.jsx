function ChartTooltip({ active, payload, label, unit }) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="glass rounded-lg px-3 py-2">
      <p className="copy-muted text-xs font-bold">{label}</p>
      <p className="copy font-numbers text-xl font-extrabold">
        {payload[0].value}
        <span className="copy-muted ml-1 font-sans text-xs font-bold">{unit}</span>
      </p>
    </div>
  );
}

export default ChartTooltip;
