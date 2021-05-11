const datos = require('../data/datos.js')

const EscuchasRecientes = require('../models/Escuchados_recientemente')
const ListasReproduccion = require('../models/Listas_reproduccion')
const Artista = require('../models/Artista')

const { 
    recomendados, 
    canciones, 
    recientes, 
    busquedasRecientes, 
    listasReproduccion,
    cancionesBusqueda,
    albumBusqueda,
    artistasBusqueda,
    cancionesFavoritas,
    trackListDisco
} = datos

const renderIndex = async (req, res) => {
    let artista =  await Artista.find();
    let listasReproduccion = await ListasReproduccion.find()

    res.render('index', {artista, listasReproduccion} )
};

const renderBusqueda = (req, res) => {
    res.render('buscar', { busquedasRecientes, albumBusqueda, recientes,  canciones, cancionesBusqueda,  artistasBusqueda})
};

const renderFavoritas = (req, res) => {
    res.render('favoritas', {cancionesFavoritas})
};

const renderListasReproduccion = (req, res) => {
    res.render('listas-reproduccion', {listasReproduccion})
};

const renderPerfilArtista = async (req, res) => {
    let artista = await Artista.findOne({slug: req.params.slug})
    let albumDestacado = artista.albumes[0]
    if(artista) {
        return res.render('perfil-artista', { artista, trackListDisco, albumDestacado})
    } else  {
        return res.render('404');
    }

};

const renderFormulario = (req,res) => {
    res.render('formulario')
}

const sendData = async (req, res) => {
    let {nombre_artista, nombre_album, reciente, banner} = req.body
    if (reciente) reciente = true
    else reciente = false

    let artista = new Artista()
    artista.albumes.nombre_album = "hols"
    artista.nombre_artista = nombre_artista

    await artista.save()
    res.redirect('formulario')
}

module.exports = {
    renderIndex,
    renderBusqueda,
    renderPerfilArtista,
    renderFormulario,
    sendData
}