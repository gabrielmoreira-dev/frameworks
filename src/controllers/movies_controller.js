const moviesRepository = require('../data/repository/movies_repository')

exports.getMovies = async (req, res) => {
    try {
        const movies = await moviesRepository.getMovies(
            req.headers.user,
            req.query.categoria
        )
        res.status(200).send(movies)
    } catch (e) {
        res.status(500).send()
    }
}

exports.insertMovie = async (req, res) => {
    try {
        const movie = await moviesRepository.insertMovie(
            req.headers.user,
            req.body
        )
        res.status(200).send(movie)
    } catch (e) {
        res.status(500).send()
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const id = req.params.id
        const movie = await moviesRepository.updateMovie(id, req.body)
        res.status(200).send(movie)
    } catch (e) {
        res.status(500).send()
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const id = req.params.id
        const _ = await moviesRepository.deleteMovie(id)
        res.status(200).send()
    } catch (e) {
        res.status(500).send()
    }
}