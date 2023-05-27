const { Genre } = require("../db");
const axios = require("axios");

const getGenres = async (req, res) => {
  try {
    const allGenres = await Genre.findAll();
    if (allGenres.length > 0) {
      return allGenres;
    } else {
      const apiGenres = await axios.get(
        `https://api.rawg.io/api/genres?key=${process.env.APIKEY}`
      );

      const genres = apiGenres.data.results.map((el) => el.name);

      for (let i = 0; i < genres.length; i++) {
        await Genre.create({name: genres[i]});
      }
      
      return res.status(200).json(genres);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getGenres };
