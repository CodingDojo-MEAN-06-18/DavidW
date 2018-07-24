import { ProductDataService } from './../product-data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _productService: ProductDataService) { }

  ngOnInit() {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }

  // deletes product from our list of products through our data service
  delete(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productService.updateProducts(this.products);
  }
}
