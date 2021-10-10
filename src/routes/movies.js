const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies_controller')

let postMovieMock = require('../mocks/filmes.post.json')

router.get('/', moviesController.getMovies)

router.post('/', moviesController.insertMovie)

router.put('/:id', (req, res, next) => {
    res.status(200).send(postMovieMock)
})

router.delete('/:id', (req, res, next) => {
    res.status(200).send()
})

module.exports = router