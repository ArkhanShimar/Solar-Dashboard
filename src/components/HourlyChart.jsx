import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionBar from "./SectionBar";
import ChartTooltip from "./ChartTooltip";

function HourlyChart({ hourlyToday }) {
  return (
    <section className="min-w-0">
      <SectionBar kicker="TODAY" title="Hourly output" />
      <div className="glass chart-box rounded-xl px-1 py-3 sm:px-2 sm:py-4 md:px-4">
        <div className="h-52 w-full sm:h-60 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourlyToday}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="hour"
                tickLine={false}
                axisLine={false}
                minTickGap={16}
              />
              <YAxis tickLine={false} axisLine={false} width={36} />
              <Tooltip
                cursor={false}
                content={(props) => <ChartTooltip {...props} unit="kW" />}
              />
              <Line
                type="monotone"
                dataKey="kw"
                stroke="#C4962A"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#C4962A", strokeWidth: 0 }}
                activeDot={{ r: 5, fill: "#9A7518", strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default HourlyChart;
