const headerEmail = document.querySelector('.navbar__email');
const menuDesktop = document.querySelector('.menu-desktop');
const burguerMenuIcon = document.querySelector('.navbar__burger-menu');
const menuMobile = document.querySelector('.menu-mobile-container');


headerEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu() {
  menuMobile.classList.toggle('inactive');  
}