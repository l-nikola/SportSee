import { useParams } from "react-router-dom";
import UserProfile from "../../components/UserProfile";

export default function Profile() {
  const { id } = useParams();
  return (
    <section>
      <h2>Profile</h2>
      <UserProfile id={id} />
    </section>
  );
}
