
const logicaBotones = () => {
    // Funcionamiento botones play
    const $btnReproductor = document.querySelectorAll('[data-play=""]')
    for (let btn of $btnReproductor) {
        btn.addEventListener('click', () => {
            btn.querySelector('.svg-inline--fa').classList.toggle('fa-pause-circle')
            btn.querySelector('.svg-inline--fa').classList.toggle('fa-play-circle')
            if(btn.querySelector('svg').classList.contains('fa-pause-circle')) {
                btn.title = "Pausar"
            } else {
                btn.title = "Reproducir"
            }
        })
    }
    
    // Funcionamiento botones favorito
    const $btnFavorito = document.querySelectorAll('[data-favorito=""]')
    for (let btn of $btnFavorito) {
        btn.addEventListener('click', () => {
            if( btn.querySelector('svg').dataset.prefix === 'fas') {
                btn.querySelector('svg').dataset.prefix = 'far'
                btn.title = "Marcar como favorito"
                
            } else if ( btn.querySelector('svg').dataset.prefix === 'far') {
                btn.querySelector('svg').dataset.prefix = 'fas'
                btn.title = "Favorito"
            }
        })
    }
    
    // Funcionamiento boton seguir perfil artista
    const $btnSeguir = document.querySelector('#btn-seguir')
    if ($btnSeguir) {
        $btnSeguir.addEventListener('click', () => {
            $btnSeguir.querySelector('svg').classList.toggle('fa-check')
            $btnSeguir.querySelector('svg').classList.toggle('fa-plus')
            if ($btnSeguir.querySelector('svg').classList.contains('fa-check')) {
                $btnSeguir.querySelector('span').textContent = 'Siguiendo'
            } else {
                $btnSeguir.querySelector('span').textContent = 'Seguir'
            }
    
        })
    }

    // Barra de avanve cacion reproductor pricipal
    const $btnPlay = document.querySelectorAll('[data-play=""]')
    const $root = document.querySelector(":root");
    let width = 0
    let click = 0
    let intervalo
    for (const btn of $btnPlay) {
        btn.addEventListener('click', () => {
            if (click < 1) {
                intervalo = setInterval(() => {
                    $root.style.setProperty("--load", `${width}px`)
                    width ++
                    if (width > window.innerWidth) {
                        clearInterval(intervalo)
                    } 
                },100);
            } else {
                clearInterval(intervalo)
                click = -1
            }
            click ++
        })
    }

    /// Cambio color menu lateral pagina actual
    const $linksMenuLateral = document.querySelectorAll('[data-link-menu=""]')
    let linkActual
    for (const linkMenu of $linksMenuLateral) {
        if (linkMenu.href === document.URL) {
            linkActual = linkMenu
            linkActual.style.color = "#ff7033"
        }
    }


    /// Control offCanvas
    const $btnDesplegarOffcanvas = document.querySelector('#desplegar-offcanvas')
    const $btnCerrarOffcanvas = document.querySelector('#cerrar-offcanvas')
    const $overlayOfcanvas = document.querySelector('.overlay')
    const $menuOffcanvas = document.querySelector('.menu-offcanvas')

    $btnDesplegarOffcanvas.addEventListener('click', () => {
        $menuOffcanvas.classList.add('desplegar')
        $overlayOfcanvas.classList.add('mostrar')
    })

    $btnCerrarOffcanvas.addEventListener('click', () => {
        $menuOffcanvas.classList.remove('desplegar')
        $overlayOfcanvas.classList.remove('mostrar')
    })

    $overlayOfcanvas.addEventListener('click', () => {
        $overlayOfcanvas.remove('mostrar')
        $menuOffcanvas.classList.remove('desplegar')
    })

}

export default logicaBotones
