const express = require('express')
const app = express()

const moviesRoutes = require("./routes/movies")
app.use('/api/filmes', moviesRoutes)

module.exports = app