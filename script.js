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
