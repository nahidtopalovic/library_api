const resourceRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')

const Resource = require('../models/resource')
const User = require('../models/user')

resourceRouter.use(middleware.tokenExtractor)

resourceRouter.get('/', async (request, response) => {
  const resources = await Resource.find({})
  response.json(resources.map(resource => resource.toJSON()))
})

// post route example

resourceRouter.post('/', async (request, response) => {
  const newResource = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  if (!newResource.title || !newResource.type) {
    return response.status(400).end()
  }

  const resource = new Resource({
    title: newResource.title,
    author: newResource.author,
    type: newResource.type,
    popularity: newResource.popularity || 0,
    user: user._id,
  })

  const savedResource = await resource.save()
  user.resources = user.resources.concat(savedResource._id)
  await user.save()

  response.status(201).json(savedResource.toJSON())
})

module.exports = resourceRouter
