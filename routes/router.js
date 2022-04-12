const express = require('express')
const homeHeroRoute = require('./homeHero.routes')
const quickGuideRoute = require('./quickGuide.routes')
const walletRoute = require('./walletData.routes')
const router = express.Router()

router.use('/home-hero', homeHeroRoute)
router.use('/quick-guide', quickGuideRoute)
router.use('/wallet-data', walletRoute)


module.exports = router