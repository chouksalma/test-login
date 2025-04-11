import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Créer un compte</h2>
        <RegisterForm />
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
    background: "linear-gradient(to right, #43cea2, #185a9d)",
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

export default RegisterPage;
