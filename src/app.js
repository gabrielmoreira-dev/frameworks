const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, matricula'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    )
    app.use(cors())
    next()
})

const moviesRoutes = require("./routes/movies")
app.use('/api/filmes', moviesRoutes)

const albumsRoutes = require("./routes/albums")
app.use('/api/albuns', albumsRoutes)

module.exports = app