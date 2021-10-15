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
        type: Number
    },
    duracao: {
        type: Number
    },
    personagens: {
        type: [CharacterSchema]
    },
    criadoEm: {
        type: Date,
        default: Date.now
    },
    matricula: {
        type: String
    }
}, { versionKey: false })