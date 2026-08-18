import {
  Area,
  CartesianGrid,
  Line,
  ComposedChart,
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
      <div className="glass chart-box rounded-2xl px-1 py-3 sm:px-2 sm:py-4 md:px-4">
        <p className="copy-muted mb-1 px-2 text-[10px] font-bold tracking-[0.16em] sm:px-1">
          kW
        </p>
        <div className="h-52 w-full sm:h-60 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={hourlyToday}>
              <defs>
                <linearGradient id="hourlyFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C4962A" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#C4962A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="hour"
                tickLine={false}
                axisLine={false}
                minTickGap={16}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                width={28}
                tickCount={5}
              />
              <Tooltip
                cursor={false}
                content={(props) => <ChartTooltip {...props} unit="kW" />}
              />
              <Area
                type="monotone"
                dataKey="kw"
                stroke="none"
                fill="url(#hourlyFill)"
              />
              <Line
                type="monotone"
                dataKey="kw"
                stroke="#C4962A"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#C4962A", strokeWidth: 0 }}
                activeDot={{ r: 5, fill: "#9A7518", strokeWidth: 0 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default HourlyChart;
