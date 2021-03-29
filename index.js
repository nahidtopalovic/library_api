const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

//This enables https

const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}

//normal stuff and ports
// removed options parameter
const server = https.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
