import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module'; // <--- Routing rules imported
import { HttpClientModule } from '@angular/common/http'; //import http client module
import { AppComponent } from './app.component';

import * as fromTasks from './tasks';
import { HttpService} from './http.service';

@NgModule({
  declarations: [AppComponent, ...fromTasks.components],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing // <--- Our routing rules
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
