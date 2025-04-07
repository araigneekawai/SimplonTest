const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("Base de données synchronisée");
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });
});

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());