import React, { useState } from "react";
import ReactDOM from "react-dom";

// Reusable Input
const ReusableInput = ({ label, type, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} />
  </div>
);

// Reusable Button
const ReusableButton = ({ label, onClick }) => (
  <button className="submit-button" onClick={onClick}>
    {label}
  </button>
);

// Login Form
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Both fields are required.");
    } else {
      setError("");
      alert(`Logged in as: ${username}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <ReusableInput
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <ReusableInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ReusableButton label="Login" onClick={handleLogin} />
    </div>
  );
};

// Inject styles directly into the page
const style = document.createElement("style");
style.textContent = `
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to right, #74ebd5, #acb6e5);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .login-container {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    width: 300px;
  }

  .login-container h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: border-color 0.3s;
  }

  .form-group input:focus {
    border-color: #0077cc;
    outline: none;
  }

  .submit-button {
    width: 100%;
    padding: 0.6rem;
    background-color: #0077cc;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit-button:hover {
    background-color: #005fa3;
  }

  .error {
    color: red;
    margin-bottom: 1rem;
    text-align: center;
  }
`;
document.head.appendChild(style);

// Render the form
ReactDOM.render(<LoginForm />, document.getElementById("root"));
