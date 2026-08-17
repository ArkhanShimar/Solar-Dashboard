function SiteHeader({ siteInfo }) {
  const { siteName, location, totalPanels, activePanels } = siteInfo;

  return (
    <header className="relative overflow-hidden rounded-3xl border border-parchment-300 bg-parchment-50 shadow-card">
      <div className="h-1.5 bg-clay-500" />
      <div className="header-sun" />
      <div className="relative px-5 py-6 md:px-8 md:py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-clay-600">
              SOLAR SITE
            </p>
            <h1 className="mt-2 max-w-xl font-display text-4xl font-medium leading-[0.95] text-ink-900 md:text-[52px]">
              {siteName}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-ink-500">
              <LocationIcon />
              {location}
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-moss-400/50 bg-moss-500/10 px-3 py-1.5 text-sm font-bold text-moss-600">
            <span className="h-2 w-2 rounded-full bg-moss-500 animate-soft-pulse" />
            Online
          </span>
        </div>

        <div className="mt-8 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl bg-parchment-200">
          <div className="bg-parchment-50 px-5 py-4">
            <p className="font-numbers text-4xl font-extrabold tabular-nums leading-none tracking-tight text-ink-900">
              {totalPanels}
            </p>
            <p className="mt-2 text-xs font-bold tracking-[0.14em] text-ink-400">
              TOTAL PANELS
            </p>
          </div>
          <div className="bg-parchment-50 px-5 py-4">
            <p className="font-numbers text-4xl font-extrabold tabular-nums leading-none tracking-tight text-ink-900">
              {activePanels}
            </p>
            <p className="mt-2 text-xs font-bold tracking-[0.14em] text-moss-500">
              ACTIVE
            </p>
          </div>
        </div>
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
