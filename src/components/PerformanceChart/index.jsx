import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceChart({ data }) {
  const translations = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const formattedData = data.data
    .map((item) => ({
      subject: translations[data.kind[item.kind]],
      performance: item.value,
    }))
    .reverse();

  return (
    <section className="radarChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          <PolarGrid stroke="white" radialLines={false} />
          <PolarAngleAxis
            stroke="white"
            dataKey="subject"
            tick={{ fill: "white", fontSize: 12, fontWeight: 500 }}
            tickLine={false}
          />
          <Radar
            name="Performance"
            dataKey="performance"
            fill="#ff0101b2"
            fillOpacity={1.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
