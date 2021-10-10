const Movie = require('../models/movie')

exports.getMovies = _ => Movie.find()

exports.insertMovie = movie => Movie.create(movie)

exports.updateMovie = (id, movie) => Movie.findOneAndUpdate(
    { _id: id },
    { ...movie },
    { new: true }
)

exports.deleteMovie = id => Movie.findOneAndDelete({ _id: id })