
const logicaBotones = () => {
    let btnReproductor = document.querySelectorAll('[data-play=""]')
    let btnFavorito = document.querySelectorAll('[data-favorito=""]')
    let btnSeguir = document.querySelector('#btn-seguir')

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

}

export default logicaBotones
