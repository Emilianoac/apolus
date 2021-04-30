const {Router}  = require('express')
const cancionesRecientes = require('../data/items-home')
const router = Router()


router.get('/',(req, res) => {
    res.render('index', {cancionesRecientes})
})

router.get('/benee',(req, res) => {
    res.render('benee')
})

router.get('/buscar',(req, res) => {
    res.render('buscar', {cancionesRecientes})
})

module.exports = router

