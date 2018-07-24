import { Component } from '@angular/core';
const colorArray: string[] = [];

function randomColor() {
  let rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
  let color = '#';
  for(var i = 0; i < 6; i++) { //loops 6 times for the 6 digit hexadecimal numbers
     let x = Math.floor((Math.random()*16)) //x=random number between 1-16 
     color += rgb[x]; //Color = Color + rgb[x] 
  }
  return color;
}

for(let count = 0; count < 10; count++){
  colorArray.push(randomColor())
  // console.log(colorArray)
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colorArray0 = colorArray[0];
  colorArray1 = colorArray[1];
  colorArray2 = colorArray[2];
  colorArray3 = colorArray[3];
  colorArray4 = colorArray[4];
  colorArray5 = colorArray[5];
  colorArray6 = colorArray[6];
  colorArray7 = colorArray[7];
  colorArray8 = colorArray[8];
  colorArray9 = colorArray[9];
  // colors = colorArray;
}

// everything commented out was me trying to loop through the array into my html but it wouldnt work
// if just used the variable in the H1 i could get it to print with the hash tag but then if
// i put it in the nstyle it would never render :(