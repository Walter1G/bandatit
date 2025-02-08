import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {

  return (
    <form className="loginform">
      <div className="form-input">
        <label>Username:</label>
        <input type="text" name="username" required />
        <br />
      </div>
      <div className="form-input">
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
      </div>
      <div className="btn login">
        <button type="submit">Login</button>
        </div>
          
          <div className="sign-up">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
    </form>
  );
};

export default Login;
