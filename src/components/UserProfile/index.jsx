export default function UserProfile({ user }) {
  return (
    <div>
      <h1>Bonjour {user.userInfos.firstName}</h1>
    </div>
  );
}
