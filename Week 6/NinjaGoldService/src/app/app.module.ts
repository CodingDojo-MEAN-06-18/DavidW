import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LogComponent } from './log/log.component';
import { DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService], //service to use data throughout components and imported it above
  bootstrap: [AppComponent]
})
export class AppModule { }
