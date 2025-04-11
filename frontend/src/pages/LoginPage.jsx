import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Connexion</h2>
        <LoginForm />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    color: "#333",
  },
};

export default LoginPage;

