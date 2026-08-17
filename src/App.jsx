import { siteInfo, liveStats, energySummary } from "./data/solarData";
import SiteHeader from "./components/SiteHeader";
import LiveStats from "./components/LiveStats";
import EnergySummary from "./components/EnergySummary";

function App() {
  return (
    <div className="page-shell paper-grain">
      <div className="h-2 bg-clay-500" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 pb-16 md:px-8 md:py-10 md:pb-20">
        <SiteHeader siteInfo={siteInfo} />
        <main className="mt-10 flex flex-col gap-10">
          <LiveStats liveStats={liveStats} />
          <EnergySummary energySummary={energySummary} />
        </main>
      </div>
    </div>
  );
}

export default App;
