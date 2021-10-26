const mongoose = require('../../infrastructure/mongoose')
const MovieSchema = require('./schemas/movie_schema')

module.exports = mongoose.model('Movie', MovieSchema)