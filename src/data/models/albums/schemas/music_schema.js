const mongoose = require('../../../infrastructure/mongoose')

module.exports = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    duracao: {
        type: String
    }
}, { versionKey: false })