import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlphaComponentComponent } from './alpha-component/alpha-component.component';
import { BetaComponentComponent } from './beta-component/beta-component.component';
import { GammaCompnentComponent } from './beta-component/gamma-compnent/gamma-compnent.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponentComponent,
    BetaComponentComponent,
    GammaCompnentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
