import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    role: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the user data
    const userData = {
      id: Date.now(), // Generate a unique ID (replace with a proper ID generator if needed)
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      roleId: parseInt(formData.role), // Convert role to a number
      password: "defaultPassword", // Add a default password (you can modify this to allow user input)
    };

    try {
      // Send a POST request to add the user
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      // Handle success
      alert("User created successfully!");
      navigate("/auth"); // Redirect to the login page
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <form className="signup" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <div className="form-content">
          <div className="form-row">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              value={formData.lname}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@mail.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+2547097383"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Nairobi cbd"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Account Type
              </option>
              <option value={1}>Buyer</option>
              <option value={2}>Vendor</option>
            </select>
          </div>
          <div className="form-row">
            <Link to={"/"} className="btn btn-cancel">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
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