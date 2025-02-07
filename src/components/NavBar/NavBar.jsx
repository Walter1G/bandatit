import { NavLink } from "react-router-dom";
import "./NavBar.css";
import cartIcon from "../../Assets/cartIcon.png";
import logo from "../../Assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <NavLink to="/" end>
                      <img src={logo} alt="the bandit logo" />
                      <p>BandRight</p>
          </NavLink>
        </li>

        <li className="mid-nav">
          <ul>
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
              </li>
              

        <li>
          <ul className="right-nav">
                      <li className="cart">
                          <NavLink to="/cart">
                              <img src={cartIcon} alt="cartIcon" />
                          </NavLink>
                          <p>4</p>
            </li>
            <li>profile</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
