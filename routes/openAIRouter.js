const express = require('express')
const router = express.Router()
const { generateImage } = require('../controllers/openAIGenerateImage')

router.post('/generateImage', generateImage)

module.exports = router