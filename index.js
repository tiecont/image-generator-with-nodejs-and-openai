const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

// Server Runner
const app = express()

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Router
app.use('/openai', require('./routes/openAIRouter'))


app.listen(port, () => console.log(`Server running at 127.0.0.1:${port}`))