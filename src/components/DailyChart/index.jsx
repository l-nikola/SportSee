import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "9",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "10",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// Custom component pour :
// - Le tooltip : CustomChartTooltip

const CustomChartLegend = () => {
  return (
    <div className="dialyChart__title">
      <div>
        <span className="dialyChart__title__weightBullet"></span>
        <span>Poids (kg)</span>
      </div>
      <div>
        <span className="dialyChart__title__colorieBullet"></span>
        <span>Calories brûlées (kCal)</span>
      </div>
    </div>
  );
};

function DailyChart() {
  return (
    <section className="dialyChart">
      <h2>Activité quotidienne</h2>
      <CustomChartLegend />
      <ResponsiveContainer width="100%" height="100%" name="test">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 12 }}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 12 }}
          />
          <Tooltip />
          <Bar
            dataKey="uv"
            name="Poids (kg)"
            fill="black"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            dataKey="pv"
            name="Calories brûlées (kCal)"
            fill="red"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default DailyChart;
