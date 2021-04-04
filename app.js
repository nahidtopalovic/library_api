const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const booksRouter = require('./controllers/books')

const app = express()

app.use('/favicon.ico', express.static('media/favicon.ico'))

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error('error connecting to MongoDB', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/books', booksRouter)

app.get('/', (request, response) => {
  response.send(
    '<link rel="icon" href="favicon.ico?v=1.1"><h1>Welcome to the "CLUBLIT!" &#128218; backend!</h1><p>Access API routes on: api/users, api/books and api/login.</p><a href="https://github.com/nahidtopalovic/library_api">Documentation on Github.</a><p style="font-size:100px">&#128640;</p><p> Authors: Nahid Topalovic, David Haunschild, Logan Vasudeva, Mohsen Razvi & Rahatul Alom. </p>'
  )
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
