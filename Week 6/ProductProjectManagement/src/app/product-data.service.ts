import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  productsObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts(products: Array<Product>) {
    this.productsObservable.next(products);
  }

}