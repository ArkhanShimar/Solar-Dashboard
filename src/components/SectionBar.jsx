function SectionBar({ kicker, title }) {
  return (
    <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <p className="text-[10px] font-bold tracking-[0.22em] text-brass-600 sm:text-[11px] dark:text-brass-400">
        {kicker}
      </p>
      <h2 className="copy font-display text-xl italic sm:text-2xl">{title}</h2>
    </div>
  );
}

export default SectionBar;
