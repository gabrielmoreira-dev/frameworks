const mongoose = require('../../../infrastructure/mongoose')

module.exports = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ator: {
        type: String
    }
}, { versionKey: false })