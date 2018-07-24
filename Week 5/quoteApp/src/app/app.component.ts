import { Component } from '@angular/core';
import { Quote } from './quote';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Quotes";
  quotes = [];
  quote = new Quote;

  onSubmit(event, form: NgForm){
    // console.log(formData);
    // console.log(this.quote)
    event.preventDefault();
    this.quotes.push(this.quote);
    this.quote = new Quote;
    form.reset();
  }
}
