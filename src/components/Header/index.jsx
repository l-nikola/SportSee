import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="/public/images/logo-with-text.svg" alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/profile">Profil</Link>
          </li>
          <li>
            <Link to="/settings">Réglage</Link>
          </li>
          <li>
            <Link to="/community">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
