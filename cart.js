export class Cart {
  constructor() {
    this.count = 0;
    this.cartIconCount = document.querySelector(".cart-icon-count");
    this.cartModalCount = document.querySelector(".cart-modal-count");
    this.cartModalPrice = document.querySelector(".cart-modal-price");
    this.cartEmpty = document.querySelector(".cart-empty");
    this.cartContent = document.querySelector(".cart-content");
  }

  add(quantity) {
    if (this.count === 999) {
      alert("That's enough!");
      return;
    }
    this.count += quantity;
  }

  reset() {
    this.count = 0;
  }

  render() {
    if (this.count === 0) {
      this.cartEmpty.classList.remove("hidden");
      this.cartContent.classList.add("hidden");
      this.cartIconCount.textContent = "";
      return;
    } else if (
      this.count !== 0 &&
      (!this.cartEmpty.classList.contains("hidden") ||
        this.cartContent.classList.contains("hidden"))
    ) {
      this.cartEmpty.classList.add("hidden");
      this.cartContent.classList.remove("hidden");
    }

    this.cartIconCount.textContent = this.count;
    this.cartModalCount.textContent = `$125.00 x ${this.count}`;
    this.cartModalPrice.textContent = `$${125 * this.count}.00`;
  }
}
