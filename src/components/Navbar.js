import { NavLink } from "react-router-dom";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
<header className="container">
      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/cards" className={getClass}>
          All Cards
        </NavLink>
        <NavLink to="/cards/new" className={getClass}>
          Add A Card
        </NavLink>
      </nav>
    </header>
  );
}
