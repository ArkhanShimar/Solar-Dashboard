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
    <section>
      <SectionBar kicker="THIS WEEK" title="Weekly output" />
      <div className="glass chart-box rounded-xl px-2 py-4 md:px-4">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis
                unit=" kWh"
                tickLine={false}
                axisLine={false}
                width={58}
              />
              <Tooltip
                cursor={false}
                content={(props) => <ChartTooltip {...props} unit="kWh" />}
              />
              <Bar dataKey="kWh" fill="#C4962A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default WeeklyChart;
