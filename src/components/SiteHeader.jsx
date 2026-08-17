function SiteHeader({ siteInfo }) {
  const { siteName, location, totalPanels, activePanels } = siteInfo;

  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-bold tracking-[0.22em] text-clay-600">
          SOLAR SITE
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium leading-none text-ink-900 md:text-5xl">
          {siteName}
        </h1>
        <p className="mt-3 flex items-center gap-2 text-ink-500">
          <LocationIcon />
          {location}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-xl border border-parchment-300 bg-parchment-50 px-4 py-3 shadow-card">
          <p className="font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight text-ink-900">
            {totalPanels}
          </p>
          <p className="mt-1 text-xs font-bold tracking-wide text-ink-400">
            TOTAL PANELS
          </p>
        </div>
        <div className="rounded-xl border border-parchment-300 bg-parchment-50 px-4 py-3 shadow-card">
          <p className="font-numbers text-3xl font-extrabold tabular-nums leading-none tracking-tight text-ink-900">
            {activePanels}
          </p>
          <p className="mt-1 text-xs font-bold tracking-wide text-moss-500">
            ACTIVE
          </p>
        </div>
        <span className="inline-flex items-center gap-2 self-center rounded-full border border-moss-400/50 bg-moss-500/10 px-3 py-1.5 text-sm font-bold text-moss-600">
          <span className="h-2 w-2 rounded-full bg-moss-500 animate-soft-pulse" />
          Online
        </span>
      </div>
    </header>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-4 w-4 text-clay-500"
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
