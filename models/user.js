const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  name: String,
  passwordHash: {
    type: String,
    required: true,
  },
  resources: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resource',
    },
  ],
})

userSchema.plugin(uniqueValidator)

// Used for formatting of JSON output, _id to id and removing __v
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
