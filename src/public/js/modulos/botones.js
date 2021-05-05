
const logicaBotones = () => {
    const root = document.querySelector(":root");
    const btnPlay = document.querySelectorAll('[data-play=""]')
    const linksMenuLateral = document.querySelectorAll('[data-link-menu=""]')
    const btnOffcanvas = document.querySelector('#desplegar-offcanvas')
    const btnCerrarOffcanvas = document.querySelector('#cerrar-offcanvas')
    const menuOffcanvas = document.querySelector('.menu-offcanvas')
    let btnReproductor = document.querySelectorAll('[data-play=""]')
    let btnFavorito = document.querySelectorAll('[data-favorito=""]')
    let btnSeguir = document.querySelector('#btn-seguir')
    let width = 0;
    let click = 0;
    let intervalo;
    let current ;

    btnOffcanvas.addEventListener('click', () => {
        menuOffcanvas.classList.add('desplegar')
        document.querySelector('.overlay').classList.add('mostrar')
    })

    btnCerrarOffcanvas.addEventListener('click', () => {
        menuOffcanvas.classList.remove('desplegar')
        document.querySelector('.overlay').classList.remove('mostrar')
    })

    document.querySelector('.overlay').addEventListener('click', () => {
        document.querySelector('.overlay').classList.remove('mostrar')
        menuOffcanvas.classList.remove('desplegar')
    })

    for (let btn of btnReproductor) {
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

    for (let btn of btnFavorito) {
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

    if (btnSeguir) {
        btnSeguir.addEventListener('click', () => {
            btnSeguir.querySelector('svg').classList.toggle('fa-check')
            btnSeguir.querySelector('svg').classList.toggle('fa-plus')
            if (btnSeguir.querySelector('svg').classList.contains('fa-check')) {
                btnSeguir.querySelector('span').textContent = 'Siguiendo'
            } else {
                btnSeguir.querySelector('span').textContent = 'Seguir'
            }
    
        })
    }

    for (const btn of btnPlay) {
        btn.addEventListener('click', () => {
            if (click < 1) {
                intervalo = setInterval(() => {
                    root.style.setProperty("--load", `${width}px`)
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

    for (const linksMenu of linksMenuLateral) {
        if (linksMenu.href === document.URL) {
            current = linksMenu
            current.style.color = "#ff7033"
        }
    }

}

export default logicaBotones
