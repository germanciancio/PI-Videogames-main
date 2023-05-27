const axios = require("axios");

const getVideogames = async (req, res) => {
  try {
    const response = await axios(
      `https://api.rawg.io/api/games?key=${process.env.APIKEY}`
    );
    const { results } = response.data;
    const allGames = results.map((game) => ({
      id: game.id,
      name: game.name,
      despriptions: "",
      image: game.background_image,
      released: game.released,
      rating: game.rating,
      platforms: game.platforms.map((p) => p.platform.name),
    }));

    return res.status(200).json(allGames);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getVideogames };

/*id, 
  name, 
description,
image,
released,
rating,*/
