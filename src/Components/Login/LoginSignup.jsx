import React, { useState } from "react";
import "./Loginsignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "", retypePassword: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    
    if (state === "Sign Up" && !formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (state === "Sign Up" && formData.password !== formData.retypePassword) {
      newErrors.retypePassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert(`${state} successful!`);
      // Perform login or sign-up logic here
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <div className="header">
          <div className="text">{state}</div>
          <div className="underline"></div>
        </div>

        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {state === "Sign Up" && (
            <>
              <input
                type="password"
                placeholder="Retype Password"
                value={formData.retypePassword}
                onChange={(e) => setFormData({ ...formData, retypePassword: e.target.value })}
              />
              {errors.retypePassword && <p className="error">{errors.retypePassword}</p>}
            </>
          )}
        </div>

        <div className="btn">
          <button onClick={handleSubmit}>Continue</button>
        </div>

        <div className="account">
          {state === "Sign Up" ? (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span onClick={() => setState("Login")}>Login</span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Don't have an account?{" "}
              <span onClick={() => setState("Sign Up")}>Sign Up</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
