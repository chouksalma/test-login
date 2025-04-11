const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // on créera ce fichier après

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', authRoutes); // routes login/register

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
