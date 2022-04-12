const express = require('express')
const homeHero = require('../controllers/homeHero.controller')
const homeHeroRoute = express.Router()

homeHeroRoute.get('/', homeHero.getData)
homeHeroRoute.post('', homeHero.addNewOne)
homeHeroRoute.patch('/:id', homeHero.updateData)
homeHeroRoute.delete('/:id', homeHero.deleteData)

module.exports = homeHeroRoute