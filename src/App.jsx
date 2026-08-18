import {
  energySummary,
  hourlyToday,
  liveStats,
  panelGroups,
  siteInfo,
  weeklyData,
} from "./data/solarData";
import SiteHeader from "./components/SiteHeader";
import LiveStats from "./components/LiveStats";
import EnergySummary from "./components/EnergySummary";
import HourlyChart from "./components/HourlyChart";
import WeeklyChart from "./components/WeeklyChart";
import PanelTable from "./components/PanelTable";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "page-shell dark" : "page-shell"}>
      <div className="relative mx-auto w-full max-w-6xl px-3 py-4 sm:px-4 md:px-6 md:py-6">
        <SiteHeader siteInfo={siteInfo} />
        <main className="mt-4 flex min-w-0 flex-col gap-4 md:mt-6 md:gap-6">
          <LiveStats liveStats={liveStats} />
          <EnergySummary energySummary={energySummary} />
          <div className="grid min-w-0 grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
            <HourlyChart hourlyToday={hourlyToday} />
            <WeeklyChart weeklyData={weeklyData} />
          </div>
          <PanelTable panelGroups={panelGroups} />
        </main>
      </div>
    </div>
  );
}

export default App;
