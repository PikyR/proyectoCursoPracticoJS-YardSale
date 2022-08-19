const headerEmail = document.querySelector('.navbar__email');
const menuDesktop = document.querySelector('.menu-desktop');
const burguerMenuIcon = document.querySelector('.navbar__burger-menu');
const menuMobile = document.querySelector('.menu-mobile-container');
const cartIcon = document.querySelector('.navbar__cart');
const shoppingCart = document.querySelector('.shopping-cart');


headerEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
  const isShoppingCartActive = !shoppingCart.classList.contains('inactive');
  const isMenuMobileActive = !menuMobile.classList.contains('inactive');  

  if (isShoppingCartActive) {
    shoppingCart.classList.add('inactive');
  }

  if (isMenuMobileActive) {
    menuMobile.classList.add('inactive');  
  }

  menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartActive = !shoppingCart.classList.contains('inactive');
  const isMenuDesktopActive = !menuDesktop.classList.contains('inactive');

  if (isShoppingCartActive) {
    shoppingCart.classList.add('inactive');
  }

  if (isMenuDesktopActive) {
    menuDesktop.classList.add('inactive');  
  }

  menuMobile.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMenuMobileActive = !menuMobile.classList.contains('inactive');  
  const isMenuDesktopActive = !menuDesktop.classList.contains('inactive');  
  
  if (isMenuMobileActive) {
    menuMobile.classList.add('inactive');  
  }
  
  if (isMenuDesktopActive) {
    menuDesktop.classList.add('inactive');  
  }

  shoppingCart.classList.toggle('inactive');
}