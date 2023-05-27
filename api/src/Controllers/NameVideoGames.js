const { Videogame } = require("../db");
const axios = require("axios");

const getOneGame= async (req, res) => {
const { name } = req.params
  try {
    const response = await axios(`https://api.rawg.io/api/games?search=${name}&key=${process.env.APIKEY}`);
    const videogamersApi = response.data.results;
    const dbVideogame = await Videogame.findAll();
    const apiDbVideogamer = videogamersApi.concat(dbVideogame);
    const { name: queryName } = req.query;
    if (queryName) {
      const videogamerFilter = apiDbVideogamer.filter((p) =>
        p.name.toLowerCase().includes(queryName.toLowerCase())
      );
      res.status(200).json(videogamerFilter);
    } else {
      res.status(200).json(apiDbVideogamer);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getOneGame };