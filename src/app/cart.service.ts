import { Injectable } from '@angular/core';
import {Product} from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  // method that adds items to cart
  addToCart(product: Product){
    this.items.push(product);
  }

  // Return the items that are stored in the cart
  getItems(){
    return this.items;
  }

  // Clear items that are stored in the cart
  clearCart(){
    this.items = [];
    return this.items;
  }
}
