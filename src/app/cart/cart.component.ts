import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // a property that makes the items found in the cart service available.
  items = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
