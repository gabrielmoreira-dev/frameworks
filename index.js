const app = require('./src/app')
const http = require('http')
const { normalizePort, onError } = require('./utils')

const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
console.log(`API is alive on ${port}!`)