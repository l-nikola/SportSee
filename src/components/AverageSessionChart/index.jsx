import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const CustomChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="averageSessionChart__tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

export default function AverageSessionChart({ data }) {
  const translations = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const formattedData = data.map((item) => ({
    ...item,
  }));

  const formatTick = (day) => translations[day] || day;

  return (
    <section className="averageSessionChart">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width="100%" height="100%" data={formattedData}>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#fe6f70" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <XAxis
            dataKey="day"
            stroke="#ff8181"
            axisLine={false}
            tickLine={false}
            padding={{ left: 15, right: 15 }}
            tickFormatter={formatTick}
          />
          <YAxis
            type="number"
            domain={["dataMin - 10", "dataMax + 10"]}
            hide={true}
            padding={{ bottom: 5 }}
          />
          <Tooltip content={<CustomChartTooltip />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

AverageSessionChart.propTypes = {
  data: PropTypes.array.isRequired,
};
