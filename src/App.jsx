import { siteInfo, liveStats } from "./data/solarData";
import SiteHeader from "./components/SiteHeader";
import LiveStats from "./components/LiveStats";

function App() {
  return (
    <div className="page-shell paper-grain">
      <div className="h-2 bg-clay-500" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        <SiteHeader siteInfo={siteInfo} />
        <main className="mt-10">
          <LiveStats liveStats={liveStats} />
        </main>
      </div>
    </div>
  );
}

export default App;
