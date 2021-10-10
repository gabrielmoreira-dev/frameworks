const moviesRepository = require('../data/repository/movies_repository')

exports.getMovies = async (_, res) => {
    try {
        const movies = await moviesRepository.getMovies()
        res.status(200).send(movies)
    } catch (e) {
        console.log(e)
    }
}

exports.insertMovie = async (req, res) => {
    try {
        const movie = await moviesRepository.insertMovie(req.body)
        res.status(200).send(movie)
    } catch (e) {
        console.log(e)
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const id = req.params.id
        const movie = await moviesRepository.updateMovie(id, req.body)
        res.status(200).send(movie)
    } catch (e) {
        console.log(e)
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const id = req.params.id
        const movie = await moviesRepository.deleteMovie(id)
        res.status(200).send()
    } catch (e) {
        console.log(e)
    }
}