const booksRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')
const axios = require('axios')

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

// retrieve users books with populated data
booksRouter.get('/userbooks', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  if (user) {
    books = user.books

    requestUrls = books.map(book => {
      if (book.bookid) {
        return `https://www.googleapis.com/books/v1/volumes/${book.bookid}`
      }
    })

    requestUrls = requestUrls.filter(Boolean)

    res2 = await Promise.all(
      requestUrls.map(async url => {
        bookResp = await axios.get(url)
        return bookResp
      })
    )
    // todo: return only necessary fields for the user
    return response.json(res2.map(res => res.data))
  }

  response.status(400).json({ error: 'invalid permissions' })
})

// Adding a book to user's list
booksRouter.post('/', async (request, response) => {
  const newBook = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  if (!newBook.title || !newBook.bookid) {
    return response.status(400).end()
  }

  const book = {
    title: newBook.title,
    bookid: newBook.bookid,
    read: newBook.read || false,
    wishlist: newBook.wishlist || false,
  }

  user.books = user.books.concat(book)
  await user.save()

  response.status(201).json(book)
})

// update book's read and wishlist status

booksRouter.put('/:id', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  if (user) {
    bookToUpdate = user.books.filter(book => book.bookid === request.params.id)
    updatedBook = {
      ...bookToUpdate,
      status: body.status,
      wishlist: body.wishlist,
    }

    books = user.books.filter(book => book.bookid !== request.params.id)
    updatedBooks = books.concat(updatedBook)
    user.books = updatedBooks
    await user.save()
    return response.json(updatedBook)
  }

  response.status(400).json({ error: 'invalid permissions' })
})

booksRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  if (user) {
    const modifiedBooks = user.books.filter(
      book => book.bookid !== request.params.id
    )
    user.books = modifiedBooks
    await user.save()
    return response.status(204).end()
  }

  response.status(400).json({ error: 'invalid permissions' })
})

module.exports = booksRouter
