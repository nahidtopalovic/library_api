const booksRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')
const axios = require('axios')

// const Resource = require('../models/resource')
const User = require('../models/user')

booksRouter.use(middleware.tokenExtractor)

booksRouter.get('/', async (request, response) => {
  // query for a book that user specified
  // returns json with a list of matching books

  const bookInfo = request.body

  if (!bookInfo) {
    return response.status(400).end()
  }

  const apiResponse = await axios.get(
    'https://www.googleapis.com/books/v1/volumes',
    { params: { q: bookInfo.name } }
  )

  books = apiResponse.data.items.map(book => {
    return {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      publishers: book.volumeInfo.publisher,
      id: book.id,
      pageCount: book.volumeInfo.pageCount,
      rating: book.volumeInfo.averageRating,
      descriptioN: book.volumeInfo.description,
    }
  })

  return response.json(books)

  // "selfLink": "https://www.googleapis.com/books/v1/volumes/f280CwAAQBAJ"
  // this is the link that can be used to query a specific book
  // last field is the id https://www.googleapis.com/books/v1/volumes/{id}
})

// !!!!!!!!
// add book to users list in db
// rework this post request
// !!!!!!!!

// booksRouter.post('/', async (request, response) => {
//   const newResource = request.body

//   const decodedToken = jwt.verify(request.token, process.env.SECRET)

//   if (!request.token || !decodedToken.id) {
//     return response.status(401).json({ error: 'token missing or invalid' })
//   }

//   const user = await User.findById(decodedToken.id)

//   if (!newResource.title || !newResource.type) {
//     return response.status(400).end()
//   }

//   const resource = new Resource({
//     title: newResource.title,
//     author: newResource.author,
//     type: newResource.type,
//     popularity: newResource.popularity || 0,
//     user: user._id,
//   })

//   const savedResource = await resource.save()
//   user.resources = user.resources.concat(savedResource._id)
//   await user.save()

//   response.status(201).json(savedResource.toJSON())
// })

module.exports = booksRouter
