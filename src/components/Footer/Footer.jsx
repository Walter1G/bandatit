import logo from "../../Assets/logo.png";
const Footer = () => {
    return <footer>
        <div className="footer-content">
            <div className="footer-left">
                <img src={logo} className="logo-icon" alt="logo" />
                <p>Bandatit</p>

            </div>
            <div className="footer-center">
                <ul>
                    <li>Central City Nairobi</li>
                    <li>P.o Box 1123</li>
                    <li>City Center</li>
                </ul>
            </div>
            <div className="footer-right">
                <ul>
                    <li>theBand@it.co.ke</li>
                    <li>+254708393794</li>
                    <li>223849400404</li>
                    </ul>
                </div>
      </div>
  </footer>;
};

export default Footer;
