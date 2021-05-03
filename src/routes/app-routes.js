const {Router}  = require('express')
const router = Router()
const data = require('../data/items-home.js')


const {canciones, recientes, busquedasRecientes}  = data

router.get('/',(req, res) => {
    res.render('index', {recientes})
})

router.get('/perfil-artista',(req, res) => {
    res.render('perfil-artista')
})

router.get('/buscar',(req, res) => {
    res.render('buscar', {recientes, busquedasRecientes, canciones})
})

router.get('/favoritos',(req, res) => {
    res.render('favoritos', {canciones})
})

module.exports = router

