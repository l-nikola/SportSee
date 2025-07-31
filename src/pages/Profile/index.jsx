import { useParams } from "react-router-dom";
import { getUser, getUserActivity } from "../../services/api";
import { useEffect, useState } from "react";
import UserProfile from "../../components/UserProfile";
import DailyChart from "../../components/DailyChart";

export default function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [activity, setActivity] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, activityData] = await Promise.all([
          getUser(id),
          getUserActivity(id),
        ]);
        setUser(userData);

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

  return (
    <section>
      <h2>Profile</h2>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <p>Chargement des données utilisateur...</p>
      )}
      {activity ? (
        <DailyChart data={activity} />
      ) : (
        <p>Chargement des données d'activité...</p>
      )}
    </section>
  );
}
