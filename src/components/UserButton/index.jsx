import { useNavigate } from "react-router-dom";

export default function UserSwitch() {
  const navigate = useNavigate();

  const handleSwitchUser = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div>
      <button onClick={() => handleSwitchUser(12)}>Utilisateur Karl</button>
      <button onClick={() => handleSwitchUser(18)}>Utilisateur Cecilia</button>
    </div>
  );
}
