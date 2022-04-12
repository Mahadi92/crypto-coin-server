const express = require('express')
const walletData = require('../controllers/walletData.controller')
const walletRoute = express.Router()

walletRoute.get('/', walletData.getData)
walletRoute.post('', walletData.addNewOne)
walletRoute.patch('/:id', walletData.updateData)
walletRoute.delete('/:id',walletData.deleteData)

module.exports = walletRoute