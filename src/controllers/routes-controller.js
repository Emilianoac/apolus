const datos = require('../data/datos.js')

const ListaReproduccion = require('../models/Listas_reproduccion')
const Artista = require('../models/Artista')

const { 
    canciones, 
    recientes, 
    busquedasRecientes, 
    cancionesBusqueda,
    albumBusqueda,
    artistasBusqueda,
    cancionesFavoritas,
} = datos

const renderIndex = async (req, res) => {
    let artistas = await Artista.find({recomendado: false})
    let artistasRecomendados =  await Artista.find({recomendado:true});
    let listaReproduccion = await ListaReproduccion.find()
    res.render('index', {artistas, artistasRecomendados, listaReproduccion} )
};

const renderBusqueda =  async (req, res) => {
    let artistas = await Artista.find({recomendado: false})
    let cancionesBusquedas = await Artista.find({recomendado: true}).limit(4)
    let primerAlbum = []
    cancionesBusquedas.forEach(album => {
        primerAlbum.push(album.albumes[0])
    })
    res.render('buscar', { artistas, albumBusqueda, recientes,  primerAlbum,  artistasBusqueda})
};

const renderFavoritas = (req, res) => {
    res.render('favoritas', {cancionesFavoritas})
};

const renderMisListasReproduccion = async (req, res) => {
    let listas = await ListaReproduccion.find()
    res.render('mis-listas-reproduccion', {listas})

};

const renderListaReproduccion = async (req, res) => {
    let lista = await ListaReproduccion.findOne({slug: req.params.slug})
    let cancionesBusquedas = await Artista.find().limit(8)
    let primerAlbum = []
    cancionesBusquedas.forEach(album => {
        primerAlbum.push(album.albumes[0])
    })
    if(lista) {
        return res.render('lista-reproduccion', {lista, primerAlbum})
    } else  {
        return res.render('404');
    }
}

const renderPerfilArtista = async (req, res) => {
    let artista = await Artista.findOne({slug: req.params.slug})
    let albumDestacado = artista.albumes[0]
    if(artista) {
        return res.render('perfil-artista', { artista, albumDestacado})
    } else  {
        return res.render('404');
    }

};

module.exports = {
    renderIndex,
    renderBusqueda,
    renderPerfilArtista,
    renderMisListasReproduccion,
    renderListaReproduccion,
}