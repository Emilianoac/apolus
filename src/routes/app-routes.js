const {Router}  = require('express')
const artistasHome = require('../data/items-home')
const router = Router()


router.get('/',(req, res) => {
    res.render('index', {artistasHome})
})

router.get('/benee',(req, res) => {
    res.render('benee')
})

module.exports = router

