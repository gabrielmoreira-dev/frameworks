const mongoose = require('../../infrastructure/mongoose')
const AlbumSchema = require('./schemas/album_schema')

module.exports = mongoose.model('Album', AlbumSchema)