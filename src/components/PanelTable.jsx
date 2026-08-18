import { formatValue } from "../utils/format";
import SectionBar from "./SectionBar";

function PanelTable({ panelGroups }) {
  return (
    <section>
      <SectionBar kicker="ARRAYS" title="Panel groups" />
      <div className="glass overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left">
            <thead>
              <tr className="border-b border-white/50">
                <th className="px-4 py-3 text-[11px] font-bold tracking-[0.14em] text-ink-400">
                  GROUP
                </th>
                <th className="px-4 py-3 text-[11px] font-bold tracking-[0.14em] text-ink-400">
                  PANELS
                </th>
                <th className="px-4 py-3 text-[11px] font-bold tracking-[0.14em] text-ink-400">
                  OUTPUT (kW)
                </th>
                <th className="px-4 py-3 text-[11px] font-bold tracking-[0.14em] text-ink-400">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              {panelGroups.map((group) => (
                <tr key={group.groupId} className={rowClass(group.status)}>
                  <td className="px-4 py-3 font-numbers text-xl font-extrabold text-pitch-900">
                    {group.groupId}
                  </td>
                  <td className="px-4 py-3 text-pitch-900">{group.panels}</td>
                  <td className="px-4 py-3 font-numbers text-xl font-extrabold tabular-nums text-pitch-900">
                    {formatValue(group.outputKW)}
                  </td>
                  <td className="px-4 py-3">
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
        badgeClass[status] || "bg-white/40 text-ink-500"
      }`}
    >
      {status}
    </span>
  );
}

export default PanelTable;
