import { NavLink } from "react-router-dom";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
<header className="n-container">
      <nav>
        <NavLink to="/" className={getClass}>
          Home 
        </NavLink>
        <NavLink to="/allassignments" className={getClass}>
          All Assignments
        </NavLink>
        <NavLink to="/cards/AddCard" className={getClass}>
          Add Assignment
        </NavLink>
      </nav>
    </header>
  );
}
