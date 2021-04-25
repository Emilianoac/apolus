const modoOscuro = () => {
    let darkModeInput = document.querySelector('#darkmode')
    let darkModeInputHidden = document.querySelector('#darkmodeHidden')

    darkModeInput.addEventListener('click',() => {
        darkModeInputHidden.checked = darkModeInput.checked

        if(darkModeInputHidden.checked) {
            localStorage.setItem('darkMode', 'true')
        } else {
            localStorage.setItem('darkMode', 'false')
        }
        console.log(localStorage.getItem('darkMode'))
    })

    if (localStorage.getItem('darkMode') == 'true') {
        darkModeInput.checked = true
        darkModeInputHidden.checked = true
    } else {
        darkModeInput.checked = false
        darkModeInputHidden.checked = false
    }
}

export default modoOscuro
