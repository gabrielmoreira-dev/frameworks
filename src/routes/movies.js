const express = require('express')
const router = express.Router()

let getMoviesMock = require('../mocks/filmes.get.json')
let postMovieMock = require('../mocks/filmes.post.json')

router.get('/', (req, res, next) => {
    res.status(200).send(getMoviesMock)
})

router.post('/', (req, res, next) => {
    res.status(200).send(postMovieMock)
})

router.put('/:id', (req, res, next) => {
    res.status(200).send(postMovieMock)
})

router.delete('/:id', (req, res, next) => {
    res.status(200).send()
})

module.exports = router