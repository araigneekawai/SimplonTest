const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

// Ajouter une blague
router.post("/", jokeController.addJoke);

// Toutes les blagues
router.get("/", jokeController.getAllJokes);

// Blague aléatoire
router.get("/random", jokeController.getRandomJoke);

// Une blague par ID
router.get("/:id", jokeController.getJokeById);

module.exports = router;
