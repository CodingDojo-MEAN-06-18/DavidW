// html document
// <input 
//   type="text" 
//   name="email"
//   required 
//   minlength="4" 
//   maxlength="24"
//   [(ngModel)]="user.email"
//   #email="ngModel"
// >
// {{ email.errors | json }}
// {{ email.valid | json }}

// Built-in Classes for Validation
    // Angular adds classes on the form and each input based on each input validation 
    // status. Meaning, as long as we have validations in input tags, we can style certain 
    // classes in our stylesheet (specific to that component), and angular will insert and 
    // remove these classes on each input as well as the form, as their status change. This 
    // is a great feature that makes validation styling easy. Here are the classes Angular 
    // will toggle on our inputs based on their status. We can style these CSS classes and 
    // observe them being toggled on our inputs as our input validation status change.

    // .ng-valid { } # is set if the form control is valid.
    // .ng-invalid { } # is set if the form control is invalid.
    // .ng-pristine { } # is set if the form control has not been changed and pristine.
    // .ng-dirty { } # is set if the form control has been changed and dirty.
    // .ng-touched { } # is set if the form control has been visited.
    // .ng-untouched { } # is set if the form control has not been visited.

// .../app/app.component.ts
    // import { Component } from '@angular/core';
    // @Component({
    // selector: 'app-root',
    // templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']
    // })
    // export class AppComponent {
    // user = {
    //     username: '',
    //     password: ''
    // };
    // }

// .../app/app.component.css
    // .ng-invalid { }
    // .ng-valid { }
    // .ng-untouched { }
    // .ng-touched { }
    // .ng-dirty { }
    // .ng-pristine { }

// .../app/app.component.html
    // <form>
    // <input 
    //     type="text" 
    //     name="username"
    //     [(ngModel)]="user.username"
    //     #username="ngModel"
    //     required
    // />
    // <input 
    //     type="password" 
    //     name="password"
    //     [(ngModel)]="user.password"
    //     #password="ngModel"
    //     required
    // />
    // </form>


