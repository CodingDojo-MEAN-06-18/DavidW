import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { HomeComponent } from './home/home.component'
import { EditProductComponent } from './edit-product/edit-product.component'
import { CreateProductComponent } from './create-product/create-product.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/edit/:id', component: EditProductComponent },
  { path: 'products/new', component: CreateProductComponent },
];

export const routing = RouterModule.forRoot(routes);

