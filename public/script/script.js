AOS.init({
        duration: 1000, // Tempo da animação (1s)
        once: false, // A animação ocorre varias vezes
    });


function Navbar(){
    let nav = document.querySelector('.navbar')
    let navbutton = document.querySelector('.enter-nav-mobile')
    nav.style.display = "flex"
    navbutton.style.display = 'none'

}

function NavbarBack(){
    let nav = document.querySelector('.navbar')
    let navbutton = document.querySelector('.enter-nav-mobile')
    nav.style.display = "none"
    navbutton.style.display = 'flex'
}