import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../products";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {

    // get the productId from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds to this id
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // The add method which will add the current product to the cart
  // This method will take the current product as an argument
  // User the cart service's addToCart method to add the product to the cart.
  // It will then display the message that you have now added the product to the cart.
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your " +  product.name + " has been added to the cart.")
  }

}
