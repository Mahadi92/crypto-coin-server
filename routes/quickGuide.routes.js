const express = require('express')
const quickGuide = require('../controllers/quickGuide.controller')
const quickGuideRoute = express.Router()


quickGuideRoute.get('/',quickGuide.getData)
quickGuideRoute.post('',quickGuide.addNewOne)
quickGuideRoute.patch('/:id',quickGuide.updateData)
quickGuideRoute.delete('/:id',quickGuide.deleteData)

module.exports = quickGuideRoute