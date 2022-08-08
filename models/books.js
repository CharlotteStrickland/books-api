const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: String, 
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

//Model & Exports
const Book = mongoose.model('books', bookSchema)
module.exports = Book