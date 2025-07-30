import React, { useEffect, useState } from "react";
import { getUser, getUserActivity } from "../../services/api.js";
import DailyChart from "../../components/DailyChart";

export default function UserProfile({ id }) {
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, activityData] = await Promise.all([
          getUser(id),
          getUserActivity(id),
        ]);
        setUser(userData);

        // Transformer les données
        const transformed = activityData.sessions.map((session, index) => ({
          name: index + 1,
          kilogram: session.kilogram,
          calories: session.calories,
        }));

        setActivity(transformed);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (!user || !activity) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Bonjour {user.userInfos.firstName}</h1>
      <DailyChart data={activity} />
    </div>
  );
}
