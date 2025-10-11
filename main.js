import { Cart } from "./modules/cart.js";
import { Product } from "./modules/product.js";

main();

function main() {
  const cart = new Cart();
  const product = new Product();
  handleNavbarEvents();
  handleDisplayedProductEvents(product);
  handleCounterEvents();
  handleCartDisplayEvent();
  handleCartEvents(cart);
}

function handleNavbarEvents() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const closeIcon = document.querySelector(".close-icon");
  const mobileNav = document.querySelector(".mobile-nav");
  const shadow = document.querySelector(".shadow");

  hamburgerIcon.addEventListener("click", () => {
    mobileNav.classList.add("active");
    shadow.classList.add("active");
  });

  [closeIcon, shadow].forEach((el) => {
    el.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      shadow.classList.remove("active");
    });
  });
}

function handleDisplayedProductEvents(product) {
  const prevIcon = document.querySelector(".prev-icon");
  const nextIcon = document.querySelector(".next-icon");
  const productImages = [...document.querySelectorAll(".product-img")];
  const productThumbnails = document.querySelectorAll(".thumbnail-container");

  prevIcon.addEventListener("click", () => {
    const selectedProductIdx = product.getSelectedProductIdx();
    if (selectedProductIdx === 0) return;
    const newProductIdx = selectedProductIdx - 1;
    product.selectNew(newProductIdx);
  });

  nextIcon.addEventListener("click", () => {
    const selectedProductIdx = product.getSelectedProductIdx();
    if (selectedProductIdx === productImages.length - 1) return;
    const newProductIdx = selectedProductIdx + 1;
    product.selectNew(newProductIdx);
  });

  productThumbnails.forEach((productThumbnail) => {
    productThumbnail.addEventListener("click", () => {
      const newSelectedProductIdx = Number(productThumbnail.dataset.number);
      product.selectNew(newSelectedProductIdx);
    });
  });
}

function handleCounterEvents() {
  const counterState = document.querySelector(".counter-state");
  const minusIcon = document.querySelector(".minus-icon");
  const plusIcon = document.querySelector(".plus-icon");

  minusIcon.addEventListener("click", () => {
    const currentCount = Number(counterState.textContent);
    if (currentCount === 0) return;
    counterState.textContent--;
  });

  plusIcon.addEventListener("click", () => {
    const currentCount = Number(counterState.textContent);
    if (currentCount === 999999) {
      alert("C'mon... you're not that rich!");
      return;
    }
    counterState.textContent++;
  });
}

function handleCartDisplayEvent() {
  const cartIconContainer = document.querySelector(".cart-icon-container");
  const cartModal = document.querySelector(".cart-modal");

  cartIconContainer.addEventListener("click", () => {
    cartModal.classList.toggle("active");
  });
}

function handleCartEvents(cart) {
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  const trashIcon = document.querySelector(".trash-icon");

  addToCartBtn.addEventListener("click", () => {
    const counterState = document.querySelector(".counter-state");
    cart.add(Number(counterState.textContent));
    cart.render();
    counterState.textContent = 0;
  });

  trashIcon.addEventListener("click", () => {
    cart.reset();
    cart.render();
  });
}
