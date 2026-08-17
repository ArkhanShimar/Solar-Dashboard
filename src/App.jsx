import { siteInfo, liveStats, energySummary } from "./data/solarData";
import SiteHeader from "./components/SiteHeader";
import LiveStats from "./components/LiveStats";
import EnergySummary from "./components/EnergySummary";

function App() {
  return (
    <div className="page-shell paper-grain">
      <div className="relative mx-auto max-w-6xl px-4 py-7 pb-16 md:px-8 md:py-10 md:pb-20">
        <SiteHeader siteInfo={siteInfo} />
        <main className="mt-8 flex flex-col gap-9 md:mt-10 md:gap-11">
          <LiveStats liveStats={liveStats} />
          <EnergySummary energySummary={energySummary} />
        </main>
      </div>
    </div>
  );
}

export default App;
