import { useTheme } from "../context/ThemeContext";

function SiteHeader({ siteInfo }) {
  const { siteName, location, totalPanels, activePanels } = siteInfo;
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="glass overflow-hidden rounded-xl">
      <div className="h-[3px] bg-brass-500" />
      <div className="flex flex-col gap-3 px-3 py-3 sm:px-4 sm:py-3.5 lg:flex-row lg:items-center lg:justify-between lg:px-5">
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.2em] text-brass-600 sm:text-[11px] dark:text-brass-400">
            SOLAR SITE
          </p>
          <h1 className="copy mt-1 font-display text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl lg:leading-none">
            {siteName}
          </h1>
          <p className="copy-muted mt-2 flex items-center gap-1.5 text-sm">
            <LocationIcon />
            {location}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-3">
          <div className="glass-inset flex items-center gap-4 rounded-lg px-3 py-2 sm:gap-5 sm:px-4">
            <div>
              <p className="copy font-numbers text-xl font-extrabold tabular-nums leading-none tracking-tight sm:text-2xl">
                {totalPanels}
              </p>
              <p className="copy-muted mt-1 text-[10px] font-bold tracking-[0.12em]">
                TOTAL PANELS
              </p>
            </div>
            <div className="h-8 w-px bg-ink-900/15" />
            <div>
              <p className="copy font-numbers text-xl font-extrabold tabular-nums leading-none tracking-tight sm:text-2xl">
                {activePanels}
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-signal-500">
                ACTIVE
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-signal-500/70 px-3 py-1.5 text-sm font-bold text-signal-500">
            <span className="h-2 w-2 rounded-full bg-signal-500 animate-soft-pulse" />
            Online
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            className="copy glass-inset rounded-lg p-2"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-4 w-4 text-brass-600 dark:text-brass-400"
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

function SunIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 13.5A7.5 7.5 0 1 1 10.5 4 6 6 0 0 0 20 13.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SiteHeader;
