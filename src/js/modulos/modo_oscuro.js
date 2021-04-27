const modoOscuro = () => {
    let darkModeInput = document.querySelector('#darkmode')
    let darkModeInputHidden = document.querySelector('#darkmodeHidden')

    darkModeInput.addEventListener('click',() => {
        darkModeInputHidden.checked = darkModeInput.checked
        document.querySelector('.circulo-marca').classList.toggle('girar')
        if(darkModeInputHidden.checked) {
            localStorage.setItem('darkMode', 'true')
            document.body.classList.add('dark')
        } else {
            localStorage.setItem('darkMode', 'false')
            document.body.classList.remove('dark')
        }
        console.log(localStorage.getItem('darkMode'))
    })

    if (localStorage.getItem('darkMode') == 'true') {
        darkModeInput.checked = true
        darkModeInputHidden.checked = true
        document.body.classList.add('dark')
    } else {
        darkModeInput.checked = false
        darkModeInputHidden.checked = false
        document.body.classList.remove('dark')
    }
}

export default modoOscuro
