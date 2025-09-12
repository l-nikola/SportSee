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
import ApiAlert from "../../components/ApiAlert";
import Card from "../../components/Card";
import Error from "../Error";

export default function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [performance, setPerformance] = useState();
  const [averageSession, setAverageSession] = useState();
  const [userNotFound, setUserNotFound] = useState(false);
  const [apiUnavailable, setApiUnavailable] = useState(false);

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

        if (!userData) {
          setUserNotFound(true);
          return;
        }

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
        console.error("Error retrieving data :", error);
        if (
          import.meta.env.VITE_USE_MOCK === "false" &&
          !localStorage.getItem("VITE_USE_MOCK")
        ) {
          setApiUnavailable(true);
        } else {
          setUserNotFound(true);
        }
      }
    }
    fetchData();
  }, [id]);

  // Switch to mock
  const handleSwitchMock = () => {
    localStorage.setItem("VITE_USE_MOCK", "true");
    window.location.reload();
  };

  if (apiUnavailable) {
    return <ApiAlert onSwitchMock={handleSwitchMock} />;
  }

  if (userNotFound) {
    return <Error />;
  }

  if (!user || !activity || !performance || !averageSession) {
    return <p>Chargement des données...</p>;
  }

  return (
    <section className="profile">
      <div>
        <UserProfile user={user} />
        <DailyChart data={activity} />
        <div className="profile__smallChart">
          <AverageSessionChart data={averageSession} />
          <PerformanceChart data={performance} />
          <ScoreChart score={user.todayScore ?? user.score} />
        </div>
      </div>
      <div className="profile__card">
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
      </div>
    </section>
  );
}
