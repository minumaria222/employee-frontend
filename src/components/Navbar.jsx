import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <span className="navbar-brand">Employee Portal</span>
      <div className="navbar-nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/employee-form" className="nav-link">
          Employee Form
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
