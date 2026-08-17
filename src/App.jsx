import { siteInfo, liveStats, energySummary } from "./data/solarData";
import SiteHeader from "./components/SiteHeader";
import LiveStats from "./components/LiveStats";
import EnergySummary from "./components/EnergySummary";

function App() {
  return (
    <div className="page-shell">
      <div className="relative mx-auto max-w-6xl px-4 py-5 pb-10 md:px-6 md:py-6">
        <SiteHeader siteInfo={siteInfo} />
        <main className="mt-6 flex flex-col gap-6">
          <LiveStats liveStats={liveStats} />
          <EnergySummary energySummary={energySummary} />
        </main>
      </div>
    </div>
  );
}

export default App;
