const { Joke } = require("../models");

// Ajouter une blague
exports.addJoke = async (req, res) => {
  try {
    const { content } = req.body;
    const joke = await Joke.create({ content });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur interne" });
  }
};

// Récupérer toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur interne" });
  }
};

// Récupérer une blague par ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: "Blague non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur interne" });
  }
};

// Récupérer une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ offset: randomIndex });

    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: "Aucune blague trouvée" });
    }
  } catch (error) {
    console.error("Erreur dans getRandomJoke :", error);
    res.status(500).json({ error: "Erreur serveur interne" });
  }
};


