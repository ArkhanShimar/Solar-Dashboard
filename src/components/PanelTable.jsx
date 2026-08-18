import { formatValue } from "../utils/format";
import SectionBar from "./SectionBar";

function PanelTable({ panelGroups }) {
  return (
    <section>
      <SectionBar kicker="ARRAYS" title="Panel groups" />
      <div className="glass overflow-hidden rounded-2xl">
        <table className="w-full table-fixed text-left">
          <thead>
            <tr className="border-b border-white/50">
              <th className="copy-muted w-[18%] px-2 py-2 text-[9px] font-bold tracking-[0.12em] sm:w-auto sm:px-4 sm:py-3 sm:text-[11px]">
                GROUP
              </th>
              <th className="copy-muted w-[20%] px-2 py-2 text-[9px] font-bold tracking-[0.12em] sm:w-auto sm:px-4 sm:py-3 sm:text-[11px]">
                PANELS
              </th>
              <th className="copy-muted w-[28%] px-2 py-2 text-[9px] font-bold tracking-[0.12em] sm:w-auto sm:px-4 sm:py-3 sm:text-[11px]">
                <span className="sm:hidden">kW</span>
                <span className="hidden sm:inline">OUTPUT (kW)</span>
              </th>
              <th className="copy-muted w-[34%] px-2 py-2 text-[9px] font-bold tracking-[0.12em] sm:w-auto sm:px-4 sm:py-3 sm:text-[11px]">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {panelGroups.map((group) => (
              <tr key={group.groupId} className={rowClass(group.status)}>
                <td className="px-2 py-2 sm:px-4 sm:py-3">
                  <span className="glass-inset inline-flex h-7 w-7 items-center justify-center rounded-md font-numbers text-base font-extrabold sm:h-9 sm:w-9 sm:rounded-lg sm:text-lg">
                    {group.groupId}
                  </span>
                </td>
                <td className="copy px-2 py-2 text-sm sm:px-4 sm:py-3 sm:text-base">
                  {group.panels}
                </td>
                <td className="copy px-2 py-2 font-numbers text-base font-extrabold tabular-nums sm:px-4 sm:py-3 sm:text-xl">
                  {formatValue(group.outputKW)}
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-3">
                  <StatusBadge status={group.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      className={`inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold sm:px-2.5 sm:py-1 sm:text-xs ${
        badgeClass[status] || "bg-white/40 copy-muted"
      }`}
    >
      {status}
    </span>
  );
}

export default PanelTable;
