import { useParams } from "react-router-dom";
import {
  getUser,
  getUserActivity,
  getUserPerformance,
  getUserAverageSessions,
} from "../../services/api";
import { useEffect, useState } from "react";
import UserProfile from "../../components/UserProfile";
import DailyChart from "../../components/DailyChart";
import PerformanceChart from "../../components/PerformanceChart";
import AverageSessionChart from "../../components/AverageSessionChart";
import ScoreChart from "../../components/ScoreChart";
import Card from "../../components/Card";

export default function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [performance, setPerformance] = useState();
  const [averageSession, setAverageSession] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, activityData, performanceData, averageSession] =
          await Promise.all([
            getUser(id),
            getUserActivity(id),
            getUserPerformance(id),
            getUserAverageSessions(id),
          ]);
        setUser(userData);

        const transformed = activityData.sessions.map((session, index) => ({
          name: index + 1,
          kilogram: session.kilogram,
          calories: session.calories,
        }));

        setActivity(transformed);

        setPerformance(performanceData);

        setAverageSession(averageSession.sessions);
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
      )}
      {performance ? (
        <PerformanceChart data={performance} />
      ) : (
        <p>Chargement des performances...</p>
      )}
      {averageSession ? (
        <AverageSessionChart data={averageSession} />
      ) : (
        <p>Chargement des durées...</p>
      )}
      {user ? (
        <ScoreChart score={user.todayScore ?? user.score} />
      ) : (
        <p>Chargement du score...</p>
      )} */}
      {user ? (
        <>
          <Card
            keyData={user.keyData.calorieCount}
            unit={"kCal"}
            name={"Calories"}
            icon={"../public/icons/energy.svg"}
          />
          <Card
            keyData={user.keyData.proteinCount}
            unit={"g"}
            name={"Proteines"}
            icon={"../public/icons/chicken.svg"}
          />
          <Card
            keyData={user.keyData.carbohydrateCount}
            unit={"g"}
            name={"Glucides"}
            icon={"../public/icons/apple.svg"}
          />
          <Card
            keyData={user.keyData.lipidCount}
            unit={"g"}
            name={"Lipides"}
            icon={"../public/icons/burger.svg"}
          />
        </>
      ) : (
        <p>Chargement des données...</p>
      )}
    </section>
  );
}
