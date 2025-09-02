import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const CustomChartLegend = () => {
  return (
    <div className="dailyChart__header__legend">
      <div>
        <span className="dailyChart__header__legend__weightBullet"></span>
        <span>Poids (kg)</span>
      </div>
      <div>
        <span className="dailyChart__header__legend__colorieBullet"></span>
        <span>Calories brûlées (kCal)</span>
      </div>
    </div>
  );
};

const CustomChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="dailyChart__header__tooltip">
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

function DailyChart({ data }) {
  return (
    <section className="dailyChart">
      <div className="dailyChart__header">
        <h2>Activité quotidienne</h2>
        <CustomChartLegend />
      </div>
      <div className="dailyChart__chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3"
              yAxisId="kilogram"
            />
            <XAxis
              dataKey="name"
              type="number"
              domain={["dataMin", "dataMax"]}
              allowDataOverflow={false}
              tickCount={7}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9B9EAC", fontSize: 14, dy: 16 }}
              padding={{ left: 10, right: 8 }}
            />
            <YAxis
              yAxisId="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9B9EAC", fontSize: 14, dx: 40 }}
              tickCount={3}
              domain={["dataMin-2", "dataMax+1"]}
            />
            <YAxis hide yAxisId="calories" />
            <Tooltip content={<CustomChartTooltip />} />
            <Bar
              dataKey="kilogram"
              yAxisId="kilogram"
              name="Poids (kg)"
              fill="black"
              radius={[3, 3, 0, 0]}
              barSize={7}
            />
            <Bar
              dataKey="calories"
              yAxisId="calories"
              name="Calories brûlées (kCal)"
              fill="red"
              radius={[3, 3, 0, 0]}
              barSize={7}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default DailyChart;

DailyChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
