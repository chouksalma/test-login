import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css"; // CSS dans un dossier 'styles'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        setErrorMsg(res.data.message || "Erreur de connexion");
      }
    } catch (err) {
      setErrorMsg("Erreur : vérifiez votre email et mot de passe.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-left">
          <h2 className="auth-title">WELCOME</h2>
          <form onSubmit={handleLogin}>
            {errorMsg && <div className="auth-error">{errorMsg}</div>}
            <input
              type="email"
              placeholder="Username or Email"
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
            <button type="submit">SUBMIT</button>
          </form>
          <p className="auth-bottom">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
      

        </div>
        <div className="auth-right">
          <img src="/images/login.png" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
