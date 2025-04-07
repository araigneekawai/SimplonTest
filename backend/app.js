// app.js
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

const jokeRoutes = require("./routes/jokeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/blagues", jokeRoutes);

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Page d’accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Carambar !");
});

module.exports = app;
