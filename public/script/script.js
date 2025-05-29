// No seu arquivo script.js

function Navbar() {
    const navbar = document.querySelector('header#header .navbar');
    if (navbar) {
        navbar.classList.add('open');
    }
}

function NavbarBack() {
    const navbar = document.querySelector('header#header .navbar');
    if (navbar) {
        navbar.classList.remove('open');
    }
}

// Opcional: Fechar navbar ao clicar em um link (se a navbar estiver aberta)
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('header#header .navbar a');
    const navbar = document.querySelector('header#header .navbar');

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('open')) {
                navbar.classList.remove('open');
            }
        });
    });
});