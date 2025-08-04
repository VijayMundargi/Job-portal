// src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pass: "",
    confirmPass: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const checkPassword = () => {
    return form.pass === form.confirmPass;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkPassword()) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      name: form.name,
      email: form.email,
      phoneNumber: form.phone,     
      password: form.pass          
    };

    try {
      const res = await fetch("http://localhost:4000/api/job/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="right-para" style={{ textAlign: "center" }}>Registration Form</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label><br />
          <input type="text" id="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label><br />
          <input type="tel" id="phone" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="pass">Password</label><br />
          <input type="password" id="pass" value={form.pass} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPass">Confirm Password</label><br />
          <input type="password" id="confirmPass" value={form.confirmPass} onChange={handleChange} required />
        </div>

        <div>
          <br />
          <input type="submit" value="CREATE ACCOUNT" style={{ backgroundColor: "hsl(120, 22%, 39%)" }} />
        </div>

        <div>
          <p style={{ textAlign: "center" }}>
            Already have an account? <a href="/login" className="no-line"><span style={{ color: "rgb(85, 85, 186)" }}>Sign in</span></a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
