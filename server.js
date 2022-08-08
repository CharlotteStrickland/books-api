const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { use } = require('./controllers/booksController')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const MONGO_URI = process.env.MONGO_URI
app.use(express.json())
app.use(cors())

//database
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log(`Mongo connected: ${MONGO_URI}`)})

// Controllers
const books_controller = require('./controllers/booksController')
app.use('/books', booksController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Books API')
})

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})