import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

export default function ScoreChart({ score }) {
  const data = [
    { value: score, fill: "#ff0000" },
    { value: 1 - score, fill: "#fbfbfb" },
  ];

  return (
    <section className="scoreChart">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            innerRadius={85}
            outerRadius={95}
            cornerRadius={10}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="scoreChart__sectionText">
        <p className="scoreChart__sectionText__percent">
          {Math.round(score * 100)}%
        </p>
        <p className="scoreChart__sectionText__label">
          de votre <br />
          objectif
        </p>
      </div>
    </section>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};
