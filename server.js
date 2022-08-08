const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Books API')
})

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})