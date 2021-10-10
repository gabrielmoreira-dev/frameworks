const Movie = require('../models/movie')

exports.getMovies = categoria => Movie.find(
    categoria ? { categoria } : {}
)

exports.getMovie = id => Movie.findById(id)

exports.insertMovie = movie => Movie.create(movie)

exports.updateMovie = (id, movie) => Movie.findOneAndUpdate(
    { id },
    { ...movie },
    { new: true }
)

exports.deleteMovie = id => Movie.findOneAndDelete({ id })