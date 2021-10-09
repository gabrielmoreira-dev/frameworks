const app = require('./app')
const http = require('http')
const { normalizePort, onError } = require('./utils')

const mongoose = require('./data/infrastructure/mongoose')

const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
console.log(`API is alive on ${port}!`)