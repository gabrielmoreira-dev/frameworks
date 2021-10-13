const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies_controller')

router.get('/', moviesController.getMovies)

router.post('/', moviesController.insertMovie)

router.put('/:id', moviesController.updateMovie)

router.delete('/:id', moviesController.deleteMovie)

router.post('/reset', moviesController.resetMovies)

module.exports = router