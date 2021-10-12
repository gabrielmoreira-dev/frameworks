const Movie = require('../models/movie')

exports.getMovies = (owner, categoria) => Movie
    .find(categoria ? { categoria } : {})
    .or([{ owner }, { owner: { $eq: null } }])
    .sort({ 'createdAt': -1 })
    .select('-createdAt -owner')

exports.getMovie = id => Movie.findById(id)

exports.insertMovie = (owner, movie) => Movie.create({
    owner,
    ...movie
})

exports.updateMovie = (id, movie) => Movie.findOneAndUpdate(
    { _id: id },
    { ...movie },
    { new: true }
)

exports.deleteMovie = id => Movie.findOneAndDelete({ _id: id })