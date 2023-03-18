const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

// Server Runner
const app = express()

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Router
app.use('/openai', require('./routes/openAIRouter'))


app.listen(port, () => console.log(`Server running at 127.0.0.1:${port}`))