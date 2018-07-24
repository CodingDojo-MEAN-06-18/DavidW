import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  alphaNumbers: number[] = [];
  betaNumbers: number[] = [];
  charlieCount: number= 0;

  constructor() { }

  retrieveAlphaNumbers():number[] {
    return this.alphaNumbers;
  }
  retrieveBetaNumbers():number[] {
    return this.betaNumbers;
  }
  retrieveCharlieNumber(): number {
    let sum = 0;
    for (let countAlpha = 0; countAlpha < this.alphaNumbers.length; countAlpha++) {
      sum += this.alphaNumbers[countAlpha];
    }
    for (let countBeta= 0; countBeta < this.betaNumbers.length; countBeta++) {
      sum -= this.betaNumbers[countBeta];
    }
    console.log(`Sum:${sum}`)
    this.charlieCount = sum

    return this.charlieCount;
  }
  addAlphaRandomNumber(): void{
    let number = Math.floor(Math.random() * (1 + 99) + 1);
    this.alphaNumbers.push(number);
  }
  addBetaRandomNumber(): void{
    let number = Math.floor(Math.random() * (1 + 99) + 1);
    this.betaNumbers.push(number);
  }
}
