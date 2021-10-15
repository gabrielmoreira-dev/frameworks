const Movie = require('../models/movie')
const movieData = require('../dummy/movies_data.json')

exports.getMovies = (matricula, categoria) => Movie
    .find(categoria ? { categoria } : {})
    .or([{ matricula }, { matricula: { $eq: null } }])
    .sort({ 'criadoEm': -1 })
    .select('-criadoEm -owner')

exports.insertMovie = (matricula, movie) => Movie.create({
    matricula,
    ...movie
})

exports.updateMovie = (id, movie) => Movie.findOneAndUpdate(
    { _id: id },
    { ...movie },
    { new: true }
)

exports.deleteMovie = id => Movie.findOneAndDelete({ _id: id })

exports.clearMovies = _ => Movie.deleteMany({})

exports.setMovies = _ => Movie.insertMany(movieData)