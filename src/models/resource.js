const mongoose = require('mongoose')

// we won't need to store any info about specific books
// so this schema is not needed

mongoose.set('useFindAndModify', false)

const resourceSchema = mongoose.Schema({
  title: String,
  author: String,
  type: String,
  popularity: {
    type: Number,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

// Used for formatting of JSON output, _id to id and removing __v
resourceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Book', resourceSchema)
