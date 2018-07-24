import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerLevelComponent } from './power-level/power-level.component';
import { HumanComponent } from './power-level/human/human.component';
import { SaiyanComponent } from './power-level/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './power-level/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './power-level/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './power-level/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './power-level/super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerLevelComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
