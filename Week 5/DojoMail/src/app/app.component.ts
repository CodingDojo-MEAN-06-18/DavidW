import { Component } from '@angular/core';

// class Email {
//   address: string;
//   importance: boolean;
//   subject: string;
//   content: string;

//   constructor(address: string, importance: boolean, subject: string, content: string){
//     this.address = address;
//     this.importance = importance;
//     this.subject = subject;
//     this.content = content;
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: 'wukebb24@hotmail.com', important: true, subject: 'First Email', content: 'This was my first email address online'},
    {email: 'DAVEYDOG24@yahoo.com', important: false, subject: 'Non important Email', content: " <('o'<)   <('o')>  (>'o')> "},
    {email: 'ddog24@u.washington.edu', important: true, subject: 'Testing', content: 'Trying out Angular'},
    {email: 'david.wukelic@stericycle.com', important: true, subject: '?', content: 'Not sure if i was supposed to make a class'},
    {email: 'soccerfan2002@yahoo.com', important: false, subject: '?!? ', content: 'Should i have made a interface?'}
  ]
  title = 'Dojo Mail';
}
