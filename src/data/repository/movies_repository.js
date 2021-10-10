const Movie = require('../models/movie')

exports.getMovies = _ => Movie.find()

exports.insertMovie = movie => Movie.create(movie)