const {Router}  = require('express')
const router = Router()
const data = require('../data/items-home.js')


const {canciones, recientes}  = data

router.get('/',(req, res) => {
    res.render('index', {recientes})
})

router.get('/perfil-artista',(req, res) => {
    res.render('perfil-artista')
})

router.get('/buscar',(req, res) => {
    res.render('buscar', {recientes, canciones})
})

module.exports = router

