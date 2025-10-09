handleNavbarEvents();
handleDisplayedProductEvents();

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
