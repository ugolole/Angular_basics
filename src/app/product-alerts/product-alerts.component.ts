import { Component, OnInit, Input } from '@angular/core';
import {Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  // This indicates that the property values passes in from this components parent i.e. ProductListComponent.
  @Input() product!: Product;


  ngOnInit(): void {
  }
}
