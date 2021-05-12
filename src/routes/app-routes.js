const {Router}  = require('express')
const router = Router()
const controllers = require('../controllers/routes-controller.js')


const { 
    renderBusqueda,
    renderIndex,
    renderPerfilArtista,
    renderMisListasReproduccion,
    renderListaReproduccion,
    renderFavoritas
} = controllers

router.get('/', renderIndex);
router.get('/buscar', renderBusqueda)
router.get('/artista/:slug',renderPerfilArtista )
router.get('/listas-reproduccion', renderMisListasReproduccion)
router.get('/listas-reproduccion/:slug', renderListaReproduccion)
router.get('/favoritas', renderFavoritas)

module.exports = router

