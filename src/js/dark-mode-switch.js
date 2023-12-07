console.log('dark-mode-switch.js loaded')

const darkModeSwitch = document.querySelector('.js-dark-mode-btn')
if(darkModeSwitch) {
    darkModeSwitch.addEventListener('click', () => {
        console.log('dark mode switch clicked')
        document.body.classList.toggle('-dark-mode')
    })
}
