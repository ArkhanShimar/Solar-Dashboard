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
      <div className="relative mx-auto max-w-6xl px-4 py-5 pb-10 md:px-6 md:py-6">
        <SiteHeader siteInfo={siteInfo} />
        <main className="mt-6 flex flex-col gap-6">
          <LiveStats liveStats={liveStats} />
          <EnergySummary energySummary={energySummary} />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
