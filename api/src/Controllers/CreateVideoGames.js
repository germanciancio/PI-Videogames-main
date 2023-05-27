const { json } = require("sequelize");
const {Videogame} = require("../db");

const newVideogames = async (req, res) => {
  try {
    const { id, name, description,platform, image, released, rating } =
      req.body;
    

    const videogame = await Videogame.create({
      id,
      name,
      description,
      platform,
      image,
      released,
      rating,
          });
    res.json(videogame);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
 module.exports = {newVideogames}

