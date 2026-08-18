import { formatValue } from "../utils/format";
import SectionBar from "./SectionBar";

function PanelTable({ panelGroups }) {
  return (
    <section>
      <SectionBar kicker="ARRAYS" title="Panel groups" />
      <div className="glass overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-left md:min-w-0">
            <thead>
              <tr className="border-b border-white/50">
                <th className="copy-muted px-3 py-2.5 text-[10px] font-bold tracking-[0.14em] sm:px-4 sm:py-3 sm:text-[11px]">
                  GROUP
                </th>
                <th className="copy-muted px-3 py-2.5 text-[10px] font-bold tracking-[0.14em] sm:px-4 sm:py-3 sm:text-[11px]">
                  PANELS
                </th>
                <th className="copy-muted px-3 py-2.5 text-[10px] font-bold tracking-[0.14em] sm:px-4 sm:py-3 sm:text-[11px]">
                  OUTPUT (kW)
                </th>
                <th className="copy-muted px-3 py-2.5 text-[10px] font-bold tracking-[0.14em] sm:px-4 sm:py-3 sm:text-[11px]">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              {panelGroups.map((group) => (
                <tr key={group.groupId} className={rowClass(group.status)}>
                  <td className="copy px-3 py-2.5 font-numbers text-lg font-extrabold sm:px-4 sm:py-3 sm:text-xl">
                    {group.groupId}
                  </td>
                  <td className="copy px-3 py-2.5 sm:px-4 sm:py-3">{group.panels}</td>
                  <td className="copy px-3 py-2.5 font-numbers text-lg font-extrabold tabular-nums sm:px-4 sm:py-3 sm:text-xl">
                    {formatValue(group.outputKW)}
                  </td>
                  <td className="px-3 py-2.5 sm:px-4 sm:py-3">
                    <StatusBadge status={group.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function rowClass(status) {
  if (status === "Offline") {
    return "row-offline";
  }
  if (status === "Degraded") {
    return "row-degraded";
  }
  return "border-b border-white/40 last:border-b-0";
}

function StatusBadge({ status }) {
  const badgeClass = {
    Normal: "bg-signal-500/15 text-signal-600",
    Degraded: "bg-white/40 text-amber-800",
    Offline: "bg-white/40 text-red-800",
  };

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${
        badgeClass[status] || "bg-white/40 copy-muted"
      }`}
    >
      {status}
    </span>
  );
}

export default PanelTable;
