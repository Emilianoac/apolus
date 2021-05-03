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

router.get('/favoritas',(req, res) => {
    res.render('favoritas', {canciones})
})

router.get('/listas-reproduccion',(req, res) => {
    res.render('listas-reproduccion', {canciones,  busquedasRecientes})
})

module.exports = router

