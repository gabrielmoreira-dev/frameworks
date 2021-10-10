const mongoose = require('../../infrastructure/mongoose')
const CharacterSchema = require('./character_schema')
const Category = require('../category')

module.exports = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true,
        enum: Object.values(Category)
    },
    sinopse: {
        type: String,
        required: true
    },
    ano: {
        type: String
    },
    tempo: {
        type: String
    },
    personagens: {
        type: [CharacterSchema]
    }
})