import { Cart } from "./cart.js";

main();

function main() {
  const cart = new Cart();
  handleNavbarEvents();
  handleDisplayedProductEvents();
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

function handleDisplayedProductEvents() {
  const prevIcon = document.querySelector(".prev-icon");
  const nextIcon = document.querySelector(".next-icon");
  const productImages = [...document.querySelectorAll(".product-img")];

  prevIcon.addEventListener("click", () => {
    const selectedProduct = productImages.find((productImg) =>
      productImg.classList.contains("selected")
    );

    const selectedProductIdx = Number(selectedProduct.dataset.number);

    if (selectedProductIdx === 0) return;

    productImages[selectedProductIdx].classList.remove("selected");

    const newProductIdx = selectedProductIdx - 1;

    productImages[newProductIdx].classList.add("selected");
  });

  nextIcon.addEventListener("click", () => {
    const selectedProduct = productImages.find((productImg) =>
      productImg.classList.contains("selected")
    );

    const selectedProductIdx = Number(selectedProduct.dataset.number);

    if (selectedProductIdx === productImages.length - 1) return;

    productImages[selectedProductIdx].classList.remove("selected");

    const newProductIdx = selectedProductIdx + 1;

    productImages[newProductIdx].classList.add("selected");
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
  const cartIcon = document.querySelector(".cart-icon");
  const cartModal = document.querySelector(".cart-modal");

  cartIcon.addEventListener("click", () => {
    cartModal.classList.toggle("active");
  });
}

function handleCartEvents(cart) {
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  const trashBtn = document.querySelector(".trash-btn");

  addToCartBtn.addEventListener("click", () => {
    const counterState = document.querySelector(".counter-state");
    cart.add(Number(counterState.textContent));
    cart.render();
    counterState.textContent = 0;
  });

  trashBtn.addEventListener("click", () => {
    cart.reset();
    cart.render();
  });
}
