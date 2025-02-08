import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import cartIcon from "../../Assets/cartIcon.png";
import logo from "../../Assets/logo.png";
import { useAuth } from "../../utilities/AuthContext";
import { useCart } from "../../utilities/CartContext";

const NavBar = () => {
  const { user, logout } = useAuth();
  const { getCartTotalItems } = useCart();

  function handleLog() {
    user && logout();
  }
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <NavLink to="/" end>
            <img src={logo} alt="the bandit logo" />
            <p>BandRight</p>
          </NavLink>
          {user && <p>Welcome {user.fname}</p>}
        </li>

        <li className="mid-nav">
          <ul>
            {user && (
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
            )}
            {user?.roleId >= 2 && (
              <li className="nav-item">
                <NavLink to="/vendor">Vendor</NavLink>
              </li>
            )}
            {user?.roleId >= 3 && (
              <li className="nav-item">
                <NavLink to="/admin">Admin</NavLink>
              </li>
            )}
          </ul>
        </li>

        <li>
          <ul className="right-nav">
            {user && (
              <>
                <li className="cart">
                  <NavLink to="/cart">
                    <img src={cartIcon} alt="cartIcon" />
                  </NavLink>
                  <p>{getCartTotalItems()}</p>
                </li>
              </>
            )}
            <li className="btn" key={"log"} onClick={handleLog}>
              <Link to={"/auth"}>{user ? "Log out" : "Log In"}</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
