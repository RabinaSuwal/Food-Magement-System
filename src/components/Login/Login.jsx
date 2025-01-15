import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./Login.css";

function Login({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Static credentials
  const staticCredentials = {
    email: "user@example.com",
    password: "password123",
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (currState === "Login") {
      if (
        formData.email === staticCredentials.email &&
        formData.password === staticCredentials.password
      ) {
        alert("Login successful!");
        setShowLogin(false);
      } else {
        setErrors({ email: "Invalid email or password." });
      }
    } else {
      alert("Sign-up is disabled in this demo. Use the login credentials.");
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <RxCross2 className="cross" onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                disabled
              />
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {currState === "Login" ? (
          <p>
            Demo account: Use <strong>user@example.com</strong> and password{" "}
            <strong>password123</strong>.
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
