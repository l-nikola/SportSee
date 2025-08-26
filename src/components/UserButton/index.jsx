import { useNavigate } from "react-router-dom";

export default function UserSwitch() {
  const navigate = useNavigate();

  const handleSwitchUser = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="userButton">
      <button onClick={() => handleSwitchUser(12)}>
        Utilisateur 12 (Karl)
      </button>
      <button onClick={() => handleSwitchUser(18)}>
        Utilisateur 18 (Cecilia)
      </button>
    </div>
  );
}
