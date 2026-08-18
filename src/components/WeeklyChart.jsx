import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionBar from "./SectionBar";
import ChartTooltip from "./ChartTooltip";

function WeeklyChart({ weeklyData }) {
  return (
    <section className="min-w-0">
      <SectionBar kicker="THIS WEEK" title="Weekly output" />
      <div className="glass chart-box rounded-2xl px-1 py-3 sm:px-2 sm:py-4 md:px-4">
        <p className="copy-muted mb-1 px-2 text-[10px] font-bold tracking-[0.16em] sm:px-1">
          kWh
        </p>
        <div className="h-52 w-full sm:h-60 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData} barCategoryGap="22%">
              <CartesianGrid vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                width={28}
                tickCount={5}
              />
              <Tooltip
                cursor={false}
                content={(props) => <ChartTooltip {...props} unit="kWh" />}
              />
              <Bar dataKey="kWh" fill="#C4962A" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default WeeklyChart;
