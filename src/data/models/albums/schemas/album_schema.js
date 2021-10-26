const mongoose = require('../../../infrastructure/mongoose')
const MusicSchema = require('./music_schema')
const Category = require('../category')

module.exports = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    capa: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true,
        enum: Object.values(Category)
    },
    artista: {
        type: String,
        required: true
    },
    gravadora: {
        type: String,
        required: true
    },
    ano: {
        type: Number
    },
    musicas: {
        type: [MusicSchema]
    },
    criadoEm: {
        type: Date,
        default: Date.now
    },
    matricula: {
        type: String
    }
}, { versionKey: false })