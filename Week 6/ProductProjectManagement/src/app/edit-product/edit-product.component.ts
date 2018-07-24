import { ProductDataService } from './../product-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: Array<Product>; // prouduts = array of class product
  product: Product; //product = variable of class product

  // stores _route as the activate route
  // stores _productService as the variable to access our Data Service
  // stores _router as our Router varaible to chain off of 
  constructor(private _route: ActivatedRoute, private _productService: ProductDataService, private _router: Router) {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    }, errors => (console.log(errors)));

    // finds the product if its in the list of products checking each index compared to id passed through params
    this._route.params.subscribe( param => {
      for (let index = 0; index < this.products.length; index++) {
        if (this.products[index].id == param.id) {
          this.product = this.products[index];
          break;
        }
      }
    });
  }

  ngOnInit() {
  }
  
  // update the product from the method we established in our data service  then redirects to /products
  update(){
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products']);
  }
  // deletes the current product we are selected on by splicing it out of our list of products and updates the list through data service
  delete(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productService.updateProducts(this.products);
  }

}
