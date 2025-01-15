import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./Login.css";

function Login({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const staticCredentials = {
    email: "test@example.com",
    password: "password123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please fill out all required fields.");
      return;
    }

    if (currState === "Login") {
      if (email === staticCredentials.email && password === staticCredentials.password) {
        alert("Login successful!");
        console.log("User logged in with:", { email, password });
        setShowLogin(false); // Close the popup after successful login
      } else {
        alert("Invalid email or password.");
      }
    } else if (currState === "Sign Up") {
      if (!name) {
        alert("Name is required for sign-up.");
        return;
      }
      alert("Sign-up successful!");
      console.log("New user signed up with:", { name, email, password });
      setCurrState("Login"); // Redirect to login after sign-up
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "login-popup") {
      setShowLogin(false);
    }
  };

  return (
    <div className="login-popup" onClick={handleOverlayClick}>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <RxCross2 className="cross" onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
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
