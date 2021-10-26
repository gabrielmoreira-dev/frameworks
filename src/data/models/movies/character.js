const mongoose = require('../../infrastructure/mongoose')
const CharacterSchema = require('./schemas/character_schema')

module.exports = mongoose.model('Character', CharacterSchema)