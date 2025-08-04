import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    try {
      const res = await fetch("http://localhost:4000/api/job/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("Login successful!");
       
        navigate("/member");
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log in</h2>
        <p className="subtitle">Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="/">Forgot password</a>
          </div>

          <button type="submit" className="login-button">Log in</button>
        </form>

        <div className="divider"><span>or</span></div>

        <div className="social-buttons">
          <button className="google">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
            />
            Continue with Google
          </button>

          <button className="linkedin">
            <img
              src="https://img.icons8.com/ios-filled/16/0077b5/linkedin.png"
              alt="LinkedIn"
            />
            Continue with LinkedIn
          </button>
        </div>

        <p className="footer-text">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
