export default function UserProfile({ user }) {
  return (
    <section className="userProfile">
      <h1>
        Bonjour{" "}
        <span className="userProfile__name">{user.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}
