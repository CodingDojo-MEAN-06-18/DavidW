class Bike {
    public price: number;
    public maxSpeed: number;
    public miles: number = 0;

    constructor(price:number, maxSpeed:number){
        this.price = price;
        this.maxSpeed = maxSpeed;
    }

    displayInfo = function(){
        console.log(`Price: $${this.price}, MaxSpeed: ${this.maxSpeed} MPH, Miles: ${this.miles}.`)
    }

    ride = function(){
        this.miles += 10;
        console.log("Riding");
        return this;
    }

    reverse = function(){
        if (this.miles < 0) {
            console.log('cant reverse anymore...')
            return this;
        }
        this.miles -= 5;
        console.log("Reversing");
        return this;
    }

    

}

let bike1 = new Bike(200, 25);
let bike2 = new Bike(100, 15);
let bike3 = new Bike(300, 5);

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().displayInfo();
bike1.reverse().reverse().reverse().displayInfo()

