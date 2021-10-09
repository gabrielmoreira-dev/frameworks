const express = require('express')
const app = express()
const cors = require('cors')

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})

const moviesRoutes = require("./routes/movies")
app.use('/api/filmes', moviesRoutes)

module.exports = app