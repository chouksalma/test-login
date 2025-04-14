import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SoftwareCard from "../components/SoftwareCard";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/login");

    const fetchSoftwares = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/softwares");
        setSoftwares(res.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des logiciels");
      }
    };

    fetchSoftwares();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/download/software/${filename}`,
        {
          responseType: "blob",
        }
      );
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("Erreur pendant le téléchargement.");
    }
  };
  
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2 style={styles.title}>Bienvenue sur votre Dashboard 🎉</h2>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          🔒 Se déconnecter
        </button>
      </div>

      <div style={styles.grid}>
        {softwares.map((soft) => (
          <SoftwareCard
            key={soft.id}
            software={soft}
            onDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px",
    minHeight: "100vh",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    color: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  title: {
    fontSize: "28px",
    margin: 0,
  },
  logoutBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default DashboardPage;
