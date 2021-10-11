const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors())
    next()
})

const moviesRoutes = require("./routes/movies")
app.use('/api/filmes', moviesRoutes)

module.exports = app