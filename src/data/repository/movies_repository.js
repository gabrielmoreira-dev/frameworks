const Movie = require('../models/movie')

let fields = '-createdAt -owner -personagens._id'

exports.getMovies = (owner, categoria) => Movie
    .find(categoria ? { categoria } : {})
    .or([{ owner }, { owner: { $eq: null } }])
    .sort({ 'createdAt': -1 })
    .select(fields)

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