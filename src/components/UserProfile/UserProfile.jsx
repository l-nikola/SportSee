import React, { useEffect, useState } from "react";
import { getUser } from "../../services/api.js";

export default function UserProfile({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser(id);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (!user) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Bonjour {user.userInfos.firstName}</h1>
    </div>
  );
}
