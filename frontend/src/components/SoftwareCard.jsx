import React from "react";

const SoftwareCard = ({ software, onDownload }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img src={software.image} alt={software.name} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{software.name}</h3>
        <p style={styles.desc}>{software.description}</p>
       <button style={styles.button} onClick={() => onDownload(software.file)}>
  📥 Télécharger
</button>

      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  imageWrapper: {
    height: "180px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  content: {
    padding: "20px",
    flex: "1",
  },
  title: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "10px",
    fontWeight: "600",
  },
  desc: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
    minHeight: "50px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
    width: "100%",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default SoftwareCard;
