import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/vendor">Vendor</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
