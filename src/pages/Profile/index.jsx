import { useParams } from "react-router-dom";
import {
  getUser,
  getUserActivity,
  getUserPerformance,
} from "../../services/api";
import { useEffect, useState } from "react";
import UserProfile from "../../components/UserProfile";
import DailyChart from "../../components/DailyChart";
import PerformanceChart from "../../components/PerformanceChart";

export default function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [performance, setPerformance] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, activityData, performanceData] = await Promise.all([
          getUser(id),
          getUserActivity(id),
          getUserPerformance(id),
        ]);
        setUser(userData);

        const transformed = activityData.sessions.map((session, index) => ({
          name: index + 1,
          kilogram: session.kilogram,
          calories: session.calories,
        }));

        setActivity(transformed);

        setPerformance(performanceData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <section>
      <h2>Profile</h2>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <p>Chargement des données utilisateur...</p>
      )}
      {/* {activity ? (
        <DailyChart data={activity} />
      ) : (
        <p>Chargement des données d'activité...</p>
      )} */}
      {performance ? (
        <PerformanceChart data={performance} />
      ) : (
        <p>Chargement des performances...</p>
      )}
    </section>
  );
}
