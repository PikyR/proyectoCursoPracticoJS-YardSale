const headerEmail = document.querySelector('.navbar__email');
const menuDesktop = document.querySelector('.menu-desktop')

headerEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  menuDesktop.classList.toggle('inactive');
}