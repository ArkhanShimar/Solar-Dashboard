function SectionBar({ kicker, title }) {
  return (
    <div className="glass mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg px-3 py-2">
      <p className="text-[11px] font-bold tracking-[0.2em] text-brass-600 dark:text-brass-400">
        {kicker}
      </p>
      <h2 className="copy font-display text-xl md:text-2xl">{title}</h2>
    </div>
  );
}

export default SectionBar;
