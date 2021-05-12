
const ListaReproduccion = require('../models/Listas_reproduccion')
const Artista = require('../models/Artista')


const renderIndex = async (req, res) => {
    let tituloPagina = 'Inicio'
    let artistas = await Artista.find({recomendado: false})
    let artistasRecomendados =  await Artista.find({recomendado:true});
    let listaReproduccion = await ListaReproduccion.find()

    res.render('index', {artistas, artistasRecomendados, listaReproduccion, tituloPagina} )
};

const renderBusqueda =  async (req, res) => {
    let tituloPagina = 'Busqueda'
    let busquedasRecientes = await Artista.find({recomendado: {$eq: true}}).limit(4)
    let cancionesBusquedas = await Artista.find({recomendado: true}).limit(4)
    let primerAlbum = []
    cancionesBusquedas.forEach(album => {
        primerAlbum.push(album.albumes[0])
    })
    let artistasBusqueda = await Artista.find({recomendado: false}).limit(4)

    res.render('buscar', { 
        busquedasRecientes,  
        artistasBusqueda,  
        primerAlbum,
        tituloPagina
    })
};

const renderFavoritas = async (req, res) => {
    let tituloPagina = 'Favoritas'
    let cancionesFavoritas = await Artista.find().limit(8)
    let favoritas = []
    cancionesFavoritas.forEach(album => {
        favoritas.push(album.albumes[0])
    })

    res.render('favoritas', {favoritas, tituloPagina})
};

const renderMisListasReproduccion = async (req, res) => {
    let tituloPagina = 'Mis listas de reproducción'
    let listas = await ListaReproduccion.find()
    
    res.render('mis-listas-reproduccion', {listas, tituloPagina})

};

const renderListaReproduccion = async (req, res) => {
    let lista = await ListaReproduccion.findOne({slug: req.params.slug})
    let tituloPagina = lista.nombre_lista
    let cancionesBusquedas = await Artista.find().limit(8)
    let primerAlbum = []
    cancionesBusquedas.forEach(album => {
        primerAlbum.push(album.albumes[0])
    })

    if(lista) {
        return res.render('lista-reproduccion', {lista, primerAlbum, tituloPagina, tituloPagina})
    } else  {
        return res.render('404');
    }
}

const renderPerfilArtista = async (req, res) => {
    let artista = await Artista.findOne({slug: req.params.slug})
    let tituloPagina = artista.nombre_artista
    let albumDestacado = artista.albumes[0]

    if(artista) {
        return res.render('perfil-artista', { artista, albumDestacado, tituloPagina})
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
    renderFavoritas
}