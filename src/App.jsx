import { siteInfo } from "./data/solarData";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="page-shell paper-grain">
      <div className="h-2 bg-clay-500" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        <SiteHeader siteInfo={siteInfo} />
      </div>
    </div>
  );
}

export default App;
