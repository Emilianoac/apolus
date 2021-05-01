import canciones from './modulos/listado_canciones.js'
import logicaBotones from './modulos/botones.js'
import modoOscuro from './modulos/modo_oscuro.js'

// let listaReproducion = document.querySelector('.lista-reproduccion')

// if(listaReproducion) {
//     let liTemplate = document.querySelector('#item-lista-reproduccion').content
//     canciones.forEach(cancion => {
//         liTemplate.querySelector('.nombre-artista__lista-reproduccion').textContent = cancion.nombreArtista
//         liTemplate.querySelector('.titulo-cancion__lista-reproduccion').textContent = cancion.nombreCancion
//         liTemplate.querySelector('.duracion-cancion__lista-reproduccion').textContent = cancion.duracionCancion
//         let clone = document.importNode(liTemplate, true)
//         listaReproducion.appendChild(clone)
//     });
// }


logicaBotones()
modoOscuro()

const root = document.querySelector(":root");

let width  = 0;

let intervalo;

let btnFavoritos = document.querySelectorAll('[data-favorito=""]')





for (const iterator of btnFavoritos) {
    iterator.addEventListener('click', home)
}

function home ()  {
    intervalo = setInterval(() => {
        root.style.setProperty("--load", `${width}px`)
        width ++
        console.log(width)
        if (width > window.innerWidth) {
            clearInterval(intervalo)
            console.log(':)')
            console.log(window.innerWidth)
    
        } 
    },100);
 
}








console.log(width)


console.log(window.innerWidth)





