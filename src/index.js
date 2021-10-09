const app = require('./app')
const http = require('http')
const cors = require('cors')
const { normalizePort, onError } = require('./utils')

const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
console.log(`API is alive on ${port}!`)