const headerEmail = document.querySelector(".navbar__email");
const menuDesktop = document.querySelector(".menu-desktop");
const burguerMenuIcon = document.querySelector(".navbar__burger-menu");
const menuMobile = document.querySelector(".menu-mobile-container");
const cartIcon = document.querySelector(".navbar__cart");
const shoppingCart = document.querySelector(".shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector('.product-detail__close-icon');
const shoppingCartBackArrow = document.querySelector('.shopping-cart__back-arrow');

headerEmail.addEventListener("click", toggleDesktopMenu);
burguerMenuIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetail);
shoppingCartBackArrow.addEventListener('click', closeShoppingCart)


function toggleDesktopMenu() {
  const isShoppingCartActive = !shoppingCart.classList.contains("inactive");
  const isMenuMobileActive = !menuMobile.classList.contains("inactive");

  if (isShoppingCartActive) {
    shoppingCart.classList.add("inactive");
  }

  if (isMenuMobileActive) {
    menuMobile.classList.add("inactive");
  }

  menuDesktop.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isShoppingCartActive = !shoppingCart.classList.contains("inactive");
  const isMenuDesktopActive = !menuDesktop.classList.contains("inactive");
  const isProductDetailActive = !productDetail.classList.contains("inactive");

  if (isShoppingCartActive) {
    shoppingCart.classList.add("inactive");
  }

  if (isMenuDesktopActive) {
    menuDesktop.classList.add("inactive");
  }

  if (isProductDetailActive) {
    closeProductDetail();
  }

  menuMobile.classList.toggle("inactive");
}

function toggleShoppingCart() {
  const isMenuMobileActive = !menuMobile.classList.contains("inactive");
  const isMenuDesktopActive = !menuDesktop.classList.contains("inactive");
  const isProductDetailActive = !productDetail.classList.contains('inactive');

  if (isMenuMobileActive) {
    menuMobile.classList.add("inactive");
  }

  if (isMenuDesktopActive) {
    menuDesktop.classList.add("inactive");
  }

  if (isProductDetailActive) {
    productDetail.classList.add("inactive");
  }

  shoppingCart.classList.toggle("inactive");
}

function closeShoppingCart() {
  shoppingCart.classList.add('inactive')
}

function openProductDetail() {
  const isShoppingCartActive = !shoppingCart.classList.contains('inactive');
  
  if (isShoppingCartActive) {
    shoppingCart.classList.add('inactive');
  }

  productDetail.classList.remove("inactive");
}

function closeProductDetail() {
  productDetail.classList.add('inactive');
}

// Lista de productos

const productsList = [];

productsList.push({
  name: "Bike",
  price: 123,
  image: "assets/images/pineapple.jpg",
});
productsList.push({
  name: "Lighter",
  price: 456,
  image: "assets/images/lighter.jpg",
});
productsList.push({
  name: "Camera",
  price: 123,
  image: "assets/images/camera.jpg",
});

function renderProducts(list) {
  for (const product of list) {
    const productCard = document.createElement("article");
    productCard.classList.add("product-card");
    productCard.addEventListener("click", openProductDetail);

    const productCardImg = document.createElement("img");
    productCardImg.classList.add("product-card__img");
    productCardImg.setAttribute("src", product.image);

    const productCardDetail = document.createElement("div");
    productCardDetail.classList.add("product-card__detail");

    const productCardInfo = document.createElement("div");
    productCardInfo.classList.add("product-card__info");

    const productCardPrice = document.createElement("p");
    productCardPrice.classList.add("product-card__price");
    productCardPrice.innerText = `$ ${product.price}`;

    const productCardName = document.createElement("p");
    productCardName.classList.add("product-card__product-name");
    productCardName.innerText = product.name;

    const productCardCartIcon = document.createElement("figure");
    productCardCartIcon.classList.add("product-card__icon");

    const productCardCartIconImg = document.createElement("img");
    productCardCartIconImg.classList.add("product-card__icon");
    productCardCartIconImg.setAttribute(
      "src",
      "assets/icons/bt_add_to_cart.svg"
    );

    productCardCartIcon.appendChild(productCardCartIconImg);
    productCardInfo.append(productCardPrice, productCardName);
    productCardDetail.append(productCardInfo, productCardCartIcon);
    productCard.append(productCardImg, productCardDetail);

    cardsContainer.append(productCard);
  }
}

renderProducts(productsList);
