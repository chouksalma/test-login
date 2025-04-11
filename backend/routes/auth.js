const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/db');

// ROUTE: INSCRIPTION
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [existing] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return res.status(400).json({ success: false, message: "Email déjà utilisé" });
    }

    const hashed = await bcrypt.hash(password, 10);
    await db.promise().query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashed]);

    res.json({ success: true, message: "Inscription réussie" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
});

// ROUTE: CONNEXION
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(401).json({ success: false, message: "Email incorrect" });
    }

    const user = users[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ success: false, message: "Mot de passe incorrect" });
    }

    res.json({ success: true, message: "Connexion réussie", user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
});

module.exports = router;
