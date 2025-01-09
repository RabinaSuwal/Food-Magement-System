import React from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <form>
        <div className="box">
          <RxCross2 className="cross" />
          <h1>Log In</h1>
          <p className="para">
            Don't have an account? <span className="signup-link">Sign up</span>
          </p>

          <div className="social-login">
            <button className="social-button google">
              <FaGoogle />
              Google
            </button>
            <button className="social-button facebook">
              <FaFacebook /> Facebook
            </button>
            <button className="social-button instagram">
              <FaInstagram />
              Instagram
            </button>
          </div>

          <p className="para1">OR</p>

          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              className="inputbtn"
            />
            <input
              type="password"
              placeholder="Password"
              className="inputbtn"
            />
            <div className="pw-section">
              <a href="#" className="forget-password">
                Forget Password?
              </a>
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
