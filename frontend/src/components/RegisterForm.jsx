import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css"; // CSS dans le dossier 'styles'

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
      });

      if (res.data.success) {
        setSuccessMsg("Inscription réussie !");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErrorMsg(res.data.message || "Erreur d'inscription");
      }
    } catch (err) {
      setErrorMsg("Erreur : vérifiez les champs.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2 className="auth-title">CREATE ACCOUNT</h2>
          <form onSubmit={handleRegister}>
            {errorMsg && <div className="auth-error">{errorMsg}</div>}
            {successMsg && <div className="auth-success">{successMsg}</div>}

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
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
            <button type="submit">REGISTER</button>
          </form>
          <p className="auth-bottom">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

        <div className="auth-right">
          <img src="/images/register.jpg" alt="register" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
