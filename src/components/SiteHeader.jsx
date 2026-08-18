import { useTheme } from "../context/ThemeContext";

function SiteHeader({ siteInfo }) {
  const { siteName, location, totalPanels, activePanels } = siteInfo;
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="glass overflow-hidden rounded-xl">
      <div className="h-[3px] bg-brass-500" />
      <div className="flex flex-col gap-4 px-4 py-3.5 md:flex-row md:items-center md:justify-between md:px-5 md:py-3.5">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-brass-600">
            SOLAR SITE
          </p>
          <h1 className="mt-1 font-display text-[28px] font-medium leading-none text-pitch-900 md:text-4xl">
            {siteName}
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-500">
            <LocationIcon />
            {location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="glass-inset flex items-center gap-5 rounded-lg px-4 py-2">
            <div>
              <p className="font-numbers text-2xl font-extrabold tabular-nums leading-none tracking-tight text-pitch-900">
                {totalPanels}
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-ink-400">
                TOTAL PANELS
              </p>
            </div>
            <div className="h-8 w-px bg-pitch-900/15" />
            <div>
              <p className="font-numbers text-2xl font-extrabold tabular-nums leading-none tracking-tight text-pitch-900">
                {activePanels}
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-signal-500">
                ACTIVE
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-signal-500 px-3 py-1.5 text-sm font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-white animate-soft-pulse" />
            Online
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            className="glass-inset rounded-lg px-3 py-2 text-sm font-bold text-pitch-900"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-4 w-4 text-brass-600"
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
