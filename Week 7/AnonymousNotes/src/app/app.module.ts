import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// import { routing } from './app-routing.module'; 


import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { HttpService } from './http.service'

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    DisplayNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
