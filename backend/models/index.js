const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../db.sqlite")
});

const Joke = require("./joke")(sequelize, DataTypes);

module.exports = {
  sequelize,
  Joke
};
