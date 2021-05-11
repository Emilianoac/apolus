const {Router}  = require('express')
const router = Router()
const controllers = require('../controllers/routes-controller.js')


const { 
    renderBusqueda,
    renderIndex,
    renderPerfilArtista,
    renderFormulario,
    sendData
} = controllers

router.get('/', renderIndex);
router.get('/buscar', renderBusqueda)
router.get('/artista/:slug',renderPerfilArtista )
router.get('/formulario', renderFormulario)
router.post('/subir', sendData)


module.exports = router

