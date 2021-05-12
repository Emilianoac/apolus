import logicaBotones from './modulos/botones.js'
import modoOscuro from './modulos/modo_oscuro.js'

logicaBotones()
modoOscuro()


let pantallaCompleta = document.querySelector('.pantalla-completa')
let documentElement = document.documentElement

pantallaCompleta.addEventListener('click', () => {
    if(pantallaCompleta.querySelector('svg').classList.contains('fa-compress') ) {
        pantallaCompleta.querySelector('svg').classList.add('fa-expand')
        pantallaCompleta.querySelector('svg').classList.remove('fa-compress') 
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    } else {
        
        if (documentElement.requestFullscreen)  documentElement.requestFullscreen()
        else if (documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen()
        else if (documentElement.msRequestFullscreen) documentElement.msRequestFullscreen()
    
        pantallaCompleta.querySelector('svg').classList.remove('fa-expand')
        pantallaCompleta.querySelector('svg').classList.add('fa-compress') 
    }


})






