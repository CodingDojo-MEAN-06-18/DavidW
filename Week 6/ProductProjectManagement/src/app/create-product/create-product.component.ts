import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDataService } from './../product-data.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newProduct: Product = new Product(1);
  products: Array<Product>;
  
  constructor(private _produceService: ProductDataService, private _router: Router) {
    this._produceService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
  }

  // on init it starts a new product 
  ngOnInit() {
    this.newProduct = new Product();
  }

  // if method gets triggered from the form then the product will be updated into our products from data service and redireted to /products
  create() {
    this.products.push(this.newProduct);
    this._produceService.updateProducts(this.products);
    this.newProduct = new Product();
    this._router.navigate(['/products']);
  }
}
