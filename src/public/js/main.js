import canciones from './modulos/listado_canciones.js'
import logicaBotones from './modulos/botones.js'
import modoOscuro from './modulos/modo_oscuro.js'

let listaReproducion = document.querySelector('.lista-reproduccion')

if(listaReproducion) {
    let liTemplate = document.querySelector('#item-lista-reproduccion').content
    canciones.forEach(cancion => {
        liTemplate.querySelector('.nombre-artista__lista-reproduccion').textContent = cancion.nombreArtista
        liTemplate.querySelector('.titulo-cancion__lista-reproduccion').textContent = cancion.nombreCancion
        liTemplate.querySelector('.duracion-cancion__lista-reproduccion').textContent = cancion.duracionCancion
        let clone = document.importNode(liTemplate, true)
        listaReproducion.appendChild(clone)
    });
}

logicaBotones()
modoOscuro()












