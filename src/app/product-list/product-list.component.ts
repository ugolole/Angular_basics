import { Component, OnInit } from '@angular/core';

import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  // Initialising constructors in typeScript.
  constructor() { }

  products = products;

  // I am not sure what this does.
  ngOnInit(): void {
  }

  // A method to share a product with other people I am guessing.
  share(){
    window.alert("This product has been shared!");
  }

  noNotify(product: Product){
    window.alert(`You will be notified when product ${product.name} goes on sale`);
  }
}
