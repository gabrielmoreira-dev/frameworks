const moviesRepository = require('../data/repository/movies_repository')
const { reqError, serverError } = require('../common/errors')

exports.getMovies = async (req, res) => {
    try {
        const movies = await moviesRepository.getMovies(
            req.headers.matricula,
            req.query.categoria
        )
        res.status(200).send(movies)
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.insertMovie = async (req, res) => {
    const { nome, foto, categoria, sinopse, ano, duracao } = req.body
    if (!nome || !foto || !categoria || !sinopse || !ano || !duracao) {
        return sendError(res, reqError)
    }

    try {
        const movie = await moviesRepository.insertMovie(
            req.headers.matricula,
            req.body
        )
        res.status(200).send(movie)
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const id = req.params.id
        const movie = await moviesRepository.updateMovie(id, req.body)
        res.status(200).send(movie)
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const id = req.params.id
        await moviesRepository.deleteMovie(id)
        res.status(200).send()
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.resetMovies = async (_, res) => {
    try {
        await moviesRepository.clearMovies()
        const movies = await moviesRepository.setMovies()
        res.status(200).send(movies)
    } catch (e) {
        sendError(res, serverError)
    }
}

const sendError = (res, error) => res
    .status(error.status).send(error.msg)