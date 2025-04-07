// server.js
const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

// Sync Sequelize et lancer le serveur
sequelize.sync().then(() => {
  console.log("Base de données synchronisée");
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });
});
