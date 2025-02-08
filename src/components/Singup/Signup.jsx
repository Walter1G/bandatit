import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-page">
      <form className="signup">
        <h2>Sign up</h2>
        <div className="form-content">
          <div className="form-row">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@mail.com"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+2547097383"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Nairobi cbd"
            />
            <select name="role" id="role">
              <option disabled>Account Type</option>
              <option value={1}>Buyer</option>
              <option value={2}>Vendor</option>
            </select>
          </div>
          <div className="form-row">
            <Link to={"/"} className="btn btn-cancel">
              Cancel
            </Link>
            <button className="btn btn-primary">Create Account</button>
          </div>

          <div className="form-row login">
            <p>
              Already have an account? <Link to={"/auth"}>Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
