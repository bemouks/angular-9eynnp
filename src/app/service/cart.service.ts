import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  constructor() {}

  items = [];

  addToCart(product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
