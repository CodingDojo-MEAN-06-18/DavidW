import { ProductDataService } from './product-data.service';
import { Product } from './product';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    new Product(0, 'Xbox', 149.99, '../../assets/xbox.jpeg'),
    new Product(1, 'iphone', 749.99, '../../assets/iphone.jpeg'),
    new Product(2, 'bike', 399.99, '../../assets/bike.jpeg')
  ];
  constructor(private _productService: ProductDataService) {
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }
}
