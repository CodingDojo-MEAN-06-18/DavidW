function Ninja(name){
    this.name = name;
    this.health = 100;

    // private confined to this constructor scope
    var speed = 3;
    var strength = 3;


// created this two methods within the constructor and are still part of the prototype
    this.showStats = function() {
        console.log("My ninja name is " + this.name + "!");
        console.log("My strength is " + this.strength + "!");
        console.log("My speed is " + this.speed + "!");
        console.log("My speed is " + this.health + "!");
        return this;
    }

    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
        return this;
    }
}

// the third method i created outside of the object constructor but attached it to the prototype for 
// future instances to use in the Ninja Object
Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


