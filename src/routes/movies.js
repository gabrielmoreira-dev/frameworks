const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies_controller')

let postMovieMock = require('../mocks/filmes.post.json')

router.get('/', moviesController.getMovies)

router.post('/', moviesController.insertMovie)

router.put('/:id', moviesController.updateMovie)

router.delete('/:id', moviesController.deleteMovie)

module.exports = router