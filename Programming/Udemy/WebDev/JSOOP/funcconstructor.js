// Constructor functions

function Car(year, model){
    this.year = year
    this.model = model
}

let newCar = new Car("2003", "Honda")

console.log(newCar);

// You can declare functions inside constructors

function Tea(type){
    this.type = type
    this.describe = function () {
        return `This tea type is ${this.type}`
    }
}

let greenTea = new Tea("green");

console.log(greenTea.describe());