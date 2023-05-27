const { Router } = require('express');
const { newVideogames } = require('../Controllers/CreateVideoGames')
const { detailVideoGames } = require('../Controllers/DetailVideoGames');
const { getVideogames } = require('../Controllers/VideoGames');
const {getOneGame} = require('../Controllers/NameVideoGames')
const {getGenres} = require('../Controllers/GenresVideoGames')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get("/videogames", getVideogames)
router.post("/videogames", newVideogames )
router.get("/videogame/:id", detailVideoGames)
router.get("/videogames/name",getOneGame )
router.get("/genres",  getGenres)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
