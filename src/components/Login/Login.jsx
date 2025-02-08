import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../utilities/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    const signal = abortController.signal;

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/users", { signal });
      if (!res.ok) throw new Error("Failed to fetch users");

      const users = await res.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        setError("Invalid email or password");
      } else {
        login(user);
        navigate("/");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="loginform" onSubmit={handleLogin}>
      <div className="form-input">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
        />
        <br />
      </div>
      <div className="form-input">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required
        />
        <br />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="btn login">
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>

      <div className="sign-up">
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
