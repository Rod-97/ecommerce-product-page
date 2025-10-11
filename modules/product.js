export class Product {
  constructor() {
    this.selectedProductIdx = 0;
    this.productImages = [...document.querySelectorAll(".product-img")];
    this.productThumbnails = document.querySelectorAll(".thumbnail-container");
  }

  getSelectedProductIdx() {
    return this.selectedProductIdx;
  }

  selectNew(newProductIdx) {
    this.productImages[this.selectedProductIdx].classList.remove("selected");
    this.productThumbnails[this.selectedProductIdx].classList.remove(
      "selected"
    );
    this.productImages[newProductIdx].classList.add("selected");
    this.productThumbnails[newProductIdx].classList.add("selected");
    this.selectedProductIdx = newProductIdx;
  }
}
