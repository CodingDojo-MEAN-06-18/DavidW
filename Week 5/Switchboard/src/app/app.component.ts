import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switch Board';
  switches = [true, true, true, true, true, true, true, true, true, true, true, true];
  flipSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
  }

  

  // box1 = 'green';
  // box2 = 'green';
  // box3 = 'green';
  // box4 = 'green';
  // box5 = 'green';
  // box6 = 'green';
  // box7 = 'green';
  // box8 = 'green';
  // buttonSwitch = null;
  // BUTTONTEST1 = true;
  // BUTTONTEST2 = true;
  // BUTTONTEST3 = true;
  // BUTTONTEST4 = true;
  // BUTTONTEST5 = true;
  // BUTTONTEST6 = true;
  // BUTTONTEST7 = true;
  // BUTTONTEST8 = true;

  // getButtonStatus(buttonNumber) {
  //   if (buttonNumber === 1) {
  //     if (this.BUTTONTEST1 === false) {
  //       this.BUTTONTEST1 = true;
  //       this.box1 = 'green';
    
  //     } else if (this.BUTTONTEST1 === true) {
  //       this.BUTTONTEST1 = false;
  //       this.box1 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  //   if (buttonNumber === 2) {
  //     if (this.BUTTONTEST2 === false) {
  //       this.BUTTONTEST2 = true;
  //       this.box2 = 'green';
    
  //     } else if (this.BUTTONTEST2 === true) {
  //       this.BUTTONTEST2 = false;
  //       this.box2 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  //   if (buttonNumber === 3) {
  //     if (this.BUTTONTEST3 === false) {
  //       this.BUTTONTEST3 = true;
  //       this.box3 = 'green';
    
  //     } else if (this.BUTTONTEST3 === true) {
  //       this.BUTTONTEST3 = false;
  //       this.box3 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  //   if (buttonNumber === 4) {
  //     if (this.BUTTONTEST4 === false) {
  //       this.BUTTONTEST4 = true;
  //       this.box4 = 'green';
    
  //     } else if (this.BUTTONTEST4 === true) {
  //       this.BUTTONTEST4 = false;
  //       this.box4 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  //   if (buttonNumber === 5) {
  //     if (this.BUTTONTEST5 === false) {
  //       this.BUTTONTEST5 = true;
  //       this.box5 = 'green';
    
  //     } else if (this.BUTTONTEST5 === true) {
  //       this.BUTTONTEST5 = false;
  //       this.box5 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  //   if (buttonNumber === 6) {
  //     if (this.BUTTONTEST6 === false) {
  //       this.BUTTONTEST6 = true;
  //       this.box6 = 'green';
    
  //     } else if (this.BUTTONTEST6 === true) {
  //       this.BUTTONTEST6 = false;
  //       this.box6 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  //   if (buttonNumber === 7) {
  //     if (this.BUTTONTEST7 === false) {
  //       this.BUTTONTEST7 = true;
  //       this.box7 = 'green';
    
  //     } else if (this.BUTTONTEST7 === true) {
  //       this.BUTTONTEST7 = false;
  //       this.box7 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  //   if (buttonNumber === 8) {
  //     if (this.BUTTONTEST8 === false) {
  //       this.BUTTONTEST8 = true;
  //       this.box8 = 'green';
    
  //     } else if (this.BUTTONTEST8 === true) {
  //       this.BUTTONTEST8 = false;
  //       this.box8 = 'red';
  //     }
  //     this.buttonSwitch = buttonNumber;
  //   }
  // }
}
