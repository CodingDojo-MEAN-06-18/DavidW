import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // import forms module
import { HttpClientModule } from '@angular/common/http'; //import http client module
import { ProductDataService } from './product-data.service'; // import data service
import { routing } from './app-routing.module'; // <--- Routing rules imported

// import all components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditProductComponent,
    CreateProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing // <--- Our routing rules
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
