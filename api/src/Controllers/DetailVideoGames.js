const { Videogame } = require("../db");
const axios = require("axios");

const detailVideoGames = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(`https://api.rawg.io/api/games/${id}?key=${process.env.APIKEY}`);
    console.log(process.env.APIKEY)
    const videogamersApi = response.data;
    res.status(200).json(videogamersApi);
  } catch (error) {
    const { id } = req.params;
    const videogameBD= await Videogame.findAll({
      where: {
        id: id,
      },
    });
    if(videogameBD) res.status(200)
    res.status(400).json({ error: error.message });
  }
};

module.exports = { detailVideoGames};
