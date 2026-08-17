function SiteHeader({ siteInfo }) {
  const { siteName, location, totalPanels, activePanels } = siteInfo;

  return (
    <header className="relative overflow-hidden rounded-xl bg-pitch-800 text-bone-50">
      <div className="flex flex-col gap-4 px-4 py-3.5 md:flex-row md:items-center md:justify-between md:px-5 md:py-3.5">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-brass-400">
            SOLAR SITE
          </p>
          <h1 className="mt-1 font-display text-[28px] font-medium leading-none text-bone-50 md:text-4xl">
            {siteName}
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-bone-300">
            <LocationIcon />
            {location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-5 rounded-lg border border-pitch-600 px-4 py-2">
            <div>
              <p className="font-numbers text-2xl font-extrabold tabular-nums leading-none tracking-tight text-bone-50">
                {totalPanels}
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-bone-300">
                TOTAL PANELS
              </p>
            </div>
            <div className="h-8 w-px bg-pitch-600" />
            <div>
              <p className="font-numbers text-2xl font-extrabold tabular-nums leading-none tracking-tight text-bone-50">
                {activePanels}
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-signal-400">
                ACTIVE
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-signal-400/40 bg-signal-500/15 px-3 py-1.5 text-sm font-bold text-signal-400">
            <span className="h-2 w-2 rounded-full bg-signal-400 animate-soft-pulse" />
            Online
          </span>
        </div>
      </div>
    </header>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-4 w-4 text-brass-400"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default SiteHeader;
