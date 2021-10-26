const mongoose = require('../../infrastructure/mongoose')
const MusicSchema = require('./schemas/music_schema')

module.exports = mongoose.model('Music', MusicSchema)